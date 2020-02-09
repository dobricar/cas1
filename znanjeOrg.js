// let n = 10;
// let x;
// for (let i = 0; i <= n; i++) {
//    if (i % 2 == 0 ){
//     console.log(`paran ${i}`);

// }

//     else if (i % 2 != 0){
// console.log(`neparan ${i}`);
//    }

//     }

// let n = 15;
// let k = 3;
// let a = 4;
// for (let i = k; i <= n; i++) {
//     if(i % a != 0){
//         console.log(i);

//     }

// }
// let n = 5;
// let suma = 0;
// for (let i = 1; i <=n; i++) {
//     if(i % 2 != 0) {
//     suma+= i;
//     }
// }
// console.log(suma);

// let n = 15;
// let k = 5;
// //let a = 3;
// let suma = 0;
// for (let i = k; i <= n; i++) {
//     if ((i + n) % 5 == 0 ){
//     suma += i;
//     }

//     }

//     console.log(suma);
// let n = 10;
// let k = 3;
// let suma = 0;
// let proizvod = 1;
// for (let i = k; i < n; i++) {
//     for (let j = k; j < n ; j++) {
//         proizvod += i;
//     }
//     proizvod *= i;
//     }

// console.log(proizvod);

// let n = 15;
// let k = 5;
// let brojac = 0;
// let a = 4;
// for (let i = k; i < n; i++) {
//     if (i % 2 == 0 && i % i == 0){
//         brojac++
//     }
// }
// console.log(brojac);

// let n = 15;
// let k = 3;
// let proizvod = 0;
// let brojac = 0;
// for (let i = k; i < n; i++) {
//     if(i % 5 == 0){
// proizvod += i;
//     brojac++
//     }
// }
// console.log(proizvod);
// console.log(brojac);

// let n = 10;
// let k = 4;
// let a = 6;
// let suma = 0;
// let brojac = 0;
// let aritmeticka_sredina = 0;
// for (let i = k; i < n; i++) {
//     if (i % a != 0) {
//         suma += i;
//         brojac++
//     }
// }
// aritmeticka_sredina = suma / brojac;
// console.log(aritmeticka_sredina);

// let n = 3;
// let x = '';
// x = ' '.repeat(n + 1) + '*';
// console.log(x);
// for (let i = 0; i < n; i++) {
//     x = ' '.repeat(n - i) + '*' + ' '.repeat(i) + '*'; 
//     console.log(x);
// }
// x = '*'.repeat(5);
// console.log(x);

// let n = 3;
// let x = '';
// x = ' '.repeat(n + 1) + '*';
// console.log(x);
// for (let i = 0; i < n; i++) {
//     x = ' '.repeat(n - i) + '*' + ' '.repeat(i) + '*'; 
//     console.log(x);
// }
// x = '*'.repeat(5);
// console.log(x);

// let n = 4;
// let x = '';
// x = '*'.repeat(5);
//  console.log(x);
// for (let i = n; i >= 0; i--){
//     x =  '*'.repeat(i) + ' '.repeat(n + 1 - i);
//     console.log(x);
    
// }
// let n = 4;
// let x = '';
// for (let i = 0; i < n; i++) {    
//     x = ' '.repeat(n-i) + '*'.repeat(2*i + 1);
// console.log(x);
// }
// for (let i = n; i >= 0; i--) {    
//     x = ' '.repeat(n-i) + '*'.repeat(2*i + 1);
// console.log(x);
    
// }

// let n = 5;
// let x = '';
// for (let i = 0; i < n; i++) {
//     x = '*'.repeat(i);
//     console.log(x);
// }
//     for (let i = n; i > 0; i--) {
//         x = '*'.repeat(i);
//         console.log(x);    
    
// }

// let n = 5;
// let x = '';
// for (let i = 0; i < n; i++) {
//     x = ' '.repeat(n-i) + '*'.repeat(i);
//     console.log(x);
// }
// for (let i = n; i > 0; i--) {
//     x = ' '.repeat(n-i) + '*'.repeat(i);
//     console.log(x);
// }

// let n = 5;
// let x = '';
// for (let i = 0 ; i < n; i++){
//      x = ' '.repeat(n - i) + '*'.repeat((2 * i)/2) //+ ' ' + '*'.repeat(i);
//     console.log(x);
// }
// for (let i = n; i >= 0; i--){
//     x = ' '.repeat(n-i) + '*'.repeat(2* i + 1);
//     console.log(x);
// }

let n = 5;
let suma = 0;
for (let i = 1; i <= n; i++) {
    suma += 1/(3*i);

}
    
console.log(suma);

