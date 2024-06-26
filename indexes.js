

let arr = [1,2,2,4,5,6,6,6,7];
const uniquearr = [];
for (let i = 0; i < arr.length; i++) {
  if (!uniquearr.includes(arr[i])) {
    uniquearr.push(arr[i]);
  }
}
console.log(uniquearr); 