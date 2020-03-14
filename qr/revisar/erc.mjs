import getPoly from './polyc.mjs';


function getECC(version, lvlCorrection){
    let listECC=[{"L":7,"M":10,"Q":13,"H":17},{"L":10,"M":16,"Q":22,"H":28},{"L":15,"M":26,"Q":18,"H":22},{"L":20,"M":18,"Q":26,"H":16},{"L":26,"M":24,"Q":18,"H":22},{"L":18,"M":16,"Q":24,"H":28},{"L":20,"M":18,"Q":18,"H":26},{"L":24,"M":22,"Q":22,"H":26},{"L":30,"M":22,"Q":20,"H":24},{"L":18,"M":26,"Q":24,"H":28},{"L":20,"M":30,"Q":28,"H":24},{"L":24,"M":22,"Q":26,"H":28},{"L":26,"M":22,"Q":24,"H":22},{"L":30,"M":24,"Q":20,"H":24},{"L":22,"M":24,"Q":30,"H":24},{"L":24,"M":28,"Q":24,"H":30},{"L":28,"M":28,"Q":28,"H":28},{"L":30,"M":26,"Q":28,"H":28},{"L":28,"M":26,"Q":26,"H":26},{"L":28,"M":26,"Q":30,"H":28},{"L":28,"M":26,"Q":28,"H":30},{"L":28,"M":28,"Q":30,"H":24},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":26,"M":28,"Q":30,"H":30},{"L":28,"M":28,"Q":28,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30},{"L":30,"M":28,"Q":30,"H":30}]
    return listECC[version-1][lvlCorrection];
}


/**
 * @function correction 
 * @param {Array} values 
 */
function correction(version, lvlCorrection,values){
    let antilog=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76, 152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,1]
    //let apot0= [0, 251, 67, 46,61, 118, 70, 64, 94, 32,45]
    //let apot0=[0,215,234,158,94,184,97,118,170,79,187,152,148,252,179,5,98,96,153]
    let ecc=getECC(version, lvlCorrection);
    let apot0=getPoly(ecc);

    function convEnt(val){return antilog[val]}

    /**
     * @function makeStep: realiza los pasos para la corrección de errores en QR
     * @param {Array} v : array de valores 
     * @param {Array} a : array de potencias de a
     */
    function makeStep(v, a, ecc){
        
        let first = v[0];
        let multA= antilog.indexOf(first)
        while (v.length<ecc+1){v.push(0);}
        //if (v.length<ecc+1) {v.push(0);}

        function addA(val){return (val+multA<255)? val+multA : val+multA-255 }
        let apot=a.map(addA).map(convEnt)

        function Xor(val, index){return val^apot[index]}
        let newValues=v.map(Xor).slice(1)

        return newValues; 
    }

    
    let valN=[...values];
    for (let i=0; i<values.length; i++){
        valN=makeStep(valN,apot0,ecc);
        //console.log(`Paso ${i+1}: `,valN)
    }

    return valN;
}

//let values = [32, 91, 11,120, 209, 114, 220, 77, 67, 64, 236, 17, 236, 17, 236, 17];
/*196,  35,  39, 119, 235, 215, 231, 226, 93, 23*/

//let values=[67,85,70,134,87,38,85,194,119,50,6,18,6,103,38]
//let values=[67,85,70,134,87,38,85,194,119,50,6,18,6,103,38]
//correction(5,"Q",values);

const makeCorrection=(version, lvlCorrection, groups)=>{
    let copy0=Array.from(groups[0]);
    let copy1=Array.from(groups[1]);
    for (let i=0;i<groups[0].length;i++){
        copy0[i]=correction(version, lvlCorrection,Array.from(groups[0][i]));
    }
    for (let i=0;i<groups[1].length;i++){
        copy1[i]=correction(version, lvlCorrection,Array.from(groups[1][i]));
    }
    return [copy0, copy1];
}

export default makeCorrection;