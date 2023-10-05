const modCache: ModData[] = []
const get = (id: string): ModData => modCache.filter((e) => e.id === id)[0]

export async function fetchModData(id: string): Promise<ModData> {
    const data: ModrinthResponse = await fetch(`https://api.modrinth.com/v2/project/${id}`).then(e => e.json());
    const members: Team[] = await fetch(`https://api.modrinth.com/v2/project/${id}/members`).then(e => e.json());
    // console.log(data.game_versions)

    return {
        description: data.description,
        icon_url: data.icon_url,
        id: data.id,
        title: data.title,
        versions: data.game_versions.sort(),
        owner: members.find(e => e.role === "Owner")?.user.username
    }
}

export function getCachedMod(id: string): ModData | undefined {
    get(id)
    return
}