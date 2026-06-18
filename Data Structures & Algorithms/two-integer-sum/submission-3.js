class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        //we will iterate on for loop for nums and store in hash map the value of each array element
        // with index 

        let prevDef=new Map()

        for(let i=0;i<nums.length;i++){

            const diff=target-nums[i];

            if(prevDef.has(diff)){

               return [prevDef.get(diff),i]

            }

            prevDef.set(nums[i],i)
        }
        return [];
    }
}
