<script lang="ts">
   import type { PageData } from "./$types"


    export let data: PageData;

    console.log('data.message is: ', data.message)

</script>

hi
{data.message}


