<script lang="ts" context="module">
	// index.tsだと、template部分でTranposedTable.Tableでアクセスしたときにバグる。
	import Table from './Table.svelte';
	import Row from './Row.svelte';
	import Head from './Head.svelte';
	import Body from './Body.svelte';

	export const TransposedTable = { Table, Row, Head, Body };
</script>
