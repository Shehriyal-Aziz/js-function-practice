// Q1.whats the diff btw function decleration/statment and expression in term of hoisting

// Ans func statement hoist ho sakt h pr func expreesion nhi bcz in func expression we use let and let allow nhi krta h k use pehele karo aur initialize bad mn agr ese kiya to error dega expression but statment mn ye sab chalta h





// Q2. iska log kya aaye ga

greet();

function greet(){
    console.log('hello');
}

// Ans q k ye func satement h to hoisting allowed h jis ki waja se print hoga and log will be hallo





//Q3.convert given func into arrow func
function multiply(a,b){
    return a*b;
}
// Ans 
let mul = (a,b) => {
    return a*b;
}





//Q4.identify parameter and arguments in given function
function welcome(name){
    console.log(name);
}
welcome("harsh");
// Ans
// line num 37 mn name parameter h and line 40 mn bracket k andar argument h





// Q5.predict output
function hi(name = "guest"){
    console.log("hi",name);
}
hi();
// Ans
hi,guest




// Q6. what does ... operator mean in parameters

// Ans jb hamain conform na ho k argument k through kitni values aani hn tb hum rest operator ka use krte hn parameter mn var se pehele ... lagade dete hn to tell that no defined para here 
// example
function daba(...val){
 console.log(val);
}
daba(1,2,3,4,5,6,7,8,8,9,90,3,5,6,3,7,35,63);




// Q7 use rest para to accept any num of score and return the total
// Ans
function num(...score){
   let total = 0;
 score.forEach(function(val){
    total = total + val;   
 })
 return total;
}
console.log(num(13,56,27,36));





// Q8 convert normal func into if early return func

function checkage(){
    if(age< 18 ){
        console.log('too young');
    }
    else{
        console.log('allowed');
    }
}
// Ans

function checkAge(age){
    if(age<18) return "too young";
    return "allowed";
}

console.log(checkAge(23));


// Q9. whats the return value of this func

function f(){
    return;
}
console.log(f());

// Q10. what does it mean when we say func are first class citizen

// Ans 

// first class citizen mean ap func to value ki tarah trat kr sakte ho change kr sakte ho , variable mn store kr sakte ho and etc




// Q11. how we call express function

let func = function(num1,num2){   
    let tot = num1+num2;
    return tot;
}
console.log(func(2,4));





// Q12 pass the func into another function and execute it inside

function todo(value){
 value();
}
todo(function(){
    console.log('i did it in 2nd go')
});

// Q13 is this higher oder function

[1,2,3].map(function(x){
    return x * 2;
});

// Ans yes it dosnt look bcz neither it accept or return funtion but the truth is it accept bcz map is keyword which is function


// Q14 is this pure or impure function

let total = 0;
function total(num){
    total += num
}

// Ans it is impure bcz it(function) change the the outer value






// Q15 convert the above function into pure function
let total = 0;
function total(num){
    total += num;
}
// Ans
let total = 0;
function total(num){
    newtotal = total;
    newtotal += num;
}

// yahan hamara func k andar ka code kisi bhi bhair wali value ko change nhi kr rha h is liye ye pure h







// Q16 what is clouser 

// ek esa func jo k return kare ek aur func or parent func ki value ko kisi bhi tareeke se use kare
 
function one(){
    let a = "sherry"
return function (){
    console.log(a);
}
}

// Q17 convert this normal func into eife
function init(){
    console.log("initialize");
}
// Ans
(function init(){
    console.log("initialize");
})();





// Q18 what will be output and why
greet();

var greet = function(){
    console.log("hi");
} 

// Ans = error
// why: function expreesion mn hoisting work nhi krti 





// Q19 what will be output and why
greet();

 function greet(){
     console.log("hi");
 }

 // Ans = print hi
// why: function statement mn hoisting work krti h 