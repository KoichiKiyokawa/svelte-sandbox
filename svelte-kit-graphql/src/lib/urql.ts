import { createClient } from '@urql/core';

export const client = createClient({
	url: '/api/graphql'
});
