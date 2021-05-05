<template>
	<section id="section-reviews" class="section-reviews min-h-screen relative z-10">
		<!-- <DiagonalLine colour="text-gray-100" /> -->
		<div class="container xl:px-0 px-5 py-16">
			<div class="section-reviews--boxTitle md:flex flex-wrap mb-10 relative">
				<div class="flex-1">
					<h2 class="font-display capitalize font-bold leading-none text-4xl text-gray-700 pb-4">
						{{ reviews.title }}
						<Zigzag />
					</h2>
					<p class="md:max-w-xl">{{ reviews.description }}</p>
				</div>
				<div class="section-reviews--title font-black text-right uppercase text-xl absolute right-0 bottom-0">REVIEWS.</div>
			</div>

			<div class="md:flex -mx-5">
				<div class="md:w-2/5 px-5 flex flex-shrink-0 hidden lg:block">
					<img
						:src="reviews.thumbnail" class="rounded bg-blue-200 w-full md:mb-0 mb-4" />
				</div>
				<div class="px-5 flex">
					<div class="md:flex flex-wrap -mx-5 -mb-5">
						<div
							class="md:w-1/2 mb-5 px-5"
							v-for="colleague in reviews.colleague" :key="colleague.id"
						>
							<div class="p-5 bg-gray-900 text-white rounded">
								<i class="lnr lnr-pushpin block text-center mb-5 text-5xl"></i>
								<blockquote
									class="text-center leading-relaxed text-sm font-thin italic"
									style="letter-spacing: .5px"
									v-html="$md.render(colleague.review)"></blockquote>
								<div class="flex border-t border-gray-700 mt-5 pt-5">
									<img
										class="bg-white mr-5 flex-shrink-0 rounded-full"
										style="width: 50px; height: 50px;"
										:src="colleague.avatar">
									<div class=" text-sm">
										<div class="font-display text-red-600 uppercase font-black">{{ colleague.author }}</div>
										<div class="text-gray-500">- {{ colleague.position }}</div>
									</div>
								</div>
							</div>
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
	components : {
		// DiagonalLine,
		Zigzag
	},
	computed: {
		reviews() {
			return this.$store.state.reviews
		}
	}
};
</script>

<style lang="scss">
	.section-reviews {
		&--title {
			font-size: 90px;
			line-height: 0.65;
			color: rgba(#2d3748, .05);
		}
	}
</style>
