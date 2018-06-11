var gimme = function(arr) {
  if((arr[0] > arr[1] && arr[0] < arr[2]) || (arr[0] > arr[2] && arr[0] < arr[1])) {
    return 0;
  }
  else if((arr[1] > arr[0] && arr[1] < arr[2]) || (arr[1] > arr[2] && arr[1] < arr[0])) {
    return 1;
  }
  else {return 2;}
}