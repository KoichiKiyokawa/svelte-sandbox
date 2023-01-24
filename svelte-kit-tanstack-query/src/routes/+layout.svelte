<script lang="ts">
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<QueryClientProvider client={data.queryClient}>
	<slot />
</QueryClientProvider>
