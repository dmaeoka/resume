export default function ({ store }) {
	store.commit("SET_TITLE", "");
	store.commit("SET_CRUMB", "");
	store.commit("SET_POSTCAT", "");
	store.commit("SET_THUMB", "");

	// if (store.state.menuIsActive === true) {
	// 	store.commit("setMenuState", false);
	// }
}
