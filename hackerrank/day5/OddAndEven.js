/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 *
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    for(let number in nums){
        if(nums[number] % 2 == 0) {
            nums[number] *= 2;
        }
        else {
            nums[number] *= 3;
        }
    };
    return nums;
}