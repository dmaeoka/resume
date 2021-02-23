<template>
	<div class="md:ml-20 overflow-hidden pt-20 md:pt-0">
		<Home />
		<About />
		<Services />
		<Portfolio />
		<Reviews />
		<!-- <Blogs /> -->
		<Contact />
	</div>
</template>

<script>
import Home from "~/components/section/Home";
import About from "~/components/section/About";
import Services from "~/components/section/Services";
import Portfolio from "~/components/section/Portfolio";
import Reviews from "~/components/section/Reviews";
// import Blogs from "~/components/section/Blogs";
import Contact from "~/components/section/Contact";

export default {
	components: {
		Home,
		About,
		Services,
		Portfolio,
		Reviews,
		// Blogs,
		Contact
	},
	head() {
		return {
			title: "Diego Maeoka, Web Developer"
		}
	}
};
</script>

<style lang="scss">

</style>
