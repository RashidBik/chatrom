<script>
	import { interpolateString as interpolate } from 'd3-interpolate';
	import { tweened } from 'svelte/motion';
	import Grid from './Grid.svelte';

	import { eases, types } from './eases.js';

	let current_type = 'In';
	let current_ease = 'sine';
	let duration = 3000;
	let current = eases.get(current_ease)[current_type];
	let playing = false;
	let width;

	const ease_path = tweened(current.shape, { interpolate });
	const time = tweened(0);
	const value = tweened(100);

	async function runAnimations() {
		playing = true;

		value.set(1000, {duration: 0});
		time.set(0, {duration: 0});

		await ease_path.set(current.shape);
		await Promise.all([
			time.set(670, {duration, easing: x => x}),
			value.set(500, {duration, easing: current.fn})
		]);

		playing = false;
	}

	$: current = eases.get(current_ease)[current_type];
	$: current && runAnimations();
</script>

<div bind:offsetWidth={width} class="relative flex ">
	<svg viewBox="0 0 1800 1902">
		<g class="canvas">
			<Grid x={$time} y={$value}/>
			<g class="graph">
				<path
					d={$ease_path}
					stroke="#333"
					stroke-width="4"
					fill="none"
				/>

				<path d="M0,23.647C0,22.41 27.014,0.407 28.496,0.025C29.978,-0.357 69.188,3.744 70.104,4.744C71.02,5.745 71.02,41.499 70.104,42.5C69.188,43.501 29.978,47.601 28.496,47.219C27.014,46.837 0,24.884 0,23.647Z"
					fill="#ff3e00"
					style="transform: translate(1060px, {($value - 24)}px)"
				/>

				<circle
					cx="{$time}"
					cy="{$value}"
					r="30"
					fill="#ff3e00"
				/>
			</g>
		</g>
	</svg>

	<!-- <Controls
		{eases}
		{types}
		{width}
		bind:current_ease
		bind:current_type
		on:play={runAnimations}
	/> -->
	<div class="w-[100px] h-[100px] grid absolute 
	bg-gradient-to-b from-orange-500 to-blue-500
	top-10 left-5 opacity-40"
	>
	</div>
</div>

<style>

	svg {
		width: 100%;
		margin: 0 20px 0 0;
	}

	.graph {
		transform: translate(200px,400px)
	}
	
	@media (max-width:600px) {
		.easing-vis {
			flex-direction: column;
			max-height: calc(100% - 3rem);
		}
	}

</style>
