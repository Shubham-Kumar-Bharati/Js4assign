//Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe.Prepbuddy likes to wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy wants you to find M.


function Unique_Shirts (arr,N) {

    let jump= ""
    let dress=0;
    let i,k;
    for(i=0; i<N; i++){
      let compare=0;
      for(k=0; k<N; k++){
        if (arr[i]==arr[k]){
          compare++
        }
        
      }
      if (compare==1){
        jump=jump+arr[i]
        dress++
      }
    }
    return dress;
   }