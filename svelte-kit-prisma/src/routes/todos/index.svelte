<script lang="ts">
	import Form from '$lib/components/Form.svelte';
	import type { Todo } from '@prisma/client';

	export let todos: Todo[];
</script>

<Form>
	<input name="title" />
	<button>create</button>
</Form>

{#each todos as todo}
	<label style="display: block">
		<input type="checkbox" checked={!!todo.doneAt} />
		<span>{todo.title}</span>
	</label>
{/each}
