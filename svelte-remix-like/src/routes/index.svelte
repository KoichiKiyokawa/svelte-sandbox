<script context="module" lang="ts">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		const res = await fetch('/api/user.json', { headers: { 'content-type': 'application/json' } });
		const { users } = await res.json();
		return {
			props: { users }
		};
	};
</script>

<script lang="ts">
	import type { User } from '@prisma/client';

	export let users: User[] = [];
</script>

<a href="new">create</a>

{#each users as user}
	{JSON.stringify(user)}
{/each}
