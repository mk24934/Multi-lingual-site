<script lang="ts">
   import type { PageData } from "./$types"


    export let data: PageData;
    export let form;

    console.log('data.message is: ', data.message)
    // console.log('form.message is: ', form.message)

</script>

hi
{data.message}


<form method="POST">
    <label>
        Input box
        <input name="input" type="input">
    </label>
    <button>Log in</button>
</form>

{#if form}
    {form.message}
{/if}