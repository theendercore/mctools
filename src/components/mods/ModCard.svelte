<script lang="ts">
    // import {version} from "$app/environment";
    import type {ModData} from "../../lib/ts/types"
    import {onMount} from "svelte";
    import {fetchModData, getCachedMod} from "$lib/ts/cache";
    import {sortArray} from "$lib/ts/Utils";

    export let id: string;
    const href = `https://modrinth.com/mod/${id}`;
    let modData: ModData | undefined = getCachedMod(id);
    onMount(async function () {
        (modData === undefined) ? modData = await fetchModData(id) : ""
    });


</script>

<div>
    {#if modData !== undefined}
        <div class="flex gap-4 p-4 rounded-2xl bg-accent bg-opacity-20 hover:bg-primary hover:bg-opacity-40 w-[32rem] h-full">
            <a {href}><img src={modData.icon_url} alt={`${modData.title} icon`}
                           class="w-20 h-20 rounded-2xl pixel-art bg-accent bg-opacity-70"></a>
            <div>
				<span class="flex items-center gap-1">
					<a {href}><h3 class="text-lg font-bold">{modData.title}</h3></a>
					by
                    {#if modData.owner !== ""}
					  <a href={`https://modrinth.com/user/${modData.owner}`} class="underline">{modData.owner}</a>
          {/if}
				</span>
                <span class="flex text-sm -wrap w-96">{modData.description}
                    <button on:click="{()=>{
                        //console.log(modData.versions)
                        sortArray(modData.versions)
                    }}">test</button>

                </span>
                <span>
					{#if modData.versions.length > 1}
						{modData.versions[0]} - {modData.versions[modData.versions.length - 1]}
					{:else}
                        {modData.versions[0]}
					{/if}
				</span>
            </div>
        </div>
    {/if}
</div>
