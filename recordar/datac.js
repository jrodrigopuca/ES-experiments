function textDef(text){
    return text===undefined?"":text;
}


function charCod(char){
    let chars=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", " ","$","%","*","+","-",".","/",":"];
    return chars.indexOf(char);
}

function complete(original, cantZeros){
    let zeros='0';
    zeros=zeros.padStart(cantZeros,'0');
    original = original.toString(2);
    return zeros.substr(original.length)+original;
}

function capacities (version, lvlCorrection){
    let capacity=[{"L":25,"M":20,"Q":16,"H":10},{"L":47,"M":38,"Q":29,"H":20},{"L":77,"M":61,"Q":47,"H":35},{"L":114,"M":90,"Q":67,"H":50},{"L":154,"M":122,"Q":87,"H":64},{"L":195,"M":154,"Q":108,"H":84},{"L":224,"M":178,"Q":125,"H":93},{"L":279,"M":221,"Q":157,"H":122},{"L":335,"M":262,"Q":189,"H":143},{"L":395,"M":331,"Q":221,"H":174},{"L":468,"M":366,"Q":259,"H":200},{"L":535,"M":419,"Q":296,"H":227},{"L":619,"M":483,"Q":352,"H":259},{"L":667,"M":528,"Q":376,"H":283},{"L":758,"M":600,"Q":426,"H":321},{"L":854,"M":656,"Q":470,"H":365},{"L":938,"M":734,"Q":531,"H":408},{"L":1046,"M":816,"Q":574,"H":452},{"L":1153,"M":909,"Q":644,"H":493},{"L":1249,"M":970,"Q":702,"H":557},{"L":1352,"M":1035,"Q":742,"H":587},{"L":1460,"M":1134,"Q":823,"H":640},{"L":1588,"M":1248,"Q":890,"H":672},{"L":1704,"M":1326,"Q":963,"H":744},{"L":1853,"M":1451,"Q":1041,"H":779},{"L":1990,"M":1542,"Q":1094,"H":864},{"L":2132,"M":1637,"Q":1172,"H":910},{"L":2223,"M":1732,"Q":1263,"H":958},{"L":2369,"M":1839,"Q":1332,"H":1016},{"L":2520,"M":1994,"Q":1429,"H":1080},{"L":2677,"M":2113,"Q":1499,"H":1150},{"L":2840,"M":2238,"Q":1618,"H":1226},{"L":3009,"M":2369,"Q":1700,"H":1307},{"L":3183,"M":2506,"Q":1787,"H":1394},{"L":3351,"M":2632,"Q":1867,"H":1431},{"L":3537,"M":2780,"Q":1966,"H":1530},{"L":3729,"M":2894,"Q":2071,"H":1591},{"L":3927,"M":3054,"Q":2181,"H":1658},{"L":4087,"M":3220,"Q":2298,"H":1774},{"L":4296,"M":3391,"Q":2420,"H":1852}]
    return capacity[version-1][lvlCorrection];
}



/**
 * 
 * @param {Integer} lvlCorrection 7(L),15(M),25(Q),30(H)
 * @param {Integer} version 1-40, v1(21x21), v2(25x25),.. v40(177x177)
 * @param {Integer} mode :0001 Num, 0010 Alphanumeric, 0100 Byte, 1000 Kanji, 0111 ECI 
 * @param {String} text 
 */
function makeData( version,lvlCorrection, mode, text){
    let cantCW=16;

    // determinar la cantidad necesaria de bits para guardar la longitud
    let bLength=0;
    if (version<40){
        if (version<9){ bLength=9;
        }else if(version<26){ bLength=11;}
        else{bLength=13;}
    }else{
        alert("fuera de rango");
    }

    // determinar si la long es correcta
    if (capacities(version,lvlCorrection)<text.length){
        alert("mucho texto para esta versión")
    }

    //modo + longitud
    let words=complete(mode,4)+complete(text.length,bLength);

    // Texto codificado
    for (let i=0; i<text.length;i++){

        let char1= charCod(textDef(text[i]))
        let char2= charCod(textDef(text[i+1]));
        let line= char2===-1?char1:char1*45+char2;
        
        let zeros= char2===-1?6:11; 
        line=complete(line,zeros) 
        
        words+=line;
        //console.log(line)
        i++;
    }
    words += complete("",4); //terminador
    
    // completar ceros
    while (words.length % 8 != 0){
        words+=complete("",1);
    }

    //obtener los valores de los cw
    let arrayCW =[];
    for (let i=0; i<words.length; i+=8){
        arrayCW.push(parseInt(words.slice(i,i+8),2))
    }

    //completar cw con pads
    let last236=false;
    while (arrayCW.length<cantCW){
        arrayCW.push(last236?17:236);
        last236=!last236;
    }

    console.log(arrayCW)

}

//[32, 91, 11,120, 209, 114, 220, 77, 67, 64, 236, 17, 236, 17, 236, 17];

makeData(1,"Q",0b0010,"hello world");
