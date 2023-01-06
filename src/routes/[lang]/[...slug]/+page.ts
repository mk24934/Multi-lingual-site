import type { Locales } from '$i18n/i18n-types'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    console.log('in +page.ts file')
    console.log('params is:', params)
	const lang = params.lang as Locales
	const slug = params.slug
	console.log('lang in +layout.ts is: ', lang)
	console.log('slug in +layout.ts is: ', slug)

    

    return {
      post: {
        title: `Title for ${params.slug} goes here`,
        content: `Content for ${params.slug} goes here`
      }
    };
  }