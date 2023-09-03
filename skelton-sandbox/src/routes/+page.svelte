<script lang="ts">
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';
</script>

<Accordion>
	<AccordionItem open class="[&>button]:border-red-500">
		<!-- <svelte:fragment slot="lead">(icon)</svelte:fragment> -->
		<svelte:fragment slot="summary">
			<div class="min-w-[640px]">First step</div>
		</svelte:fragment>
		<svelte:fragment slot="content">
			<p class="text-3xl leading-3">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit adipisci magni sequi mollitia.
				Magni nobis nam tempora. Doloremque sequi quod inventore, non odio rerum optio veniam quis
				quae explicabo dicta!
			</p>
		</svelte:fragment>
	</AccordionItem>
	<AccordionItem>
		<svelte:fragment slot="lead">(icon)</svelte:fragment>
		<svelte:fragment slot="summary">(summary)</svelte:fragment>
		<svelte:fragment slot="content">(content)</svelte:fragment>
	</AccordionItem>
	<!-- ... -->
</Accordion>

<form class="max-w-lg mx-auto shadow-lg p-4">
	<label>
		email
		<input class="input !border-gray-400 p-2 rounded-lg" />
	</label>

	<label class="mt-4">
		password
		<input class="input !border-gray-400 p-2 rounded-lg" />
	</label>

	<button class="btn bg-blue-400 mt-8 rounded-lg">submit</button>
</form>
