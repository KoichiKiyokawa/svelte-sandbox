<script lang="ts">
	import { page } from '$app/stores';
	console.log($page.error);
</script>

<h1>error</h1>
<pre><code>{JSON.stringify($page.error)}</code></pre>
