const rainDrops=(n)=>{
    // initializing the array for the different outcomes
  let drops =[];
//testing for strings and returning a message.
  if(typeof n=='string'){
   return 'please enter a number' 
  }
//using 'if' statements to test for the 3 conditions of the prime factors
   if(n%3===0){
    drops+='pling';
  }
 if(n%5===0){
    drops+='plang'
  }
 if(n%7===0){
    drops+='plong';
    //testing for any other number outside the 3 cases given as instructed
  }else if(n%3!==0 && n%5!==0 && n%7!==0){
    return n;
  }
  return drops;
}
