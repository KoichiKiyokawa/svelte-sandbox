import { createServer } from '@graphql-yoga/common';
import type { RequestHandler } from '@sveltejs/kit';

const server = createServer({
	schema: {
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
	},
	graphiql: {
		endpoint: '/api/graphql'
	}
});

export const GET: RequestHandler = async ({ request }) => {
	return server.getResponse(request, {});
};

export const POST: RequestHandler = async ({ request }) => {
	return server.getResponse(request, {});
};
