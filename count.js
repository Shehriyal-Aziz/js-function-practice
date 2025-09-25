// ek function of clouser that count and print value the unique part is let counting doesnt get reset everytime and you run again and again with diif let name it will then start count from 0

function count(){
    let counting = 0;
    return function(){
        counting++;
        return counting;
    }
}
 
 let c = count();
 console.log(c());
 console.log(c());
 console.log(c());
 console.log(c());
 console.log(c());
 console.log(c());

 let d = count();
 console.log(d());
 console.log(d());
 console.log(d());
 console.log(d());