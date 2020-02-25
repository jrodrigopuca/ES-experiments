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
    console.log(this.board);
}

QR.prototype.change= function (){
    const darkPoint=darkModule(this.version);
    this.board[darkPoint[0]][darkPoint[1]]=1;
    /*
    * patrón de búsqueda (7-5-3):
    * - superior iqz: 0,0
    * - superior der: sizeQR-1-7,0
    * - inferior izq: 0, sizeQR-7-1
    * */
    for (let i=0;i<7;i++){
        //[row,col]
        this.board[i][0]=1;
        this.board[i][6]=1;
        this.board[this.d-1-i][0]=1;
        this.board[this.d-1-i][6]=1;
        this.board[i][this.d-7]=1;
        this.board[i][this.d-1]=1;

        this.board[0][i]=1;
        this.board[6][i]=1;
        this.board[0][this.d-1-i]=1;
        this.board[6][this.d-1-i]=1;
        this.board[this.d-7][i]=1;
        this.board[this.d-1][i]=1;
    }
}

QR.prototype.draw = function () {

    
    for (let i = 0; i < this.w; i++) {
        for (let j = 0; j < this.h; j++) {
            ctx.beginPath();
            ctx.rect(j * 20, i * 20, 20, 20);
            ctx.fillStyle = this.board[i][j]===0?"white":"black";
            ctx.fill();
            ctx.lineWidth = .3;
            ctx.strokeStyle = "black";
            ctx.stroke();
            //console.log(i, j)
            ctx.closePath();
        }
    }
    
}

let myQR = new QR(1);
myQR.draw();