const { app, BrowserWindow } = require('electron');

let w;

app.on('ready', () => {
	
	w = new BrowserWindow({ webPreferences: { nodeIntegration: true } });
	
	w.loadFile('w.html');
	
	w.on('close', () => {
		app.quit();
	});
	
});