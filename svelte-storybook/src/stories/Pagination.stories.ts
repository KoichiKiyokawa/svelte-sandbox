import Pagination from '../components/molecules/Pagination.svelte';

export default {
	title: 'Components/Molecules/Pagination',
	component: Pagination
};

export const Main = () => ({
	Component: Pagination,
	props: {
		currentIndex: 0,
		offset: null,
		currentPageLastCount: null
	}
});
