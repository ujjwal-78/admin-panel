$(document).ready(function () {
  // exporter
  $("#button-addon").click(function () {
    $(".model-container").css("transform", "scale(1)");
  });
  $("#close").click(function () {
    $(".model-container").css("transform", "scale(0)");
  });

  // Consignee
  $("#button-addon2").click(function () {
    $(".model-container2").css("transform", "scale(1)");
  });
  $("#close2").click(function () {
    $(".model-container2").css("transform", "scale(0)");
  });
});
