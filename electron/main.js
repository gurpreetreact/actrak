/* eslint-disable no-undef */
const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

// dotenv import with config() lead me to access .env variables
require('dotenv').config();

// let __dirname = path.resolve(path.dirname('')) || path.resolve();

let mainWindow;

function createWindow() {
  const startUrl = process.env.ELECTRON_START_URL || url.format({
    pathname: path.join(__dirname, '../public/index.html'),
    protocol: 'file:',
    slashes: true,
  });
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadURL(startUrl);
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}
// app.commandLine.appendSwitch('disable-gpu');
// app.commandLine.appendArgument('disable-gpu');

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
