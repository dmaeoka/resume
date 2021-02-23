/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
	prefix: '',
	theme: {
		fontFamily: {
			display: ['Titillium Web', 'sans-serif'],
			body: ['Poppins', 'sans-serif'],
		},
		container: {
			center: true
		}
	},
	variants: {},
	plugins: [
		require("tailwindcss-debug-screens")
	],
}
