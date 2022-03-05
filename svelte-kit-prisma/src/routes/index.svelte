<script lang="ts">
	import { session } from '$app/stores';
	import ArticleCard from '$lib/components/domain/articles/ArticleCard.svelte';
	import type { ArticleWithAuthorAndTag } from './index';

	export let articles: ArticleWithAuthorAndTag[];
</script>

<!-- Hero -->
<div class="bg-primary text-center text-white py-8">
	<h1 class="text-56px font-extrabold">conduit</h1>
	<p>A place to share your knowledge.</p>
</div>

<!-- Tab -->
<div class="container mx-auto">
	<ul class="flex border-b border-gray-100">
		<li class="text-primary border-b border-primary">
			<a href="/" class="block py-2">Global Feed</a>
		</li>
	</ul>

	<!-- Article -->
	{#each articles as article}
		<div class="py-6 border-b border-gray-300 last:border-b-0">
			<ArticleCard data={article} />
		</div>
	{/each}
</div>
