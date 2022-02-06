<script lang="ts">
	import type { Tag, User } from '@prisma/client';
	import { createForm } from 'felte';
	import Form from '$lib/components/Form.svelte';
	import type { UserWithTag } from './edit';
	import { onMount } from 'svelte';

	export let user: UserWithTag;
	export let allTags: Tag[];
	export let errorMessage: string;

	const { isSubmitting, isValid, form } = createForm<User>({
		initialValues: user,
		onSubmit: () => {
			document.forms[0].submit();
		}
	});

	onMount(() => {
		if (errorMessage) alert(errorMessage);
	});
</script>

<h1>edit</h1>
<a href="./">back</a>

<Form use={form} method="PUT">
	<label>name:<input name="name" /></label>
	<label>email: <input type="email" name="email" /></label>

	<h2>tags</h2>
	{#each allTags as tag}
		<label>
			<input
				type="checkbox"
				name="tagIds"
				value={tag.id}
				checked={user.tags.some((connectedTag) => connectedTag.id === tag.id)}
			/>
			{tag.name}
		</label>
	{/each}

	<button disabled={$isSubmitting || !$isValid}>submit</button>
</Form>
