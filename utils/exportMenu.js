const { app, BrowserWindow, dialog } = require("electron");
const {
	dittoNetIcon,
	rdpIcon,
	asrIcon,
	mailIcon,
	chatIcon,
} = require("../assets/iconsExport");
const { downloadAndOpenDitto } = require("./downloadDittoManifests");
const { paths } = require("./exportPaths");
const { lookForAppAr } = require("./lookForApp");
const { openApps } = require("./openApps");
const serveStatic = require("serve-static");
const http = require("http");
let asrWindowOpen = false;
const menu = [
	...lookForAppAr,
	{
		label: "Ditto.net - Beta",
		click() {
			downloadAndOpenDitto("beta")
				.then(() => {})
				.catch((error) => {
					console.error(error);
				});
		},
		type: "normal",
		icon: dittoNetIcon,
	},
	{
		label: "Ditto.net - Nightly",
		click() {
			downloadAndOpenDitto("nightly")
				.then(() => {})
				.catch((error) => {
					console.error(error);
				});
		},
		type: "normal",
		icon: dittoNetIcon,
	},

	{
		label: "Pulpit zdalny",
		type: "normal",
		async click() {
			await openApps("rdp");
		},
		icon: rdpIcon,
	},
	{
		label: "Google Chat",
		type: "normal",
		click: () => {
			const chatWindow = new BrowserWindow({
				width: 1024,
				height: 768,
				resizable: true,
				minimizable: true,
				fullscreen: false,
				fullscreenable: true,
				icon: chatIcon,
				opacity: 0.95,
				closable: true,
				movable: true,
				webPreferences: { devTools: false },
				titleBarStyle: "default",
				autoHideMenuBar: true,
			});

			chatWindow.loadURL("https://chat.google.com");

			chatWindow.on("close", (event) => {
				const choice = dialog.showMessageBoxSync(chatWindow, {
					type: "question",
					buttons: ["Yes", "No"],
					title: "Confirm",
					message: "Are you sure you want to close Google Chat?",
				});
				if (choice === 1) event.preventDefault();
			});
		},
		icon: chatIcon,
	},
	{
		label: "ASR Licznik",
		type: "normal",
		click: () => {
			if (!asrWindowOpen) {
				asrWindowOpen = true;
				const serve = serveStatic(paths.asr);
				const server1 = http.createServer((req, res) => {
					serve(req, res, () => {
						res.statusCode = 404;
						res.end("Not Found");
					});
				});
				server1.listen(57811, "localhost", () => {
					console.log(
						`ASR Counter server running at http://localhost:${
							server1.address().port
						}`
					);
					const asrWin = new BrowserWindow({
						width: 460,
						height: 785,
						resizable: false,
						minimizable: true,
						fullscreen: false,
						fullscreenable: false,
						icon: asrIcon,
						opacity: 0.95,
						closable: true,
						movable: true,
						webPreferences: { devTools: false },
						titleBarStyle: "default",
						autoHideMenuBar: true,
					});
					asrWin.loadURL(`http://localhost:${server1.address().port}`);
					asrWin.on("closed", () => {
						// Stop the ASR server when the window is closed
						server1.close();
						asrWindowOpen = false;
					});
				});
			} else {
				return;
			}
		},
		icon: asrIcon,
	},
	{
		label: "Mail Generator",
		type: "normal",
		click: () => {
			const mailWindow = new BrowserWindow({
				width: 1024,
				height: 768,
				resizable: false,
				minimizable: true,
				fullscreen: false,
				fullscreenable: false,
				icon: asrIcon,
				opacity: 0.95,
				closable: true,
				movable: true,
				webPreferences: { devTools: false },
				titleBarStyle: "default",
				autoHideMenuBar: true,
			});
			mailWindow.loadURL("http://complex-bomb.surge.sh");
			return;
		},
		icon: mailIcon,
	},
	{
		type: "separator",
	},
	{
		label: "Exit",
		type: "normal",
		click() {
			app.quit();
		},
	},
];

module.exports = {
	menu,
};
