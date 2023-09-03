<script>
	import Button from '$lib/components/button/Button.svelte';
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<Button on:click={() => (window.location.href = '/foo')}>button</Button>
<Button as="a" href="/foo">link</Button>
