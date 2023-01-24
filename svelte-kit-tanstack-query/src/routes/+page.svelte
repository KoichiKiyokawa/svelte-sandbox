<script lang="ts">
	import { createQuery } from '@tanstack/svelte-query';
	import { createFetchQueryOptions } from '../lib/fetcher';

	const query = createQuery(createFetchQueryOptions('/posts', {}));
</script>

{#if $query.isLoading}
	Loading...
{:else}
	{#each $query.data || [] as post}
		<div>
			<a href={post.id.toString()}>{post.title}</a>
			<p>{post.body}</p>
		</div>
	{/each}
{/if}
