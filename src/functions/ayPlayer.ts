//import { Ayumi } from "classes/SoundChip";
import { useAYPlayerStore } from '../stores/useAYPlayerStore';
import { usePSGStore } from '../stores/usePSGStore';

export const initAYPLayer = (fillBuffer: any) => {
  const { engine, context, clockRate, sampleRate } =
    useAYPlayerStore.getState();
  engine.configure(true, clockRate, sampleRate);
  var audioNode = context.createScriptProcessor(4096, 0, 2);
  audioNode.onaudioprocess = fillBuffer;
  audioNode.connect(context.destination);
};

export const updateAYRegs = (engine: any, r: number[]) => {
  engine.setTone(0, (r[1] << 8) | r[0]);
  engine.setTone(1, (r[3] << 8) | r[2]);
  engine.setTone(2, (r[5] << 8) | r[4]);
  engine.setNoise(r[6]);
  engine.setMixer(0, r[7] & 1, (r[7] >> 3) & 1, r[8] >> 4);
  engine.setMixer(1, (r[7] >> 1) & 1, (r[7] >> 4) & 1, r[9] >> 4);
  engine.setMixer(2, (r[7] >> 2) & 1, (r[7] >> 5) & 1, r[10] >> 4);
  engine.setVolume(0, r[8] & 0xf);
  engine.setVolume(1, r[9] & 0xf);
  engine.setVolume(2, r[10] & 0xf);
  engine.setEnvelope((r[12] << 8) | r[11]);
  if (r[13] !== 255) {
    engine.setEnvelopeShape(r[13]);
  }
};

let isrCounter = 0;
let frame = 0;

export const processAYBuffer = (e: any) => {
  const { regData } = usePSGStore.getState();
  const { engine, sampleRate, frameRate, setFrame } =
    useAYPlayerStore.getState();
  var isrStep = frameRate / sampleRate;
  var left = e.outputBuffer.getChannelData(0);
  var right = e.outputBuffer.getChannelData(1);
  for (var i = 0; i < left.length; i++) {
    isrCounter += isrStep;
    if (isrCounter >= 1) {
      isrCounter--;
      const regs = regData[frame];
      updateAYRegs(engine, regs);
      setFrame(frame);
      if (++frame >= regData.length) {
        frame = 0;
      }
    }
    engine.process();
    engine.removeDC();
    left[i] = engine.left;
    right[i] = engine.right;
  }
  return true;
};
