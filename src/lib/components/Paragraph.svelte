<script type="ts">
    export let content;
</script>

{#if content}
    {#each content as text}
        {#if text.type === "text"}
            {#if JSON.stringify(text.marks)}
                {#each text.marks as mark}
                    {#if JSON.stringify(mark).includes("code")}
                        <code>{text.text}</code>
                    {/if}
                    {#if JSON.stringify(mark).includes("bold")}
                        <b>{text.text}</b>
                    {/if}
                    {#if JSON.stringify(mark).includes("italic")}
                        <i>{text.text}</i>
                    {/if}
                {/each}
            {:else}
                {text.text}
            {/if}
        {/if}
        {#if text.type === "image"}
            <img src={text.attrs.src} alt={text.attrs.src} >
            <br>
        {/if}

    {/each}
{/if}