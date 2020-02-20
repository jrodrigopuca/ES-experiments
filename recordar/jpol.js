values = [32, 91, 11,120, 209, 114, 220, 77, 67, 64, 236, 17, 236, 17, 236, 17];
ind =[15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];


function addX(val){return val+10}

xpot=[...ind]
xpot.map(addX) // [25..15]
apot0= [0, 251, 67, 46,61, 118, 70, 64, 94, 32,45]
apot=apot0

let multA=5
function addA(val){return (val+multA<255)? val+multA : val+multA-255 }
apot=apot.map(addA)

console.log(apot)

let antilog=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76, 152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,53,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,1414,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,33,88,176,125,250,233,207,131,27,54,108,216,173,71,142,1]


function convEnt(val){return antilog[val]}

apot=apot.map(convEnt)
console.log(apot)

function Xor(val, index){
    return val ^ apot[index]
}

values=values.map(Xor)
values=values.slice(1)
console.log(values)

first= values[0]

multA= antilog.indexOf(first)
//console.log(multA) 210

// paso 2
apot=apot0.map(addA)
apot=apot.map(convEnt)
console.log(apot)

values=values.map(Xor)
values=values.slice(1)
console.log(values)

//paso 3
first = values[0]
multA= antilog.indexOf(first)

apot=apot0.map(addA).map(convEnt)
console.log(apot)

values=values.map(Xor).slice(1)
console.log(values)

//paso 4
first= values[0]
multA=antilog.indexOf(first)

apot=apot0.map(addA).map(convEnt)
console.log(apot)

values=values.map(Xor).slice(1)
console.log(values)

//paso 5
first= values[0]
multA=antilog.indexOf(first)

apot=apot0.map(addA).map(convEnt)
console.log(apot)

values=values.map(Xor).slice(1)
console.log("fin paso 5",values)

//paso 6
first= values[0]
multA=antilog.indexOf(first)

apot=apot0.map(addA).map(convEnt)
console.log(apot)

values=values.map(Xor).slice(1)
console.log("fin paso 6",values)

//paso 7
first= values[0]
multA=antilog.indexOf(first)

apot=apot0.map(addA).map(convEnt)
console.log(apot)

function XorII(val, index){
    console.log(val);
    return Number(val) ^ Number(apot[index])
}

values=values.map(XorII).slice(1)
console.log("fin paso 7",values)

