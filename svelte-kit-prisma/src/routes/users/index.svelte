<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';
	import { api } from '$lib/server/api';

	export const load: Load = async () => {
		return { props: { users: await api('/api/users.json').json() } };
	};
</script>

<script lang="ts">
	import type { User } from '@prisma/client';

	export let users: User[] = [];
</script>

<h1>users</h1>
<ul>
	{#each users as user}
		<li>
			<a href="/users/{user.id}">name: {user.name}</a>
			<p>email: {user.email}</p>
		</li>
	{/each}
</ul>
