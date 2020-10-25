// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Input: nums = [3,3], target = 6
// Output: [0,1]

let nums = [2,7,11,15]
let target = 9

let twoSum = (nums, target) => {
    //First we create a hash that will store the (target - the current value in the iteration) as a key with a value of the current i
    //because this will allow us to know what value we are looking for in order to reach the target number. We store the current i 
    // so we can remember which place in the array needs which value.
    let valueLocation = {}

    //ideally we are looking to just iterate the array given once for a time complexity of O(n) where n is the number of items in the array
    for (let i = 0; i < nums.length; i++) {
        let currentValue = nums[i]

        //if we do not see a hash entry for the current value we are on, keep adding to the hash the difference between target 
        //and the currentvalue as well as the current index i. Otherwise we take the stored i value in the hash and return it
        // along with the current i value.
        if (valueLocation[currentValue] != undefined) {
            console.log(`Im logging.... ${[valueLocation[currentValue], i]}`)
            return [valueLocation[currentValue], i]
        }

        valueLocation[target - currentValue] = i
    }

}

twoSum(nums, target)