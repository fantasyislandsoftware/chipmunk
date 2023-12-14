import { create } from 'zustand';
import { AudioManager } from '../classes/AudioManager';

export interface AudioManagerStore {
  audioManager: AudioManager;
  initialized: boolean;
  setInitialized: (initialized: boolean) => void;
}

export const useAudioManagerStore = create<AudioManagerStore>((set) => ({
  audioManager: new AudioManager(),
  initialized: false,
  setInitialized: (initialized: boolean) => {
    set({ initialized });
  },
}));
