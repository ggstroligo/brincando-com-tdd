const checkFibo = (sequence) => {
  let prev, curr, sum;
  
  sequence = sequence.map( (value, index) => {
    prev = index > 1 ? sequence[index-2] : value;
    curr = index > 0 ? sequence[index-1] : value;
    sum  = prev+curr;

    if(index <= 1){
      if(value != 1) return value = false
      else return value
    }
    else if(value != sum) return value = false
    else return value 
  });

  return sequence.every(value =>  typeof value == 'number') 
}

module.exports = {
  checkFibo: checkFibo,
}