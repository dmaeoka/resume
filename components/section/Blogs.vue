<template>
	<section id="section-blog" class="section-blog bg-gray-100 relative z-10">
		<!-- <DiagonalLine colour="text-gray-100" /> -->
		<div class="container lg:px-0 px-5 py-16">
			<div class="section-blog--boxTitle md:flex flex-wrap mb-10 relative">
				<div class="flex-1">
					<h2 class="font-display capitalize font-bold leading-none text-4xl text-gray-700 pb-4">
						What I have to say
						<Zigzag />
					</h2>
					<p class="md:max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing .</p>
				</div>
				<div class="section-blog--title font-black text-right uppercase text-xl absolute right-0 bottom-0">BLOG.</div>
			</div>
			<div class="md:flex flex-wrap -mx-5 -mb-4 md:mb-0">
				<div v-for="post in allBlogPosts" :key="post.id" class="md:w-1/2 lg:w-1/4 px-5 mb-4 md:mb-0 blog-item">
					<div class="w-full relative">
						<div class="flex overflow-hidden">
							<span class="py-1 px-2 text-xs rounded-sm bg-white absolute blog-item--category">UI</span>
							<n-link
								:to="post._path">
								<img
									:src="post.thumbnail"
									alt=""
									class="rounded" />
							</n-link>
						</div>
						<div class="absolute p-5 bottom-0 w-full" style="background: #00000047 ">
							<span class="font-display rounded-sm text-white text-xs font-thin px-2 py-1 mb-2 bg-red-600 inline-block">Sep 2, 2019 Written by Jake Musich</span>
							<h4 class="text-lg font-bold">
								<n-link
									:to="post._path"
									target="_blank"
									class="text-white">{{post.title}}
								</n-link>
							</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>

</template>

<script>
// import DiagonalLine from "~/components/graphic/DiagonalLine";
import Zigzag from "~/components/graphic/Zigzag";

export default {
	components: {
		// DiagonalLine,
		Zigzag
	},
	computed: {
		allBlogPosts() {
			return this.$store.state.blogPosts;
		},
	}
};
</script>

<style lang="scss">
	.section-blog {
		&--title {
			font-size: 90px;
			line-height: 0.65;
			color: rgba(#2d3748, .05);
		}
	}
	.blog-item {
		&--category {
			top: 10px;
			left: 10px;
		}
	}
</style>
