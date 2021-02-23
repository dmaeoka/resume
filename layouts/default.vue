<template>
	<div class="font-body">
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
