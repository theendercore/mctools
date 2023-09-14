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

<div class="flex flex-wrap items-center justify-center max-w-4xl gap-3">
	{#each mods as id}
    	<ModCard {id} />
	{/each}
</div>