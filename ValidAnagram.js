// https://neetcode.io/problems/is-anagram/
class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // M4
        if (s.length !== t.length) {
            return false;
        }

        let countMap = new Map();

        for (let i = 0; i < s.length; i++) {
            countMap.set(s[i], (countMap.get(s[i]) || 0) + 1);
            countMap.set(t[i], (countMap.get(t[i]) || 0) - 1);
        }

        for (let value of countMap.values()) {
            if (value !== 0) {
                return false;
            }
        }

        return true;
        // M3
        // if (s.length !== t.length) {
        //     return false;
        // }

        // let count = new Array(26).fill(0);

        // for (let i = 0; i < s.length; i++) {
        //     count[s.charCodeAt(i) - 97]++;
        //     count[t.charCodeAt(i) - 97]--;
        // }

        // for (let i = 0; i < 26; i++) {
        //     if (count[i] !== 0) {
        //         return false;
        //     }
        // }

        // return true;

        // M1
        // if (s.length !== t.length) {
        //     return false;
        // }

        // let sArray = s.split('');
        // let tArray = t.split('');

        // for (let i = 0; i < sArray.length; i++) {
        //     let index = tArray.indexOf(sArray[i]);
        //     if (index === -1) {
        //         return false;
        //     }
        //     tArray.splice(index, 1);
        // }

        // return tArray.length === 0;

        // M2
        // if (s.length !== t.length) {
        //     return false;
        // }

        // s = s.split('').sort().join('');
        // t = t.split('').sort().join('');

        // return s === t;
    }
}
