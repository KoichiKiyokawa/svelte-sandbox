<script lang="ts">
  import { operationStore, query } from "@urql/svelte"
  import {
    GetUsersWithPosts,
    GetUsersWithPostsQuery,
  } from "./generated/graphql"
  import { initClient } from "@urql/svelte"

  initClient({
    url: "https://hasura-prac.herokuapp.com/v1/graphql",
    fetchOptions: {
      headers: {
        "x-hasura-admin-secret": "hogehoge",
      },
    },
  })

  const usersQuery = operationStore<GetUsersWithPostsQuery>(GetUsersWithPosts)

  query(usersQuery)
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
