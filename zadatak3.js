// let n = 3;
// let x ='';
// let vrh = ' '.repeat(n + 1) + '*';
//     console.log(vrh);
// for (let i = 0; i < n; i++) {
//     x = ' '.repeat(n-i) + '*' +' '.repeat(2 * i + 1) + '*'; 
//     console.log(x);
// }
// for (let i = n - 2; i >=0; i--) {
//     x = ' '.repeat(n-i) + '*' +' '.repeat(2 *i + 1) + '*'; 
//     console.log(x);
// }
//    console.log(vrh);
   

  // x = ' '.repeat(2) + '' +'*'.repeat(n - i) + ' '; 
    //x = '*';
    
    // let n=4;

    // for(let i=(n-1);i>=0;i--) {
    //    for(let j=0;j<i;j++) {
    //     console.log(' ');
    //    }
    //    console.log('*');
       
    //    for(let k=0;k<(n-1)-i;k++){
    //     console.log(' ');
    //    }
    //    if(n-1-i > 0){
    //     console.log('*')
    //    }
    // }    

//     let n=4;
// let screen = '';
// for(let i=(n-1);i>=0;i--) {
// 	screen ='';
//    for(let j=0;j<i;j++) {
// 	screen+=' ';
//    }
//    screen+='*';
   
//    for(let k=0;k<(n-1)-i;k++){
// 	screen+=' ';
//    }
//    if(n-1-i > 0){
// 	screen+='*';
//    }
//    console.log(screen);
   
// }

    
// let n = 12;
// let x = '';
// let dno = '';
// let vrh = '';
// vrh = ' '.repeat(n + 1) + '*';
// console.log(vrh);

// for (let i = 0; i < n; i++) {
//     x = ' '.repeat(n-i) + '*' + ' '.repeat(2 * i + 1) + '*';
//     console.log(x);

// }

//     dno = '*'.repeat(n *2 + 3);
//     console.log(dno);
    
let n = 5;
let x = '';
let z = '';
let y = '';
y = '*'.repeat(n + 2);
 z = ' '.repeat(n + 1) + '*'.repeat(n + 2);
console.log(z);
for (let i = 0; i < n; i++) {
    
    x = ' '.repeat(n-i) + '*' + ' '.repeat(n) + '*';
    console.log(x);
    
}
console.log(y);


