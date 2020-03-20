class QR {
    version: number;
    text: string;
    lvlCorrection: string;
    mode: number;
    ccm: number;
    capacity: any;
    
    constructor(text:string, version:number, lvlCorrection:string) {
        this.text = text;
        this.version = version;
        this.lvlCorrection = lvlCorrection;
        this.mode = 0b0100;
        this.ccm = 0; //character count mode
    }

    complete(original:number, nZeros:number){
        let zeros = '0';
        zeros = zeros.padStart(nZeros, '0');
        let newText = original.toString(2);
        return zeros.substr(newText.length) + newText;
    }

    firstPart(){
        let capacity = [{ "L": 17, "M": 14, "Q": 11, "H": 7 }, { "L": 32, "M": 26, "Q": 20, "H": 14 }, { "L": 53, "M": 42, "Q": 32, "H": 24 }, { "L": 78, "M": 62, "Q": 46, "H": 34 }, { "L": 106, "M": 84, "Q": 60, "H": 44 }, { "L": 134, "M": 106, "Q": 74, "H": 58 }, { "L": 154, "M": 122, "Q": 86, "H": 64 }, { "L": 192, "M": 152, "Q": 108, "H": 84 }, { "L": 230, "M": 180, "Q": 130, "H": 98 }, { "L": 271, "M": 213, "Q": 151, "H": 119 }, { "L": 321, "M": 251, "Q": 177, "H": 137 }, { "L": 367, "M": 287, "Q": 203, "H": 155 }, { "L": 425, "M": 331, "Q": 241, "H": 177 }, { "L": 458, "M": 362, "Q": 258, "H": 194 }, { "L": 520, "M": 412, "Q": 292, "H": 220 }, { "L": 586, "M": 450, "Q": 322, "H": 250 }, { "L": 644, "M": 504, "Q": 364, "H": 280 }, { "L": 718, "M": 560, "Q": 394, "H": 310 }, { "L": 792, "M": 624, "Q": 442, "H": 338 }, { "L": 858, "M": 666, "Q": 482, "H": 382 }, { "L": 929, "M": 711, "Q": 509, "H": 403 }, { "L": 1003, "M": 779, "Q": 565, "H": 439 }, { "L": 1091, "M": 857, "Q": 611, "H": 461 }, { "L": 1171, "M": 911, "Q": 661, "H": 511 }, { "L": 1273, "M": 997, "Q": 715, "H": 535 }, { "L": 1367, "M": 1059, "Q": 751, "H": 593 }, { "L": 1465, "M": 1125, "Q": 805, "H": 625 }, { "L": 1528, "M": 1190, "Q": 868, "H": 658 }, { "L": 1628, "M": 1264, "Q": 908, "H": 698 }, { "L": 1732, "M": 1370, "Q": 982, "H": 742 }, { "L": 1840, "M": 1452, "Q": 1030, "H": 790 }, { "L": 1952, "M": 1538, "Q": 1112, "H": 842 }, { "L": 2068, "M": 1628, "Q": 1168, "H": 898 }, { "L": 2188, "M": 1722, "Q": 1228, "H": 958 }, { "L": 2303, "M": 1809, "Q": 1283, "H": 983 }, { "L": 2431, "M": 1911, "Q": 1351, "H": 1051 }, { "L": 2563, "M": 1989, "Q": 1423, "H": 1093 }, { "L": 2699, "M": 2099, "Q": 1499, "H": 1139 }, { "L": 2809, "M": 2213, "Q": 1579, "H": 1219 }, { "L": 2953, "M": 2331, "Q": 1663, "H": 1273 }];
    
        this.capacity = capacity[this.version - 1][this.lvlCorrection];
    
        //character count mode
        if (this.version < 40) {
            if (this.version < 9) {
                this.ccm = 8;
            } else if (this.version < 26) { this.ccm = 16; }
            else { this.ccm = 16; }
        } else {
            alert("fuera de rango");
        }
        return {"capacity":this.capacity,"ccm":this.ccm};
    }


    msgEncoding(){
        let msgCod=[];
        for (let i=0; i<this.text.length; i++){
            msgCod.push(this.text.charCodeAt(i).toString(2));
        }
        return msgCod;
    }
    
    errorEncoding(){
    }
    
    formatInfo(){
    }

}

let qr = new QR("Hello world!", 1, "Q")
console.log(qr.firstPart());
console.log("mensaje: ",qr.msgEncoding())
