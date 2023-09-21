<script lang="ts">
	import { DataPackFormats, ResourcePackFormats } from "$lib/ts/constants";

	let type: PackType = "dp"
	let multi: boolean = false

	let pack: PackMcMeta = {
		pack: {
			pack_format: -1,
			description: ""
		}
	}
	
</script>
<svelte:head>
	<title>Mod List</title>
	<meta name="gen" content="Generators for things" />
</svelte:head>

<div class="flex flex-col gap-6">
	<div>    
	<form class="flex flex-col gap-3 p-6 text-gray-700 bg-white rounded-xl" >
			<span> Type : 
				<button type="button" on:click={()=>{ type = (type === "dp") ? "rp" : "dp" }} 
					class="p-1 px-4 bg-gray-300 rounded-xl">
					{type === "dp" ? "Data Pack" : "Resource Pack"}
				</button>
			</span>

			<label>
				Description:
				<input 
				type="text"
				name="description"
				id="description" 
				class="p-1 bg-gray-200 rounded-lg"
				on:change={(e)=> 
					pack.pack.description = e.currentTarget.value
					}
				/>
			</label>

			
			<button type="button" on:click={()=>{ multi = !multi }} 
				class="p-1 px-4 bg-gray-300 rounded-xl"
				>
				{multi ? "Multi Version":"Single Version"}
			</button>


			{#if !multi}
				<label>
					Version:
					<select name="pack_format" id="pack_format" 
					class="p-1 px-4 bg-gray-300 rounded-xl"
					on:change={(e)=> { pack.pack.pack_format = Number(e.currentTarget.value)}}
					>
						{#each (type === "dp" ? DataPackFormats : ResourcePackFormats) as vers}
							<option value={vers.format}>{vers.version}</option>
						{/each}
					</select>
				</label>
			{:else}
				<label>
					Min Version (inclusive):
					<select name="min" id="min" 
					class="p-1 px-4 bg-gray-300 rounded-xl"
					on:change={(e)=> { 
						pack.pack.pack_format = Number(e.currentTarget.value);
						pack.pack.supported_formats.min_inclusive = Number(e.currentTarget.value)
						}}
					>
						{#each (type === "dp" ? DataPackFormats : ResourcePackFormats) as vers}
							<option value={vers.format}>{vers.version}</option>
						{/each}
					</select>
				</label>

				<label>
					Max Version (inclusive):
					<select name="max" id="max" 
					class="p-1 px-4 bg-gray-300 rounded-xl"
					on:change={(e)=> { 
						pack.pack.supported_formats.max_inclusive= Number(e.currentTarget.value)
						}}
					>
						{#each (type === "dp" ? DataPackFormats : ResourcePackFormats) as vers}
							<option value={vers.format}>{vers.version}</option>
						{/each}
					</select>
				</label>

			{/if}
			
			 <br>
			

			 <button
			 type="submit"
			 class="p-1 px-4 bg-gray-300 rounded-xl"
			 >make
			 </button>
		</form>
	</div>
</div>
