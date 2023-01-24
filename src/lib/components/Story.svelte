<script type="ts">
    export let story

    import Heading from "$lib/components/Heading.svelte"
    import Paragraph from "$lib/components/Paragraph.svelte"

    // let content_dict = Object.entries(story.content.text.content)

</script>


{#each story.content.text.content as content}
    {#if content.type === "heading"}
        <Heading content={content.content} />
    {/if}

    {#if content.type === "paragraph"}
        <Paragraph content={content.content} />
    {/if}
{/each}


------------------------------------------------------------------------------------------------


{#each story.content.text.content as content}
    {#if content.type === "paragraph"}
        {#if content.content}
            <p>
                {JSON.stringify(content.content, null, 2)}
            </p>
        {/if}
    {/if}
{/each}


<pre>
    <code>
        {JSON.stringify(story, null, 2)}
    </code>
</pre>