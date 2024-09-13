// https://neetcode.io/problems/products-of-array-discluding-self
class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let ot = [];
        for(let i=0; i<nums.length; i++){
            let pro = 1;
            for(let j=0; j<nums.length; j++){
                if(i!=j){
                    pro *= nums[j];
                }
            }
            ot.push(pro);
        }
        return ot;
    }
}
