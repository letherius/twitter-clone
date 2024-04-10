// app.js (Updated JavaScript functionality)
document.getElementById("post-button").addEventListener("click", function () {
    const tweetInput = document.getElementById("tweet-input").value;
    if (tweetInput.trim() !== "") {
        const tweetList = document.getElementById("tweet-list");
        const newTweet = document.createElement("div");
        newTweet.className = "tweet";
        newTweet.innerHTML = `
            <img src="user-avatar.jpg" alt="User Avatar">
            <div class="tweet-content">
                <span class="username">@username</span>
                <p>${tweetInput}</p>
            </div>
        `;
        tweetList.appendChild(newTweet);
        document.getElementById("tweet-input").value = "";
    }
});

document.getElementById("search-button").addEventListener("click", function () {
    const searchInput = document.getElementById("search-input").value;
    // Implement your search logic here (e.g., search for usernames)
    // Example: You can use external tools like HandleFinder, Spokeo, or WhatsMyName
    // to search for usernames across platforms.
    console.log(`Searching for: ${searchInput}`);
    // Display search results or take further actions based on the search input.
});
