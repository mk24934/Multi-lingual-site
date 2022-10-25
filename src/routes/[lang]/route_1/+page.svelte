<script lang="ts">
    import LL from '$i18n/i18n-svelte'
    import { loadNamespaceAsync } from '$i18n/i18n-util.async'
    import { setLocale, locale } from '$i18n/i18n-svelte'
    export let data;

    console.log('on route_1 page')
    const displaySettingsPage = async (locale) => {
        console.log('within displaySettingsPage')
        await loadNamespaceAsync(locale, 'route_1')
        console.log('setting locale')
        setLocale(locale)

        // goto settings page
    }
    console.log('locale on the page is: ', data.locale)
    displaySettingsPage(data.locale)
</script>

<p>
    {$LL.route_1.welcome()}
</p>

<p>
    Checking text
</p>