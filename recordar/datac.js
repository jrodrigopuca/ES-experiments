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


/**
 * 
 * @param {Integer} lvlCorrection 7(L),15(M),25(Q),30(H)
 * @param {Integer} sizeQR 21, 25
 * @param {Integer} mode :0001 Num, 0010 Alphanumeric, 0100 Byte, 1000 Kanji, 0111 ECI 
 * @param {String} text 
 */
function makeData(lvlCorrection, sizeQR, mode, text){
    let cantCW=16;

    // determinar la cantidad necesaria de bits para guardar la longitud
    let bLength=0;
    if (text.length<40){
        if (text.length<9){ bLength=9;
        }else if(text.length<26){ bLength=11;}
        else{bLength=13;}
    }else{
        alert("fuera de rango");
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

makeData(0,0,0b0010,"hello world");
