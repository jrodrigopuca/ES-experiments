import makeData from './datac.mjs';
import makeGroups from './au.mjs';
import makeCorrection from './erc.mjs';
import fusion from './inter.mjs';

const data = makeData(5, "Q", 0b0010, "There\'s a frood who really knows where his towel is!");
const g1 = makeGroups(5, "Q", data);
const g2 = makeCorrection(5, "Q", g1);
const fusion1 = fusion(5,g1,g2);
console.log("fusion: ",fusion1);

//console.log("g2", g2)
//console.log("g1", g1)
//console.log("data", data)
