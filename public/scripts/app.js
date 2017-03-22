function createTweetElement(obj) {
  let userName = escape(obj.user.name);
  let userAvatar = escape(obj.user.avatars.small);
  let handle = escape(obj.user.handle);
  let tweetText = escape(obj.content.text);
  let date = new Date(obj.created_at);
  return [
    "<article class='tweet'>",
      "<header>",
        "<img class='userAvatar' src='" + userAvatar + "'/>",
        "<h2 class='userName'>", userName, "</h2>",
        "<em class='userHandle'>", handle, "</em>",
      "</header>",
      "<p>", tweetText, "</p>",
      "<footer>",
        "<span class='date-created'>", date.toString(), "</span>",
        "<img src='https://cdn1.iconfinder.com/data/icons/freeline/32/flag_notice_warning-24.png'>", "</img>",
        "<img src='https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-14-24.png'>", "</img>",
        "<img src='https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/round-bubble-heart-24.png'>", "</img>",
      "</footer>",
    "</article>"
  ].join('');
}
// Create initialTweets
function addNewTweet (newTweet){
  $('.all-tweets').append(newTweet.map(createTweetElement));
}
// Get current Tweets from Existing Tweets DataBase
$.ajax({
  method: 'get',
  url: '/tweets'
}).done(addNewTweet);

// When creating a new Tweet
$('.all-tweets').on('submit', function (event) {
  event.preventDefault();
  $.ajax({
    method: 'post',
    url: '/tweets',
    // data: {
    //
    // }
  }).done(function (newTweet) {
    $('.all-tweets').removeClass('err');
    // message.focus(); //to focus on the text box after posting
    addNewTweet(newTweet);
  }).fail(function (err) {
    $('.all-tweets').addClass('err');
  });
});

function escape(str) {
  var article = document.createElement('article');
  article.appendChild(document.createTextNode(str));
  return article.innerHTML;
}
