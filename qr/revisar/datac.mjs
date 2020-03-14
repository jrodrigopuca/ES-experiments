function textDef(text) {
    return text === undefined ? "" : text;
}

function charCod(char) {
    let chars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];
    return chars.indexOf(char);
}

function complete(original, cantZeros) {
    let zeros = '0';
    zeros = zeros.padStart(cantZeros, '0');
    original = original.toString(2);
    return zeros.substr(original.length) + original;
}

function capacities(version, lvlCorrection) {
    let capacity = [{ "L": 25, "M": 20, "Q": 16, "H": 10 }, { "L": 47, "M": 38, "Q": 29, "H": 20 }, { "L": 77, "M": 61, "Q": 47, "H": 35 }, { "L": 114, "M": 90, "Q": 67, "H": 50 }, { "L": 154, "M": 122, "Q": 87, "H": 64 }, { "L": 195, "M": 154, "Q": 108, "H": 84 }, { "L": 224, "M": 178, "Q": 125, "H": 93 }, { "L": 279, "M": 221, "Q": 157, "H": 122 }, { "L": 335, "M": 262, "Q": 189, "H": 143 }, { "L": 395, "M": 331, "Q": 221, "H": 174 }, { "L": 468, "M": 366, "Q": 259, "H": 200 }, { "L": 535, "M": 419, "Q": 296, "H": 227 }, { "L": 619, "M": 483, "Q": 352, "H": 259 }, { "L": 667, "M": 528, "Q": 376, "H": 283 }, { "L": 758, "M": 600, "Q": 426, "H": 321 }, { "L": 854, "M": 656, "Q": 470, "H": 365 }, { "L": 938, "M": 734, "Q": 531, "H": 408 }, { "L": 1046, "M": 816, "Q": 574, "H": 452 }, { "L": 1153, "M": 909, "Q": 644, "H": 493 }, { "L": 1249, "M": 970, "Q": 702, "H": 557 }, { "L": 1352, "M": 1035, "Q": 742, "H": 587 }, { "L": 1460, "M": 1134, "Q": 823, "H": 640 }, { "L": 1588, "M": 1248, "Q": 890, "H": 672 }, { "L": 1704, "M": 1326, "Q": 963, "H": 744 }, { "L": 1853, "M": 1451, "Q": 1041, "H": 779 }, { "L": 1990, "M": 1542, "Q": 1094, "H": 864 }, { "L": 2132, "M": 1637, "Q": 1172, "H": 910 }, { "L": 2223, "M": 1732, "Q": 1263, "H": 958 }, { "L": 2369, "M": 1839, "Q": 1332, "H": 1016 }, { "L": 2520, "M": 1994, "Q": 1429, "H": 1080 }, { "L": 2677, "M": 2113, "Q": 1499, "H": 1150 }, { "L": 2840, "M": 2238, "Q": 1618, "H": 1226 }, { "L": 3009, "M": 2369, "Q": 1700, "H": 1307 }, { "L": 3183, "M": 2506, "Q": 1787, "H": 1394 }, { "L": 3351, "M": 2632, "Q": 1867, "H": 1431 }, { "L": 3537, "M": 2780, "Q": 1966, "H": 1530 }, { "L": 3729, "M": 2894, "Q": 2071, "H": 1591 }, { "L": 3927, "M": 3054, "Q": 2181, "H": 1658 }, { "L": 4087, "M": 3220, "Q": 2298, "H": 1774 }, { "L": 4296, "M": 3391, "Q": 2420, "H": 1852 }]
    return capacity[version - 1][lvlCorrection];
}

function getNumberCW(version, lvlCorrection) {
    let cw = [{ "L": 19, "M": 16, "Q": 13, "H": 9 }, { "L": 34, "M": 28, "Q": 22, "H": 16 }, { "L": 55, "M": 44, "Q": 34, "H": 26 }, { "L": 80, "M": 64, "Q": 48, "H": 36 }, { "L": 108, "M": 86, "Q": 62, "H": 46 }, { "L": 136, "M": 108, "Q": 76, "H": 60 }, { "L": 156, "M": 124, "Q": 88, "H": 66 }, { "L": 194, "M": 154, "Q": 110, "H": 86 }, { "L": 232, "M": 182, "Q": 132, "H": 100 }, { "L": 274, "M": 216, "Q": 154, "H": 122 }, { "L": 324, "M": 254, "Q": 180, "H": 140 }, { "L": 370, "M": 290, "Q": 206, "H": 158 }, { "L": 428, "M": 334, "Q": 244, "H": 180 }, { "L": 461, "M": 365, "Q": 261, "H": 197 }, { "L": 523, "M": 415, "Q": 295, "H": 223 }, { "L": 589, "M": 453, "Q": 325, "H": 253 }, { "L": 647, "M": 507, "Q": 367, "H": 283 }, { "L": 721, "M": 563, "Q": 397, "H": 313 }, { "L": 795, "M": 627, "Q": 445, "H": 341 }, { "L": 861, "M": 669, "Q": 485, "H": 385 }, { "L": 932, "M": 714, "Q": 512, "H": 406 }, { "L": 1006, "M": 782, "Q": 568, "H": 442 }, { "L": 1094, "M": 860, "Q": 614, "H": 464 }, { "L": 1174, "M": 914, "Q": 664, "H": 514 }, { "L": 1276, "M": 1000, "Q": 718, "H": 538 }, { "L": 1370, "M": 1062, "Q": 754, "H": 596 }, { "L": 1468, "M": 1128, "Q": 808, "H": 628 }, { "L": 1531, "M": 1193, "Q": 871, "H": 661 }, { "L": 1631, "M": 1267, "Q": 911, "H": 701 }, { "L": 1735, "M": 1373, "Q": 985, "H": 745 }, { "L": 1843, "M": 1455, "Q": 1033, "H": 793 }, { "L": 1955, "M": 1541, "Q": 1115, "H": 845 }, { "L": 2071, "M": 1631, "Q": 1171, "H": 901 }, { "L": 2191, "M": 1725, "Q": 1231, "H": 961 }, { "L": 2306, "M": 1812, "Q": 1286, "H": 986 }, { "L": 2434, "M": 1914, "Q": 1354, "H": 1054 }, { "L": 2566, "M": 1992, "Q": 1426, "H": 1096 }, { "L": 2702, "M": 2102, "Q": 1502, "H": 1142 }, { "L": 2812, "M": 2216, "Q": 1582, "H": 1222 }, { "L": 2956, "M": 2334, "Q": 1666, "H": 1276 }]
    return cw[version - 1][lvlCorrection];
}


/**
 * 
 * @param {Integer} lvlCorrection 7(L),15(M),25(Q),30(H)
 * @param {Integer} version 1-40, v1(21x21), v2(25x25),.. v40(177x177)
 * @param {Integer} mode :0001 Num, 0010 Alphanumeric, 0100 Byte, 1000 Kanji, 0111 ECI 
 * @param {String} text 
 */
function makeData(version, lvlCorrection, mode, text) {
    let capacity = capacities(version, lvlCorrection);
    let numberCW = getNumberCW(version, lvlCorrection);

    // determinar la cantidad necesaria de bits para guardar la longitud
    let bLength = 0;
    if (version < 40) {
        if (version < 9) {
            bLength = 9;
        } else if (version < 26) { bLength = 11; }
        else { bLength = 13; }
    } else {
        alert("fuera de rango");
    }

    // determinar si la long es correcta
    if (capacity < text.length) {
        alert("mucho texto para esta versión")
    }

    //modo + longitud
    //let words = complete(mode, 4) + complete(text.length, bLength);
    let words="";

    // Texto codificado
    for (let i = 0; i < text.length; i++) {

        let char1 = charCod(textDef(text[i]))
        let char2 = charCod(textDef(text[i + 1]));
        let line = char2 === -1 ? char1 : char1 * 45 + char2;

        let zeros = char2 === -1 ? 6 : 11;
        line = complete(line, zeros)

        words += line;
        //console.log(line)
        i++;
    }
    words += complete("", 4); //terminador

    // completar ceros
    while (words.length % 8 != 0) {
        words += complete("", 1);
    }

    //obtener los valores de los cw
    let arrayCW = [];
    for (let i = 0; i < words.length; i += 8) {
        arrayCW.push(parseInt(words.slice(i, i + 8), 2))
    }

    //completar cw con pads
    let last236 = false;
    while (arrayCW.length < numberCW) {
        arrayCW.push(last236 ? 17 : 236);
        last236 = !last236;
    }

    return arrayCW;
}



//makeData(1,"Q",0b0010,"hello world");
//[32, 91, 11,120, 209, 114, 220, 77, 67, 64, 236, 17, 236, 17, 236, 17];

//makeData(5, "Q", 0b0010,"hello world");

export default makeData;