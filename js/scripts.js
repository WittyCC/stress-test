$(document).ready(function(){
  $("form#health_survey").submit(function(event){
    event.preventDefault();
    $("#survey-result").show();
    var itemTicked = $("input:checkbox[name=stress-warn]:checked").length;
    var itemTickedNo = parseInt(itemTicked);
    //alert($("input:checkbox[name=stress-warn]:checked").length)

    if (itemTickedNo > 3) {
      $('#survey-result').show();
    } if else (itemTickedNo === 1){
    alert("hi!");
    } else {
    alert("yes");
  };


    $("#fun-responses").show();
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      var funTransportationMode = $(this).val();
      $('#fun-responses').append(funTransportationMode + "<br>");
    });
    $('#transportation_survey').hide();
  });
});
