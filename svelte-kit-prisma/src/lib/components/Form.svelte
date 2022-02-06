<script lang="ts">
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	export let use: any = () => {};
	export let action: string | undefined = undefined;
	export let method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' = 'POST';
	export let ref: HTMLFormElement | null = null;
</script>

<form
	use:use
	method={method === 'GET' ? 'get' : 'post'}
	action={['PUT', 'PATCH', 'DELETE'].includes(method)
		? `${action || ''}?_method=${method}`
		: action}
	bind:this={ref}
>
	<slot />
</form>
