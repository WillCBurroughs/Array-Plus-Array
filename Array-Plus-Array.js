function arrayPlusArray(arr1, arr2) {
  
  let combinedArr = arr1.concat(arr2);
  let totalSum = 0;
  
  for(let val of combinedArr){
    totalSum += val;
  }
  
  return totalSum; //something went wrong
}
