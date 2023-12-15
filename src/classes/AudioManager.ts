import { useAudioManagerStore } from '../stores/useAudioManagerStore';
import { usePSGStore } from '../stores/usePSGStore';
import Ayumi from './ayumi';

export class AudioManager {
  audioContext: AudioContext;
  engine: Ayumi;
  clockRate: number;
  sampleRate: number;
  frameRate: number;
  counter: number;
  frame: number;
  isrCounter: number;
  playing: boolean;
  constructor() {
    /* State */
    this.clockRate = 1773400;
    this.sampleRate = 44100;
    this.frameRate = 50;
    this.counter = 0;
    this.frame = 0;
    this.isrCounter = 0;
    this.playing = false;

    /* Audio Context */
    this.audioContext = new AudioContext();
    var audioNode = this.audioContext.createScriptProcessor(4096, 0, 2);
    audioNode.onaudioprocess = this.processBuffer;
    audioNode.connect(this.audioContext.destination);

    /* Engine */
    this.engine = new Ayumi();
    this.engine.configure(true, this.clockRate, this.sampleRate);
  }

  processBuffer = (e: any) => {
    if (!this.playing) return;
    const { regData } = usePSGStore.getState();
    const { setCurrentFrame } = useAudioManagerStore.getState();
    var isrStep = this.frameRate / this.sampleRate;
    var left = e.outputBuffer.getChannelData(0);
    var right = e.outputBuffer.getChannelData(1);
    for (var i = 0; i < left.length; i++) {
      this.isrCounter += isrStep;
      if (this.isrCounter >= 1) {
        this.isrCounter--;
        const regs = regData[this.frame];
        this.updateAYRegs(this.engine, regs);
        setCurrentFrame(this.frame);
        if (++this.frame >= regData.length) {
          this.frame = 0;
        }
      }
      this.engine.process();
      this.engine.removeDC();
      left[i] = this.engine.left;
      right[i] = this.engine.right;
    }
  };

  updateAYRegs = (engine: any, r: number[]) => {
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

  setFrame(frame: number) {
    this.frame = frame;
  }

  play() {
    this.playing = true;
  }

  stop() {
    this.playing = false;
    this.frame = 0;
  }

  reset() {
    this.playing = false;
    this.frame = 0;
  }
}
