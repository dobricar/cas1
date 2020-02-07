let m = 20;
let n = 4;
let zbir = 0;
let brojac = 0;
for (let i = n; i <= m; i++) {
if (i % 7 == 0){
zbir += i;
brojac++;
zbir = zbir/brojac;
}
}
console.log(zbir);
