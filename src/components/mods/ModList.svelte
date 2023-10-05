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
        "datamancer",
        "shulkerboxtooltip",
        "simple-shulker-preview",
        "mixin-conflict-helper",
        "auto-third-person",
    ]

    // Use this to fetch all when adding more
    // https://api.modrinth.com/v2/projects?ids=[%22trowel%22]
</script>

<div class="flex flex-wrap justify-center max-w-6xl gap-6">
    {#each mods as id}
        <ModCard {id}/>
    {/each}
</div>
