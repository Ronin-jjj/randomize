export =  function randomize<T extends Record<string, number>>(chances: T): keyof T {
    if(Object.values(chances)
        .reduce((acc, curr) => acc + curr) !== 100) throw new Error(`Received false percentages, received ${Object.values(chances)
            .reduce((acc, curr) => acc + curr)} while expecting 100.`)
    const rand = Math.random() * 100;
    let _ = 0;
    const pairs = Object.entries(chances).sort((a, b) => b[1] > a[1] ? 1 : -1).reduce<[string, number][]>((acc, curr) => {
        acc.push([curr[0], curr[1] + _])
        _ = curr[1] + _
        return acc
    }, []);
    for(const [value, chance] of pairs){
        if(chance > rand) return value
    }
    // in case of any unexpected outputs, return most common item.
    return pairs[0][0]
}