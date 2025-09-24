// return(func value return kr rha h)
function abc(num){
    return 12+num;
}



console.log(abc(13));


// first class function: fnc ko values ki tarah treat kr sakte hn

// 1. function as a variable

let num = function(){
    return 12;
}
console.log(num());

// 2. function as an argument

function abcd(val)
{
    val();    
    // val() likhne ki waja simple h bcz hamne normal value k bajai function pass kiya argument me 
}

abcd(function(){
    console.log("hello");
});


// hof higher order function

// hof  wo fnc h jo ki doosre fnc ko return kare ya fir  accept kare apne parameter mn

// first exmaple (jb return krta h fnc ko)

function hof1(){
    return function(){
        console.log("hello from hof1");
    }
}

hof1()();

// hof1()()  is liye kiya bcz hof1 return krta h ek fnc ko to uske baad usko call krna pdta h (2 chez hoti hn first return krna and second call krna)

// second example (jb accept krta h fnc ko)

function hof2(val){
    val();
}

hof2(function(){
    console.log("hello from hof2");
})




// impure and pure function

// pure wo fnc h jis ki waja se outer code pr frq na pare ya bahar func k kisi ki value pr asar na ho

// impure wo fnc h jis ki waja se outer code pr frq pare ya bahar func k kisi ki value pr asar ho

let a = 10;

// pure function

function xyz(b){ 
    return a+b; 
}

console.log(xyz(12));

// is code ki waja se kiso aur pr asar ni pd rha

// impure function

function pqr(b){
    a = a+b; 
}

// is func ki waja se a ki value change ho rhi h jo k bahar define ki h



// closure

// ek esa function jo return kre ek aur fucntion jis function mn parent (main func) k variable ka use hua huwa ho

function closure(){
    let z = 13;
    return function(){
        console.log(z);
    }
}


// lexical scoping 

// simple h agr app function k andar function bana rhae ho or unke andar variable bana rhe ho to app sirf variable ko us function k andar use kr sakte ho na k bahar 

function one(){
    let a = 1;
    function two(){
        let b =2;
        function three(){
            let c = 3;
        }
    }
}

// ab app let a ko pure 3 fnc mn  use kr sakte ho
// a is accessible in all three functions.
// b is only accessible in two() and three().
// c is only accessible in three().


// iefe(imidiatly envoke function expression)

// esa function jise call krne ki zarorat nhi dirrect run hoga 
// likhne ka tarika h 
// 1.func banao nam mt do 
// 2.rounf bracket mn close karo
// 3.and end pr round bracket laga k call krdo 

(function(){
    return console.log('iefe')
})();


// hoisting in fuction: banne se pehele use kr pana


hosti();
// here ye error nhi dega and run bhi hoga ye sirf js mn possible h k banane se pehele call krna 




function hosti(){
    console.log("abu bol abu")
}

// note: func expression mn hoisting work nhi krti bcz we use let and let work properly ye error sirf var k sath h so agr aap ye fnc banate ho 

hoisting();
// will give reff error cant run before init...n



let hoisting = function(){
    console.log('mera raj h yaha')
}

// final: func statment hoist hota h func expression nhi hota


