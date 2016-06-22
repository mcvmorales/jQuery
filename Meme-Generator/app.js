var main = function() {
  
}
 
$(document).ready(main);

$(document).ready(function() {
  $("#top-text").keyup(function() {
    $(".top-caption").text($("#top-text").val());
  })
})

$(document).ready(function() {
  $("#bottom-text").keyup(function() {
    $(".bottom-caption").text($("#bottom-text").val());
  })
})

$(document).ready(function() {
  $("#image-url").keyup(function() {
    $("img").attr("src",($("#image-url").val()));
  })
})
