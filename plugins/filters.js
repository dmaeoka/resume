import Vue from 'vue'

Vue.filter('pretty', val => {
	return JSON.stringify(JSON.parse(val), null, 2);
});
