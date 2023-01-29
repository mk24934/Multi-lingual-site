<script type="ts">
    export let story
    export let code

    import {  tick } from 'svelte';
    import Heading from "$lib/components/Heading.svelte"
    import Paragraph from "$lib/components/Paragraph.svelte"
    import CodeBlock from "$lib/components/CodeBlock.svelte"

    // let content_dict = Object.entries(story.content.text.content)
    let lang="r"
</script>

{#each story.content.text.content as content}
    {#if content.type === "heading"}
        <Heading content={content.content} />
    {/if}

    {#if content.type === "paragraph"}
        <Paragraph content={content.content} />
    {/if}

    {#if content.type === "blok"}
        <!-- #if doesn't allow body[0], so need to add #each to get inside contents -->
        {#each content.attrs.body as body} 
            {#if body.component.includes("code-block")}
                <br/>
                <select bind:value={lang}>
                    <option value="r">r</option>
                    <option value="julia">julia</option>
                </select>
                <CodeBlock code={code} lang={lang} block_number={body.component}/>
            {/if}
            {#if body.component === "Table"}
                <b>Table</b>
            {/if}
            {#if body.component === "Quiz"}
                <b>Quiz</b>
            {/if}
        {/each}
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