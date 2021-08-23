<script lang="ts">
	import { MDCDataTable } from '@material/data-table';
	import { onMount } from 'svelte';

	export let headers: { key: string; value: string | number }[] = [];
	export let rows: Record<string, any>[] = [];

	$: headerKeys = headers.map(({ key }) => key);

	let dataTable;
	onMount(() => {
		new MDCDataTable(document.querySelector('.mdc-data-table'));
	});
</script>

<div class="mdc-data-table">
	<div class="mdc-data-table__table-container">
		<table class="mdc-data-table__table" aria-label="Dessert calories">
			<thead>
				<tr class="mdc-data-table__header-row">
					{#each headers as header}
						<th class="mdc-data-table__header-cell" role="columnheader" scope="col">
							{header.value}
						</th>
					{/each}
				</tr>
			</thead>
			<tbody class="mdc-data-table__content">
				{#each rows as row}
					<tr class="mdc-data-table__row">
						{#each headerKeys as headerKey}
							<td class="mdc-data-table__cell">
								<slot name="cell" {headerKey} value={row[headerKey]}>
									{row[headerKey]}
								</slot>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>

<style>
	@import '@material/data-table/dist/mdc.data-table.min.css';
</style>
