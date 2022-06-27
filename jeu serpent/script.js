window.onload = function () {
  var canvas;
  var ctx;
  var delay = 100;
  var canvasWidth = 900;
  var canvasHeight = 600;
  var blockSize = 30;
  var snakee;
console.log("hello")
  init();

  function init() {
    canvas = document.createElement("canvas");
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.border = "1px solid";
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    refreshCanvas();
    snakee = new Snake(
      [
        [6, 4],
        [5, 4],
        [4, 4],
      ],
      "right"
    );
  }

  function refreshCanvas() {
    ctx.fillRect(xCoord, yCoord, 100, 50);
    setTimeout(refreshCanvas, delay);
    snakee.advance();
    snakee.draw();
  }

  function drawBlock(ctx, position) {
    var x = position[0] * blockSize;
    var y = position[1] * blockSize;
    ctx.fillRect(x, y, blockSize, blockSize);
  }

  function Snake(body) {
    this.body = body;
    this.direction = direction;
    this.draw = function () {
      ctx.save();
      ctx.fillStyle = "#ff0000";
      for (var i = 0; i < this.body.length; i++) {
        drawBlock(ctx, this.body[i]);
      }
      ctx.restore();
    };
    this.advance = function () {
      var nextPosition = this.body[0].slice();
      switch (this.direction) {
        case "left":
          nextPosition[0] -= 1;
          break;
        case "right":
          nextPosition[0] += 1;
          break;
        case "down":
          nextPosition[1] -= 1;
          break;
        case "up":
          nextPosition[1] += 1;
          break;
        default:
          throw "invalid direction";
      }
      nextPosition[0] += 1;
      this.body.unshift(nextPosition);
      this.body.pop();
    };
    this.setDirection(newDirection);
    {
      var allowedDirection;
      switch (this.direction) {
        case "left":
        case "right":
          allowedDirection = ["up", "down"];
          break;
        case "down":
        case "up":
          allowedDirection = ["left", "right"];
          break;
        default:
          throw "invalid direction";
      }
      if (allowedDirection.indexOf(newDirection) > -1) {
        this.newDirection = newDirection;
      }
    }
  }
};

document.onkeydown = function handKeyDown(e) {
  var key = e.keyCode;
  var newDirection;
  switch (key) {
    case 37:
      newDirection = "Left";
      break;
    case 38:
      newDirection = "up";
      break;
    case 39:
      newDirection = "Right";
      break;
    case 40:
      newDirection = "Down";
      break;
    default:
      throw "invalid direction";
  }
};

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
}
