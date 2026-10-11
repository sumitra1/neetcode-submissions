class Solution {
    public int characterReplacement(String s, int k) {
        
        int[] c=new int[26]; int l=0,maxC=0,best=0;

        for(int r=0;r<s.length();r++){
            maxC=Math.max(maxC,++c[s.charAt(r)-'A']);
            while(r-l+1-maxC>k){
                c[s.charAt(l++)-'A']--;             
            }
             best=Math.max(best,r-l+1);
        }
        return best;
    }
}
