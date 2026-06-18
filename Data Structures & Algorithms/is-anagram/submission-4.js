class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        ///we can have two maps to store the frequency of characters of each string and 
        //compare in next for loop the frequency

        if(s.length!=t.length){
            return false;
        }

        let sMap={};
        let tMap={};

        for(let i=0;i<s.length;i++){

            sMap[s[i]]=(sMap[s[i]] || 0) +1;
            tMap[t[i]]=(tMap[t[i]] || 0) +1;
        }

        for( const i in sMap){

            if(sMap[i]!=tMap[i]){
                return false
            }

        }
        return true;
    }
}
