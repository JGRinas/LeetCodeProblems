/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

ej:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

// const twoSum = (nums, target) => {
//   const arrayNums = [];
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     nums.find((num, index) => {
//         if(num === complement){
//             arrayNums.unshift(index)
//         }
//     })
//  };
//  console.log(arrayNums)
//  return arrayNums
// }
const twoSum = (nums, target) => {
    const arrayNums = [];
    for(i = 0; i<nums.length; i++){
        for(j = i; j<nums.length-1; j++){
            if((nums[i] + nums[j+1]) == target){
                arrayNums.push(i, j+1);
                console.log(arrayNums)
                return arrayNums
            }
        }
    }
}

twoSum([3,2,4], 6);
