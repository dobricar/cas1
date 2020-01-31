/*console.log('Hello World!');
//broj1=9;
//console.log(broj1); 
var broj1=8;
console.log(broj1);
{
    //neki blok
    //b=7;
    //console.log(b);
    let b=4;
    console.log(b);
}
{
    let a=5;
    console.log(a);
}
//a=7;
//console.log(a);
let c=6;
{
    c=7;
    console.log(c);
}

console.log('-------------');
{
    let nul=0;
    {
        let jedan=1;
        console.log(jedan,nula);
    }
    console.log(jedan,nula);
}
//Napisati primere koji prikazuju zapazanja vezana dosega imena.
//1. Primer gde postoje 2 promenljive, tipa LET gde je jedna u okruzujucem dosegu, a druga je ugnjezdenom
//2. Primer gde postoje 2 promenljive tipa VAR gde je jedna u okruzijucem a druga u ugnezdjenom
*/
{
let nova1= 5;
{let nova3= 7;
console.log(nova1,nova3);
}
}
let nova2= 555;
{
    console.log(nova2);
}

{
    var nov1= 5;
    console.log(nov1);
    }
    
    var nov2= 555;
    {
        console.log(nov2);
    }

    const konstanta="konstatna vrednost";
    console.log(konstanta);
    //konstanta="Nova vrednost";
    //console.log(konstanta);
    //const konst2;
    //console.log(konst2);

    //let prom;
    //console.log(prom);

    
   /* let tacno=true;
    console.log(tacno);

    let netacno=false;
    console.log(netacno);


console.log(!tacno);
console.log('-------');
console.log(tacno && netacno);
console.log(tacno || netacno);

let sedam=7;
console.log(sedam>7);

console.log(sedam>5 && sedam<9);

*/

//console.log(Math.PI);

/*var Obim=2*r*Math.PI;
console.log(Obim);
var povrsina=r*r*Math.PI;
console.log(povrsina);

var povrsina_lopte=4*r*r*Math.PI;
var zapremina_lopte=4/3*r*r*r*Math.PI;
console.log(povrsina_lopte,zapremina_lopte);

let r=5;
if(r>0){
console.log('ispravan unos!');
} 
*/
console.log('-----');

/*r=5;
if(r>0){
    console.log('ispravan unos');
    var obim=2*r*Math.PI;
    var povrsina=r*r*Math.PI;
}
*/

ler a=4;
if (a>0) {
    console.log('Ispravan unos');
let Pkvad=a*a;
let Okvad=4*a;
let Okocke=12*a;
let Pkocke=6*a*a;
let Zapkocke=a*a*a;
console.log(Pkocke,Pkvad,Okocke,Okvad,Zapkocke);
console.log(`Obim je ${Okocke}`);
}
else
{
    console.log('Neispravan unos');
}

