<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';

	export let isLoggedIn = false;
</script>

<header class="container mx-auto font-bold py-4 flex justify-between">
	<h1 class="text-primary text-2xl font-title"><a href="/">Conduit</a></h1>

	<ul>
		<li class="text-black-extraLight">
			{#if isLoggedIn}
				<form
					method="post"
					action="/logout"
					use:enhance={() => {
						return async ({ result }) => {
							await applyAction(result);
							await invalidateAll();
						};
					}}
				>
					<button>Logout</button>
				</form>
			{:else if $page.routeId !== 'login'}
				Sign in
			{/if}
		</li>
	</ul>
</header>
