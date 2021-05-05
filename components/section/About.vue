<template>
	<section id="section-about" class="section-about bg-cover bg-no-repeat bg-white text-gray-900 relative min-h-screen">
		<!-- <DiagonalLine colour="text-white" /> -->
		<div class="container pb-24">
			<h2 class="section-about--title font-black text-center uppercase">About me</h2>
			<div class="md:flex w-full xl:px-0 px-5">
				<div class="w-full md:w-1/3 mb-4 md:mb-0 hidden md:block">
					<img
						class="rounded-r-full"
						:src="about.thumbnail"
						alt="A nice picture of me, trust me!" />
				</div>
				<div class="w-full md:w-2/3">
					<div class="md:ml-10 lg:w-3/4 ">
						<div class="section-about--intro font-display text-xs uppercase mb-10">{{ $store.state.about.subtitle }}</div>
						<div class="section-about--me capitalize font-bold mb-10 leading-none text-4xl text-gray-700">{{ $store.state.about.title }}</div>
						<div
							class="section-about--description text-gray-900"
							v-html="$md.render(about.intro)"></div>
						<div class="skills mt-10">
							<div
								class="skill-item mb-5"
								v-for="(skill, itemObjKey) in about.skills" :key="skill.id">
								<div class="font-display font-bold text-sm uppercase mb-2 text-gray-800 pr-12 lg:pr-0">{{ skill.name }}</div>
								<div class="relative w-full bg-red-200 h-1 rounded">
									<div
										class="relative h-full bg-red-500 flashing rounded"
										:class="'delay--' + (itemObjKey + 1)"
										v-bind:style="{ width: skill.percentage + '%' }">
										<span class="skill-item--tooltip absolute inline-block bg-red-500 p-1 text-white text-xs rounded-sm">{{ skill.percentage }}%</span>
									</div>
								</div>
							</div>
						</div>
						<a
							v-if="about.cv"
							:href="about.cv"
							target="_blank"
							class="font-display text-xs uppercase mt-8 bg-red-600 hover:bg-red-900 rounded-full text-white inline-block py-4 px-8 btn">DOWNLOAD CV</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
export default {
	components : {
		// DiagonalLine
	},
	computed: {
		about() {
			return this.$store.state.about;
		}
	}
};
</script>

<style lang="scss">
	.flashing {
		transform-origin: left;
		animation-duration: 1s;
		animation-iteration-count: 1;
		animation-name: flash;
		animation-fill-mode: both;

		$i: 1;
		@while $i <=10 {
			&.delay--#{$i} {
				animation-delay: #{$i}s;
			}
			$i: $i+1;
		}
	}

	@keyframes flash {
		from {
			transform: scaleX(0);
		}

		to {
			transform: scaleX(1);
		}
	}

	.section-about {
		background-image: url("/uploads/bg-2.svg");
		background-position: 100% 110%;

		&--title {
			font-size: 90px;
			color: rgba(51, 51, 51, .1);
		}

		&--intro {
			text-transform: uppercase;
			font-size: 14px;
			letter-spacing: 3px;
			color: #666;
			font-weight: 600;
			margin-bottom: 20px;
		}

		&--description p {
			margin-bottom: 0.5rem;
		}

		.skill {
			&-item {
				&--tooltip {
					bottom: 10px;
					left: calc(100% - 14px);
				}
			}
		}
	}
</style>
