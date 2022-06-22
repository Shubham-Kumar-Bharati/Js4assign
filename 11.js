function Birthday_Game(arr,D ,M) {
 
    let counter = 0;
     for(let i = 0; i < arr.length - 1; i++){
          let subArray = arr.slice(i, i+M);
          if (subArray.length === M) {
             let sum = subArray.reduce((a,b) => a + b, 0);
             if(sum === D){
                  counter += 1;
              }
           }
     }
     return counter;
}
let arr=new Array(3,2,4,5,6,8,2,3);
let n=arr.length;
console.log(Birthday_Game(arr,5,2));
