<script lang="ts">
	import { Dropdown } from 'carbon-components-svelte';
	import type { DropdownItem } from 'carbon-components-svelte/types/Dropdown/Dropdown.svelte';

	export let selectedValue: string | undefined = undefined;
	export let items: DropdownItem[] = [];
	export let name: string = '';

	let inputEl: HTMLInputElement;
	$: selectedValue = inputEl?.value;
</script>

<Dropdown
	label="未選択"
	selectedIndex={items.findIndex((item) => item.id === selectedValue)}
	{items}
	on:select={(e) => {
		if (inputEl) {
			inputEl.value = e.detail.selectedId;
			inputEl.dispatchEvent(new Event('change'));
		}
	}}
	on:select
/>

<input {name} bind:this={inputEl} style="display: none;" />
