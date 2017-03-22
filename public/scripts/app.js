
var tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

flag = "https://cdn1.iconfinder.com/data/icons/freeline/32/flag_notice_warning-24.png";
retweet = "https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-14-24.png";
heart = "https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/round-bubble-heart-24.png";

function createTweetElement(obj) {
  let userName = escape(obj.user.name);
  let userAvatar = escape(obj.user.avatars.small);
  let handle = escape(obj.user.handle);
  let tweetText = escape(obj.content.text);
  let created_at = escape(obj.created_at);
  let date = new Date(created_at);
  return tweetArticle = $([
    "<article class='tweet'>",
      "<header>",
        "<img class='userAvatar' src='" + userAvatar + "'/>",
        "<h2 class='userName'>", userName, "</h2>",
        "<em class='userHandle'>", handle, "</em>",
      "</header>",
      "<p>", tweetText, "</p>",
      "<footer>",
        "<span class='date-created'>", date.toString(), "</span>",
        "<li>", flag, "</li>",
        "<li>", retweet, "</li>",
        "<li>", heart, "</li>",
      "</footer>",
    "</article>"
  ].join("\n"));
}
// var time = 1461116232227;
// var dt = new Date(time);
// console.log(dt.toUTCString());
// console.log(dt.toDateString());

console.log(createTweetElement(tweetData));

// function renderTweets (obj, arr) {
//   for (var el in obj){
//     $("section .all-tweets").prepend(arr);
//   }
// }
// renderTweets(tweetData, createTweetElement(tweetData));
//
function renderTweets(tweets) {
  tweets.forEach((tweet) => {
    $('section .all-tweets').append(createTweetElement(tweet));
  });
}
function renderTweets(tweetData) {
  let $tweets = $('section .all-tweets').empty();
  tweetData.forEach((element) => {
    let $tweet = createTweetElement(element);
    $tweets = $tweets.append($tweet);
  });
  return $tweets;
}

function escape(str) {
  var article = document.createElement('article');
  article.appendChild(document.createTextNode(str));
  return article.innerHTML;
}
