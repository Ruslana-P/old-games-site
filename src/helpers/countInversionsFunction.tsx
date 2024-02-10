// Function to shuffle the array using Fisher-Yates algorithm

export function countInversions(arr: number[]) {
  const arrayOfArrays: number[][] = [];

  for (let i = 0; i < arr.length; i += 4) {
    const chunk: number[] = arr.slice(i, i + 4);
    arrayOfArrays.push(chunk);
  }

  let inversions = 0;

  for (let i = 0; i < arrayOfArrays.length; i++) {
    const subArray = arrayOfArrays[i];

    for (let j = 0; j < subArray.length - 1; j++) {
      for (let k = j + 1; k < subArray.length; k++) {
        if (subArray[j] > subArray[k]) {
          inversions++;
        }
      }
    }
  }

  return inversions;
}
