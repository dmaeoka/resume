<template>
	<header
		class="header md:h-full z-50 md:w-20 w-full fixed flex flex-row md:flex-col bg-gray-900 justify-between h-20 md:top-0 md:bottom-0 md:min-h-screen"
	>
		<div class="p-3 h-full md:h-auto absolute md:static">
			<a href="/" :title="info.sitename">
				<img :src="info.siteicon" class="md:w-full h-full logo" />
			</a>
		</div>
		<div class="menu flex flex-1 md:flex-col items-center justify-center">
			<div
				class="menu-title text-gray-500 text-xs text-center hidden md:block font-display"
			>
				MENU
			</div>
			<ol class="menu-items flex flex-row md:block ml-auto md:mx-auto">
				<li
					v-for="menu in info.menu"
					:key="menu.id"
					class="menu-item relative text-center mr-2 md:mr-0 md:mb-2 md:mt-2"
				>
					<a
						@click.prevent="goTo"
						class="menu-item--link inline-block w-10 h-10 leading-10 text-center text-sm border border-gray-700 hover:border-gray-600 rounded-full"
						:title="menu.name"
						:href="menu.link"
					>
						<span class="lnr" :class="menu.icons"></span>
					</a>
					<span
						class="ml-8 py-0 px-8 whitespace-no-wrap rounded text-xs absolute bg-gray-800 hidden md:block opacity-0 uppercase w-auto leading-6 font-display menu-item--tooltip"
					>
						{{ menu.name }}
					</span>
				</li>
			</ol>
		</div>
		<a
			@click.prevent="backTop"
			href="#"
			:class="{ 'md:block animate__fadeInUp': $store.state.menuIsActive }"
			class="animate__animated absolute bottom-0 leading-none w-full py-4 bg-red-600 hover:bg-red-900 hidden text-center"
		>
			<span class="lnr lnr-arrow-up text-white text-2xl"></span>
		</a>
	</header>
</template>

<script>
import gsap from "gsap";

export default {
	methods: {
		goTo(e) {
			const target = e.currentTarget;
			const href = target.getAttribute("href");
			const section = document.querySelector(href);
			if (section) {
				window.scroll({
					top: section.offsetTop + 20,
					left: 0,
					behavior: "smooth"
				});
				window.history.pushState({}, null, href);
			}
		},
		backTop() {
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
			window.history.pushState({}, document.title, window.location.pathname);
		}
	},
	computed: {
		info() {
			return this.$store.state.siteInfo;
		}
	},
	mounted() {
		this.$store.commit("SET_LOADED", true);

		if (window.outerWidth > 767) {
			gsap.from(".header", {
				opacity: 0,
				duration: 1,
				x: -80
			});
		}
	}
};
</script>
<style lang="scss" scoped>
.menu {
	.menu-item {
		&--link {
			&:hover ~ .menu-item--tooltip,
			&:focus ~ .menu-item--tooltip {
				opacity: 1;
				transform: translate(0%, -50%);
			}
		}

		&--tooltip {
			left: 100%;
			letter-spacing: 1px;
			top: 50%;
			transform: translate(-30%, -50%);
			transition: all 100ms ease;
		}
	}
}
</style>
