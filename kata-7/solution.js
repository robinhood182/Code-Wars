function capitalize(s){
  let oddString = '';
  let evenString = '';
  for(let i = 0; i < s.length; i++) {
    if(i % 2 === 1) {
    oddString += s[i].toUpperCase();
    evenString+= s[i];
    }
    else {
      oddString += s[i];
      evenString+= s[i].toUpperCase();
    }
  }
    return [evenString, oddString];
};