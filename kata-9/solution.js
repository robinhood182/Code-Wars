function disemvowel(str) {
  const regex = /[aeiou]/gi;
  let res = str.replace(regex, '');
  
  return res;
}