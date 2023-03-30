function hasTargetSum(array, target) {
    const nums = {};
  
    for (let i = 0; i < array.length; i++) {
      const currentNums = array[i];
      const difference = target - currentNums;
  
      if (nums[difference] !== undefined) {
        return true;
      } else {
        nums[currentNums] = i;
      }
    }
  
    return false;
  }

//Add written explanation of your solution here
//The Big O was Constant time(O(1))

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  
  console.log("");
  
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
  
  console.log("");
  
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

// for (let  = 0; i < target; i++) {
//    for (let j = 0; j < target; j++) {
//     let sum = i + j ;
//     if (sum === target) {
//       console(i,j)
//       return true;
//     }else {
//       return false;
//     }
  //  }
// }