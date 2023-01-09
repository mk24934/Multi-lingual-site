<script>
	let count = 0;
	
	function handleClick() {
		count += 1;
	}
</script>

<style>
    .btn {
        background-color: #04AA6D;
        border: none;
        color: white;
        padding: 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        border-radius: 50%;
    }
</style>

<button on:click={handleClick} class="btn">
	clicks: {count}
</button>