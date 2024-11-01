function searchJobs() {
    const input = document.getElementById("search-bar").value.toLowerCase();
    const jobCards = document.querySelectorAll(".job-card");
    const resultsContainer = document.getElementById("search-results");

    resultsContainer.innerHTML = ""; // Clear previous results

    jobCards.forEach(job => {
        const title = job.querySelector("h3").textContent.toLowerCase();
        const description = job.querySelector("p").textContent.toLowerCase();

        if (title.includes(input) || description.includes(input)) {
            resultsContainer.innerHTML += `
                <div class="job-card">
                    <h3>${job.querySelector("h3").textContent}</h3>
                    <p>${job.querySelector("p").textContent}</p>
                </div>
            `;
        }
    });
}
