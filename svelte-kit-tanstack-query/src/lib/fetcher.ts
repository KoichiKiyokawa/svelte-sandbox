import type { FetchQueryOptions } from '@tanstack/svelte-query';
import { ofetch } from 'ofetch';
import type { Post } from '../features/post/type';

type EmptyObject = Record<string, never>;

type PathToParams = {
	'/posts': {
		request: EmptyObject;
		response: Post[];
	};
	'/posts/:id': {
		request: { id: string };
		response: Post;
	};
};

const baseURL = 'https://jsonplaceholder.typicode.com';

const resolvePathParam = (path: string, params: Record<string, string>): string => {
	return path.replace(/:(\w+)/g, (_, key) => params[key]);
};

export function createFetchQueryOptions<T extends keyof PathToParams>(
	path: T,
	params: PathToParams[T]['request']
): FetchQueryOptions<PathToParams[T]['response']> {
	return {
		queryKey: [path, params],
		queryFn: () =>
			ofetch<PathToParams[T]['response']>(resolvePathParam(path, params), {
				baseURL,
				query: 'query' in params ? params.query : undefined
			})
	};
}
