//Object 
//object,assign()
let obj1 = {a:0, b:1 , c:{d:0}};
let obj2 = Object.assign({}, obj1);
console.log(obj2);
obj1.b=2;
console.log(obj1);

//object.create()
let people = 
{
  intro : function()
  {
    console.log(`My name is ${this.name} I Am human? ${this.human}`);
  }
};
let me = new Object(people);
me.name = "Marry";
me.human = true;
me.intro();

//object.entries()
let obj = {0:"a",1:"b",2:"c"};
console.log(Object.entries(obj));

//object.freeze()
let obj3 ={ prop:32};
Object.freeze(obj3);
obj3.prop = 43;
console.log(obj3);

//object.fromEntries()
let arr =[
  ["0","a"],
    ["1","b"],
    ["2","c"],
];
let obj4 = Object.fromEntries(arr);
console.log(obj4);

//object.getPropertyDescriptor()
let abc = {
  prop:"hello"
}
let descriptor = Object.getOwnPropertyDescriptor(abc,'prop');
console.log(descriptor);

//Object.getOwnPropertyNames()
let obj5 = {
  val1 :"hi",
  val2 :"hello",
  val3 :"bye,"
};
console.log(Object.getOwnPropertyNames(obj5));

//Object.getOwnPropertySymbol()
const object1 = {}; 
    let vala = Symbol('hi'); 
    let valb = Symbol.for('hello'); 
      
    object1[vala] = 'localSymbol'; 
    object1[valb] = 'globalSymbol'; 
      
    const objectSymbols = Object.getOwnPropertySymbols(object1); 
    console.log(objectSymbols);

    //Object.getPrototypeOf()
    let prototype ={};
    let obj6 = Object.create(prototype);
    console.log(Object.getPrototypeOf(obj6) === prototype);

    //Object.hasOwn()
    let details = {
      name : "Raj",
      course :"DSA",
    };
    console.log(Object.hasOwn(details, 'name'));
  console.log(Object.hasOwn(details, 'phonenum'));

  //Object.is()
  console.log(Object.is(10,10));
  console.log(Object.is(10,'10'));

  //Object.hasOwnProperty()
  const object2 = {};
object2.property1 = 42;
console.log(object2.hasOwnProperty('property1'));
console.log(object2.hasOwnProperty('toString'));

//
