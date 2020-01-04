browser.storage.local.get("tweet").then(getTweet);

function getTweet(tweetData) {
    document.getElementById("newposttextarea").value = tweetData.tweet;
}