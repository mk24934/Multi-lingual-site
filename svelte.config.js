// @ts-check

import preprocess from 'svelte-preprocess'
import vercel from '@sveltejs/adapter-vercel'
import { mdsvex } from "mdsvex";
import mdsvexConfig from './mdsvex.config.js'
// import sveltePreprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".svx", ".md"],

	kit: {
		adapter: vercel(),
		alias: {
			$i18n: 'src/i18n',
		},
	},

	preprocess: [
		preprocess(),
		mdsvex({
		  extensions: [".md"],
		  layout: {
			// logs: "./src/lib/components/logs/log-content-layout.svelte"
			//blog: "./src/lib/components/blog/blog-content-layout.svelte",
			//guides: "./src/lib/components/guides/guides-content-layout.svelte",
			//courses:
			//  "./src/lib/components/courses/customers-content-layout.svelte",
		  },
		  rehypePlugins: [],
		}),
	  ],
}

export default config
