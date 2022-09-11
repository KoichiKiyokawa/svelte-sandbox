<script lang="ts">
	import { enhance } from '$app/forms';
	import type { Article, Tag, User } from '@prisma/client';
	import { LocationHeartFilled } from 'carbon-icons-svelte';
	import dayjs from 'dayjs';

	type ArticleWithAuthorAndTag = Article & {
		author: Pick<User, 'id' | 'name'>;
		tags: Tag[];
		likeCount: number;
		hasLiked: boolean;
	};

	export let data: ArticleWithAuthorAndTag;

	const MAX_BODY_SHOW_LENGTH = 15;
</script>

<div>
	<div class="flex justify-between">
		<div>
			<p class="text-primary">{data.author.name}</p>
			<p class="text-[#BBBBBB] text-sm">{dayjs(data.createdAt).format('YYYY-MM-DD')}</p>
		</div>

		<form method="POST" use:enhance>
			<input type="hidden" name="type" value="like" />
			<input type="hidden" name="redirectTo" value="/" />
			<input type="hidden" name="articleSlug" value={data.slug} />

			<button
				class="flex items-center space-x-2 px-2 py-1 rounded border border-primary {data.hasLiked
					? 'bg-primary text-white'
					: 'bg-white text-primary'}"
			>
				<LocationHeartFilled size={24} />
				<span class="text-sm">{data.likeCount}</span>
			</button>
		</form>
	</div>

	<a href="/articles/{data.slug}">
		<h2 class="font-bold text-[1.5rem]">{data.title}</h2>
		<p class="text-[#999999]">{data.body.slice(0, MAX_BODY_SHOW_LENGTH)}</p>

		<span class="text-[#BBBBBB]">Read more...</span>
	</a>
</div>
