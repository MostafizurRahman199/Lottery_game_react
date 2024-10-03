function generateTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i <= 2; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}



function sum(arr){
  return arr.reduce((prev, current)=> prev + current, 0);
}

export { generateTicket, sum };
