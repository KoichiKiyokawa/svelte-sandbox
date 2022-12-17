<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<h1>user create</h1>
<a href="/">back</a>

<form method="post" use:enhance>
	<label>name: <input name="name" /></label>
	<label>email: <input type="email" name="email" /></label>
	<button>submit</button>
</form>
