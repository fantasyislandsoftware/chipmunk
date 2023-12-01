import { create } from "zustand";

export type RegData = number[][];

export interface PSGStore {
  regData: RegData;
  setRegData: (regData: RegData) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const usePSGStore = create<PSGStore>((set) => ({
  regData: [],
  setRegData: (regData: RegData) => {
    set({ regData });
  },
  loading: false,
  setLoading: (loading: boolean) => {
    set({ loading });
  },
}));
