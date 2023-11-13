export const distinct = function(nums) {
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    let found = false;
    for (let j = 0; j < result.length; j++) {
      if (nums[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(nums[i]);
    }
  }

  return result;
}