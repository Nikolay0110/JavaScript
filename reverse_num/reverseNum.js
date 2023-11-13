export const reverseNum = function (num) {
    let result = 0;
    while (num > 0) {
        let last_digit = num % 10;
        result = result  * 10 + last_digit;
        num = parseInt(num / 10);
    }
    return result;
};