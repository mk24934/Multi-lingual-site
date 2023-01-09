import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types'
import type { Locales } from '$i18n/i18n-types'
import { replaceLocaleInUrl } from '../utils'
import { baseLocale, locales } from '$i18n/i18n-util'
import { loadLocaleAsync } from '$i18n/i18n-util.async'

export const load: LayoutLoad<{ locale: Locales }> = async ({ url, params }) => {
	// console.log('params in +layout.ts is: ', params)
	const lang = params.lang as Locales
	// const slug = params.slug
	// console.log('lang in +layout.ts is: ', lang)
	// console.log('slug in +layout.ts is: ', slug)

	// redirect to base locale if language is not present
	if (!locales.includes(lang)) {
		throw redirect(302, replaceLocaleInUrl(url.pathname, baseLocale));
	}

	await loadLocaleAsync(lang)

	return { locale: lang }
}
