module.exports = {
  schema: [
    {
      "https://hasura-prac.herokuapp.com/v1/graphql": {
        headers: {
          "x-hasura-admin-secret": process.env.AUTH_TOKEN,
        },
      },
    },
  ],
  documents: ["./**/*.gql"],
  overwrite: true,
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-document-nodes",
      ],
      config: {
        gqlImport: "@urql/svelte#gql",
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
}
