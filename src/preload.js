const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('madbot', {
  boot: () => ipcRenderer.invoke('boot'),
  save: (settings) => ipcRenderer.invoke('save', settings),
  testAlert: (kind, data) => ipcRenderer.invoke('test-alert', { kind, data }),
  pushChat: (line) => ipcRenderer.invoke('push-chat', line),
  openOverlay: (url) => ipcRenderer.invoke('open-overlay', url),
});
