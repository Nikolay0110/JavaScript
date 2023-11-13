export const pow = function (num, exp) {
  if (exp <= 0) {
    return 1;
  }
    let result = 1;
  const negative = num < 0 && exp % 2 > 0 ? -1 : 1;
    num=negative;

  for (let i = 0; i < exp; i++) {
      result = num;
  }
    return negative * result;
};