<script lang="ts">
	export let checked = false;
	export let label: string | undefined = undefined;
</script>

<div>
	<div class="mdc-form-field">
		<div class="mdc-checkbox">
			<input
				type="checkbox"
				bind:checked
				on:click
				class="mdc-checkbox__native-control"
				id="checkbox-1"
			/>
			<div class="mdc-checkbox__background">
				<svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
					<path
						class="mdc-checkbox__checkmark-path"
						fill="none"
						d="M1.73,12.91 8.1,19.28 22.79,4.59"
					/>
				</svg>
				<div class="mdc-checkbox__mixedmark" />
			</div>
			<div class="mdc-checkbox__ripple" />
		</div>
		{#if label}
			<label for="checkbox-1">{label}</label>
		{/if}
	</div>
</div>

<style>
	@import '@material/checkbox/dist/mdc.checkbox.min.css';
	@import '@material/form-field/dist/mdc.form-field.min.css';
</style>
