/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let validSplitCount = 0;
    let leftSumValue = 0;
    let totalSumValue = nums.reduce((acc, cur) => acc + cur, 0);


    for (let i = 0; i < nums.length - 1; i++) {
        leftSumValue += nums[i];
        totalSumValue -= nums[i];

        if (leftSumValue >= totalSumValue) {
            validSplitCount++;
        }
    }    

    return validSplitCount;
};