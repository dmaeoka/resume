<template>
	<article class="bg-black md:ml-20 overflow-hidden pt-20 md:pt-0">
		<h1 class="title">{{title}}</h1>
		<p class="date">Posted by {{author}} on {{date}}</p>
		<div class="body" v-html="$md.render(body)"/>
		<p class="back"><a class="back-link" @click="$router.back()">Back</a></p>
	</article>
</template>

<script>
export default {
	async asyncData({ params, app, payload, route, store }) {
		/*
		Interestingly, if you just return the raw post object as it is imported,
		Nuxt fails to build, but if you create your own object with the data you
		need, it works. The issue is discussed here, but apparently it wasn't
		completely fixed. https://github.com/nuxt-community/apollo-module/issues/163
		However, I like the code more this way anyway--it's more explicit what
		you're bringing in from the JSON.
		*/
		let { date,body,title,author,...post } = await import(`~/content/blog/${params.slug}.json`);
		return {
			date,
			body,
			title,
			author,
		};
	},
	head() {
		return {
			title: this.title + " | " + this.$store.state.siteInfo.sitename
		};
	},
	data() {
		return {};
	},
	methods: {
		theSlug() {
			return this.$route.params.slug
		},
	},
	updated() {},
	mounted() {},
	beforeDestroy() {},
	computed: {
		allBlogPosts() {
			return this.$store.state.blogPosts;
		},
		findCatPosts() {
			var posts = this.allBlogPosts;
			var title = this.title
			return posts.filter(function(obj) {
				return obj.category == title
			});
		}
	},
	components: {}
};
</script>

<style lang="scss">

</style>
