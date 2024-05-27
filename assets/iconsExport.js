/* eslint-disable no-undef */
const {nativeImage } = require("electron");
const path = require("path");
const iconSize = {width: 30, height: 30};

const trayIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/install_ico.ico"));
const dittoNetIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/ditto_ico_org.png")).resize(iconSize);
const dittoAvIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/dittoav.png")).resize(iconSize);
const ciscoIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/cisco_icon.png")).resize(iconSize);
const rdpIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/rdp.png")).resize(iconSize);
const scannerIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/scanner.png")).resize(iconSize);
const chatIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/chaticon.png")).resize(iconSize);
const asrIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/asr.ico")).resize(iconSize);
const pdfIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/pdf.png")).resize(iconSize);
const psmmPdfIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/psmmpdf.ico")).resize(iconSize);
const mailIcon = nativeImage.createFromPath(path.join(__dirname + "/icons/mailgenerator.png")).resize(iconSize);
module.exports = {
	trayIcon, dittoNetIcon, dittoAvIcon, ciscoIcon, rdpIcon, scannerIcon, chatIcon, asrIcon, pdfIcon, mailIcon, psmmPdfIcon
};