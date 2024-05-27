
const { app, Tray, Menu} = require("electron");
const { trayIcon } = require("./assets/iconsExport");
const { menu } = require("./utils/exportMenu");

if (require("electron-squirrel-startup")) app.quit();

let tray;

app.whenReady().then(() => {
	tray = new Tray(trayIcon);

	const contextMenu = Menu.buildFromTemplate([
		...menu
	]);

	tray.setToolTip("PSMM Apps Launcher");
	tray.setContextMenu(contextMenu);
});
app.on("window-all-closed", e => e.preventDefault());
