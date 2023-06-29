# Tennis-
Feeling bored at work, lets play Tennis while we release some stress
The Tennis Game is a simple 2D sports game where two players compete against each other in a virtual tennis match. Each player controls a paddle, which they can move vertically to hit a ball back and forth over a net. The objective of the game is to prevent the ball from hitting the player's side of the court while trying to score points by making the ball pass the opponent's paddle.

Features:

Two-player gameplay: The game supports two players, allowing them to compete against each other on the same device.
Paddle movement: Each player can control their paddle using designated keys or buttons to move it up and down.
Ball physics: The ball moves with realistic physics, bouncing off the walls, paddles, and net.
Scoring system: The game keeps track of the score for each player, incrementing it when a player fails to return the ball successfully.
Collision detection: The game detects collisions between the ball and the paddles, triggering appropriate reactions.
Visual feedback: The game provides visual feedback by displaying the score, paddles, ball, and a playing area on a colorful canvas.
Responsive design: The game is designed to adapt to different screen sizes and orientations, making it playable on various devices.
Objective:
The objective of the Tennis Game is to outscore the opponent by successfully hitting the ball over the net and preventing it from landing on the player's side of the court. Players must use their paddles to hit the ball back and forth, strategizing to outmaneuver the opponent and score points. The game continues until a predetermined score limit is reached, or players decide to end the match.

Controls:

Player A: Use the 'W' key to move the paddle up and the 'S' key to move it down.
Player B: Use the up and down arrow keys to control the paddle.

This code introduces the concept of levels, where the speed of the ball increases with each level. The level variable keeps track of the current level, and max_misses determines the number of misses allowed before the game is over. After a player reaches max_misses, the game ends, and "GAME OVER" is displayed on the screen.

Additionally, when both players reach a score of level * 3, the level increases, and the ball's speed (ball.dx and ball.dy) is multiplied by 1.1 to make it faster.

I have setup an  the HTML file sets up the basic structure of the web page, linking to the CSS file for styling and the JavaScript file for game logic. The CSS file defines some basic styles for the canvas element.

The JavaScript file handles the game logic, including paddle and ball movement, collision detection, and drawing on the canvas. It also sets up keyboard controls for the paddles and starts the game loop.

Enjoy the thrilling competition of the Tennis Game and showcase your skills on the virtual court!
