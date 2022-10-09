<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import 'virtual:windi.css';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
	$: isLoggedIn = data.currentUser !== null;
</script>

<Header {isLoggedIn} />
<main>
	<slot />
</main>

<style lang="postcss">
	@import url('https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap');
</style>
