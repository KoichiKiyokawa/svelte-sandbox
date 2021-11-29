<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { api } from '$lib/server/api';

	export const load: Load = async ({ page }) => {
		const user = await api(`/api/users/${page.params.id}.json`).json();
		return { props: { user } };
	};
</script>

<script lang="ts">
	import { page } from '$app/stores';
	import type { User } from '@prisma/client';

	export let user: User;
</script>

<h1>user show</h1>
<p>{user.name}</p>
<p>{user.email}</p>

<span>go to <a href="{$page.params.id}/edit">edit</a></span>
