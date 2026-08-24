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

function showJoke(index) {
	const joke = availableJokes[index];
	if (joke) {
		setupElement.textContent = joke.setup;
		punchlineElement.textContent = joke.punchline;
		explanationElement.textContent = joke.explanation;
		dateElement.textContent = formatDate(new Date(`${joke.date}T12:00:00`));
		punchlineReveal.classList.remove("hidden");
		punchlineElement.classList.add("hidden");
		explanationBox.classList.add("hidden");
		explanationElement.classList.add("hidden");
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
	punchlineReveal.classList.add("hidden");
	punchlineElement.classList.remove("hidden");
	explanationBox.classList.remove("hidden");
});

explanationReveal.addEventListener("click", () => {
	explanationReveal.classList.add("hidden");
	explanationElement.classList.remove("hidden");
});

prevBtn.addEventListener("click", () => {
	if (currentIndex < availableJokes.length - 1) {
		currentIndex++;
		showJoke(currentIndex);
	}
});

nextBtn.addEventListener("click", () => {
	if (currentIndex > 0) {
		currentIndex--;
		showJoke(currentIndex);
	}
});

randomBtn.addEventListener("click", () => {
	let randomIndex;
	do {
		randomIndex = Math.floor(Math.random() * availableJokes.length);
	} while (randomIndex === currentIndex && availableJokes.length > 1);
	currentIndex = randomIndex;
	showJoke(currentIndex);
});

todayBtn.addEventListener("click", () => {
	currentIndex = 0;
	showJoke(currentIndex);
});

shareBtn.addEventListener("click", () => {
	const joke = availableJokes[currentIndex];
	const url = `${window.location.origin}${window.location.pathname}?joke=${joke.date}`;

	navigator.clipboard.writeText(url).then(() => {
		shareBtn.textContent = "URL copied to clipboard!";
		setTimeout(() => shareBtn.textContent = "Share this joke", 3000);
	});
});

document.addEventListener("keydown", (e) => {
	if (e.key === "ArrowLeft" && !prevBtn.classList.contains("hidden")) prevBtn.click();
	if (e.key === "ArrowRight" && !nextBtn.classList.contains("hidden")) nextBtn.click();
	if (e.key === " ") punchlineReveal.click();
});

<script>
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
</script>
