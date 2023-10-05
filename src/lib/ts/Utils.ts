const format = (obj: object) => JSON.stringify(obj, null, 2);

const sortArray = (array: string[]) => {
    const slicedArray = array.map((e) => {
        const cut = e.split(".");
        return [Number(cut[1]), Number(cut[2])]
    })
    const q = slicedArray.sort((a, b)=> a[0]-b[1])



    console.log(q)
    // console.log(q.map(e=>`1.${e[0]}.${e[1]}`))
    return []
}


export {format, sortArray};
