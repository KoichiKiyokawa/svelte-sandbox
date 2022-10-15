<script>
	import LabelInput from './components/LabelInput/index.svelte';
</script>

<div class="card max-w-screen-md mx-auto bg-base-300 shadow-xl mt-4">
	<div class="card-body">
		<h2 class="card-title">Login</h2>

		<form class="">
			<LabelInput id="email" label="Email:" placeholder="foo@example.com" type="email" />

			<LabelInput id="password" label="Password:" type="password" class="mt-4" />
			<button class="btn btn-primary mt-8">Login</button>
		</form>
	</div>
</div>
