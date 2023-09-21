<script lang="ts">
	import ModCard from "./ModCard.svelte";

	let mods = [
		"nbt-void",
		"nbt-autocomplete", 
		"world-preview",
		"simple-item-editor",
		"litemoretica", 
		"nbttooltips", 
		"bettersmithingtable", 
		"autocomplete",
	]
</script>

<div class="flex flex-wrap justify-center max-w-6xl gap-6">
	{#each mods as id}
    	<ModCard {id} />
	{/each}
</div>
