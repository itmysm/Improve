const numbers: number[] = [207, 779, 26, 760, 220, 367, 622, 569, 85, 867, 267, 966, 86, 725, 125, 338, 404, 769, 871, 714, 169, 888, 437, 764, 363, 369, 154, 285, 96, 920, 224, 861, 139, 903, 5, 148, 120, 596, 537, 705, 277, 689, 871, 770, 860, 702, 253, 459, 193, 425, 695, 242, 479, 207, 599, 402, 453, 522, 965, 632, 609, 197, 948, 416, 847, 842, 334, 790, 916, 101, 591, 713, 835, 888, 202, 244, 246, 656, 209, 271, 436, 875, 9, 492, 564, 460, 145, 64, 427, 883, 759, 486, 861, 541, 353, 264, 804, 855, 8, 197]

function mergeSort (array: number[]): number[] {
  if (array.length === 1) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right))
}


function merge (left: number[], right: number[]) {
  const result: number[] = [];
  let leftIndex: number = 0;
  let rightIndex: number = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex])
      leftIndex++
    } else {
      result.push(right[rightIndex])
      rightIndex++
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}


console.log(mergeSort(numbers))