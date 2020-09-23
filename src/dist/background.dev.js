"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _electron = require("electron");

var _lib = require("vue-cli-plugin-electron-builder/lib");

var _electronDevtoolsInstaller = _interopRequireWildcard(require("electron-devtools-installer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var isDevelopment = process.env.NODE_ENV !== "production"; // Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.

var win; // Scheme must be registered before the app is ready

_electron.protocol.registerSchemesAsPrivileged([{
  scheme: "app",
  privileges: {
    secure: true,
    standard: true
  }
}]);

function createWindow() {
  // Create the browser window.
  win = new _electron.BrowserWindow({
    width: 800,
    minWidth: 800,
    height: 600,
    minHeight: 600,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
    }
  });
  win.setMenuBarVisibility(false);

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL); //if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    (0, _lib.createProtocol)("app"); // Load the index.html when not in development

    win.loadURL("app://./index.html");
  }

  win.on("closed", function () {
    win = null;
  });
} // Quit when all windows are closed.


_electron.app.on("window-all-closed", function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    _electron.app.quit();
  }
});

_electron.app.on("activate", function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
}); // This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.


_electron.app.on("ready", function _callee() {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!(isDevelopment && !process.env.IS_TEST)) {
            _context.next = 9;
            break;
          }

          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap((0, _electronDevtoolsInstaller["default"])(_electronDevtoolsInstaller.VUEJS_DEVTOOLS));

        case 4:
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](1);
          console.error("Vue Devtools failed to install:", _context.t0.toString());

        case 9:
          createWindow();

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 6]]);
}); // Exit cleanly on request from parent process in development mode.


if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", function (data) {
      if (data === "graceful-exit") {
        _electron.app.quit();
      }
    });
  } else {
    process.on("SIGTERM", function () {
      _electron.app.quit();
    });
  }
}