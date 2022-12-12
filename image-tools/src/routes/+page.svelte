<script lang="ts">
	import Picture from '../assets/4k.jpg?w=320;768;1024;2048&format=webp;avif;jpg&picture';
	console.log(JSON.stringify(Picture, null, 2));
</script>

<picture>
	{#each Object.entries(Picture.sources) as [format, images]}
		{#each images as image}
			<source srcset={image.src} media="(max-width: {image.w}px)" type="image/{format}" />
		{/each}
	{/each}
	<img src={Picture.fallback.src} alt="" />
</picture>

<style lang="postcss">
	img {
		width: 100%;
	}
</style>
