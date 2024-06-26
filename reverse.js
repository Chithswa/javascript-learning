let str="pacewisdom";
let newstr=""
for(var i=str.length -1; i>=0 ; i--)
  {
   newstr += str[i];
  }
  console.log(newstr);

  let arr="pacewisdom";
  console.log(arr.split('').reverse().join(''))
  //console.log(arr.reverse().join(''));

  let array=[10,20,31,40,15,80,60,70]
  for(var a = 1; a < array.length; a++)
    for(var b = 0; b < a; b++)
  {
    if (array[a] < array[b])
      {
        var x = array[a];
        array[a] = array[b];
        array[b] = x;
      }
  }
  console.log(array);
  function largest(array){
    var largest=[];
    for ( var i=array.length-1; i >= 0; i--)
      {
       largest.push(array[i]);
      }
      console.log(largest[1])
  }

largest(array)

   
 // console.log(array.sort((a, b) => b - a)[1]);
