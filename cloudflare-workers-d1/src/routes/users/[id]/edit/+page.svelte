<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>user edit</h1>

<form method="post" use:enhance>
	<label>name: <input name="name" value={data.initialState.name} /></label>
	<label>email: <input type="email" name="email" value={data.initialState.email} /></label>
	<button>submit</button>
</form>
