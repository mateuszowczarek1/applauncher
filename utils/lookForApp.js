const fs = require("fs");
const { shell } = require("electron");
const {paths} = require("./exportPaths");
const { ciscoIcon, dittoAvIcon, scannerIcon, pdfIcon, psmmPdfIcon } = require("../assets/iconsExport");
const {openApps} = require("./openApps");

let lookForAppAr = [];
function checkAvApp(pathTocheck) {
	let isApp;
	try {
		fs.readFileSync(pathTocheck);
		isApp = true;
		return isApp;
	} catch {
		isApp = null;
		return isApp;
	}
}
checkAvApp(paths.cisco) && lookForAppAr.push({
	label: "Cisco AnyConnect",
	type: "normal",
	async click() {
		await shell.openPath(
			paths.cisco,
		);
	},
	icon: ciscoIcon
});

checkAvApp(paths.dittoAVRelease) && lookForAppAr.push({
	label: "Ditto AV - Release",
	type: "normal",
	async click() {
		await openApps("release");
	},
	icon: dittoAvIcon
});

checkAvApp(paths.dittoAVPrerelease) && lookForAppAr.push({
	label: "Ditto AV - Prerelease",
	type: "normal",
	async click() {
		await openApps("prerelease");
	},
	icon: dittoAvIcon
});

checkAvApp(paths.rscan) && lookForAppAr.push({
	label: "RSCAN",
	type: "normal",
	async click() {
		await openApps("rscan");
	},
	icon: scannerIcon
});
checkAvApp(paths.pdf) && lookForAppAr.push({
	label: "PDF2JPG",
	type: "normal",
	async click(){
		await openApps("pdf");
	},
	icon: pdfIcon
});
checkAvApp(paths.psmmPdf) && lookForAppAr.push({
	label: "PSMM PDF TO JPG",
	type: "normal",
	async click(){
		await openApps("psmmpdf");
	},
	icon: psmmPdfIcon
});
module.exports = {
	lookForAppAr
};