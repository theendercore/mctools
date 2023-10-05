<script>
	import Header from '../components/Header.svelte';
 	import "../app.css";
</script>

<div class="flex flex-col text-text app bg-background">
	<Header />

	<main class="flex items-center h-full justify-center py-10">
		<slot />
	</main>

</div> 