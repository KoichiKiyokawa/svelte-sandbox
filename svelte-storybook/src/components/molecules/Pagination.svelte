<script lang="ts">
	import Button from '../atoms/Button.svelte';

	export let allRowSize: number;
	export let rowsPerPage: number;

	/** @bind */
	export let currentPageIndex: number;
	/** @bind */
	export let offset: number;
	/** @bind */
	export let currentPageLastCount: number;

	$: offset = currentPageIndex * rowsPerPage;
	$: currentPageLastCount = Math.min(offset + rowsPerPage, allRowSize);
	$: lastPageCount = Math.ceil(allRowSize / rowsPerPage);
	$: console.log({ allRowSize, rowsPerPage });
	$: isFirstPage = currentPageIndex === 0;
</script>

<Button on:click={() => (currentPageIndex = 0)} disabled={isFirstPage}>{'<<'}</Button>
<Button on:click={() => currentPageIndex--} disabled={isFirstPage}>{'<'}</Button>
<span>{offset + 1}~{currentPageLastCount}({currentPageIndex + 1}/{lastPageCount})</span>
<Button on:click={() => currentPageIndex++} disabled={currentPageIndex === lastPageCount - 1}
	>{'>'}</Button
>
<Button on:click={() => (currentPageIndex = lastPageCount - 1)}>{'>>'}</Button>
