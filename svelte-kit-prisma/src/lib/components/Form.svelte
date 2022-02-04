<script lang="ts">
	import type {} from 'svelte';
	export let use: any = undefined;
	export let action: string | undefined = undefined;
	export let method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'POST';
	export let ref: HTMLFormElement | undefined = undefined;
</script>

<form
	use:use
	method={method === 'GET' ? 'GET' : 'POST'}
	action={(action || '') + ['PUT', 'PATCH', 'DELETE'].includes(method) ? `?_method=${method}` : ''}
	bind:this={ref}
>
	<slot />
</form>
