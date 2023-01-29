<script type="ts">
    export let code;
    export let lang;
    export let block_number;

    let code_map_1 = {
        "r": code.r,
        "julia": code.julia
    }
    // let code_map_2 = {
    //     "r": code_blocks.code_2.r,
    //     "julia": code_blocks.code_2.julia
    // }
    let code_block; 
    $: { code_block = code_map_1[lang] }
    // let block_number = 1
</script>

{#if block_number.includes("1")}
        <pre>
            <code>
{code_block[0]}
            </code>
        </pre>
{/if}

{#if block_number.includes("2")}
        <pre>
            <code>
{code_block[1]}
            </code>
        </pre>
{/if}