<template>
	<div class="stroke-2" style="stroke: #e53e3e;" :style="colour">
		<svg
			xml:space="preserve"
			fill="none"
			viewBox="0 0 69.172 14.975"
			width="70"
			height="20"
			y="0px"
			x="0px"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			xmlns="http://www.w3.org/2000/svg"
			version="1.1">
			<path d="M1.357,12.26 10.807,2.81 20.328,12.332 29.781,2.879 39.223,12.321 48.754,2.79 58.286,12.321 67.815,2.793 "
				style="stroke-dasharray: 93.9851, 93.9851; stroke-dashoffset: 0;" />
		</svg>
		<!-- <svg width="82" height="14" viewBox="0 0 82 14" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M0.5 13L12 1.5L23.5 13L35 1.5L46.5 13L58 1.5L69.5 13L81 1.5" stroke="black"/>
		</svg> -->

	</div>
</template>
<script>
export default {
	props: {
		colour: String
	}
};
</script>

<style lang="scss">

</style>
