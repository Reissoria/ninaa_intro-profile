$(document).ready(function () {
  $("body").css("opacity", "1");
  $(".profile-container").fadeIn(600);
});

function toggleSection(sectionId) {
  $(".section-container").not("#" + sectionId).fadeOut(300);
  $("#" + sectionId).fadeToggle(400);
}

$("#add-friend").click(function () {
  alert("Friend request sent!");
});

$("#message").click(function () {
  $(".profile-container").hide();
  $(".messages-container").fadeIn(400);
});

$("#homeMessage").click(function () {
  $(".messages-container").hide();
  $(".profile-container").fadeIn(400);
});