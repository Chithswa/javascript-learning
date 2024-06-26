//array
let fruits = new Array("Apple", "Mango", "chikku" );
console.log(fruits.length);
console.log(fruits);

//Static method
//Array.from() method
console.log(Array.from('mango'));

//sets
let set = new Set(["1","1","2"])
console.log(Array.from(set));

//map
const map = new Map([
  [1,2],
  [3,4],
  [5,6]]
);
console.log(Array.from(map));
console.log(Array.from([1,2,3],(x)=> x+x));

//Array.isArray() method
console.log(Array.isArray([1,2,3]));
console.log(Array.isArray());

//Array.of() method
console.log(Array.of(1,2,3));

//Static Property
//Array[@@species]
class NotAnArray {
  constructor(length) {
    this.length = length;
  }
}

const arr = [0, 1, 2];
arr.constructor = { [Symbol.species]: NotAnArray };
console.log(arr.map((i) => i)); 
console.log(arr.filter((i) => i)); 
console.log(arr.concat([1, 2]));

//Instace Method
//Array.prototype[@@iterator]()
const array1 = ["a", "b", "c", "d", "e"];
const arrIter = array1[Symbol.iterator]();
console.log(arrIter.next().value); 
console.log(arrIter.next().value); 
console.log(arrIter.next().value); 
console.log(arrIter.next().value); 
console.log(arrIter.next().value); 

//Array.prototype.at()
const cart = ["apple", "pear", "mango"];
function returnLast(arr) 
{
  return arr.at(-1);
}
const item1 = returnLast(cart);
console.log(item1); 
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2)

//Array.prototype.concat()
let array02 = ["a","b","c"];
let array03 = ["d","e","f"];
let array04 = array02.concat(array03);
console.log(array04);

//Array.prototype.copyWithin()
let a=['a','b','c','d','e','f','g'];
console.log(a.copyWithin(2,3,6));

//Array.prototype.entries()
let x = ['a','b','c'];
let b = x.entries();
for (let c of b)
  {
    console.log(c);
  }

  //Array.prototype.every()
  function abc(element, index, array)
  {
    return element >=10;
  }
 console.log([1,2,3,].every(abc));
 console.log([15,30,200].every(abc));

 //Array.prototype.fill()
 console.log([1,2,3].fill(5));
 console.log([1,2,3].fill(5,1,2));

 //Array.prototype.filter()
 function name(value)
 {
  return value >= 20;
 }
 console.log([2,3,40,130,30].filter(name));

 //Array.prototype.find()
 let cars =[{name:"volvo" ,quality:50},
  {name:"BMW" ,quality:20}
 ];
 let result = cars.find(({name}) => name == "BMW");
 console.log(result);

 //Array.prototype.findIndex()
 function num(element) {
  if (element === 8) {
    return true;
  }
}

console.log([4, 6, 8, 9, 12].findIndex(num)); 
console.log([4, 6, 7, 9, 12].findIndex(num));

//Array.prototype.findIndexLast()
const arr1 = [10,20,30];
let found = arr1.findLast((element)=> element>15);
console.log(found);

//Array.prototype.findLastIndex()
const array10 = [5, 12, 50, 130, 44];

const number = (element) => element > 45;

console.log(array10.findLastIndex(number));


//Array.prototype.flat()
let def = [1,2,3,[4,5,[6,7,[8]]]];
console.log(def.flat(Infinity));

//Array.prototype.flatMap()
let efg = [1,2,3,4];
console.log(efg.flatMap((x) => [x*3]));

//Array.prototype.forEach()
var arr11=[1,2,3,4,5,6]
arr11.forEach((element) => console.log(element));

//Array.prototype.includes(),indexof(),join(),keys(),lastIndexOf()
let arr12 =[2,4,5,6];
let abs = arr12.keys();
 console.log(arr12.includes(4));
 console.log(arr12.includes(10));
 console.log(arr12.indexOf(4));
 console.log(arr12.join('-'));
 for (const key of abs)
  {
    console.log(key );
  }
 console.log(arr12.lastIndexOf(5));

 //Array.prototype.map(),push(),pop()
 const src = [1,90,18,3];
 let map1 = src.map((x) => x*4);
 console.log(map1);
 map1.pop();
 console.log(map1);
map1.push(10);
 console.log(map1);

 //Array.prototype.reduce(),reverse(),shift(),slice()
 const pqr = [12,10,22,33,27];
 let initialValue = 0;
 let summ = pqr.reduce((accumulator,currentValue) => accumulator + currentValue, initialValue );
 console.log(summ);
 console.log(pqr.reverse());
 pqr.shift(2);
 console.log(pqr);
 pqr.slice(2);
 console.log(pqr);






