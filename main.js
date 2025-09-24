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

