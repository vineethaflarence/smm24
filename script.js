// -------------------------------------------------------------
// Sticky Menu
// -------------------------------------------------------------

(function() {
  var nav = $(".navbar");
  var scrolled = false;

  // $(window).scroll(function () {

  //     if (110 < $(window).scrollTop() && !scrolled) {
  //         nav.addClass('  sticky ').animate({ 'margin-top': '0px' });

  //         scrolled = true;
  //     }

  //     if (110 > $(window).scrollTop() && scrolled) {
  //         nav.removeClass(' sticky ').css('margin-top', '0px');

  //         scrolled = false;
  //     }
  // });
})();
// -------------------------------------------------------------
// Back to top
// -------------------------------------------------------------

$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
      $("#back-to-top").fadeIn();
    } else {
      $("#back-to-top").fadeOut();
    }
  });
  // scroll body to 0px on click
  $("#back-to-top").click(function() {
    $("#back-to-top").tooltip("hide");
    $("body,html").animate(
      {
        scrollTop: 0
      },
      800
    );
    return false;
  });

  $("#back-to-top").tooltip("show");
});

// -------------------------------------------------------------
// Back to top
// -------------------------------------------------------------
openRegistrationPopup = function() {
  document.getElementById("registrationPopup").style.display = "block";
};
closeRegistrationPopup = function() {
  document.getElementById("registrationPopup").style.display = "none";
};

//--------------------------------------------------------------
// Toggle images
//--------------------------------------------------------------
$("#keyNoteSpeechImgId").click(function() {
  $(this)
    .find("img")
    .toggle();
});

$("#oralPresentationImgId1").click(function() {
  $(this)
    .find("img")
    .toggle();
});
$("#oralPresentationImgId2").click(function() {
  $(this)
    .find("img")
    .toggle();
});
$("#posterPresImgId").click(function() {
  $(this)
    .find("img")
    .toggle();
});
$("#afternoonSessionId").click(function() {
  $(this)
    .find("img")
    .toggle();
});
$("#recordedPresentationImgId").click(function() {
  $(this)
    .find("img")
    .toggle();
});
