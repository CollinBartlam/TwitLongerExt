checkTweetOverflow();

function checkTweetOverflow() {
    tweetOverflowMarker = document.getElementsByClassName("css-901oao r-9l7dzd r-n6v787 r-19jlu03 r-285fr0 r-q4m81j");
    if (tweetOverflowMarker.length > 0) {
        tweetOverflowTextArr = document.getElementsByClassName("public-DraftStyleDefault-block public-DraftStyleDefault-ltr");
        tweetOverflowText = tweetOverflowTextArr[0].innerText;
        tweetOverflowObj = {
            tweet: tweetOverflowText
        }
        browser.storage.local.set(
            tweetOverflowObj
        )
        window.open("https://www.twitlonger.com/post");
    } else {
        setTimeout(checkTweetOverflow, 1000);
    }
}