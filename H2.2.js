// let i = 15;

// while(i > 0) {
//     if(i % 2 == 0)
//     console.log(i);
// }
//     i --;
// }
// let i = 4;
// for(i; i < 200; i++){
//     console.log(i);
//     if(i == 10){
//     break;
//     }
// }
//  if (i < 5){
//  console.log('Hello');
//  }

// let zbir = 0;
// for(var i = 1; i <100; i++){
//     zbir = zbir + 1;
// }
//      console.log(i);
//      console.log(zbir);

//  let proizvod = 1;
//  for(var i = 1; i <15; i++){
//      proizvod = proizvod * i;
//  }
//       console.log(i);
//       console.log(proizvod);

//  let proizvod = 1;
//  let i = 1;
//  while (i < 15) {(
//      (proizvod *= i);
//      i++;
//  }
//  console.log(i);
//  console.log(proizvod);

// let m = 10;
// let n = 19;
// if(m > n){
// let tmp = m;
// m = n;
// n = tmp;
// }

// let zbir = 0;
// for(let i = m; i <= n; i++) {
//     zbir =+ i;
// }
// console.log(zbir)

let m = 19;
let n = 2;
let y = 0;
if (m < n) {
    let x = m;
    m = n;
    n = x;
}
for (let i = n; i <= m; i++) {
   if (i % 3 == 0){
    y += i;
   }    
}
console.log(y);
