/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let arr = [];
    for(let i=1; i < n+1; i++) {
        let divByFive = !(i % 5);
        let divByThree = !(i % 3);

        if(divByThree && divByFive) {
            arr.push("FizzBuzz");
        }
        else if(divByFive) {
            arr.push("Buzz");
        }
        else if(divByThree) {
            arr.push("Fizz");
        }
        else{
        arr.push(`${i}`);
        }
    }
    return arr;
};