class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
         //iterate over each string element, then inside each string element iterate and store frequency of ech 
         //string's character, create a empty 26 chratcter array with adiffernece of ascii value
         //store each 26 character code as a string as key in map using join..if that same key exist
         //push the word against that code
         //map->

        let result={}

        for ( let str of strs){
            const freq=new Array(26).fill(0)
            
            for(let c of str){
                freq[c.charCodeAt(0)-'a'.charCodeAt(0)]++
            }

            const key=freq.join(',');

            if(!result[freq]){
                result[key]=[]
            }
            result[key].push(str);

        }
        return Object.values(result)
       
        
    }
}
