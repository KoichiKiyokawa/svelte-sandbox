<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>user index</h1>
<a href="/users/new">create</a>
{#each data.users as user}
	<div>
		<a href="/users/{user.id}">{JSON.stringify(user, null, 2)}</a>
	</div>
{/each}
