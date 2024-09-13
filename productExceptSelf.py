// https://neetcode.io/problems/products-of-array-discluding-self
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        length = len(nums)
        result = [1] * length  # Initialize result array with 1

        # Calculate left products for each element
        left_product = 1
        for i in range(length):
            result[i] = left_product
            left_product *= nums[i]

        # Calculate right products and final output
        right_product = 1
        for i in range(length - 1, -1, -1):
            result[i] *= right_product
            right_product *= nums[i]

        return result