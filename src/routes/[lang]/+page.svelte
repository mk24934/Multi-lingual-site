<script lang="ts">
	import LL from '$i18n/i18n-svelte'
	import { onMount } from 'svelte'

	let spectators = 0

	onMount(() => {
		const interval = setInterval(updateSpectatorCount, 2_000)

		return () => clearInterval(interval)
	})

	const updateSpectatorCount = () => {
		// no real data, just a simulation ;)
		spectators = spectators * 2 + 1

		if (spectators > 100_000) {
			spectators = 0
		}
	}

	const day = new Date('2021-11-20')
</script>

<h2>
	{$LL.HI({ year: 2021 })}
</h2>

<h3>
	{$LL.summit.schedule(day)}
</h3>

<div class="spectators">
	{$LL.spectators(spectators)}
</div>

<p>
	<a href="en/route_1">Link to route 1</a>
	<a href="en/lesson_1">Link to lesson 1</a>
	<a href="en/lesson_2">Link to lesson 2</a>
	<a href="en/lesson_3">Link to lesson 3 - italian</a>
	<a href="api/greeting">Link to greeting api</a>
	<a href="en/hello">Link to hello api</a>
	<a href="en/print_types">Link to print types</a>
</p>
