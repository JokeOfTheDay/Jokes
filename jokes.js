const setupElement = document.getElementById("setup");
const punchlineElement = document.getElementById("punchline");
const punchlineReveal = document.getElementById("punchline-reveal");
const explanationElement = document.getElementById("explanation");
const explanationReveal = document.getElementById("explanation-reveal");
const explanationBox = document.querySelector(".explanation-box");
const dateElement = document.getElementById("date");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");
const todayBtn = document.getElementById("today-btn");
const shareBtn = document.getElementById("share-btn");
const ratingStars = document.querySelectorAll(".star");
const averageRatingElement = document.getElementById("average-rating");
const dundunduuuun = new Audio("sounds/dundunduuuuun.mp4");
const commentBtn = document.getElementById("comment-btn");
const commentPanel = document.getElementById("comment-panel");
const commentNameInput = document.getElementById("comment-name");
const commentTextarea = document.getElementById("comment-text");
const commentSubmitBtn = document.getElementById("comment-submit-btn");
const commentCharCount = document.getElementById("comment-char-count");
let imageClickCount = 0;

// Rating and Comment API endpoint
const API = "https://joke-ratings.maartenvanbosbeke.workers.dev";

function dateKey(date) {
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, "0");
	const day = String(date.getDate()).padStart(2, "0");
	return `${year}-${month}-${day}`;
}

function formatDate(date) {
	return new Intl.DateTimeFormat("en-US", {
		weekday: "long",
		month: "long",
		day: "numeric",
		year: "numeric"
	}).format(date);
}

const todayKey = dateKey(new Date());
const availableJokes = jokes
	.filter(joke => joke.date <= todayKey)
	.sort((a, b) => b.date.localeCompare(a.date));

let currentIndex = 0;

// Get user's stored rating for a joke
function getUserRating(jokeDate) {
	const stored = localStorage.getItem(`joke-rating-${jokeDate}`);
	return stored ? parseFloat(stored) : null;
}

// Store user's rating for a joke
function storeUserRating(jokeDate, rating) {
	localStorage.setItem(`joke-rating-${jokeDate}`, rating);
}

// Update the star display based on current rating (supports half stars)
function updateStarDisplay(rating) {
	ratingStars.forEach(star => {
		const starValue = parseInt(star.getAttribute("data-value"));
		if (rating >= starValue) {
			star.classList.remove("half");
			star.classList.add("active");
		} else if (rating > starValue - 1) {
			star.classList.add("half");
			star.classList.remove("active");
		} else {
			star.classList.remove("active", "half");
		}
	});
}

// Fetch and display average rating for a joke
async function fetchAndDisplayAverageRating(jokeDate) {
	try {
		const response = await fetch(`${API}/rating?date=${jokeDate}`);
		const data = await response.json();

		if (data.average && data.count > 0) {
			const average = data.average.toFixed(1);
			const count = data.count;
			averageRatingElement.innerHTML = `
				<div>
					<div class="stars-display">
						<span class="yellow-star">★</span>
						<span>${average} / 5</span>
					</div>
					<div class="rating-text">(${count} ${count === 1 ? "vote" : "votes"})</div>
				</div>
			`;
		} else {
			averageRatingElement.innerHTML = "<div><div class=\"rating-text\">No votes yet</div></div>";
			updateStarDisplay(null);
		}
	} catch (error) {
		console.error("Could not load average rating:", error);
		averageRatingElement.innerHTML = "<div><div class=\"rating-text\">No votes yet</div></div>";
		updateStarDisplay(null);
	}
}


// Submit a rating to the API
async function submitRating(jokeDate, rating) {
	try {
		const response = await fetch(`${API}/rating`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				date: jokeDate,
				rating: rating
			})
		});

		if (response.ok) {
			storeUserRating(jokeDate, rating);
			await fetchAndDisplayAverageRating(jokeDate);
		}
	} catch (error) {
		console.error("Could not submit rating:", error);
	}
}

function showJoke(index) {
	const joke = availableJokes[index];
	imageClickCount = 0;

	if (joke) {
		setupElement.textContent = joke.setup;

		if (Array.isArray(joke.image)) {
			punchlineElement.textContent = joke.punchline;
		} else {
			punchlineElement.textContent = joke.punchline;
		}

		explanationElement.textContent = joke.explanation;
		dateElement.textContent = formatDate(new Date(`${joke.date}T12:00:00`));
		punchlineReveal.classList.remove("hidden");
		punchlineElement.classList.add("hidden");
		explanationBox.classList.add("hidden");
		explanationElement.classList.add("hidden");
		explanationReveal.classList.remove("hidden");

		updateStarDisplay(null);
		fetchAndDisplayAverageRating(joke.date);
	}

	if (index <= 0) {
		nextBtn.classList.add("hidden");
	} else {
		nextBtn.classList.remove("hidden");
	}

	if (index >= availableJokes.length - 1) {
		prevBtn.classList.add("hidden");
	} else {
		prevBtn.classList.remove("hidden");
	}
}


showJoke(currentIndex);

punchlineReveal.addEventListener("click", () => {
	const joke = availableJokes[currentIndex];

	if (joke.image) {
		imageClickCount = 1;
		dundunduuuun.play();
		punchlineElement.innerHTML = `<img src="${joke.image[0]}" alt="punchline" class="punchline-image fullscreen">`;
		punchlineReveal.classList.add("hidden");
		punchlineElement.classList.remove("hidden");
	} else {
		punchlineReveal.classList.add("hidden");
		punchlineElement.classList.remove("hidden");
		explanationBox.classList.remove("hidden");
	}
});

explanationReveal.addEventListener("click", () => {
	explanationReveal.classList.add("hidden");
	explanationElement.classList.remove("hidden");
});

prevBtn.addEventListener("click", () => {
	if (currentIndex < availableJokes.length - 1) {
		currentIndex++;
		showJoke(currentIndex);
		if (!commentPanel.classList.contains("hidden")) {
			fetchAndDisplayComments(availableJokes[currentIndex].date);
		}
	}
});

nextBtn.addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex--;
		showJoke(currentIndex);
		if (!commentPanel.classList.contains("hidden")) {
			fetchAndDisplayComments(availableJokes[currentIndex].date);
		}
	}
});

randomBtn.addEventListener("click", () => {
	let randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * availableJokes.length);
	} while (randomIndex === currentIndex && availableJokes.length > 1);
	currentIndex = randomIndex;
	showJoke(currentIndex);
	if (!commentPanel.classList.contains("hidden")) {
		fetchAndDisplayComments(availableJokes[currentIndex].date);
	}
});

todayBtn.addEventListener("click", () => {
	currentIndex = 0;
	showJoke(currentIndex);
	if (!commentPanel.classList.contains("hidden")) {
		fetchAndDisplayComments(availableJokes[currentIndex].date);
	}
});

commentBtn.addEventListener("click", () => {
	const jokeDate = availableJokes[currentIndex].date;
	commentPanel.classList.toggle("hidden");
	if (!commentPanel.classList.contains("hidden")) {
		fetchAndDisplayComments(jokeDate);
	}
});


commentTextarea.addEventListener("input", () => {
	commentCharCount.textContent = commentTextarea.value.length;
});

// Fetch and display comments for current joke
async function fetchAndDisplayComments(jokeDate) {
	try {
		const response = await fetch(`${API}/comment?joke_date=${jokeDate}`);
		const data = await response.json();
		const commentsList = document.getElementById("comments-list");

		if (data.comments && data.comments.length > 0) {
			commentsList.innerHTML = data.comments.map(c => `
				<div class="comment-item">
					<div class="comment-author">${c.name}</div>
					<div class="comment-text">${c.comment}</div>
					<div class="comment-date">${new Date(c.created_at).toLocaleDateString()}</div>
				</div>
			`).join("");
		} else {
			commentsList.innerHTML = '<p class="no-comments">No comments yet</p>';
		}
	} catch (error) {
		console.error("Could not load comments:", error);
		document.getElementById("comments-list").innerHTML = '<p class="no-comments">Could not load comments</p>';
	}
}





commentSubmitBtn.addEventListener("click", async () => {
	const name = commentNameInput.value.trim();
	const comment = commentTextarea.value.trim();
	const jokeDate = availableJokes[currentIndex].date;

	if (!name) {
		alert("Please enter your name");
		return;
	}

	if (!comment) {
		alert("Please enter a comment");
		return;
	}

	try {
		commentSubmitBtn.disabled = true;
		commentSubmitBtn.textContent = "Submitting...";

		const response = await fetch(`${API}/comment`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				joke_date: jokeDate,
				name: name,
				comment: comment
			})
		});

		if (response.ok) {
			commentNameInput.value = "";
			commentTextarea.value = "";
			commentCharCount.textContent = "0";
			commentSubmitBtn.textContent = "Comment submitted!";

			// Refresh comments immediately
			await fetchAndDisplayComments(jokeDate);

			setTimeout(() => {
				commentSubmitBtn.textContent = "Submit Comment";
				commentSubmitBtn.disabled = false;
			}, 2000);
		} else {
			alert("Failed to submit comment");
			commentSubmitBtn.textContent = "Submit Comment";
			commentSubmitBtn.disabled = false;
		}
	} catch (error) {
		console.error("Could not submit comment:", error);
		alert("Error submitting comment");
		commentSubmitBtn.textContent = "Submit Comment";
		commentSubmitBtn.disabled = false;
	}
});

// Close button handler
document.getElementById("close-comment-btn").addEventListener("click", () => {
	commentPanel.classList.add("hidden");
});



shareBtn.addEventListener("click", () => {
	const joke = availableJokes[currentIndex];
	const url = `${window.location.origin}${window.location.pathname}?joke=${joke.date}`;

	navigator.clipboard.writeText(url).then(() => {
		shareBtn.textContent = "URL copied to clipboard!";
		setTimeout(() => shareBtn.textContent = "Share this joke", 3000);
	});
});

// Star rating functionality with half-star support
ratingStars.forEach((star) => {
	// Hover effect with half-star detection
	star.addEventListener("mousemove", (e) => {
		const rect = star.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const isLeftHalf = x < rect.width / 2;

		const starValue = parseInt(star.getAttribute("data-value"));
		const hoverValue = isLeftHalf ? starValue - 0.5 : starValue;

		// Highlight stars based on hover value
		ratingStars.forEach(s => {
			const sValue = parseInt(s.getAttribute("data-value"));
			if (sValue < hoverValue) {
				s.classList.remove("half");
				s.classList.add("hover-active");
			} else if (sValue === Math.ceil(hoverValue) && hoverValue % 1 !== 0) {
				s.classList.add("half", "hover-active");
			} else if (sValue === hoverValue && hoverValue % 1 === 0) {
				s.classList.remove("half");
				s.classList.add("hover-active");
			} else {
				s.classList.remove("hover-active", "half");
			}
		});
	});
});

// Reset stars to active state when mouse leaves the stars container
document.getElementById("rating-stars").addEventListener("mouseleave", () => {
	const userRating = getUserRating(availableJokes[currentIndex].date);
	ratingStars.forEach(star => {
		star.classList.remove("hover-active");
	});
	updateStarDisplay(userRating);
});

// Click to submit rating
ratingStars.forEach(star => {
	star.addEventListener("click", (e) => {
		const rect = star.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const isLeftHalf = x < rect.width / 2;

		const starValue = parseInt(star.getAttribute("data-value"));
		const rating = isLeftHalf ? starValue - 0.5 : starValue;
		const joke = availableJokes[currentIndex];

		// Update visual display immediately
		updateStarDisplay(rating);

		// Submit rating to API
		submitRating(joke.date, rating);
	});
});

document.addEventListener("click", (e) => {
	const img = e.target;
	if (img.classList.contains("punchline-image") && img.classList.contains("fullscreen")) {
		const joke = availableJokes[currentIndex];
		img.src = joke.image[1];
		img.classList.remove("fullscreen");
		explanationBox.classList.remove("hidden");
	}
});


async function updateVisitorCount() {
	try {
		const response = await fetch(
			"https://my-page-counter.maartenvanbosbeke.workers.dev"
		);

		const data = await response.json();

		document.getElementById("visitor-count").textContent = data.count;
	} catch (error) {
		console.error("Could not load visitor count:", error);
	}
}

updateVisitorCount();
