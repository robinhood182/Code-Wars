function isNice(arr){
  if(!arr.length){
      return false;
  }
  for(let i = 0; i < arr.length; i++){
      if(arr.includes(arr[i]-1) || arr.includes(arr[i]+1)){
          continue;
      } else {
          return false
      }
  }
  return true;
}