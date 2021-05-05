<template>
	<section id="section-portfolio" class="section-portfolio bg-white text-gray-900 relative z-10">
		<!-- <DiagonalLine colour="text-white" /> -->
		<div class="container xl:px-0 px-5 py-24 relative z-10">
			<div class="section-portfolio--boxTitle mb-4 relative">
				<div class="text-gray-500">
					<h2 class="font-display capitalize font-bold leading-none text-4xl text-gray-700 pb-4">
						{{ portfolio.title }}
						<Zigzag />
					</h2>
					<p class="md:max-w-xl">
						{{ portfolio.description }}
					</p>
				</div>
				<div class="section-portfolio--title font-black text-right uppercase text-xl absolute right-0 bottom-0">Portfolio.</div>
			</div>
			<div class="flex flex-no-wrap -mx-2 overflow-x-auto">
				<div
					class="section-portfolio-item flex-shrink-0 md:w-1/5 w-1/2 mx-2 mb-0 bg-gray-900"
					v-for="project in portfolio.projects" :key="project.id"
				>
					<figure class="overflow-hidden">
						<a
							:href="project.thumbnail"
							:data-caption="project.title"
							target="_blank">
							<img
								class="section-portfolio-item--img"
								v-lazy="project.thumbnail + '?nf_resize=fit&w=350&h=350'" />
						</a>
					</figure>

					<a :href="project.url" class="p-5 block">
						<div class="font-display font-black text-red-600 uppercase">{{project.title}}</div>
						<div class="text-gray-500 text-sm">- {{project.job}}</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
// import DiagonalLine from "~/components/graphic/DiagonalLine";
import Zigzag from "~/components/graphic/Zigzag";

export default {
	components : {
		// DiagonalLine,
		Zigzag
	},
	data() {
		return {
			gallery: [
				{
					src: "https://picsum.photos/id/237/200/300",
					thumb: "https://picsum.photos/id/237/200/300",
				}
			]
		}
	},
	methods: {
		visualizar(e) {
			e.preventDefault();
			return false;
		}
	},
	computed: {
		portfolio() {
			return this.$store.state.portfolio
		}
	}
};
</script>

<style lang="scss">
	.section-portfolio {

		&--title {
			font-size: 90px;
			line-height: 0.65;
			color: rgba(#2d3748, .05);
		}

		&-item {
			min-width: 12rem;

			&--img {
				min-width: 100%;
				height: 16rem;
				object-fit: cover;
			}
		}
	}
</style>
