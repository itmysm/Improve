const map = new Map()

map.set('title', 'book')
map.set('title', 2)


const user = { id: 11, name: 'mysm' }



const valid = true


map.set(user, valid)



for (const item of map) {
    console.log(item);
}




console.log(map.get('title'));