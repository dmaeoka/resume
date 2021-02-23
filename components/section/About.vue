<template>
	<section
		id="section-about"
		class="section-about relative min-h-screen"
	>
		<DiagonalLine colour="text-white" />
		<div class="container pb-24">
			<h2 class="section-about--title font-black text-center uppercase">About me</h2>
			<div class="md:flex w-full xl:px-0 px-5">
				<div class="w-full md:w-1/3 mb-4 md:mb-0 hidden md:block">
					<img
						class="rounded"
						:src="about.thumbnail"
						alt="A nice picture of me, trust me!" />
				</div>
				<div class="w-full md:w-2/3">
					<div class="md:ml-10 lg:w-3/4 ">
						<div class="section-about--intro font-display text-xs uppercase mb-10">
							{{ $store.state.about.subtitle }}
						</div>
						<div class="section-about--me capitalize font-bold mb-10 leading-none text-4xl text-gray-700">{{ $store.state.about.title }}</div>
						<div
							class="section-about--description text-sm text-gray-900"
							v-html="$md.render(about.intro)"></div>
						<div class="skills mt-10">
							<div
								class="skill-item mb-5"
								v-for="skill in about.skills" :key="skill.id">
								<div class="font-display font-bold text-sm uppercase mb-2 text-gray-800 pr-12 lg:pr-0">{{ skill.name }}</div>
								<div class="relative w-full bg-red-100 h-1">
									<div class="relative h-full bg-red-500" v-bind:style="{ width: skill.percentage + '%' }">
										<span class="skill-item--tooltip absolute inline-block bg-red-500 p-1 text-white text-xs rounded-sm">{{ skill.percentage }}%</span>
									</div>
								</div>
							</div>
						</div>
						<a
							v-if="about.cv"
							:href="about.cv"
							target="_blank"
							class="font-display text-xs uppercase mt-8 bg-red-600 rounded text-white inline-block py-4 px-8 btn">DOWNLOAD CV</a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
import DiagonalLine from "~/components/graphic/DiagonalLine";
export default {
	components : {
		DiagonalLine
	},
	computed: {
		about() {
			return this.$store.state.about;
		}
	}
};
</script>

<style lang="scss">
	.section-about {
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
