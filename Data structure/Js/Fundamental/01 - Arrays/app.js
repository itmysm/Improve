const set = new Set()
const list = [1, 2, 3, 4, 3, 2, 1, 34, 1, 2, 3, 4, 3, 2, 1, 34, 1, 2, 3, 4, 3, 2, 1, 34, 1, 2, 3, 4, 3, 2, 1, 34]
let cleanedList = []





for (const item of list) {

    cleanedList.push(set.add(item))

}

console.log(cleanedList);