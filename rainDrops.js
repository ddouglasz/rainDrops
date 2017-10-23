const rainDrops=(number)=>{
    // initializing the array for the different outcomes
  let drops =[];
//testing for strings and returning a message.
  if(typeof number=='string'){
   return 'please enter a number' 
  }
//using 'if' statements to test for the 3 conditions of the prime factors
   if(number%3===0){
    drops+='pling';
  }
 if(number%5===0){
    drops+='plang'
  }
 if(number%7===0){
    drops+='plong';
    //testing for any other number outside the 3 cases given as instructed
  }else if(number%3!==0 && number%5!==0 && number%7!==0){
    return number;
  }
  return drops;
}
module.exports=rainDrops;