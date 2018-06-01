function insertDash(num) {
  let newNum = num.toString().split('');
   for(let i = 0; i < newNum.length; i++) {
     if(newNum[i] % 2 !== 0 && newNum[i + 1] % 2 !== 0) {
       newNum.splice((i + 1), 0, '-');
       i++;
     }
   }
   if(newNum[newNum.length - 1] === '-') {
     newNum.pop();
   }
     return newNum.join('');
 }