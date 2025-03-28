// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

contextBridge.exposeInMainWorld('api', {
  loadFile: (data: string, format: any) =>
    ipcRenderer.invoke('load-file', data, format)
});

const electronHandler = {
  ipcRenderer: {},
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export default electronHandler;
