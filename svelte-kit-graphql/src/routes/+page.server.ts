import { client } from 'src/lib/urql';
import type { PageServerLoad } from './$types';
import { graphql } from '../gql/gql';

const helloDocument = graphql(/* GraphQL */ `
	query Hello {
		hello
	}
`);

export const load: PageServerLoad = async () => {
	return client.query(helloDocument, {}).toPromise();
};
