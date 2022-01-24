<script lang="ts" context="module" ssr>
	import { db } from '$lib/db.server';
	import { parseRequest } from '$lib/request.server';
	import { Post } from '@prisma/client';
	import { Action, Loader } from 'svemix';

	type Props = {
		posts: Post[];
	};

	export const loader: Loader<Props> = async () => {
		const posts = await db.post.findMany();
		return { props: { posts } };
	};

	export const action: Action<Post, Post> = async ({ request }) => {
		const { title, body } = await parseRequest<Post>(request);
		const created = await db.post.create({
			data: { title, body }
		});
		return { data: created, status: 201, redirect: '.' };
	};
</script>

<script lang="ts">
	import { Form } from 'svemix';

	export let posts: Post[];
</script>

<Form>
	<label>title:<input name="title" /></label>
	<label>body:<textarea name="body" /></label>
	<button>create</button>
</Form>

<ul>
	{#each posts as post}
		<li>
			<span>title: {post.title}</span>
			<span>body: {post.body}</span>
		</li>
	{/each}
</ul>
