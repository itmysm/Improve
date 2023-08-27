function binary(list, target) {
  if (list.length < 1) return 'not found in array'
  if (list.length == 1) {
    return list[0] == target ? target : 'not found in array'
  }

  if (list.length < 3) {
    let index = list.length
    let find = 'not found in array'
    while (index >= 0) {
      if (list[index] == target) {
        return find = target
      }
      index--
    }

    return find
  }

  const mid = Math.floor((list.length - 1) / 2)

  if (list[mid] === target) {
    return target
  } else if (list[mid] < target) {
    return binary(list.slice(mid), target)
  } else {
    return binary(list.slice(0, mid), target)
  }
}

console.log(binary([1, 2, 3, 4, 5, 6,7,8,9,10,11,12,13], 12));