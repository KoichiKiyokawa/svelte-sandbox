import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'http://127.0.0.1:5173/api/graphql',
	documents: ['src/**/*.ts'],
	config: {
		useTypeImports: true
	},
	generates: {
		'./src/gql/': {
			preset: 'client',
			plugins: []
		}
	}
};

export default config;
