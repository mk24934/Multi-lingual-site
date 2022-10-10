import { detectLocale } from '$i18n/i18n-util'
import type { Handle, RequestEvent } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'

export const handle: Handle = async ({ event, resolve }) => {
	console.log('event is: ', JSON.stringify(event))
	// read language slug
	// const [, lang] = event.url.pathname.split('/')
	const { lang } = event.params // destructures the params object saving the lang object, taking this from [lang] in routes, using JavaScript

	if (!lang) {
		// want the function `initRequestParametersDetector`
		const locale = getPreferredLocale(event) // going to be something from the request header: en, it, or de, not using the lang parameter from event.params

		return new Response(null, {
			status: 302,
			headers: { 'Location': `/${locale}` }
		})
	}

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}

const getPreferredLocale = (event: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const headers = transformHeaders(event) // goes through and finds all acceptable languages, making a map
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers }) // checks whether we have a header that has a language that we have set up for
	// TODO: can use paramsDetector
	// if lang comes from route or if it comes from the browser, does that take precidence? 
	return detectLocale(acceptLanguageDetector) // would get back one of the valid languages we have set up
	// TODO: can use multiple dectors
}

const transformHeaders = ({ request }: RequestEvent) => {
	const headers: Record<string, string> = {}
	request.headers.forEach((value, key) => (headers[key] = value))

	return headers
}
