<script lang="ts">
	import Button from '@smui/button';
	import { onMount } from 'svelte';
	import DataTableWrapped from '../components/DataTableWrapped.svelte';

	type User = { id: string; name: string; age: number };

	let users: User[] = [];
	let selectedRowIds: string[] = [];

	onMount(() => {
		users = Array.from(Array(10), (_, i) => ({
			id: `id#${i}`,
			name: `user${i}`,
			age: (new Date().getTime() % 100) + 1
		}));
	});

	function addUser() {
		users = [
			...users,
			{
				id: new Date().getTime().toString(),
				name: 'user',
				age: (new Date().getTime() % 100) + 1
			}
		];
	}

	function deleteSelectedUsers() {
		users = users.filter((user) => !selectedRowIds.includes(user.id));
	}
</script>

<Button on:click={addUser}>add user</Button>

<Button on:click={deleteSelectedUsers}>delete selected users</Button>

<div style="width: 100%;">
	<DataTableWrapped
		headers={[
			{ key: 'name', value: 'Name' },
			{ key: 'age', value: 'Age' }
		]}
		rows={users}
		bind:selectedRowIds
	/>
</div>
