var findMedianSortedArrays = function(nums1, nums2) {
   let arr = (nums1.concat(nums2)).sort((a,b)=> a-b);
   let min_index = Math.floor(arr.length /2)
   
   let num = 0;
   
   if(arr.length % 2 ==0){
    num = (arr[min_index -1] + arr[min_index]) / 2
    
   }
   else{
    num = arr[min_index]
   }

   
   return num
    
};

console.log( findMedianSortedArrays([1,2],[3,4]));


