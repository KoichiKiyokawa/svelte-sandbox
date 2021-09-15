<script lang="ts">
	import { CartRepository, TCart } from '@/models/cart';

	import Cart from '@/components/Cart.svelte';
	import { onMount } from 'svelte';

	let loading = true;
	let items: TCart[] = [];

	onMount(async () => {
		loading = true;
		try {
			items = await new CartRepository().all();
		} catch (err) {
			console.error(err);
		} finally {
			loading = false;
		}
	});
</script>

{#if loading}
	<span>Loading...</span>
{:else}
	{#each items as item}
		<Cart {...item} />
	{/each}
{/if}
