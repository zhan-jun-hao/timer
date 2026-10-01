const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveRecord: (record) => {
    ipcRenderer.send("save-record", record);
  },

  minimize: () => {
    ipcRenderer.send("window-minimize");
  },

  close: () => {
    ipcRenderer.send("window-close");
  },
});
