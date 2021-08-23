<script lang="ts">
	import DataTable from '../components/DataTable.svelte';
</script>

<DataTable
	headers={[
		{ key: 'hoge', value: 'HOGE' },
		{ key: 'link', value: 'LINK' }
	]}
	rows={[{ hoge: 1, link: 'https://example.com' }]}
>
	<svelte:fragment slot="cell" let:headerKey let:value>
		{#if headerKey === 'link'}
			<a href={value}>{value}</a>
		{:else}
			{value}
		{/if}
	</svelte:fragment>
</DataTable>
