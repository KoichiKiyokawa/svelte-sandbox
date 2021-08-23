<script lang="ts">
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Pagination from '../components/molecules/Pagination.svelte';
</script>

<Meta
	title="Components/Molecules/Pagination"
	argTypes={{
		allRowSize: { control: 'number' },
		currentPageIndex: { control: 'number' },
		rowsPerPage: { control: 'number' }
	}}
/>

<Template let:args><Pagination {...args} /></Template>

<Story name="Main">
	<Pagination
		allRowSize={95}
		currentPageIndex={0}
		rowsPerPage={10}
		offset={0}
		currentPageLastCount={0}
	/>
</Story>
