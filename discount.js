// ek hof ko use krke func banao that apply disscount on item price

function disc_cal(discount){
    return function(price){
        return price - price * (discount/100);
    };
}
let ten = disc_cal(10);
let twenty = disc_cal(20);

console.log(ten(200));

// ho kya rha h

// hof func h ye jis ki waja se do func bane ge parent func discount value store kr rha h and return k bad wala price inside we run code tthat do calculations and give output ab ye thora ajjeb is liye lag rha h bcz instead of giving discount vlaue humne usko let mn store kr diya bcz there might be change in future to apply diff discounts so to run hum console krte hn uske andar parent func run krte hn by just wirting let name or as we know hamare pass parent k andar ek aur func h jiski value lazmi h (bcz its price) so run krte waqt let name k aage bracket which store value of inside func



 