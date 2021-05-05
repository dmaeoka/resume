<template>
	<section
		id="section-home"
		class="section-home bg-cover bg-fixed bg-no-repeat relative h-screen flex flex-col justify-center"
		v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
	>
		<div class="section-home--intro max-w-4xl px-3 relative z-10 m-auto">
			<h1 class="section-home--title text-6xl font-bold text-white leading-none">Hey there! <br> <span class="highlight red">I'm Diego Maeoka</span> <br>Independent <span class="text-orange-500">Web Designer</span></h1>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			isOpen: false,
			intersectionOptions: {
				root: null,
				rootMargin: '0px 0px 0px 0px',
				threshold: [0]
			}
		}
	},
	computed: {
		home() {
			return this.$store.state.siteInfo;
		}
	},
	methods: {
		onWaypoint({ going, direction }) {

			if (going === this.$waypointMap.GOING_IN) {
				this.isOpen = false;
			}

			if (direction === this.$waypointMap.DIRECTION_TOP) {
				this.isOpen = true;
			}

			this.$store.commit("setMenuState", this.isOpen);
		}
	}
};
</script>

<style lang="scss">
	.section-home {
		background-image: url("/uploads/bg.svg");
		background-position: 100% 110%;
		min-height: 500px;

		&--text {
			background: rgba(0, 0, 0, 0.4);
			color: rgba(255, 255, 255, 0.7);
			letter-spacing: 6px;
		}

		&--btn {
			letter-spacing: 6px;
		}
	}
</style>
