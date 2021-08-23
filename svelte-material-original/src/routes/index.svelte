<script lang="ts">
	import Checkbox from '../components/Checkbox.svelte';
	import DataTable from '../components/DataTable.svelte';

	let rows = Array.from(Array(10).keys(), (i) => ({
		id: String(i),
		hoge: i,
		link: `https://example${i}.com`
	}));
</script>

<Checkbox label="hoge" />

<button on:click={() => (rows = [...rows.slice(0, -1)])}>remove</button>

<DataTable
	headers={[
		{ key: 'hoge', value: 'HOGE' },
		{ key: 'link', value: 'LINK' }
	]}
	{rows}
	selectedIds={[]}
>
	<svelte:fragment slot="cell" let:headerKey let:value>
		{#if headerKey === 'link'}
			<a href={value}>{value}</a>
		{:else}
			{value}
		{/if}
	</svelte:fragment>
</DataTable>
