<script lang="ts">
	import { TransposedTable } from '$lib/../components/TransposedTable/index.svelte';
</script>

<TransposedTable.Table>
	<TransposedTable.Row>
		<TransposedTable.Head>head1</TransposedTable.Head>
		<TransposedTable.Body>body2</TransposedTable.Body>
	</TransposedTable.Row>
	<TransposedTable.Row>
		<TransposedTable.Head>head2</TransposedTable.Head>
		<TransposedTable.Body>body3</TransposedTable.Body>
	</TransposedTable.Row>
</TransposedTable.Table>
