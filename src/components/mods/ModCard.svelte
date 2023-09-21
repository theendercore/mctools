<script  lang="ts">
	import { version } from "$app/environment";
	import { onMount } from "svelte";
  import { format } from "../../lib/ts/Utils.ts"
	export let id: string;

	const end1 = `https://api.modrinth.com/v2/project/${id}`;
	const end2 = `https://api.modrinth.com/v2/project/${id}/members`;
	const href = `https://modrinth.com/mod/${id}`;
	let data: ModrinthResponse;
  let team: Team;
  let user = "";

  onMount(async function () {
    let res = await fetch(end1).then( e => e.json());
   	data = res;
    res = await fetch(end2).then(e => e.json());
    team = res; 
    if (team !== undefined) user = team.find(e => e.role === "Owner").user.username
  });



</script>

<div>
	{#if data !== undefined}
		<div class="flex gap-4 p-4 rounded-2xl bg-accent bg-opacity-20 hover:bg-primary hover:bg-opacity-40 w-[32rem]">
			<a {href}><img src={data.icon_url} alt={data.title} class="w-20 h-20 rounded-2xl pixel-art bg-accent bg-opacity-70"></a>
			<div>
				<span class="flex items-center gap-1">
					<a {href}><h3 class="text-lg font-bold">{data.title}</h3></a> 
					by
          {#if user !== ""}
					  <a href={`https://modrinth.com/user/${user}`} class="underline">{user}</a>
          {/if}
				</span>
				<span class="flex text-sm -wrap w-96">{data.description}</span>
				<span>
					{#if data.game_versions.length > 1}
						{data.game_versions[0]} - {data.game_versions[data.game_versions.length-1]}
					{:else}
						{data.game_versions[0]}
					{/if}
				</span>
			</div>		    
		</div>
	{/if}
</div>
