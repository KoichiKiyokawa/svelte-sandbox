<script lang="ts">
	import DataTable, { Head, Row, Cell, Body, DataTableComponentDev } from '@smui/data-table';
	import Checkbox from '@smui/checkbox';
	import Button from '@smui/button';
	import { onMount } from 'svelte';

	const headers: { key: keyof User; value: string }[] = [
		{ key: 'name', value: 'Name' },
		{ key: 'age', value: 'Age' }
	];

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

	// let dataTable: DataTableComponentDev;
	// $: if (users) {
	// 	(async () => {
	// 		await tick();
	// 		dataTable?.layout();
	// 	})();
	// }
</script>

<Button on:click={addUser}>add user</Button>
<Button on:click={deleteSelectedUsers}>delete selected users</Button>

<DataTable style="width: 100%;">
	<Head>
		<Row>
			<Cell checkbox={true}><Checkbox /></Cell>
			<Cell>Name</Cell>
			<Cell>Age</Cell>
		</Row>
	</Head>

	<Body>
		{#each users as user (user.id)}
			<Row>
				<Cell checkbox={true}><Checkbox /></Cell>
				<Cell>{user.name}</Cell>
				<Cell>{user.age}</Cell>
			</Row>
		{/each}
	</Body>
</DataTable>
