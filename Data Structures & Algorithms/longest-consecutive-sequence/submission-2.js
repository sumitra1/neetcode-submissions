class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        //we can use set to store nums array as it is not sorted, and then iterate and count
        //in set we will check num-1 present from there count will start and 
        //and it will keep on increasing
        //it i son becuae it is iterating only once in outer loop

        let numSet = new Set(nums)
        let longest = 0

        for (let num of numSet) {

            if (!numSet.has((num - 1))) {

                let length = 1

                while (numSet.has(num + length)) {
                    length++;
                }
                longest = Math.max(longest, length)

            }

        }
        return longest;

    }
}