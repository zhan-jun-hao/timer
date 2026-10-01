const { app, BrowserWindow, ipcMain, Tray, Menu } = require("electron");

const path = require("path");
const fs = require("fs");

let win = null;
let tray = null;

function createWindow() {
  win = new BrowserWindow({
    width: 320,

    height: 40,

    frame: false,

    transparent: true,

    alwaysOnTop: true,

    resizable: false,

    skipTaskbar: true,

    icon: path.join(__dirname, "icon1.ico"),

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("renderer/index.html");
}

// 保存学习记录

ipcMain.on("save-record", (event, record) => {
  const desktopPath = app.getPath("desktop");

  const filePath = path.join(desktopPath, "time-record.txt");

  fs.appendFile(filePath, record, "utf-8", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("保存成功");
    }
  });
});

// 隐藏窗口

ipcMain.on("window-minimize", () => {
  win.hide();
});

// 关闭窗口

ipcMain.on("window-close", () => {
  app.quit();
});

// 创建托盘
function createTray() {
  tray = new Tray(path.join(__dirname, "icon1.png"));

  const menu = Menu.buildFromTemplate([
    {
      label: "显示计时器",

      click() {
        win.show();
      },
    },

    {
      label: "退出",

      click() {
        app.quit();
      },
    },
  ]);

  tray.setContextMenu(menu);

  // 双击托盘显示

  tray.on("double-click", () => {
    win.show();
  });
}

app.whenReady().then(() => {
  createWindow();

  createTray();
});
