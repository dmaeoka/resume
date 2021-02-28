/*
 * Data store, managed by Vuex - https://vuex.vuejs.org/
 *
 * Currently just holds our list of movies.
 */
import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const state = () => ({
	loaded: false,
	menuIsActive: false,
	about: {},
	services: {},
	portfolio: {},
	reviews: {},
	contact: {},
	blogPosts: [],
	blogTitle: "",
	siteInfo: [],
	connect: [],
	theThumbnail: "",
	theCategory: "",
	theCrumb: "",
	allCats: []
});

export const mutations = {
	SET_LOADED(state, data) {
		state.loaded = true;
	},
	SET_POSTS(state, data) {
		state.blogPosts = data;
	},
	SET_CATS(state, data) {
		state.allCats = data;
	},
	SET_CRUMB(state, data) {
		state.theCrumb = data;
	},
	SET_POSTCAT(state, data) {
		state.theCategory = data;
	},
	SET_THUMB(state, data) {
		state.theThumbnail = data;
	},
	SET_TITLE(state, data) {
		state.blogTitle = data;
	},
	SET_INFO(state, data) {
		state.siteInfo = data;
	},
	SET_CONNECT(state, data) {
		state.connect = data;
	},
	SET_ABOUT(state, data) {
		state.about = data || {};
	},
	SET_SERVICES(state, data) {
		state.services = data || {};
	},
	SET_PORTFOLIO(state, data) {
		state.portfolio = data || {};
	},
	SET_REVIEWS(state, data) {
		state.reviews = data || {};
	},
	SET_CONTACT(state, data) {
		state.contact = data || {};
	},
	setMenuState(state, menuIsActive) {
		state.menuIsActive = menuIsActive;
	},
};

export const actions = {
	async nuxtServerInit({ dispatch }) {
		await dispatch("getSiteInfo");
		await dispatch("getPages");
		await dispatch("getCats");
		await dispatch("getBlogPosts");
	},

	async getBlogPosts({ state, commit }) {
		try {
			const context = await require.context("~/content/blog/",false,/\.json$/);
			const searchposts = await context.keys().map(key => ({
				...context(key),
				_path: `/blog/${key.replace(".json", "").replace("./", "")}`
			}));

			commit("SET_POSTS", searchposts.reverse());
		} catch (error) {}
	},

	async getCats({ state, commit }) {
		try {
			const context = await require.context(
				"~/content/categories/",
				false,
				/\.json$/
			);
			const pages = await context.keys().map(key => ({
				...context(key),
				_path: `/category/${key.replace(".json", "").replace("./", "")}`
			}));
			commit("SET_CATS", pages);
		} catch (error) {}
	},

	getPages({ state, commit }) {
		try {
			const about = require("~/content/page/about.json");
			const services = require("~/content/page/services.json");
			const portfolio = require("~/content/page/portfolio.json");
			const reviews = require("~/content/page/reviews.json");
			const contact = require("~/content/page/contact.json");

			commit("SET_ABOUT", about);
			commit("SET_SERVICES", services);
			commit("SET_PORTFOLIO", portfolio);
			commit("SET_REVIEWS", reviews);
			commit("SET_CONTACT", contact);
		} catch (error) {}
	},

	getSiteInfo({ state, commit }) {
		try {
			const info = require("~/content/setup/info.json");
			const connect = require("~/content/setup/connect.json");
			const context = require.context(
				"~/content/blog/",
				false,
				/\.json$/
			);
			const searchposts = context.keys().map(key => ({
				...context(key),
				_path: `/blog/${key.replace(".json", "").replace("./", "")}`
			}));
			commit("SET_POSTS", searchposts);
			commit("SET_INFO", info);
			commit("SET_CONNECT", connect);
		} catch (error) {}
	}
};
