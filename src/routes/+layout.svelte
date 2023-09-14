<script>
	import Header from '../components/Header.svelte';
 	import "../app.css";
</script>

<div class="flex flex-col h-full text-text app bg-background">
	<Header />

	<main class="flex items-center justify-center h-full">
		<slot />
	</main>

	<footer class="flex justify-center p-1 mt-auto bg-secondary">
		<p class="text-gray-600">Devilish code by yours truly!</p>
	</footer>
</div> 