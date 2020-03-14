import makeData from './datac.mjs';
import makeGroups from './au.mjs';
import makeCorrection from './erc.mjs';
import fusion from './inter.mjs';


function all(version, lvlCorrection, text){
    const data = makeData(version, lvlCorrection, 0b0010, text);
    const g1 = makeGroups(version, lvlCorrection, data);
    const g2 = makeCorrection(version, lvlCorrection, g1);
    const fusion1 = fusion(5,g1,g2);
    console.log("fusion: ",fusion1);
}

//"There\'s a frood who really knows where his towel is!"
export default all;