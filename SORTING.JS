let Arr =[1,4,2,5,3,6];
for (var i = 1; i < Arr.length; i++)
  for (var j = 0; j < i; j++)
      if (Arr[i] < Arr[j])
      {
          var x = Arr[i];
          Arr[i] = Arr[j];
          Arr[j] = x;
      }
console.log(Arr);
