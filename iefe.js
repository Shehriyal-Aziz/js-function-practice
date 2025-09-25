//iefe(imidiatly envoke function expression) 


// wo gunction jo diect chal jaaye 
// structure
// (function(){})();

// use iefe to isolate/private/hide variable

(function(){
    const password =  "secret pass"
    console.log(password); //password show kare ga on console
})(); 
    console.log(password); //gonna give error
// now you can access it(password) inside function but not out of it 

