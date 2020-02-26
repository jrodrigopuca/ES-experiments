import makeData from './datac.mjs';
import makeGroups from './au.mjs';
import makeCorrection from './erc.mjs';
import fusion from './inter.mjs';

const data = makeData(1, "M", 0b0010, "Hello World");
const g1 = makeGroups(1, "M", data);
const g2 = makeCorrection(1, "M", g1);
const fusion1 = fusion(1,g1,g2);
console.log("fusion: ",fusion1);

//console.log("g2", g2)
//console.log("g1", g1)
//console.log("data", data)
