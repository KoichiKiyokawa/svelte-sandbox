
  import * as svemixHandlers from "svemix/server";

  
	import { Action, Loader } from 'svemix';
	import { Post } from '@prisma/client';
	import { db } from '$lib/db.server';

	type Props = {
		posts: Post[];
	};

	export const loader: Loader<Props> = async () => {
		const posts = await db.post.findMany();
		return { props: { posts } };
	};

	export const action: Action<Post, Post> = async ({ body }) => {
		const created = await db.post.create({
			data: { title: body.get('title'), body: body.get('body') }
		});
		return { data: created, status: 201, redirect: '.' };
	};


  
  export const get = svemixHandlers.getHandler({
    hasMeta: false,
    loader: loader,
    metadata: () => ({})
  });
  

  
  export const post = svemixHandlers.postHandler({
    action: action,
  });  
  
