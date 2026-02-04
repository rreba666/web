var twoSum = function (nums, target) {
    let num_index = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = nums.length - 1; j > i; j--) {
            if (nums[i] + nums[j] == target) {
                num_index.push(i, j)
                return num_index
            }

        }
    }
};

const nums = [2, 7, 11, 15]
let target = 17

console.log(twoSum(nums, target));
