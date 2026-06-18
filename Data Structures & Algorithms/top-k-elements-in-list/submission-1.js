class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let res = {}

        for (let num of nums) {

            if (!res[num]) {
                res[num] = []
            }
            res[num]++
        }

       const topKKeys = Object.keys(res)
    .sort((a, b) => res[b] - res[a])
    .slice(0, k);

return(topKKeys);


    }
}
