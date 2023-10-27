// import { api } from './components/render/RenderMain'
const api = {}



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
