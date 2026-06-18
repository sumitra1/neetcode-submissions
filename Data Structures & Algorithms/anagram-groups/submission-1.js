class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        //before keeping it o map sort and store the string if it matches with key agianst key else push the key along with value

        let result={}
        for( let str of strs){
           let sortedStr= str.split('').sort().join('');
            if(!result[sortedStr]){
                result[sortedStr]=[]
            }
            result[sortedStr].push(str)
        }

        return Object.values(result);
    }
}
