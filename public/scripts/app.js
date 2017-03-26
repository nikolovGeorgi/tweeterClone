function createTweetElement(obj) {
  let userName = (obj.user.name);
  let userAvatar = (obj.user.avatars.small);
  let handle = (obj.user.handle);
  let tweetText = (obj.content.text);
  let date = timeCalculator(obj);
  let icons = ['heart', 'retweet', 'flag', 'trash'].map(function(icon) {
    return "<i class='fa fa-" + icon + "' aria-hidden='true'></i>"
  }).join('');

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
        icons,
      "</footer>",
    "</article>"
  ].join('');
}

function renderTweets(tweetData){
  let tweets = $('.all-tweets');
  tweetData.forEach(function(element){
    let newTweet = createTweetElement(element);
    tweets.prepend(newTweet);
  });
}
// Get current Tweets from Existing Tweets DataBase
function loadTweets(){
  $.ajax({
    method: 'get',
    url: '/tweets'
  }).done(renderTweets);
}
$(function(){
  loadTweets();
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
  $("button.compose").on('click', () => {
    $('.new-tweet').slideToggle('normal');
    $('textarea').focus();
  });
});

function escape(str) {
  var article = document.createElement('article');
  article.appendChild(document.createTextNode(str));
  return article.innerHTML;
}
function timeCalculator(obj) {
  const currentTime = new Date().getTime();
  const difference = Math.abs(currentTime - obj.created_at) / (1000 * 3600);

  if (difference < 1) {
    return "less than 1 hours ago";
  }
  else if (difference <= 24) {
    return `${Math.floor(difference)} hours ago`;
  }
  else {
    return`${Math.floor(difference / 24)} days ago`;
  }
}
