const {shell} = require("electron");
const { openDitto } = require("./downloadDittoManifests");
const { paths } = require("./exportPaths");
async function openApps(app) { 
	switch(app){
	case "beta":
		await openDitto("beta");
		break;
	case "nightly":
		await openDitto("nightly");
		break;
	case "release":
		await shell.openPath(paths.dittoAVRelease);
		break;
	case "prerelease":
		await shell.openPath(paths.dittoAVPrerelease);
		break;
	case "rdp":
		await shell.openPath(paths.rdpPath);
		break;
	case "rscan":
		await shell.openPath(paths.rscan);
		break;
	case "pdf":
		await shell.openPath(paths.pdf);
		break;
	case "psmmpdf":
		await shell.openPath(paths.psmmPdf);
		break;
	case "asr":
		await shell.openPath(paths.asr);
	}

}

	


module.exports = {
	openApps,
};
