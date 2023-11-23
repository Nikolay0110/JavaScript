let counter = 0;

export const toogle = function () {
  counter++;
  if (counter % 2 === 0) {
      return false;
  } else {
      return true;
  }
};