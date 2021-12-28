<script lang="ts">
	import Form from './lib/components/Form.svelte';
</script>

<Form method="POST" action="/api/user.json">
	<label>
		name
		<input name="name" />
	</label>

	<label>
		email
		<input type="email" name="email" />
	</label>

	<button type="submit">submit</button>
</Form>
