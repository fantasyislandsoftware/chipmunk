import { usePSGStore } from '../../stores/usePSGStore';

export const loadPSG = async (path: string) => {
  const { loading, setLoading, setRegData } = usePSGStore.getState();

  const getbyte = () => {
    let result = buffer[ptr];
    if (ptr >= buffer.length) result = -1;
    ptr++;
    return result;
  };

  const PASS1_parseFrames = () => {
    regList = [];
    numSync += numPrevSync;
    numPrevSync = 0;

    while (true) {
      let t = getbyte();
      if (t === -1) {
        return false;
      }
      if (t === 0xff) {
        numSync += 1;
        continue;
      }
      if (t === 0xfe) {
        const v = getbyte();
        if (v === -1) {
          throw new Error('Premature end of file');
        } else if (v === 0) {
          throw new Error('Multiple end of frames is zero');
        }
        numSync = numSync + 4 * v;
        continue;
      }
      if (t === 0xfd) {
        return false;
      }
      while (true) {
        if (t >= 16 && t < 252) {
          throw new Error('Outing to MSX devices not implemented');
        }
        const v = getbyte();
        if (v === -1) {
          throw new Error('Premature end of file');
        }
        regList.push([t, v]);
        t = getbyte();
        if (t === -1) {
          return false;
        }
        if (t === 0xff) {
          numPrevSync = 1;
          return true;
        }
        if (t === 0xfe) {
          t = getbyte();
          if (t === -1) {
            throw new Error('Premature end of file');
          } else if (t === 0) {
            throw new Error('Multiple end of frames is zero');
          }
          numPrevSync = t * 4;
          return true;
        }
      }
    }
  };

  const PASS1_update = () => {
    used = 0;
    let only = -1;
    let cnt = 0;
    for (const [reg, val] of regList) {
      if (regBuffer[reg] !== val) {
        used = used | (1 << reg);
        regBuffer[reg] = val;
        only = reg;
        cnt += 1;
      }
    }
    global_used |= used;
    return cnt;
  };

  let ptr = 12;
  let cont = true;
  let used = 0;
  let regList: any = [];
  let numSync = 0;
  let numPrevSync = 0;
  let global_used = 0;
  let regData: number[][] = [];

  let regBuffer: number[] = new Array(14);
  for (let n = 0; n < 14; n++) {
    regBuffer[n] = 0;
  }

  const response = await fetch(path);
  //let buffer: any = await response.arrayBuffer();
  //buffer = new Uint8Array(buffer);

  //@ts-ignore
  let buffer = await api.loadFile(path);

  buffer = new Uint8Array(buffer);

  while (cont) {
    cont = PASS1_parseFrames();
    used = PASS1_update();
    if (cont && used === 0) {
      continue;
    }
    let regArray = new Array(regBuffer.length);
    for (let n = 0; n < regBuffer.length; n++) {
      regArray[n] = regBuffer[n];
    }

    regData.push(regArray);
  }

  setRegData(regData);

  setLoading(false);
};
