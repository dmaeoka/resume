import path from "path"
import glob from "glob"
import siteInfo from "./content/setup/info"

export default {
	/* this is a static site, no Node.js */
	// mode: "spa",
	// mode: "universal",
	target: 'static',
	/* Global headers parts */
	head: {
		// title: "{{title}}",
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: process.env.npm_package_description || "" },
			{ name: "theme-color", content: "#213e8f" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico?v=4" },
			{ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
			{ rel: "stylesheet", media:"all", type:"text/css", href: "https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900|Titillium+Web:200,300,400,600,700&display=swap" },
		],
	},

	/* global SASS file */
	css: [
		"@/assets/layout.scss",
		"@/assets/css/fonts.css",
		"@fortawesome/fontawesome-svg-core/styles.css",
		"animate.css/animate.css"
	],

	/* Progress bar color */
	loading: {
		color: "#4f4fce"
	},

	plugins: [
		"~/plugins/filters.js",
		"~/plugins/lazyload.js",
		"~/plugins/waypoint.js",
		"~/plugins/fontawesome.js",
	],

	purgeCSS: {
		whitelistPatterns: [/svg.*/, /fa.*/, /lnr./]
	},

	/* Build configuration */
	build: {
		babel: {
			plugins: [
				['@babel/plugin-proposal-private-methods', { loose: true }]
			]
		},
		extractCSS: false,
		/* Run ESLint on save */
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				})
			}
		},
		"html.minify": {
			removeEmptyAttributes: false,
			removeRedundantAttributes: false
		},
		transpile: [
			"gsap"
		]
	},

	modules: [
		"@nuxtjs/markdownit",
		"@nuxtjs/pwa",
		"@nuxtjs/axios"
	],

	markdownit: {
		injected: true,
		preset: "default",
		breaks: true,
		html: true
	},

	manifest: {
		name: process.env.npm_package_name,
		short_name: siteInfo.sitename,
		description: siteInfo.sitedescription,
		lang: "en"
	},

	workbox: {
		runtimeCaching: [{
			urlPattern: "/uploads/.*",
			handler: "cacheFirst",
			strategyOptions: {
				cacheName: "image-cache",
				cacheExpiration: {
					maxEntries: 100,
					maxAgeSeconds: 86400
				}
			}
		}]
	},

	router: {
		middleware: ["title"]
	},

	buildModules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-analytics"
	],

	generate: {
		routes: getDynamicPaths({
			"/blog": "content/blog/*.json",
			"/category": "content/categories/*.json"
		})
	},

	googleAnalytics: {
		id: "G-LHRVCH9H36"
	}
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
	return [].concat(
		...Object.keys(urlFilepathTable).map(url => {
			const filepathGlob = urlFilepathTable[url];
			return glob
				.sync(filepathGlob, {
					cwd: "content"
				})
				.map(filepath => {
					let file = `${url}/${path.basename(filepath, ".json")}`;
					return file;
				});
		})
	);
}
