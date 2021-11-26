<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch }) => {
		const user = await fetch(`/api/users/${page.params.id}.json`).then((r) => r.json());
		if (!user.id) return { error: 'User not found' };
		return { props: { user } };
	};
</script>

<script lang="ts">
	import type { User } from '@prisma/client';
	import { createForm } from 'felte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	import ky from 'ky';

	export let user: User;

	const { isSubmitting, isValid, form, setFields } = createForm({
		onSubmit: async (values) => {
			await ky.put(`/api/users/${$page.params.id}.json`, { json: values });
			goto('./');
		}
	});

	onMount(() => {
		setFields(user);
	});
</script>

<h1>edit</h1>
<a href="./">back</a>

<form use:form>
	<label>name:<input name="name" /></label>
	<label>email: <input type="email" name="email" /></label>

	<button disabled={$isSubmitting || !$isValid}>submit</button>
</form>
