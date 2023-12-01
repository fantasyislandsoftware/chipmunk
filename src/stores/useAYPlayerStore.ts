import { create } from 'zustand';
import { Ayumi } from '../classes/ayumi';

export interface AYPlayerStore {
  engine: Ayumi;
  context: AudioContext;
  clockRate: number;
  sampleRate: number;
  frameRate: number;
  counter: number;
  setCounter: (counter: number) => void;
  frame: number;
  setFrame: (frame: number) => void;
}

export const useAYPlayerStore = create<AYPlayerStore>((set) => ({
  engine: new Ayumi(),
  //@ts-ignore
  context: new (window.AudioContext || window.webkitAudioContext)(),
  clockRate: 1773400,
  sampleRate: 44100,
  frameRate: 50,
  counter: 0,
  frame: 0,
  setCounter: (counter: number) => {
    set({ counter });
  },
  setFrame: (frame: number) => {
    set({ frame });
  },
}));
