<script type="ts">
    export let story

    import Heading from "$lib/components/Heading.svelte"
</script>

{#each story.content.text.content as content}
    {#if content.type === "heading"}
        <Heading content={content.content}/>
    {/if}
{/each}

<pre>
    <code>
        {JSON.stringify(story, null, 2)}
    </code>
</pre>