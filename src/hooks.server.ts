import { detectLocale } from '$i18n/i18n-util'
import type { Handle, RequestEvent } from '@sveltejs/kit'
import { initAcceptLanguageHeaderDetector, initRequestParametersDetector } from 'typesafe-i18n/detectors'

export const handle: Handle = async ({ event, resolve }) => {
	console.log('event is: ', JSON.stringify(event))
	// read language slug
	// const [, lang] = event.url.pathname.split('/')
	const { lang } = event.params // destructures the params object saving the lang object, taking this from [lang] in routes, using JavaScript

	if (!lang) {
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
	console.log('headers is: ', headers)
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers }) // checks whether we have a header that has a language that we have set up for
	const paramsLanguageDetector = initRequestParametersDetector(event);
	console.log('detectLocale  is:', detectLocale(acceptLanguageDetector, paramsLanguageDetector) )
	// console.log('paramsLanguageDetector  is:', detectLocale(paramsLanguageDetector) )
	// use params lang before accept lang
	const accept_lang = detectLocale(acceptLanguageDetector, paramsLanguageDetector)
	// const params_lang = detectLocale(paramsLanguageDetector)
	// const best_lang = params_lang ?? accept_lang // uses the Nullish coalescing operator, if params_lang is nullish then use accept_lang
	return accept_lang 
}

const transformHeaders = ({ request }: RequestEvent) => {
	const headers: Record<string, string> = {}
	request.headers.forEach((value, key) => (headers[key] = value))

	return headers
}
