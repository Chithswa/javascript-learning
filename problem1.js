//find the largest second element in the array
let array = [1,4,3,5,6,7,1,2,2,2,4,7,8];
console.log("sorted array",array.sort((a,b) => a>b ? 1:-1));

let uniqueSet = new Set(array);
let newarray = [uniqueSet];
console.log("New Array Is :",newarray); 

let second_largest = 0;
let n = newarray.length;
  /*
  If the last and second last element are equal then check the previous one else return the second last element.
  */
  for (let i = n - 2; i >= 0; i--) {
    if (newarray[i] != newarray[n - 1]) {
      second_largest = newarray[i];
      break;
    }
  }
  console.log( second_largest);
