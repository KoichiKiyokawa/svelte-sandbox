<script lang="ts">
	import 'carbon-components-svelte/css/all.css';
	import DropdownCustomized from '$lib/DropdownCustomized.svelte';
	import { onMount } from 'svelte';
	import { createForm } from '$lib/utils/form';
	import { z } from 'zod';

	const schema = z.object({ drop: z.string().min(1) });

	const { setFields, form, validate, isValid } = createForm<z.infer<typeof schema>>({
		onSubmit: async (values) => {
			await validate();
			alert(values.drop);
		},
		validateSchema: schema
	});

	onMount(() => {
		setFields({ drop: '2' });
	});
</script>

<form use:form>
	<DropdownCustomized
		name="drop"
		items={[
			{ id: '1', text: '1' },
			{ id: '2', text: '2' },
			{ id: '3', text: '3' }
		]}
	/>
	<button style={$isValid ? '' : 'background-color: red'}>submit</button>
</form>
