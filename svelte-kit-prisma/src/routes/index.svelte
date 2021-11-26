<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ fetch }) => {
		return { props: { users: await fetch('/api/users.json').then((r) => r.json()) } };
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
			<p>name: {user.name}</p>
			<p>email: {user.email}</p>
		</li>
	{/each}
</ul>
