//Write a program which takes an array as input from the user and a number.Check whether the number is present or not.

const Find_Num = (array,N,M) => 
{
  for(let i=0; i<N; i++){
    if (array[i]===M){
      return "YES"
    }
  }
  return "NO"
  
};