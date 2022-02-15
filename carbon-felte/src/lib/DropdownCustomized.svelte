<script lang="ts">
	import { Dropdown } from 'carbon-components-svelte';
	import type { DropdownItem } from 'carbon-components-svelte/types/Dropdown/Dropdown.svelte';

	export let selectedId: string | undefined = undefined;
	export let items: DropdownItem[] = [];
	export let name: string = '';

	let inputEl: HTMLInputElement;
</script>

<Dropdown
	label="未選択"
	{selectedId}
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
