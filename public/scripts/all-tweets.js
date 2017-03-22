document.addEventListener('DOMContentLoaded', cb);

function cb (){
   $('selection .article').hover(
    function(){
      $(this).fadeIn(500);
    }, function (){
      $(this).fadeOut(100);
    }).off("mouseenter mouseleave");
}
