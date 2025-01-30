//alert box
alert("Hello");
//confirm box
confirm("You will order me a pizza");
//prompt
prompt("Please enter your name", "no name?");

let num1=10;
let num2=20;
//(+, -, *, /, %, **) 
console.log("the additionresult" , num1+num2);
console.log("the subtraction" , num1-num2);
console.log("the multiplication" , num1*num2);
console.log("the Division" , num1/num2);
console.log("the Mod" , num1%num2);
console.log("the power" , num1**num2);


//•	Basic assignment 
let V= 5;
console.log("value of v" , V);
//•	chained assignment 
let x=5;
let y = x =10;
console.log("value of y" , y);
//•	Compound assignment
 
let a = 5;
a += 10;
console.log("value of a" , a);

let count=0;
 
console.log("increment" , count++);
console.log("increment" , count);
console.log("increment" , ++count)

// || && !
console.log(0==1 || 0==0);




// part 2 in Ex  (>, <, >=, <=, ===, !==).
console.log("is num1 greater than num2 :" , num1>num2);
console.log("is num1 less than num2 :" , num1<num2);
console.log("is num1 less than or equal num2 :" , num1<=num2);
console.log("is num1 greater than or equal num2 :" , num1>=num2);
console.log("is num1 same type and value as  num2 :" , num1===num2);
console.log("is num1 doest equal  num2 :" , num1!==num2);

// part 3 isSunny, isWeekend).

let isSunny=true;

let isWeekend=true;

//Use logical operators (&&, ||) to check combinations of conditions.

console.log("is it good for picnic :" , isSunny&&isWeekend);

console.log("is it sunny or weekend :" , isSunny||isWeekend);
 

// part 4 : Declare a variable score and assign it a value.
let score =40;
score +=5;
console.log("New score :" , score);
score *=2;
console.log("New score :" , score)

//Part 5: User Interaction
 

let f= prompt("Please enter your name : ", "Ex: Willow May");
console.log(" hello " + f + "!");
 
let i= prompt("Please enter your age : ", "Ex: 4");
console.log(" wow! you have  " + i + " years old");


