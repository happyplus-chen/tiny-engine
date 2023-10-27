import { api } from './components/render/RenderMain'
import uviewPlus from 'uview-plus'

const camelizeRE = /-(\w)/g;
const camelize = (str) => {
	return str.replace(camelizeRE, (_, c) => (c ? c.toUpperCase() : ""));
};


const uviewui = import.meta.glob(
	"../uni_modules/uview-plus/components/*/*.vue",
	{ eager: true }
);



Object.keys(uviewui).forEach((path) => {
	if (!path.includes("u--")) {
		const index = path.lastIndexOf("/") + 1;
		const name = path.substr(index).replace(".vue", "");
		console.log(camelize(name));
		if (name.startsWith("u")) {
			window.TinyLowcodeComponent[camelize(name)] = uviewui[path].default;
		}
	}
});




const dispatch = (name, data) => {
	window.parent.document.dispatchEvent(new CustomEvent(name, data))
}

new ResizeObserver(() => {
	dispatch('canvasResize')
}).observe(document.body)



import {
	createSSRApp
} from "vue";
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
	app.use(uviewPlus)
	dispatch('canvasReady', {
		detail: {
			...api, getApp() {
				return App
			}
		}
	})
	return {
		app,
	};
}
