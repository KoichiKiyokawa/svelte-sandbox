<script lang="ts">
	import type { User } from '@prisma/client';
	import { createForm } from 'felte';

	export let user: User;

	const { isSubmitting, isValid, form } = createForm<User>({
		initialValues: user,
		onSubmit: () => {
			document.forms[0].submit();
		}
	});
</script>

<h1>edit</h1>
<a href="./">back</a>

<form use:form method="post" action="?_method=PUT">
	<label>name:<input name="name" /></label>
	<label>email: <input type="email" name="email" /></label>

	<button disabled={$isSubmitting || !$isValid}>submit</button>
</form>
