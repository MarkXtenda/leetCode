/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let string = x.toString();
    let reversedString = string.split('').reverse().join("");
    if (string === reversedString) {
        return true;
    }
    return false;
};