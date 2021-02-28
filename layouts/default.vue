<template>
	<div
		class="transition-opacity"
		:class="{ 'opacity-0': !$store.state.loaded }">
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export default {
	components: {
		Header,
		Footer
	},
	head: {
		meta: [],
		link: []
	}
};
</script>
