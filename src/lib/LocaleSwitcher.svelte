<script lang="ts">
	import { browser } from '$app/environment'
	import { invalidateAll } from '$app/navigation'
	import { page } from '$app/stores'
	import { setLocale, locale } from '$i18n/i18n-svelte'
	import type { Locales } from '$i18n/i18n-types'
	import { locales } from '$i18n/i18n-util'
	import { loadLocaleAsync } from '$i18n/i18n-util.async'
	import { replaceLocaleInUrl } from '../utils'

	const switchLocale = async (newLocale: Locales, updateHistoryState = true) => {
		if (!newLocale || $locale === newLocale) return

		// load new dictionary from server
		await loadLocaleAsync(newLocale)

		// load namespace for current subroute
		console.log('newLocale is: ', newLocale)
		console.log('page.data is: ', $page)
		// console.log('split $page.routeID is: ', $page.routeId.split('/')[1])
		// await loadNamespaceAsync(newLocale, $page.routeId.split('/')[1])

		// select locale
		setLocale(newLocale)

		// update `lang` attribute
		document.querySelector('html').setAttribute('lang', newLocale)

		if (updateHistoryState) {
			// update url to reflect locale changes
			history.pushState({ locale: newLocale }, '', replaceLocaleInUrl($page.url, newLocale))
		}
		// run the `load` function again
		invalidateAll()
	}

	// update locale when navigating via browser back/forward buttons
	const handlePopStateEvent = async ({ state }: PopStateEvent) => switchLocale(state.locale, false)

	// update locale when page store changes
	$: if (browser) {
		const lang = $page.params.lang as Locales
		switchLocale(lang, false)
		history.replaceState({ ...history.state, locale: lang }, '', replaceLocaleInUrl($page.url, lang))
	}
</script>

<svelte:window on:popstate={handlePopStateEvent} />

<ul>
	{#each locales as l}
		<li>
			<a class:active={l === $locale} href={`${replaceLocaleInUrl($page.url, l)}`}>
				{l}
			</a>
		</li>
	{/each}
</ul>
