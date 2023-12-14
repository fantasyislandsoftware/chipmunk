export {};

declare global {
  interface Window {
    frame: number;
    api: {
      loadFile: (data: string, format: any) => Promise<string>;
      testFunc: () => any;
    };
  }
}
