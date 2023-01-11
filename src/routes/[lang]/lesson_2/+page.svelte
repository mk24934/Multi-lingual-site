<script>
    import { storyblokInit, apiPlugin } from "@storyblok/js";
    import Story from "$lib/components/Story.svelte";
 
    const { storyblokApi } = storyblokInit({
        accessToken: "dNAzbfRvs9AaYTBOYcehQAtt",
        use: [apiPlugin],
    });

    async function load_storyblok() {
        const { data } = await storyblokApi.get("cdn/stories/articles/welcome-to-mars", {
            version: "draft"
        })
        const story = data.story

        console.log('story is: ', story)

        return story
    }

    const promise = load_storyblok()
    // a better way to do this is a page.server.ts to get the data then pass it into the component
</script>

Page 2

<!-- the value that promise wraps, puts it into story. then pass the story data into the Story component -->
{#await promise then story }
    <Story {story}/>
{/await}
