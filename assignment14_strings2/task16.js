// 16. Write a function sortArray that takes an array of numbers as input and sorts them in ascending order and returns.
//     using the bubble sort algorithm,
//     using the selection sort algorithm
//     using the insertion sort algorithm
//     using merge sort algorithm.

// bubble sort - lyginam kaimynus ir keiciam vietomis, kol nebelieka ka keisti
function bubbleSort(input) {
  const arr = [...input];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  return arr;
}

// selection sort - kiekviena karta randam maziausia likusi skaiciu ir pastatom i eile
function selectionSort(input) {
  const arr = [...input];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

// insertion sort - imam po viena elementa ir ikisam ji i jau surikiuota dali
function insertionSort(input) {
  const arr = [...input];

  for (let i = 1; i < arr.length; i++) {
    const current = arr[i];
    let j = i - 1;

    // stumiam didesnius elementus i desine
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

// merge sort - dalinam per puse, surikiuojam dalis ir sujungiam
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  // pridedam tai, kas liko
  return result.concat(left.slice(i), right.slice(j));
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

const numbers = [5, 2, 9, 1, 5, 6, -3, 0];

console.log("bubble sort:", bubbleSort(numbers));
console.log("selection sort:", selectionSort(numbers));
console.log("insertion sort:", insertionSort(numbers));
console.log("merge sort:", mergeSort(numbers));
