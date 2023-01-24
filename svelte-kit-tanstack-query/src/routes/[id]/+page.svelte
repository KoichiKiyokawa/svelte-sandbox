<script lang="ts">
	import { page } from '$app/stores';
	import { createQuery } from '@tanstack/svelte-query';
	import { createFetchQueryOptions } from '../../lib/fetcher';

	const query = createQuery(createFetchQueryOptions('/posts/:id', { id: $page.params.id }));
</script>

{#if $query.isLoading}
	Loading...
{:else}
	<pre>{JSON.stringify($query.data, null, 2)}</pre>
{/if}
