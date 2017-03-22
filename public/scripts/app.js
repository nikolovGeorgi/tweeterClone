function createTweetElement(obj) {
  let userName = (obj.user.name);
  let userAvatar = (obj.user.avatars.small);
  let handle = (obj.user.handle);
  let tweetText = (obj.content.text);
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
        "<span class='date-created'>", date, "</span>",
        "<img src='https://cdn1.iconfinder.com/data/icons/freeline/32/flag_notice_warning-24.png'>", "</img>",
        "<img src='https://cdn0.iconfinder.com/data/icons/slim-square-icons-basics/100/basics-14-24.png'>", "</img>",
        "<img src='https://cdn3.iconfinder.com/data/icons/sympletts-free-sampler/128/round-bubble-heart-24.png'>", "</img>",
      "</footer>",
    "</article>"
  ].join('');
}
function renderTweets(tweetData){
  let tweets = $('.all-tweets');
  tweetData.map(function(element){
    let newTweet = createTweetElement(element);
    return tweets.prepend(newTweet);
  });
}
// Get current Tweets from Existing Tweets DataBase
function loadTweets(){
  $.ajax({
    method: 'get',
    url: '/tweets'
  }).done(renderTweets);
}
$(function (){
  loadTweets();
  // When creating a new Tweet
  $('.new-tweet input').on('click', function (event) {
    event.preventDefault();
    $.ajax({
      method: 'post',
      url: '/tweets',
      data: $('form').serialize()
    }).done(function (newTweet) {
      loadTweets();
      $('.all-tweets').removeClass('err');
      $('section.new-tweet textarea').focus().val('');
    }).fail(function (err) {
      $('.all-tweets').addClass('err');
    });
  });
});

function escape(str) {
  var article = document.createElement('article');
  article.appendChild(document.createTextNode(str));
  return article.innerHTML;
}
