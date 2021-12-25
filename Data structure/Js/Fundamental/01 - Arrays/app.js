const set = new Set();


set.add(1)

set.add(2)

set.add(1)



for (const item of set) {
    console.log(item);
}


console.log(set.has(1));