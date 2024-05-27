module.exports = {
	packagerConfig: {
		icon: "./assets/icons/icon.ico"
	},
	rebuildConfig: {},
	makers: [
		{
			name: "@electron-forge/maker-squirrel",
			config: {
				iconUrl: "http://complex-bomb.surge.sh/src/favicon.ico",
				setupIcon: "./assets/icons/install_ico.ico",
			},
		},
		{
			name: "@electron-forge/maker-zip",
			platforms: ["darwin"],
		},
		{
			name: "@electron-forge/maker-deb",
			config: {},
		},
		{
			name: "@electron-forge/maker-rpm",
			config: {},
		},
	],
};
