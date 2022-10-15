<script lang="ts">
	export let id: string;
	export let label: string;
	export let type: string;
	export let placeholder = '';
	let klass = '';
	export { klass as class };
</script>

<div class="form-control w-full {klass}">
	<label for={id} class="label">
		<span class="label-text">{label}</span>
	</label>
	<input {id} {placeholder} {type} class="input input-bordered w-full" />
</div>
