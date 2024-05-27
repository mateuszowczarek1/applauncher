/* eslint-disable no-undef */
const os = require("os");
const path = require("path");
const homeDir = os.homedir();

const paths = {
	cisco: "C:\\Program Files (x86)\\Cisco\\Cisco AnyConnect Secure Mobility Client\\vpnui.exe",
	dittoAVRelease: path.join(homeDir + "\\AppData\\Local\\DittoAVRelease\\PS.MMS.DittoAV.Release.exe"),
	dittoAVPrerelease: path.join(homeDir + "\\AppData\\Local\\DittoAVPrerelease\\PS.MMS.DittoAV.Prerelease.exe"),
	rdpPath: "C:\\Windows\\System32\\mstsc.exe",
	dittoNetBeta: path.join(homeDir + "\\documents\\DittoManifest\\DITTO_net_Beta.application"),
	dittoFolder: path.join(homeDir + "\\documents\\DittoManifest"),
	dittoNetNightly: path.join(homeDir + "\\documents\\DittoManifest\\DITTO_net_Nightly.application"),
	rscan: path.join(homeDir + "\\documents\\rscan3.exe"),
	asr: path.join(__dirname, "..", "static", "asrcounter"),
	pdf: "C:\\PDF2JPG\\PDF2JPG.exe",
	psmmPdf: path.join(homeDir + "\\AppData\\Local\\psmmpdf\\PDF_TO_JPG.exe"),
};
module.exports = {paths};