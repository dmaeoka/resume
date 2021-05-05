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
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#000',
			white: '#fff',
			gray: {
				100: '#F0F1F1',
				200: '#edf2f7',
				300: '#e2e8f0',
				400: '#cbd5e0',
				500: '#a0aec0',
				600: '#718096',
				700: '#4a5568',
				800: '#2d3748',
				900: '#060039',
			},
			red: {
				"50": "#fefafb",
				"100": "#fefafb",
				"200": "#fbdfe4",
				"300": "#f6bbc5",
				"400": "#f08a9b",
				"500": "#e53955",
				"600": "#e32646",
				"700": "#d41c3a",
				"800": "#c61a37",
				"900": "#b01730"
			},
			orange: {
				"50": "#fffdfa",
				"100": "#fffcf5",
				"200": "#ffecc7",
				"300": "#ffdd99",
				"400": "#ffc95c",
				"500": "#ffaf0f",
				"600": "#eb9c00",
				"700": "#cc8800",
				"800": "#ad7400",
				"900": "#7a5200"
			},
			yellow: {
				"50": "#fffdfa",
				"100": "#fffcf5",
				"200": "#ffecc7",
				"300": "#ffdd99",
				"400": "#ffc95c",
				"500": "#ffaf0f",
				"600": "#eb9c00",
				"700": "#cc8800",
				"800": "#ad7400",
				"900": "#7a5200"
			},
			green: {
				"50": "#fbfefd",
				"100": "#f8fcfb",
				"200": "#d3eee8",
				"300": "#abded4",
				"400": "#78c9b9",
				"500": "#44ac97",
				"600": "#3e9d8a",
				"700": "#378b7a",
				"800": "#317c6d",
				"900": "#276357"
			},
			blue: {
				"50": "#fbfdfe",
				"100": "#fbfdfe",
				"200": "#d7e6ef",
				"300": "#b2cfe1",
				"400": "#7fafcc",
				"500": "#4484ac",
				"600": "#407ba1",
				"700": "#3b7396",
				"800": "#376b8b",
				"900": "#305d78"
			},
		},
	},
	variants: {},
	plugins: [
		require("tailwindcss-debug-screens")
	],
}
