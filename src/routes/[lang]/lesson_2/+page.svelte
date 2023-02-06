<script>
    import { storyblokInit, apiPlugin } from "@storyblok/js";
    import Story from "$lib/components/Story.svelte";

    /** @type {import('./$types').PageData} */
    export let data;
    const language = data.locale
 
    const { storyblokApi } = storyblokInit({
        accessToken: "dNAzbfRvs9AaYTBOYcehQAtt",
        use: [apiPlugin],
    });

    console.log('data on page_2 is: ', data)

    async function load_storyblok(language) {
        // "cdn/stories/articles/welcome-to-mars"
        // "cdn/stories/articles/benvenuti-su-marte" // with language: "it"
        const { data } = await storyblokApi.get("cdn/stories/articles/welcome-to-mars", {
            // this data is the named object from storyblokApi, not to be confused with the data object passed into Svelte pages
            version: "draft",
            language: language
        })
        const story = data.story

        console.log('story is: ', story)

        return story
    }

    const promise = load_storyblok(language)
    // a better way to do this is a page.server.ts to get the data then pass it into the component

</script>

<!-- the value that promise wraps, puts it into story. then pass the story data into the Story component -->
{#await promise then story }
    <Story {story} code={data.code}/>
    <!-- {JSON.stringify(story)} -->
{/await}
