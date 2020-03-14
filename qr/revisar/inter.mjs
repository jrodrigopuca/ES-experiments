const interleave=(groups)=> {
    const group1 = Array.from(groups[0]);
    const group2 = Array.from(groups[1]);
    
    const majLong = group2.length==0 || group1[0].length > group2[0].length ? group1[0].length : group2[0].length;
    
    const ngroup = group1.concat(group2);
    let all = []; let value=null;

    for (let j = 0; j < majLong; j++) {
        for (let i = 0; i < ngroup.length; i++) {
            //value = ngroup[i].shift()
            value = ngroup[i][j];
            if (value !== undefined) { all.push(value) }
        }
    }
    return all;
}

const fusion=(version, g1,g2)=>{

    console.log("g1",g1)
    console.log("g2",g2)

    const interG1= interleave(g1);
    console.log("data interr: ",interG1)
    
    const interG2= interleave(g2);
    console.log("err interr: ",interG2)

    let ngroup= interG1.concat(interG2);
    console.log(ngroup)
    
    let bits=ngroup.map((x)=>x.toString(2)+"")

    let remainderBits=[0,7,7,7,7,7,0,0,0,0,0,0,0,3,3,3,3,3,3,3,4,4,4,4,4,4,4,3,3,3,3,3,3,3,0,0,0,0,0,0,0]
    let remainderxVersion=remainderBits[version-1]; 
    let bitzero="0";

    return bits.join('')+bitzero.repeat(remainderxVersion);;
}

export default fusion;