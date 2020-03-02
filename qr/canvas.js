const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function sizeQR(version) {
    return ((version - 1) * 4) + 21;
}

function darkModule(version) {
    return [((version * 4) + 9), 8]
}

function QR(version) {
    this.version = version;
    const dimension = sizeQR(version);
    this.w = dimension;
    this.h = dimension;
    this.d = dimension;
    this.board = [];

    for (let i = 0; i < this.w; i++) {
        const row = [];
        this.board.push(row);
        for (let j = 0; j < this.h; j++) {
            const col = 0;
            row.push(col);
        }
    }


    this.change();
    //console.info(this.board);
}

QR.prototype.change = function () {
    const alignLocation = [[6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]]

    /** Patrón de búsqueda */
    for (let i = 0; i < 7; i++) {
        //[row,col]
        // cuadrado arriba izq 
        this.board[i][0] = 4;
        this.board[i][6] = 4;
        this.board[0][i] = 4;
        this.board[6][i] = 4;
        // separador arriba izq
        this.board[i][7] = 2;
        this.board[7][i] = 2;
        this.board[7][7] = 2;

        // cuadrado abajo izq 
        this.board[this.d - 1 - i][0] = 4;
        this.board[this.d - 1 - i][6] = 4;
        this.board[this.d - 7][i] = 4;
        this.board[this.d - 1][i] = 4;
        // separador abajo izq
        this.board[this.d - 1 - i][7] = 2;
        this.board[this.d - 8][i] = 2;
        this.board[this.d - 8][7] = 2;

        // cuadrado arriba der
        this.board[i][this.d - 7] = 4;
        this.board[i][this.d - 1] = 4;
        this.board[0][this.d - 1 - i] = 4;
        this.board[6][this.d - 1 - i] = 4;
        // separador arriba der
        this.board[i][this.d - 8] = 2;
        this.board[7][this.d - 1 - i] = 2;
        this.board[7][this.d - 8] = 2;

        // cuadrados 3x3
        if (i > 1 && i < 5) {
            // cuadrado arriba izq (3x3)
            this.board[2][i] = 4;
            this.board[3][i] = 4;
            this.board[4][i] = 4;
            // cuadrado abajo izq (3x3)
            this.board[this.d - 5][i] = 4;
            this.board[this.d - 4][i] = 4;
            this.board[this.d - 3][i] = 4;
            // cuadrado arriba der (3x3)
            this.board[2][this.d - 1 - i] = 4;
            this.board[3][this.d - 1 - i] = 4;
            this.board[4][this.d - 1 - i] = 4;

        }
        //cuadrados blanco 4x4
        if (i > 0 && i < 6) {
            // arriba izq
            this.board[i][1] = 2;
            this.board[i][5] = 2;
            this.board[1][i] = 2;
            this.board[5][i] = 2;
            // abajo izq
            this.board[this.d - 1 - i][1] = 2;
            this.board[this.d - 1 - i][5] = 2;
            this.board[this.d - 6][i] = 2;
            this.board[this.d - 2][i] = 2;
            // arriba der
            this.board[i][this.d - 6] = 2;
            this.board[i][this.d - 2] = 2;
            this.board[1][this.d - 1 - i] = 2;
            this.board[5][this.d - 1 - i] = 2;
        }
    }


    // modulo dark
    const darkPoint = darkModule(this.version);
    this.board[darkPoint[0]][darkPoint[1]] = 4;

    // patrón de alineación
    if (this.version >= 2) {
        let pointsA = alignLocation[this.version - 2];
        console.log(pointsA);

        for (let i = 0; i < pointsA.length; i++) {
            for (let j = 0; j < pointsA.length; j++) {
                if (this.board[pointsA[i]][pointsA[j]] == 0) {
                    this.board[pointsA[i]][pointsA[j]] = 4;
                    const poi = pointsA[i];
                    const poj = pointsA[j];

                    //lineas horizontales cuadrado 5x5
                    for (k = poj - 2; k < poj + 3; k++) {
                        this.board[poi - 2][k] = 4;
                        this.board[poi + 2][k] = 4;

                        if (k > poj - 2 && k < poj + 2) {
                            this.board[poi - 1][k] = 2;
                            this.board[poi + 1][k] = 2;
                        }


                    }

                    for (k = poi - 2; k < poi + 3; k++) {
                        //lineas verticales cuadrado 5x5
                        this.board[k][poj - 2] = 4;
                        this.board[k][poj + 2] = 4;

                        //lineas verticales cuadrado blanco 3x3
                        if (k > poi - 2 && k < poi + 2) {
                            this.board[k][poj - 1] = 2;
                            this.board[k][poj + 1] = 2;
                        }

                    }
                }

            }
        }
    }

    // patrones de sincronización
    for (let i = 7; i < this.d - 7; i++) {
        if (i % 2 === 0) {
            this.board[6][i] = 4;
            this.board[i][6] = 4;
        }
        else {
            this.board[6][i] = 2;
            this.board[i][6] = 2;
        }
    }

    //información de area
    if (this.version < 7) {
        for (let i = 0; i < 8; i++) {
            // información de area (arriba izq)
            if (i != 6) {
                this.board[i][8] = 3;
                this.board[8][i] = 3;
                this.board[8][8] = 3;
            }

            // información de area (abajo izq)
            if (this.board[this.d - 1 - i][8] != 4) { this.board[this.d - 1 - i][8] = 3; }

            // información de area (arriba der)
            this.board[8][this.d - 1 - i] = 3;
        }
    }
    else {
        for (let i = 0; i < 6; i++) {
            this.board[this.d - 9][i] = 3;
            this.board[this.d - 10][i] = 3;
            this.board[this.d - 11][i] = 3;

            this.board[i][this.d - 9] = 3;
            this.board[i][this.d - 10] = 3;
            this.board[i][this.d - 11] = 3;
        }
    }

    this.loadData();
}




QR.prototype.loadData = function () {

    let train = "01000011111101101011011001000110010101011111011011100110111101110100011001000010111101110111011010000110000001110111011101010110010101110111011000110010110000100010011010000110000001110000011001010101111100100111011010010111110000100000011110000110001100100111011100100110010101110001000000110010010101100010011011101100000001100001011001010010000100010001001011000110000001101110110000000110110001111000011000010001011001111001001010010111111011000010011000000110001100100001000100000111111011001101010101010111100101001110101111000111110011000111010010011111000010110110000010110001000001010010110100111100110101001010110101110011110010100100110000011000111101111011011010000101100100111111000101111100010010110011101111011111100111011111001000100001111001011100100011101110011010101111100010000110010011000010100010011010000110111100001111111111011101011000000111100110101011001001101011010001101111010101001001101111000100010000101000000010010101101010001101101100100000111010000110100011111100000010000001101111011110001100000010110010001001111000010110001101111011000000000";

    let lim = 0;
    let limMax = train.length;

    for (let j = this.d - 1; j >= 0; j = j - 2) {
        if (j % 4 == 0) {
            for (let i = this.d - 1; i >= 0 && lim < limMax; i--) {
                //console.log(i, j);

                if (this.board[i][j] == 0 && lim < limMax) {
                    this.board[i][j] = Number(train[lim]);
                    lim = lim + 1;
                }

                if (this.board[i][j - 1] == 0 && lim < limMax) {
                    this.board[i][j - 1] = Number(train[lim]);
                    lim = lim + 1;
                }
            }
        }
        else {
            for (let i = 0; i <= this.d - 1 && lim < limMax; i++) {
                //console.log(i, j);
                if (this.board[i][j] == 0 && lim < limMax) {
                    this.board[i][j] = Number(train[lim]);
                    lim = lim + 1;
                }

                if (this.board[i][j - 1] == 0 && lim < limMax) {
                    this.board[i][j - 1] = Number(train[lim]);
                    lim = lim + 1;
                }
            }
        }


    }

    this.mask();
}

QR.prototype.mask = function () {
    for (let j = 0; j < this.d; j++) {
        for (let i = 0; i < this.d; i++) {
            if ((i + j) % 2 == 0) {
                switch (this.board[i][j]) {
                    case 0: this.board[i][j] = 1; break;
                    case 1: this.board[i][j] = 0; break;
                    //default: console.log("hi");
                }
            }
        }
    }

    //remplazar información de area

    if (this.version < 7) {
        let info = "011010101011111";
        let ii = 0; let iii = 0;
        this.board[8][8] = Number(info[7]) == 1 ? 4 : 2;
        for (let i = 0; i < 8; i++) {
            // información de area (arriba izq)
            if (i != 6) {
                //console.log(info[i])
                this.board[8][i] = Number(info[ii]) == 1 ? 4 : 2;
                ii++;
            }

            if (i != 1) {
                this.board[7 - i][8] = Number(info[7 + i]) == 1 ? 4 : 2;
            }

            // información de area (abajo izq)
            if (this.board[this.d - 1 - i][8] != 4) { this.board[this.d - 1 - i][8] = Number(info[i]) == 1 ? 4 : 2;; }

            // información de area (arriba der)
            this.board[8][this.d - 1 - i] = Number(info[info.length -1- i]) == 1 ? 4 : 2;;
        }
    }


}


QR.prototype.getColor = function (number) {
    let value = null;
    /*
    switch (number) {
        case 0: value = "white"; break;
        case 1: value = "black"; break;
        case 2: value = "antiquewhite"; break;//  espacios en blanco de patrones
        case 3: value = "lightskyblue"; break; //información
        case 4: value = "gray"; break;//"gray"; patrones
        default: value = "white";
    }
    */
    
    switch (number) {
        case 0: value = "white"; break;
        case 1: value = "black"; break;
        case 2: value = "white"; break;//  espacios en blanco de patrones
        case 3: value = "white"; break; //información
        case 4: value = "black"; break;//"gray"; patrones
        default: value = "white";
    }
    
    return value;

}

QR.prototype.draw = function () {

    const sizeRect = ctx.canvas.width / this.d;
    for (let i = 0; i < this.w; i++) {
        for (let j = 0; j < this.h; j++) {
            ctx.beginPath();
            ctx.rect(j * sizeRect, i * sizeRect, sizeRect, sizeRect);
            ctx.fillStyle = this.getColor(this.board[i][j])
            //this.board[i][j]===1?"black":"white";
            ctx.fill();
            //ctx.lineWidth = .3;
            //ctx.strokeStyle = "black";
            //ctx.stroke();
            ctx.closePath();
        }
    }

}

let myQR = new QR(1);
myQR.draw();