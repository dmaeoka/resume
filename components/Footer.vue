<template>
	<footer class="relative pt-8 pb-6">
		<DiagonalLine colour="text-gray-900" />
		<div class="container mx-auto">
			<div class="w-full md:w-6/12 px-4 mx-auto text-center">
				<div class="copyright text-sm text-gray-500 py-1 uppercase font-display">
					Copyright © {{ date }} DIEGO MAEOKA.
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import DiagonalLine from "~/components/graphic/DiagonalLine";

export default {
	components: {
		DiagonalLine
	},
	data() {
		return {
			date: new Date().getFullYear()
		};
	}
};
</script>

<style lang="scss">
	.copyright {
		letter-spacing: 6px;
	}
</style>
