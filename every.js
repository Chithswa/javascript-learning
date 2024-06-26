var arr=[1,2,3,4,5,6];
var array=  new Array(3);
var name=['s','a','m','e','e','k','e','s','h','a']
var number = arr.every(num => num > 5);
console.log("every",number)
var numbers =arr.every(num => num<10);
console.log("every",numbers);
var numb =arr.some(num => num<5);
console.log("some",numb);
console.log("include",arr.includes(4));
console.log("join",name.join(''));
var reduces=arr.reduce((total,current) => total+current);
console.log("reduces",reduces);
console.log("find m",arr.find(element => element>5));
console.log("find index of",name.findIndex(element => element==='s'));
console.log("index of:",name.indexOf('h'));
console.log("fill",array.fill(10));
console.log("slice",name.slice(2,7));
console.log(name);
console.log("reverse",arr.reverse());
console.log(arr);
console.log("push",arr.push(20));
console.log(arr);
console.log("pop",arr.pop());
console.log(arr);
console.log("shift:",arr.shift());
console.log(arr);
console.log("unshift:",arr.unshift(40));
console.log(arr);
