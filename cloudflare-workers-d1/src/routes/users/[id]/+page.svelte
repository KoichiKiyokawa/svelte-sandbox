<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<a href="/">back</a>
<h1>user show</h1>
<div>{JSON.stringify(data.user, null, 2)}</div>
