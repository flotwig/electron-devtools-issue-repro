const { app, BrowserWindow } = require('electron')

app.whenReady()
.then(() => {
    const win = new BrowserWindow({
        userAgent: null,
        // proxyUrl: "http://localhost:37215",
        // proxyServer: "http://localhost:37215",
        chromeWebSecurity: true,
        isTextTerminal: false,
        x: 0,
        y: 990,
        width: 1080,
        height: 720,
        devTools: true,
        minWidth: 100,
        minHeight: 100,
        contextMenu: true,
        partition: "persist:interactive",
        trackState: {
            width: "browserWidth",
            height: "browserHeight",
            x: "browserX",
            y: "browserY",
            devTools: "isBrowserDevToolsOpen"
        },
        webPreferences: {
            sandbox: true,
            partition: null,
            webSecurity: true,
            nodeIntegration: false,
            backgroundThrottling: false
        },
        show: true,
        frame: true,
        recordFrameRate: null
    })
    win.loadURL('http://example.com')
    win.webContents.openDevTools()
    setTimeout(() => {
        win.loadFile('./index.html')
    }, 1500)
})