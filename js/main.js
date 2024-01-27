window.addEventListener('load', function () {
	var reviewContent = document.querySelector('.hero-section__review-content')
	var targetContainer = document.querySelector('.hero-section')
	var breakpoint = 1168

	function moveReviewContent() {
		if (window.innerWidth <= breakpoint) {
			targetContainer.appendChild(reviewContent)
		} else {
			var description = document.querySelector('.hero-section__description')
			description.appendChild(reviewContent)
		}
	}
	moveReviewContent()
	window.addEventListener('resize', moveReviewContent)
})
