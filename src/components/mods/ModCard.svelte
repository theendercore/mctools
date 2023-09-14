<script  lang="ts">
	import { onMount } from "svelte";
	export let id: string;

	const endpoint = `https://api.modrinth.com/v2/project/${id}`;
	let data: ModrinthResponse;

  onMount(async function () {
    const response = await fetch(endpoint).then( e => e.json());
   	data = response;
  });


</script>

<div>
	<!-- <h3>{data.title}</h3> -->

	{#if data !== undefined}
		<a href={`https://modrinth.com/mod/${id}`} class="flex gap-4 p-5 px-6 rounded-xl bg-accent bg-opacity-30">
			<img src={data.icon_url} alt={data.title} class="w-20 h-20 rounded-xl pixel-art bg-accent bg-opacity-70">
			<h3>{data.title}</h3>
		</a>
	{/if}
</div>