<script>
    // import StoryblokClient from "storyblok-js-client";

    // const Storyblok = new StoryblokClient({
    //     accessToken: "dNAzbfRvs9AaYTBOYcehQAtt",
    // });

    // const content = Storyblok.get("cdn/stories", {
    //     version: "draft",
    //     filter_query: {
    //     component: {
    //         in: "articles",
    //     },
    //     },
    // })
    // .then((res) => {
    //     console.log(res.data.stories);
    // });

    // console.log("Storyblok content is", content)

    import { storyblokInit, apiPlugin } from "@storyblok/js";
 
    const { storyblokApi } = storyblokInit({
        accessToken: "dNAzbfRvs9AaYTBOYcehQAtt",
        use: [apiPlugin],
    });

    async function load_storyblok() {
        const { data } = await storyblokApi.get("cdn/stories/articles/welcome-to-mars", {
            version: "draft"
        })
        const story = data.story

        console.log('story is: ', story.content.text)

        return story.content.text.content[0].content[0].text
    }

    const content = load_storyblok()
</script>

Page 2

{content}