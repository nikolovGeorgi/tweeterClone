document.addEventListener('DOMContentLoaded', cb);

function cb (){
  document.addEventListener("dblclick", function(event) {
    console.log(event);
  });
}
