$(document).ready(function(){
  $("form#health_survey").submit(function(event){
    event.preventDefault();
    $("#survey-result").show();
    var itemTicked1 = $("input:checkbox[name=stress-warn]:checked").length;
    var itemTicked2 = $("input:checkbox[name=health-symp]:checked").length;
    var itemTicked3 = $("input:checkbox[name=cope-method]:checked").length;

    var itemTickedNo = parseInt(itemTicked1);
    //alert($("input:checkbox[name=stress-warn]:checked").length)

    if (itemTickedNo > 3) {
      $('#survey-result').show();
    } else if (itemTickedNo === 2){
    alert("hi!");
    } else{
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
