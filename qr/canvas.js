const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function sizeQR(version){
    return ((version-1)*4)+21;
}

function darkModule(version){
    return [((version*4)+9),8]
}

function QR(version) {
    this.version= version;
    const dimension = sizeQR(version);
    this.w = dimension;
    this.h = dimension;
    this.d= dimension;
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

QR.prototype.change= function (){
    const alignLocation=[[6,18],[6,22],[6,26],[6,30],[6,34],[6, 22, 38],[6, 24, 42],[6,	26,	46],[6,	28,	50],[6,	30,	54],[6,	32,	58],[6,	34,	62],[6,	26,	46,	66],[6,	26,	48,	70],[6,	26,	50,	74],[6,	30,	54,	78],[6,	30,	56,	82],[6,	30,	58,	86],[6,	34,	62,	90],[6,	28,	50,	72,	94],[6,	26,	50,	74,	98],[6,	30,	54,	78,	102],[6,	28,	54,	80,	106],[6,	32,	58,	84,	110],[6,	30,	58,	86,	114],[6,	34,	62,	90,	118],[6,	26,	50,	74,	98,	122],[6,	30,	54,	78,	102,	126],[6,	26,	52,	78,	104,	130],[6,	30,	56,	82,	108,	134],[6,	34,	60,	86,	112,	138],[6,	30,	58,	86,	114,	142],[6,	34,	62,	90,	118,	146],[6,	30,	54,	78,	102,	126,	150],[6,	24,	50,	76,	102,	128,	154],[6,	28,	54,	80,	106,	132,	158],[6,	32,	58,	84,	110,	136,	162],[6,	26,	54,	82,	110,	138,	166],[6,	30,	58,	86,	114,	142,	170]]

    // modulo dark
    const darkPoint=darkModule(this.version);
    this.board[darkPoint[0]][darkPoint[1]]=1;

    /** Patrón de búsqueda */
    for (let i=0;i<7;i++){
        //[row,col]
        // cuadrado arriba izq 
        this.board[i][0]=1;
        this.board[i][6]=1;
        this.board[0][i]=1;
        this.board[6][i]=1;
        // separador arriba izq
        this.board[i][7]=2;
        this.board[7][i]=2;
        this.board[7][7]=2;

        // cuadrado abajo izq 
        this.board[this.d-1-i][0]=1;
        this.board[this.d-1-i][6]=1;
        this.board[this.d-7][i]=1;
        this.board[this.d-1][i]=1;
        // separador abajo izq
        this.board[this.d-1-i][7]=2;
        this.board[this.d-8][i]=2;
        this.board[this.d-8][7]=2;

        // cuadrado arriba der
        this.board[i][this.d-7]=1;
        this.board[i][this.d-1]=1;       
        this.board[0][this.d-1-i]=1;
        this.board[6][this.d-1-i]=1;
        // separador arriba der
        this.board[i][this.d-8]=2;
        this.board[7][this.d-1-i]=2;
        this.board[7][this.d-8]=2;

        // cuadrados 3x3
        if(i>1 && i<5){
            // cuadrado arriba izq (3x3)
            this.board[2][i]=1;
            this.board[3][i]=1;
            this.board[4][i]=1;
            // cuadrado abajo izq (3x3)
            this.board[this.d-5][i]=1;
            this.board[this.d-4][i]=1;
            this.board[this.d-3][i]=1;
            // cuadrado arriba der (3x3)
            this.board[2][this.d-1-i]=1;
            this.board[3][this.d-1-i]=1;
            this.board[4][this.d-1-i]=1;

        }
    }

    //información de area
    if (this.version<7){
        for (let i=0; i<9; i++){
            // información de area (arriba izq)
            this.board[i][8]=3;
            this.board[8][i]=3;
            // información de area (abajo izq)
            if (this.board[this.d-1-i][8]!=1) {this.board[this.d-1-i][8]=3;}
            this.board[this.d-9][i]=3;
            // información de area (arriba der)
            this.board[i][this.d-9]=3;
            this.board[8][this.d-1-i]=3;
        }
    }

    // patrones de sincronización
    for (let i=0;i<this.d; i=i+2){
        this.board[6][i]=1;
        this.board[i][6]=1;
    }

    // patrón de alineación
    if (this.version>=2){
        let pointsA=alignLocation[this.version-2];
        console.log(pointsA);

        for (let i=0; i<pointsA.length; i++){
            for (let j=0; j<pointsA.length; j++){
                if (this.board[pointsA[i]][pointsA[j]]==0){
                    this.board[pointsA[i]][pointsA[j]]=1;
                    const poi=pointsA[i];
                    const poj=pointsA[j];

                    //lineas verticales cuadrado 5x5
                    for (k=poi-2;k<poi+3;k++){

                        this.board[k][poj-2]=1;
                        this.board[k][poj+2]=1;
                    }
                    //lineas horizontales cuadrado 5x5
                    for (k=poj-2;k<poj+3;k++){
                        this.board[poi-2][k]=1;
                        this.board[poi+2][k]=1;

                    }
                }
                
            }
        }
        console.log("haz algo")       
    }


}

QR.prototype.draw = function () {
    
    const sizeRect= ctx.canvas.width/this.d;
    for (let i = 0; i < this.w; i++) {
        for (let j = 0; j < this.h; j++) {
            ctx.beginPath();
            ctx.rect(j * sizeRect, i * sizeRect, sizeRect, sizeRect);
            ctx.fillStyle = this.board[i][j]===1?"black":"white";
            ctx.fill();
            ctx.lineWidth = .3;
            ctx.strokeStyle = "black";
            ctx.stroke();
            //console.log(i, j)
            ctx.closePath();
        }
    }
    
}

let myQR = new QR(9);
myQR.draw();