document.addEventListener('DOMContentLoaded', cb);

function cb (){
   $('selection .article').hover(
    function(){
      $(this).fadeIn(500);
    }, function (){
      $(this).fadeOut(100);
    }).off("mouseenter mouseleave");
}


"tweets":[
  {
    "user": {
      "name": "testUser",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      },
      "handle": "@testUser"
    },
    "content": {
      "text": "test"
    },
    "created_at": 1
  },
