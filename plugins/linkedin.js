import Vue from 'vue'

Vue.prototype.$loadSDK = clientId => {
	return new Promise((resolve, reject) => {
		try {
			const d = document;
			const s = "script";
			const id = "linkedin-jssdk";
			const element = d.getElementsByTagName(s)[0];
			const ljs = element;
			let js = element;

			if (d.getElementById(id)) {
				return
			}
			js = d.createElement(s);
			js.id = id;
			js.src = `//platform.linkedin.com/in.js`;
			js.text = `
				api_key: ${clientId}
				onLoad: onLinkedInLoad
				authorize: 1
				lang: "en_UK"
			`;
			ljs.parentNode.insertBefore(js, ljs);

			setTimeout(() => {
				resolve();
			}, 1000);
		} catch (error) {
			reject(error);
		}
	});
}

if (process.client) {
	// require('external_library')
	window.onLinkedInLoad = function() {
		console.log("Logou linkedin");
	}
}
