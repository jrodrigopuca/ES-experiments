const interleave=(groups)=> {
    const group1 = Array.from(groups[0]);
    const group2 = Array.from(groups[1]);
    
    const majLong = group1[0].length > group2[0].length ? group1[0].length : group2[0].length;
    
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

const fusion=(g1,g2)=>{

    console.log("g1",g1)
    console.log("g2",g2)

    const interG1= interleave(g1);
    console.log("data interr: ",interG1)
    
    const interG2= interleave(g2);
    console.log("err interr: ",interG2)

    let ngroup= interG1.concat(interG2);
    return ngroup;
}

export default fusion;