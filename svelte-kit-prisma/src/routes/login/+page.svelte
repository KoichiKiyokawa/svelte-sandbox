<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;

	let submitting = false;
</script>

<div class="max-w-540px text-#373a3c mx-auto mt-1.5rem">
	<h1 class="text-2.5rem text-center">Sign in</h1>
	<a href="signup" class="block text-primary mt-2 mb-4 text-center">Need an account?</a>

	<form
		method="post"
		use:enhance={() => {
			submitting = true;
			return async ({ update }) => {
				await update();
				submitting = false;
			};
		}}
	>
		<p class="text-red-400">{form?.error || ''}</p>

		<div class="space-y-4">
			<input type="email" name="email" placeholder="Email" class="input" />
			<input type="password" name="password" placeholder="Password" class="input" />
			<button
				disabled={submitting}
				class="text-white bg-primary rounded-md px-6 py-3 float-right disabled:(cursor-not-allowed bg-gray-400)"
				>Sign in</button
			>
		</div>
	</form>
</div>

<style lang="postcss">
	.input {
		@apply block px-6 py-3 rounded w-full border;
	}
</style>
