import { createSchema, createYoga } from '@graphql-yoga/common';
import type { RequestHandler } from '@sveltejs/kit';

const yoga = createYoga({
	schema: createSchema({
		typeDefs: /* GraphQL */ `
			type Query {
				hello: String
			}
		`,
		resolvers: {
			Query: {
				hello: () => 'SvelteKit - GraphQL Yoga'
			}
		}
	}),
	graphqlEndpoint: '/api/graphql'
});

export const GET: RequestHandler = async ({ request }) => {
	return yoga.getResponse(request, {});
};

export const POST: RequestHandler = async ({ request }) => {
	return yoga.getResponse(request, {});
};
