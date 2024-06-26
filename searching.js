let Arr=[ 1, 2, 3, 4, 5]
let index = Arr.indexOf(2);
let ind = Arr.includes(3);
let num = Arr.includes(7)
console.log(index);
console.log(ind);
console.log(num);

const array = [1, 2, 3, 4, 5];
const element = 3;
for (let i = 0; i < array.length; i++)
   {
  if (array[i] === element) 
    {
    console.log("Element found at index", i);
    break;
  }
}