<template>
	<section id="section-services" class="section-services relative z-10 min-h-screen">
		<!-- <DiagonalLine colour="text-gray-900" /> -->
		<div class="container xl:px-0 px-5 py-16">
			<div class="section-services--boxTitle mb-10 relative">
				<div class="text-gray-500">
					<h2 class="font-display capitalize font-bold leading-none text-4xl text-white pb-4">
						{{ services.title }}
						<Zigzag />
					</h2>
					<div class="md:max-w-xl font-thin" v-html="$md.render(services.description)"></div>
				</div>
				<div class="section-services--title font-black text-right uppercase text-xl absolute right-0 bottom-0">SERVICES.</div>
			</div>
			<div
				v-if="services.service"
				class="md:flex flex-wrap -mx-5"
			>
				<div
					class="md:w-1/2 lg:w-1/4 px-5 mb-5"
					v-for="sv in services.service" :key="sv.id"
				>
					<div class="p-8 text-gray-900 rounded-xl tracking-wide bg-white h-full shadow-2xl">
						<span
							class="lnr mb-4 block text-4xl"
							:class="sv.icon"
						></span>
						<h3 class="font-display text-red-600 text-xl font-bold mb-4 leading-none">{{ sv.title }}</h3>
						<p>{{ sv.description }}</p>
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
		services() {
			return this.$store.state.services;
		}
	}
};
</script>

<style lang="scss">
	.section-services {
		&--title {
			font-size: 90px;
			line-height: 0.65;
			color: rgba(255, 255, 255, .05);
		}
		&--icon {
			height: 2rem;
			width: 2rem;
		}
	}
</style>
