// let a,b,c;
// a = 4; b= 5;
// console.log(a,b,c);

// c=a;
// a=b;
// b=c;

// console.log(a,b,c);

// let m = 10;
// let n = 5;
// let a = m;
// m = n;
// n = a;

// for (let i = 0; i < m; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }
// let m = 10;
// let n = 5;
// let a = m;
// m = n;
// n = a;
// let x = 0;
// for (let i = m; i <= n; i++){
//     if (i % 2 == 0){
//         x+=i; 
       
//     }
 
// }
//console.log(x)
// let m = 10;
// let n = 5;
// let a = m;
// m = n;
// n = a;
// for (let i = m; i <= n; i++){
//     if (i % 3 == 0){
//         console.log(i) 
//     }
 
// }

// let m = 10;
// let n = 5;
// let a = m;
// m = n;
// n = a;
// for (let i = m; i <= n; i++){
//     if (i % 3 != 0){
//         console.log(i) 
//     }
 
// }
// let m = 10;
// let n = 5;
// let a = m;
// m = n;
// n = a;
// let k = 8;
// for (let i = m; i < n; i++){
//     if ((n < k) && (k < m) && (i % k != 0){
        
//     console.log(i)
// }
// }
// // let m=5 , n = 15; brojac = 0;

// for (let index = m; index < n; index++) {
//     if(index % 3==0){
//         brojac ++
//     }
// }
    
// console.log(brojac);

// let sum = 0;
// let n = 8;
// for (let index = 1; index <= n; index++) {
    
//     sum+=1/index;
// }
// console.log(sum);

// let n = 10;
// let sum = 0;

// for (let index = 1; index < n; index++) {
//     if(index % 2 == 0){
//     sum +=1/(index **2);
//     }
// }
// console.log(sum)

// for (let index = 0; index < n; index++) {
//     if(index+=3){
//     s +=1/(index **2);
//     }
// }
// console.log(s)

// let n=5;
// let sum = 0;
// for (let i = 1; i <= n; i++ ) {
//     let fact = 1;
//     for(let j=1; j<=i; j++){
//         fact*=j;
//     }
//     sum+=fact;
// }
// console.log(sum);

// let n=5;
// let sum = 0, fact = 1;
// for (let i = 1; i <= n; i++ ) {
    
//         fact*=i;
    
//     sum+=fact;
// }
// console.log(sum);

// let n=5;
// let sum= 0, fact = 1;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 != 0){
//     fact*=i;
    
//     sum+=fact;
//     }
// }
// console.log(sum);
// let n=5;
// let sum= 0, fact = 1;
// for (let i = 1; i <= n; i++) {
//     if (i % 2 == 0){
//     fact*=i;
    
//     sum+=fact;
//     }
// }
//console.log(sum);
// let n=5;
// let sum= 0, fact = 1;
// for (let i = 1; i <= n; i++) {
//     fact*=i;
//     sum+=1/fact;
    
//     }
// console.log(sum);

let n = 5;
let x = '';
for (let i = 0; i <= n; i++) {
    x = (' '.repeat(n)) + '#'.repeat(n - i);
    console.log(x);
    
}

// let n = 5;
// let x = '';
// for (let i = 0; i >= n; i--) {
//     x = (' '.repeat(i + '*'));
//     console.log(x);
    
// }