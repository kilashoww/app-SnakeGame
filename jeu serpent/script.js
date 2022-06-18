window.onload = function()
{
    var canvas;
    var ctx;
    var delay = 1000;
    var xCoord = 0;
    var yCoord = 0;

    init();

    function init()
    {
        canvas = document.createElement("canvas");
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        ctx = canvas.getContext('2d');
        refreshCanvas();
    }

    function refreshCanvas()
    {
        xCoord +=5;
        yCoord +=5;
        ctx.clearRect(0, 0, canvas.width, canvas.height).        
        ctx.fillStyle = "#ff0000" ;
        ctx.fillRect(xCoord, yCoord, 100, 50);
        setTimeout(refreshCanvas, delay);
    }


}





/*
var wallCollision = false;
var snakeCollision = false;
var head = this.body[0];
var rest = this.body.slice(1);
var snakeX = head [0];
var snakeY = head [1];
var minX = 0;
var minY = 0;
var maxX = widthInBlocks-1;
var maxY = heigthInBlocks-1;
var isnotBewtweenHorizontalWalls = snakeX < minX || snakeX > maxX
var isnotBewtweenVerticalWalls = snakeY < minY || snakeY > maxY

if(isnotBewtweenHorizontalWalls || isnotBewtweenVerticalWalls) {
    wallCollision = true;
}

for (var i=0; i<rest; i++){
    if(snakeX===rest[i][0] && snake)
}*/