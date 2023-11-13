export const findPrimeNums = function (amount) {
    let count = 0;
    let result = [];

    for (let i = 2; count < amount; i++) {
        let flag = true;
        for (let j = 2; j <= Math.sqrt(i); j++) {
            if (i % j === 0) {
                flag = false;
                break;
            }
        }

        if (flag) {
            result.push(i);
            count += 1;
        }
    }

    return result;
};