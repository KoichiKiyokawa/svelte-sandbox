<script lang="ts">
	import { MDCDataTable } from '@material/data-table';
	import { MDCSelect } from '@material/select';
	import { onMount, tick } from 'svelte';

	export let headers: { key: string; value: string | number }[] = [];
	export let rows: (Record<string, any> & { id: string })[] = [];
	export let selectedIds: string[] | undefined = undefined;

	$: headerKeys = headers.map(({ key }) => key);
	// 行の数が変更されたときに、描画し直すことでチェックボックスを正しく表示する
	$: if (rows) {
		(async () => {
			await tick();
			dataTable?.layout();
		})();
	}

	let dataTable: MDCDataTable;
	onMount(() => {
		dataTable = new MDCDataTable(document.querySelector('.mdc-data-table'));
		new MDCSelect(document.querySelector('.mdc-select'));
	});

	function onClickCheckbox() {
		selectedIds = dataTable.getSelectedRowIds();
	}
</script>

<div class="wrapper">
	<div class="mdc-data-table">
		<div class="mdc-data-table__table-container">
			<table class="mdc-data-table__table" aria-label="Dessert calories">
				<thead>
					<tr class="mdc-data-table__header-row">
						<th
							class="mdc-data-table__header-cell"
							class:mdc-data-table__header-cell--checkbox={selectedIds != null}
							role="columnheader"
							scope="col"
						>
							{#if selectedIds}
								<div
									class="mdc-checkbox mdc-data-table__header-row-checkbox mdc-checkbox--selected"
								>
									<input
										type="checkbox"
										class="mdc-checkbox__native-control"
										on:click={onClickCheckbox}
										aria-label="Toggle all rows"
									/>
									<div class="mdc-checkbox__background">
										<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
											<path
												class="mdc-checkbox__checkmark-path"
												fill="none"
												d="M1.73,12.91 8.1,19.28 22.79,4.59"
											/>
										</svg>
										<div class="mdc-checkbox__mixedmark" />
									</div>
									<div class="mdc-checkbox__ripple" />
								</div>
							{/if}
						</th>
						{#each headers as header}
							<th class="mdc-data-table__header-cell" role="columnheader" scope="col">
								{header.value}
							</th>
						{/each}
					</tr>
				</thead>
				<tbody class="mdc-data-table__content">
					{#each rows as row}
						<tr data-row-id={row.id} class="mdc-data-table__row">
							<td
								class="mdc-data-table__cell"
								class:mdc-data-table__cell--checkbox={selectedIds != null}
							>
								{#if selectedIds}
									<div class="mdc-checkbox mdc-data-table__row-checkbox">
										<input
											type="checkbox"
											on:click={onClickCheckbox}
											class="mdc-checkbox__native-control"
											aria-labelledby="u0"
										/>
										<div class="mdc-checkbox__background">
											<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
												<path
													class="mdc-checkbox__checkmark-path"
													fill="none"
													d="M1.73,12.91 8.1,19.28 22.79,4.59"
												/>
											</svg>
											<div class="mdc-checkbox__mixedmark" />
										</div>
										<div class="mdc-checkbox__ripple" />
									</div>
								{/if}
							</td>
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

		<div class="mdc-data-table__pagination">
			<div class="mdc-data-table__pagination-trailing">
				<div class="mdc-data-table__pagination-rows-per-page">
					<div class="mdc-data-table__pagination-rows-per-page-label">Rows per page</div>

					<div
						class="mdc-select mdc-select--outlined mdc-select--no-label mdc-data-table__pagination-rows-per-page-select"
					>
						<div
							class="mdc-select__anchor"
							role="button"
							aria-haspopup="listbox"
							aria-labelledby="demo-pagination-select"
							tabindex="0"
						>
							<span class="mdc-select__selected-text-container">
								<span id="demo-pagination-select" class="mdc-select__selected-text">10</span>
							</span>
							<span class="mdc-select__dropdown-icon">
								<svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5">
									<polygon
										class="mdc-select__dropdown-icon-inactive"
										stroke="none"
										fill-rule="evenodd"
										points="7 10 12 15 17 10"
									/>
									<polygon
										class="mdc-select__dropdown-icon-active"
										stroke="none"
										fill-rule="evenodd"
										points="7 15 12 10 17 15"
									/>
								</svg>
							</span>
							<span class="mdc-notched-outline mdc-notched-outline--notched">
								<span class="mdc-notched-outline__leading" />
								<span class="mdc-notched-outline__trailing" />
							</span>
						</div>

						<div
							class="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth"
							role="listbox"
						>
							<ul class="mdc-list">
								<li
									class="mdc-list-item mdc-list-item--selected"
									aria-selected="true"
									role="option"
									data-value="10"
								>
									<span class="mdc-list-item__text">10</span>
								</li>
								<li class="mdc-list-item" role="option" data-value="25">
									<span class="mdc-list-item__text">25</span>
								</li>
								<li class="mdc-list-item" role="option" data-value="100">
									<span class="mdc-list-item__text">100</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="mdc-data-table__pagination-navigation">
					<div class="mdc-data-table__pagination-total">1‑10 of 100</div>
					<button
						class="mdc-icon-button material-icons mdc-data-table__pagination-button"
						data-first-page="true"
						disabled
					>
						<div class="mdc-button__icon">first_page</div>
					</button>
					<button
						class="mdc-icon-button material-icons mdc-data-table__pagination-button"
						data-prev-page="true"
						disabled
					>
						<div class="mdc-button__icon">chevron_left</div>
					</button>
					<button
						class="mdc-icon-button material-icons mdc-data-table__pagination-button"
						data-next-page="true"
					>
						<div class="mdc-button__icon">chevron_right</div>
					</button>
					<button
						class="mdc-icon-button material-icons mdc-data-table__pagination-button"
						data-last-page="true"
					>
						<div class="mdc-button__icon">last_page</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	@import '@material/data-table/dist/mdc.data-table.min.css';
	@import '@material/select/dist/mdc.select.min.css';
	@import '@material/list/dist/mdc.list.min.css';
	@import '@material/menu/dist/mdc.menu.min.css';
	@import '@material/menu-surface/dist/mdc.menu-surface.min.css';
	.wrapper {
		--mdc-checkbox-checked-color: salmon;
	}
</style>
