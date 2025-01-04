/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let validSplitCount = 0;

    const prefixObj = nums.reduce((acc, cur, index) => {
        acc.totalSumValue += cur;

        if (index !== nums.length - 1) {
            acc.prefixSumValue.push(acc.totalSumValue);
        }
        
        return acc;
    }, {
        totalSumValue: 0,
        prefixSumValue: [],
    });

    const { totalSumValue, prefixSumValue } = prefixObj;
    

    console.log(prefixSumValue)

    for (let i = 0; i < nums.length - 1; i++) {
        if (totalSumValue - prefixSumValue[i] <= prefixSumValue[i]) {
            validSplitCount++;
        }
    }    

    return validSplitCount;
};