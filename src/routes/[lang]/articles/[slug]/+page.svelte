<script type="ts">
    import Story from "$lib/components/Story.svelte";

    export let data: PageData

    console.log('data on page is:', data)
</script>

<!-- the value that promise wraps, puts it into story. then pass the story data into the Story component -->

<Story story={data}/>

