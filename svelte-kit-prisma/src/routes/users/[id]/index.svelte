<script lang="ts">
	import { page } from '$app/stores';
	import type { User } from '@prisma/client';

	export let user: User;
</script>

<h1>user show</h1>
<p>{user.name}</p>
<p>{user.email}</p>

<p>
	<a href="/users">back to index page</a>
</p>

<span>go to <a href="{$page.params.id}/edit">edit</a></span>
