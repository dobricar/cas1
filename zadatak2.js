let m = 30;
let n = 4;
let zbir = 0;
let brojac = 0;
let prosek = 0;
for (let i = n; i <= m; i++) {
    if (i % 7 == 0) {
        zbir += i;
        brojac++;
        
    }
}
console.log(zbir);
console.log(brojac);


// prosek = zbir/ brojac;
// console.log(prosek);
