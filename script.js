document.addEventListener('DOMContentLoaded', function () {
  // Canvas setup
  var canvas = document.getElementById('gameCanvas');
  var context = canvas.getContext('2d');
  canvas.width = 800;
  canvas.height = 600;

  // Game objects
  var paddleA = {
    x: 20,
    y: canvas.height / 2 - 50,
    width: 10,
    height: 100,
    color: '#000000',
    dy: 5
  };

  var paddleB = {
    x: canvas.width - 30,
    y: canvas.height / 2 - 50,
    width: 10,
    height: 100,
    color: '#000000',
    dy: 5
  };

  var ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 8,
    speed: 4,
    dx: 4,
    dy: 4,
    color: '#000000'
  };

  // Keyboard controls
  var keys = {
    w: false,
    s: false,
    ArrowUp: false,
    ArrowDown: false
  };

  document.addEventListener('keydown', function (event) {
    if (event.code === 'KeyW') {
      keys.w = true;
    } else if (event.code === 'KeyS') {
      keys.s = true;
    } else if (event.code === 'ArrowUp') {
      keys.ArrowUp = true;
    } else if (event.code === 'ArrowDown') {
      keys.ArrowDown = true;
    }
  });

  document.addEventListener('keyup', function (event) {
    if (event.code === 'KeyW') {
      keys.w = false;
    } else if (event.code === 'KeyS') {
      keys.s = false;
    } else if (event.code === 'ArrowUp') {
      keys.ArrowUp = false;
    } else if (event.code === 'ArrowDown') {
      keys.ArrowDown = false;
    }
  });

  // Game loop
  function update() {
    movePaddles();
    moveBall();
    collisionDetection();
    draw();
    requestAnimationFrame(update);
  }

  function movePaddles() {
    if (keys.w && paddleA.y > 0) {
      paddleA.y -= paddleA.dy;
    } else if (keys.s && paddleA.y < canvas.height - paddleA.height) {
      paddleA.y += paddleA.dy;
    }

    if (keys.ArrowUp && paddleB.y > 0) {
      paddleB.y -= paddleB.dy;
    } else if (keys.ArrowDown && paddleB.y < canvas.height - paddleB.height) {
      paddleB.y += paddleB.dy;
    }
  }

  function moveBall() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy *= -1;
    }

    if (
      ball.x + ball.radius > canvas.width - paddleB.width &&
      ball.y + ball.radius >= paddleB.y &&
      ball.y - ball.radius <= paddleB.y + paddleB.height
    ) {
      ball.dx *= -1;
    }

    if (
      ball.x - ball.radius < paddleA.width &&
      ball.y + ball.radius >= paddleA.y &&
      ball.y - ball.radius <= paddleA.y + paddleA.height
    ) {
      ball.dx *= -1;
    }
  }

  function collisionDetection() {
    if (ball.x + ball.radius > canvas.width) {
      // Player A scores
      resetBall();
    } else if (ball.x - ball.radius < 0) {
      // Player B scores
      resetBall();
    }
  }

  function resetBall() {
    ball.x = canvas.width / 2;
    ball.y = canvas.height / 2;
    ball.dx = -ball.dx;
    ball.dy = Math.random() < 0.5 ? -ball.speed : ball.speed;
  }

  function draw() {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw paddles
    context.fillStyle = paddleA.color;
    context.fillRect(paddleA.x, paddleA.y, paddleA.width, paddleA.height);
    context.fillStyle = paddleB.color;
    context.fillRect(paddleB.x, paddleB.y, paddleB.width, paddleB.height);

    // Draw ball
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
    context.fillStyle = ball.color;
    context.fill();
    context.closePath();
  }

  // Start the game loop
  update();
});
