function getSecondLargest(nums) {
    let first = nums[0];
    let second = nums[0];
    for(let i = 1; i < nums.length; i++){
        if (nums[i] > first){
            second = first;
            first =nums[i];
        }
        else if (nums[i] > second && nums[i] !== first){
            second = nums[i];
        }
    }
    return second;
}


function main() {

    const nums = [2, 3, 6, 6, 5];
    console.log(getSecondLargest(nums));
}

main();