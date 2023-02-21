import { detectLocale, i18n, isLocale } from '$i18n/i18n-util'
import { loadAllLocales } from '$i18n/i18n-util.sync'
import type { Handle, RequestEvent } from '@sveltejs/kit'
// import { initAcceptLanguageHeaderDetector } from 'typesafe-i18n/detectors'
import { initAcceptLanguageHeaderDetector, initRequestParametersDetector } from 'typesafe-i18n/detectors'

loadAllLocales()
const L = i18n()

export const handle: Handle = async ({ event, resolve }) => {
	console.log('event is: ', JSON.stringify(event))
	// read language slug
	// const [, lang] = event.url.pathname.split('/')
	const { lang } = event.params // destructures the params object saving the lang object, taking this from [lang] in routes, using JavaScript

	console.log('lang is: ', lang)

	if (!lang) {
		const locale = getPreferredLocale(event) // going to be something from the request header: en, it, or de, not using the lang parameter from event.params

		return new Response(null, {
			status: 302,
			headers: { 'Location': `/${locale}` }
		})
	}

	// if slug is not a locale, use base locale (e.g. api endpoints)
	const locale = isLocale(lang) ? (lang as Locales) : getPreferredLocale(event)
	const LL = L[locale]

	// bind locale and translation functions to current request
	event.locals.locale = locale
	event.locals.LL = LL

	console.info(LL.log({ fileName: 'hooks.server.ts' })) 

	// replace html lang attribute with correct language
	return resolve(event, { transformPageChunk: ({ html }) => html.replace('%lang%', lang) })
}

const getPreferredLocale = ({ request }: RequestEvent) => {
	// detect the preferred language the user has configured in his browser
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
	const acceptLanguageDetector = initAcceptLanguageHeaderDetector(request)

	return detectLocale(acceptLanguageDetector)
}

// const getPreferredLocale = (event: RequestEvent) => {
// 	// detect the preferred language the user has configured in his browser
// 	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language
// 	const headers = transformHeaders(event) // goes through and finds all acceptable languages, making a map
// 	console.log('headers is: ', headers)
// 	const acceptLanguageDetector = initAcceptLanguageHeaderDetector({ headers }) // checks whether we have a header that has a language that we have set up for
// 	const paramsLanguageDetector = initRequestParametersDetector(event);
// 	console.log('detectLocale  is:', detectLocale(acceptLanguageDetector, paramsLanguageDetector) )
// 	// console.log('paramsLanguageDetector  is:', detectLocale(paramsLanguageDetector) )
// 	// use params lang before accept lang
// 	const accept_lang = detectLocale(acceptLanguageDetector, paramsLanguageDetector)
// 	// const params_lang = detectLocale(paramsLanguageDetector)
// 	// const best_lang = params_lang ?? accept_lang // uses the Nullish coalescing operator, if params_lang is nullish then use accept_lang
// 	return accept_lang 
// }

// const transformHeaders = ({ request }: RequestEvent) => {
// 	const headers: Record<string, string> = {}
// 	request.headers.forEach((value, key) => (headers[key] = value))

// 	return headers
// }
