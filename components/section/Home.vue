<template>
	<section
		id="section-home"
		class="section-home bg-cover bg-fixed bg-no-repeat relative h-screen flex flex-col justify-center"
		v-waypoint="{ active: true, callback: onWaypoint, options: intersectionOptions }"
	>
		<div class="section-home--intro max-w-3xl px-3 relative z-10 m-auto">
			<h1 class="section-home--title mb-5 text-5xl font-bold text-white leading-none">Hey there! <br> <span class="highlight red">I'm Diego Maeoka</span> <br>Independent Web Designer</h1>
			<div>
				<div class="section-home--text font-display text-xs inline-block py-3 px-10">I CREATE WEB AND GRAPHIC DESIGN.</div>
			</div>
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
			this.$store.commit("toggleMenuState");

			if (going === this.$waypointMap.GOING_IN) {
				this.isOpen = false;
			}

			if (direction === this.$waypointMap.DIRECTION_TOP) {
				this.isOpen = true;
			}
		}
	}
};
</script>

<style lang="scss">
	.section-home {
		background-image: url("/uploads/bg-code.jpg");
		background-position: center center;
		min-height: 400px;

		&:after {
			width: 100%;
			height: 100%;
			position: absolute;
			background: rgba(42, 42, 46, .65);
			content: "";
		}

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
