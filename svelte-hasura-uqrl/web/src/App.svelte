<script lang="ts">
  import { getContextClient, initContextClient, queryStore } from "@urql/svelte"
  import { GetUsersWithPostsDocument } from "./generated/graphql"

  initContextClient({
    url: "https://hasura-prac.herokuapp.com/v1/graphql",
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": "hogehoge",
      },
    },
  })

  const usersQuery = queryStore({
    client: getContextClient(),
    query: GetUsersWithPostsDocument,
  })
</script>

{#if $usersQuery.fetching}
  <span>Loading...</span>
{:else}
  {#each $usersQuery.data?.users ?? [] as user}
    <dl>
      <dt>name</dt>
      <dd>{user.name}</dd>
    </dl>
    <dl>
      <dt>email</dt>
      <dd>{user.email}</dd>
    </dl>
    <dl>
      <dt>birthday</dt>
      <dd>{user.birthday}</dd>
    </dl>
    <dl>
      <dt>posts</dt>
      <dd>{user.posts.map((post) => `${post.title}`)}</dd>
    </dl>
  {/each}
{/if}
