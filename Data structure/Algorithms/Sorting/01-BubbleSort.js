const someArray = [207, 779, 26, 760, 220, 367, 622, 569, 85, 867, 267, 966, 86, 725, 125, 338, 404, 769, 871, 714, 169, 888, 437, 764, 363, 369, 154, 285, 96, 920, 224, 861, 139, 903, 5, 148, 120, 596, 537, 705, 277, 689, 871, 770, 860, 702, 253, 459, 193, 425, 695, 242, 479, 207, 599, 402, 453, 522, 965, 632, 609, 197, 948, 416, 847, 842, 334, 790, 916, 101, 591, 713, 835, 888, 202, 244, 246, 656, 209, 271, 436, 875, 9, 492, 564, 460, 145, 64, 427, 883, 759, 486, 861, 541, 353, 264, 804, 855, 8, 197]
let listSorted = false
let tempeMemory;

function bubbleSort (list) {
  while (!listSorted) {
    listSorted = true;
  
    for (let index = 0; index < list.length - 1; index++) {
      if (list[index] > list[index + 1]) {
        tempeMemory = list[index] // save current number
  
        list[index] = list[index + 1]
        list[index + 1] = tempeMemory
  
        listSorted = false
      }
    }
  }

  return list
}

console.log(bubbleSort(someArray));
