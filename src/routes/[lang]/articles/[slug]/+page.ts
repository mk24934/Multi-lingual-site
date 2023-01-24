import { storyblokInit, apiPlugin } from "@storyblok/js";
// gets called before page renders, returns the data to the page

/** @type {import('./$types').PageLoad} */
export const load: PageLoad = async ({ params }) => {
    const lang = params.lang
    const slug = params.slug

    const { storyblokApi } = storyblokInit({
        accessToken: "",
        use: [apiPlugin],
    });

    const this_route = "cdn/stories/articles/" + slug
    const { data } = await storyblokApi.get(this_route, {
        version: "draft"
    })
    const story = data.story

    console.log('story is: ', story)

    return story
}