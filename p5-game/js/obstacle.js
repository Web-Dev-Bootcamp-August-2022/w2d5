class Obstacle {
	constructor(image) {
		this.image = image
		this.x = width
		this.y = (Math.random() * height) / 2.5
		this.width = 50
		this.height = 50
	}

	draw() {
		this.x--
		image(this.image, this.x, this.y, this.width, this.height)
	}

	collision(playerInfo) {
		// console.log('collision', playerInfo)
		// dist(x, y, 2ndx, 2ndy) returns the distance
		// get the middle of the obstacle
		let obstacleX = this.x + this.width / 2
		let obstacleY = this.y + this.height / 2
		// get the middle of the player
		let playerX = playerInfo.x + playerInfo.width / 2
		let playerY = playerInfo.y + playerInfo.height / 2
		if (dist(obstacleX, obstacleY, playerX, playerY) > 25) {
			return false
		} else {
			// increment the score
			game.player.score++
			console.log(game.player.score)
			return true
		}
	}
}