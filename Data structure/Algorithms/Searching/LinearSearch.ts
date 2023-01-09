const things = ['this is a test', 'oops', 'now way', 'oSps']

function search(arr: any, target: string | number | undefined = undefined) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) result.push(arr[i])
  }

  return result.length > 0 ? result : -1
}

console.log(search(things, 'oops'))
