document.addEventListener('DOMContentLoaded', cb);

function cb (){
  $('textarea').keyup(function () {
    let len = $(this).val();
    let maxChars = 140;
    let output = maxChars - len.length;
    $(this).siblings('.counter').text(output);

    if(output < 0){
      $("form :submit").prop( "disabled", true );
      $(this).siblings('.counter').text("Limit!").css('color', "red");
      return false;
    } else if (output === 140) {
      $("form :submit").prop( "disabled", true );
      $(this).siblings('.counter').text(output).css('color', "black");
      return false;
    } else if (output > 0) {
      $("form :submit").prop( "disabled", false );
      $(this).siblings('.counter').text(output).css('color', "black");
      return true;
    } else if (output === 0){
      $("form :submit").prop( "disabled", true );
      $(this).siblings('.counter').text('Limit Reached!', output).css('color', "red");
    }
  });
  $('form :submit').on('click', () => {
    $('span.counter').text('140');
  });
}
