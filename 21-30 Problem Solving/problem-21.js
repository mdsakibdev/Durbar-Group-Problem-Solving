// let nums = [3, 0, 1];
// let n = nums.length
// let expectedSum = n * (n + 1) / 2;
// let actualSum = 0
// for(let i = 0; i < nums.length; i++){
//     actualSum += nums[i]
// }
// let missingNumber = expectedSum - actualSum;

// console.log('Missing Number', missingNumber)


let nums = [3, 0, 1];
function missingNumber(nums) {
  let n = nums.length;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < n; i++) {
    actualSum += nums[i];
  }
  let missingNumber = expectedSum - actualSum;
  return missingNumber;
}

console.log(missingNumber(nums));
