import randomChance from "..";

const _ = randomChance({
    common: 40,
    uncommon: 30,
    rare: 15,
    epic: 8,
    legendary: 5,
    mythic: 2
})

console.log(_)