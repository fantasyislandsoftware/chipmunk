import { create } from 'zustand';
import { AudioManager } from '../classes/AudioManager';

export interface AudioManagerStore {
  audioManager: AudioManager;
  currentFrame: number;
  setCurrentFrame: (currentFrame: number) => void;
}

export const useAudioManagerStore = create<AudioManagerStore>((set) => ({
  audioManager: new AudioManager(),
  currentFrame: 0,
  setCurrentFrame: (currentFrame: number) => set({ currentFrame }),
}));
