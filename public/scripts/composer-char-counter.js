document.addEventListener('DOMContentLoaded', cb);

function cb (){
  $('textarea').keyup(function () {
    let len = $(this).val();
    let maxChars = 140;
    let output = maxChars - len.length;
    $(this).siblings('.counter').text(output);

    if(output <= 0){
      $(this).siblings('.counter').text(output).css('color', "red");
    } else {
      $(this).siblings('.counter').text(output).css('color', "black");
    }
  });
}
