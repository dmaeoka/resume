
/* ServerAPI mockup - backed by localStorage for demo purposes only.
 *
 * Not efficient for large data because of localStorage limitations.
 */

import axios from "axios"

const KEY = "movies";

class LocalStorageAPI {

	constructor() {
		this.localStorage = true;
	}

	query_movies() {
		return new Promise((resolve, reject) => {

			//localStorage.removeItem("movies") // to remove all

			var value = localStorage.getItem(KEY);

			if (!value) {
				// load initial data
				let url = "/data/movies.json";
				axios.get(url)
					.then(reply => {
						localStorage.setItem(KEY, JSON.stringify(reply.data));
						resolve(reply.data);
					});
			} else {
				let data = JSON.parse(value);
				resolve(data);
			}
		})
	}

	get_movie(id) {
		return new Promise((resolve, reject) => {

			id = parseInt(id);

			var value = localStorage.getItem(KEY);
			let data = JSON.parse(value) || [];

			// search for id
			for (const x of data) {
				if (x.id == id) {
					resolve(x);
					return;
				}
			}

			reject();
		});
	}

	save_movie(item) {
		return new Promise((resolve, reject) => {

			var value = localStorage.getItem(KEY);
			let moviearray = JSON.parse(value);

			if (!item.id) {
				// create object
				const seconds = Math.floor(Date.now() / 1000);
				item.id = seconds;
				moviearray.push(item);
			} else {
				// edit object
				for (const x of moviearray) {
					if (x.id == item.id) {
						x.title = item.title;
						x.director = item.director;
					}
				}
			}

			localStorage.setItem(KEY, JSON.stringify(moviearray));
			resolve(item);
		})
	}

	delete_movie(id) {
		return new Promise((resolve, reject) => {
			id = parseInt(id);

			var value = localStorage.getItem(KEY);
			let moviearray = JSON.parse(value);

			moviearray = moviearray.filter(item => item.id !== id)

			localStorage.setItem(KEY, JSON.stringify(moviearray));
			resolve();
		})
	}

	query_projects() {
		try {
			return new Promise((resolve,reject) => {
				let value = localStorage.getItem("projects");

				if (!value) {
					let url = "/data/projects.json";

					axios.get(url)
						.then(reply => {
							localStorage.setItem("projects", JSON.stringify(reply.data));
							resolve(reply.data)
						});
				} else {
					let data = JSON.parse(value);
					resolve(data);
				}
			})
		} catch (error) {

		}
	}

	get_project(id) {
		try {
			return new Promise((resolve, reject) => {
				id = parseInt(id);
				var value = localStorage.getItem("projects");
				let data = JSON.parse(value) || [];
				// search for id
				for (const x of data) {
					if (x.id == id) {
						resolve(x);
						return;
					}
				}

				reject();

			})
		} catch (error) {

		}
	}

	query_skills() {
		try {
			return new Promise((resolve,reject) => {
				let value = localStorage.getItem("skills");

				if (!value) {
					let url = "/data/skills.json";

					axios.get(url)
						.then(reply => {
							localStorage.setItem("skills", JSON.stringify(reply.data));
							resolve(reply.data);
						});
				} else {
					let data = JSON.parse(value);
					resolve(data);
				}
			})
		} catch (error) {

		}
	}
}

// export singleton object
const api = new LocalStorageAPI();
export default api;
