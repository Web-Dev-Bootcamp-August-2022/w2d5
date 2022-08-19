class Background {
	draw() {
		// console.log('this is the background drawing', width)
		// image(game.backgroundImages[0].src, 0, 0, width, height)
		// image(game.backgroundImages[1].src, 0, 0, width, height)
		// image(game.backgroundImages[2].src, 0, 0, width, height)
		// image(game.backgroundImages[3].src, 0, 0, width, height)
		// image(game.backgroundImages[4].src, 0, 0, width, height)
		game.backgroundImages.forEach(function (img) {
			img.x -= img.speed
			image(img.src, img.x, 0, width, height)
			// here we add a second image
			image(img.src, img.x + width, 0, width, height)
			// when the image leaves the screen we replace it to the starting position
			if (img.x <= - width) img.x = 0
		})
	}
}