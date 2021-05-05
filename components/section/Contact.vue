<template>
	<section id="section-contact" class="section-contact relative z-10 min-h-screen bg-white text-gray-900">
		<!-- <DiagonalLine colour="text-white" /> -->
		<div class="container xl:px-0 px-5 pt-16 pb-24">
			<div class="section-contact--boxTitle flex flex-wrap mb-10 relative">
				<div class="flex-1">
					<h2
						class="font-display capitalize font-bold leading-none text-4xl text-gray-700 pb-4">
						{{ contact.title }}
						<Zigzag />
					</h2>
					<p class="md:max-w-xl">{{ contact.description }}</p>
				</div>
				<div class="section-contact--title font-black text-right uppercase text-xl absolute right-0 bottom-0">CONTACT.</div>
			</div>
			<div class="flex -mx-5">
				<div class="lg:w-2/5 w-full px-5 lg:flex md:order-1 order-2 hidden">
					<div id="map" class="flex bg-black w-full h-full min-h-screen md:min-h-0 mt-4 md:mt-0"></div>
				</div>
				<div class="lg:w-3/5 w-full px-5 md:order-2 order-1">
					<form
						name="contact"
						method="post"
						@submit.prevent="handleSubmit"
						data-netlify="true"
						data-netlify-honeypot="bot-field">
						<input type="hidden" name="form-name" value="contact" />

						<div class="md:flex flex-wrap -mx-5">
							<div class="md:w-1/2 px-5 mb-5">
								<label for="first-name" class="sr-only">First name:</label>
								<input
									class="h-16 border-b-2 focus:border-teal-500 border-gray-900 block w-full font-bold uppercase outline-none"
									name="firstName"
									type="text"
									placeholder="First Name" />
							</div>
							<div class="md:w-1/2 px-5 mb-5">
								<label for="last-name" class="sr-only">Last name:</label>
								<input
									class="h-16 border-b-2 focus:border-teal-500 border-gray-900 block w-full font-bold uppercase outline-none"
									name="lastName"
									type="text"
									placeholder="Last Name" />
							</div>
							<div class="md:w-1/2 px-5 mb-5">
								<label for="email" class="sr-only">E-mail:</label>
								<input
									class="h-16 border-b-2 focus:border-teal-500 border-gray-900 block w-full font-bold uppercase outline-none"
									name="email"
									required
									pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
									type="email"
									placeholder="Your Email Address" />
							</div>
							<div class="md:w-1/2 px-5 mb-5">
								<label for="city" class="sr-only">Where are you from:</label>
								<input
									class="h-16 border-b-2 focus:border-teal-500 border-gray-900 block w-full font-bold uppercase outline-none"
									name="city"
									type="text"
									placeholder="where are you from?" />
							</div>
							<div class="w-full px-5 mb-5">
								<label for="name" class="sr-only">Message:</label>
								<textarea
									class="h-48 border-b-2 focus:border-teal-500 border-gray-900 block w-full font-bold uppercase outline-none"
									name="message"
									placeholder="Enter Your Message"
									required></textarea>
							</div>
							<div class="w-full px-5 text-right">
								<input
									class="font-display text-xs uppercase bg-red-600 rounded text-white inline-block py-4 px-8 btn cursor-pointer hover:bg-red-700"
									type="submit"
									value="Send Message" />
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>
<script>
// melhorar isso
import { Loader } from "google-maps";
import axios from "axios";
// import DiagonalLine from "~/components/graphic/DiagonalLine";
import Zigzag from "~/components/graphic/Zigzag";

export default {
	components: {
		// DiagonalLine,
		Zigzag
	},
	mounted() {
		const location = JSON.parse(this.contact.location);
		if (process.client && location) {
			if (typeof google != "undefined" && google.hasOwnProperty("maps"))
				return;

			const loader = new Loader('AIzaSyCoM2t5wITxFwK7Ft_OABriah7ZfzrKik0', {});
			loader.load().then(google => {
				const map = new google.maps.Map(document.getElementById('map'), {
					center: {
						lat: location.coordinates[1],
						lng: location.coordinates[0]
					},
					zoom: 11,
					disableDefaultUI: true
				});

				const marker = new google.maps.Marker({
					position: {
						lat: location.coordinates[1],
						lng: location.coordinates[0]
					},
					map,
					title: "Hi there"
				})
			});
		}
	},
	methods: {
		removeNotification() {
			this.sent = false;
		},
		encode(data) {
			return Object.keys(data)
				.map(
					key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
				).join("&");
		},
		handleSubmit(e) {
			axios({
				method: "post",
				url: "/",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				data: this.encode({
					"form-name": "ask-question",
					...this.form
				})
			})
			.then(() => {
				console.log("thanks");
				// this.$router.push('thanks');
			})
			.catch(() => {
				console.log("404");
				// this.$router.push('404');
			});
		}
	},
	data() {
		return {
			sent: false,
			status: {},
			maps: this.$store.state.contact.location
		}
	},
	computed: {
		contact() {
			return this.$store.state.contact;
		}
	}
};
</script>

<style lang="scss">
	.section-contact {
		&--title {
			font-size: 90px;
			line-height: 0.65;
			color: rgba(#2d3748, .05);
		}
	}
</style>
