// 
const newsInput = document.querySelector(".news-input");
const form = document.querySelector("form");
const newsContainer = document.querySelector(".news-container");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let searchQuery = newsInput.value;
    fetchNews(searchQuery);
});

async function fetchNews(searchQuery) {
    const apiKey = "937fc5a2-b1eb-4e35-8946-06a41630b92a";
    const response = await fetch(
      `https://content.guardianapis.com/search?q=${searchQuery}&api-key=${apiKey}`
    );
    const responseData = await response.json();
    newsResults(responseData.response.results);
}

function newsResults(results) {
    let fetchedNews = "";
    results.forEach((result) => {
        let newsSection = result.sectionName;
        let newsDate = result.webPublicationDate;
        let newsUrl = result.webUrl;
        let newsTitle = result.webTitle;
        fetchedNews += `
        <div class="news">
            <p>${newsSection}</p>
            <p>${newsDate}</p>
            <a href="${newsUrl}" target="_blank">${newsTitle}</a>
        </div>
        `;
        newsContainer.innerHTML = fetchedNews;
    });
}
