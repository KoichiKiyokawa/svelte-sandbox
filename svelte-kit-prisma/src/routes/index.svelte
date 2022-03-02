<script>
	import Form from '$lib/components/Form.svelte';
</script>

<h1>index</h1>

<ul>
	<li><a href="/users">users</a></li>
	<li><a href="/todos">todos</a></li>
</ul>

<Form action="/login" method="DELETE">
	<button>logout</button>
</Form>
