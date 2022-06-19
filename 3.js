//You are given an array A containing N integer elements and an integer K, and your task is to return the count of occurrences of K in array A.
const findCount = (N, K, Arr) => 
{
  let count=0
  for (i=0; i<N; i++){
  if (Arr[i]==K){
    count+=1
  }
  }
  return count
};