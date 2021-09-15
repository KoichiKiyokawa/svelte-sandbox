<script lang="ts">
	import DataTable, { Head, Row, Cell, Body, DataTableComponentDev } from '@smui/data-table';
	import Checkbox from '@smui/checkbox';
	import { tick } from 'svelte';

	type TRow = $$Generic<{ id: string | number }>;
	type CellValue = string | number | boolean;

	export let headers: { key: keyof TRow; value: CellValue }[];
	export let rows: TRow[] = [];

	// export let showCheckbox = true;
	/** @bind */
	export let selectedRowIds: string[] = [];

	let dataTable: DataTableComponentDev;
	$: if (rows) {
		(async () => {
			await tick();
			dataTable?.layout();
		})();
	}
</script>

<DataTable bind:this={dataTable} style="width: 100%;">
	<Head>
		<Row>
			<!-- {#if showCheckbox} -->
			<Cell checkbox><Checkbox /></Cell>
			<!-- {/if} -->
			{#each headers as header (header.key)}
				<Cell>{header.value}</Cell>
			{/each}
		</Row>
	</Head>

	<Body>
		{#each rows as row (row.id)}
			<Row>
				<!-- {#if showCheckbox} -->
				<Cell checkbox><Checkbox bind:group={selectedRowIds} value={row.id} /></Cell>
				<!-- {/if} -->
				{#each headers as header (header.key)}
					<Cell>{row[header.key]}</Cell>
				{/each}
			</Row>
		{/each}
	</Body>
</DataTable>
