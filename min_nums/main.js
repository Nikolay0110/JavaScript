export const min = function (...num) {
    let minimum = num[0]
    for (let i = 0; i < num.length; i++) {
        if (num[i] < minimum) {
            minimum = num[i]
        }
    }
    return minimum;
};

let num = min(22, 1);
console.log(num);

num = min(5, 5, 5);
console.log(num);

num = min(7, 4, 6, 13, -19, 2);
console.log(num);