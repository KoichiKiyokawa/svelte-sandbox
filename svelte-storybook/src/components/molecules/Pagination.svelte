<script lang="ts">
	export let allRowSize: number;
	export let rowsPerPage: number;

	/** @bind */
	export let currentIndex: number;
	/** @bind */
	export let offset: number;
	/** @bind */
	export let currentPageLastCount: number;

	$: lastPageCount = Math.ceil(allRowSize / rowsPerPage);

	$: isFirstPage = currentIndex === 0;
</script>

<button on:click={() => (currentIndex = 0)} disabled={isFirstPage}>{'<<'}</button>
<button on:click={() => currentIndex--} disabled={isFirstPage}>{'<'}</button>
<span>{offset + 1}~{currentPageLastCount}/{lastPageCount}</span>
<button on:click={() => currentIndex++} disabled={currentIndex === lastPageCount - 1}>{'>'}</button>
<button on:click={() => (currentIndex = lastPageCount - 1)}>{'>>'}</button>
