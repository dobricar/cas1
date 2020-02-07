let n = 4;
let x ='';
x = ' '.repeat(n + 1) + '*';
    console.log(x);
for (let i = 0; i < n; i++) {
    x = ' '.repeat(n-i) + '*' +' '.repeat(2 *i + 1) + '*'; 
    console.log(x);
}
for (let i = n-2; i >= 0; i--) {
    x = ' '.repeat(n-i) + '*' +' '.repeat(2 *i + 1) + '*'; 
    console.log(x);
}
   x = ' '.repeat(n + 1) + '*';
    console.log(x);
   // x = ' '.repeat(2) + '' +'*'.repeat(n - i) + ' '; 
    //x = '*';
    
    
