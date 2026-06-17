class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    validPalindrome(s) {
        let i = 0;
        let j = s.length - 1;

        while (i < j) {
            if (s[i] !== s[j]) {
                // delete one character
                return this.isPalindrome(i + 1, j, s) || 
                       this.isPalindrome(i, j - 1, s);
            }
            i++;
            j--;
        }
        return true;
    }

    isPalindrome(i, j, s) {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}