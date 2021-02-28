<template>
	<article class="bg-white md:ml-20 overflow-hidden pt-20 md:pt-0">
		<h1>test</h1>
	</article>
</template>

<script>
export default {
	async asyncData({ params, app, payload, route, store }) {
		let post = await import("~/content/blog/" + params.slug + ".json");
		await store.commit("SET_TITLE", post.title);
		await store.commit("SET_THUMB", post.thumbnail);
		await store.commit("SET_CRUMB", 'Blog');
		await store.commit("SET_POSTCAT", post.category);
		return post;
	},
	head() {
		return {
			title: this.title + " | " + this.$store.state.siteInfo.sitename
		};
	},
	data() {
		return {};
	},
	methods: {},
	updated() {},
	mounted() {},
	beforeDestroy() {},
	computed: {
		theThumb() {
			return this.$store.state.theThumbnail;
		},
		allBlogPosts() {
			return this.$store.state.blogPosts;
		}
	},
	components: {}
};
</script>

<style lang="scss">

</style>
