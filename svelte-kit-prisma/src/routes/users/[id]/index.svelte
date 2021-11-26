<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ page, fetch }) => {
		const user = await fetch(`/api/users/${page.params.id}.json`).then((r) => r.json());
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
