let canv = document.getElementById("canv");
let ctx = canv.getContext("2d");

canv.width = window.innerWidth;
canv.height = window.innerHeight;
let x,y,i,j;
let player = 0;
let grid = [
    ['','',''],
    ['','',''],
    ['','','']
]

canv.onmousemove = function(event){
    x = event.clientX;
    y = event.clientY;
    i = Math.floor(y/(0.33*canv.height));
    j = Math.floor(x/(0.33*canv.width));
};
canv.onmousedown = function(event){
    if(grid[i][j]==''){
        grid[i][j] = (player%2==0)?'x':'o';
        player++;
    }
    console.log(grid);
}

function draw(){
    ctx.beginPath();
    ctx.moveTo(0.33*canv.width,0);
    ctx.lineTo(0.33*canv.width,canv.height);
    ctx.stroke();
    ctx.moveTo(0.66*canv.width,0);
    ctx.lineTo(0.66*canv.width,canv.height);
    ctx.stroke();
    ctx.moveTo(0,0.33*canv.height);
    ctx.lineTo(canv.width,0.33*canv.height);
    ctx.stroke();
    ctx.moveTo(0,0.66*canv.height);
    ctx.lineTo(canv.width,0.66*canv.height);
    ctx.stroke();

    for(let i = 0;i<3;i++){
        for(let j=0;j<3;j++){
            let posX = (j)*0.33*canv.width + canv.width/12;
            let posY = (i)*0.33*canv.height + canv.height/12;
            if(grid[i][j]=='x'){
                ctx.fillStyle = "rgb(255,0,0)";
            }else if(grid[i][j]=='o'){
                ctx.fillStyle = "rgb(0,255,0)";
            }else{
                ctx.fillStyle = "rgb(255,255,255)";
            }
            ctx.fillRect(posX,posY,1/6*canv.width,1/6*canv.height);
        }
    }

    requestAnimationFrame(draw);
}

draw();