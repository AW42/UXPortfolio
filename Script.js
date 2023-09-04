$(document).ready(function() {
    $("#scrollBtn").on("click", function() {
      $("html, body").animate({
        scrollTop: $(".img-container").offset().top// adjust the value here
      }, 500);
    });
  });

  $(document).ready(function() {
    var slideIndex = 1;
    showSlides(slideIndex);
  
    // Next button functionality
    $(".nextButton").click(function() {
      slideIndex++;
      showSlides(slideIndex, "next");
    });
  
    // Previous button functionality
    $(".prevButton").click(function() {
      slideIndex--;
      showSlides(slideIndex, "prev");
    });
  
    function showSlides(n, direction) {
      var i;
      var slides = $(".slider-image");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      slides.removeClass("active").hide();
      slides.eq(slideIndex-1).addClass("active").show();
      if (direction === "next") {
        $(".slider-wrapper").animate({left: "-=100%"}, 500, function() {
          slides.eq(slideIndex-2).hide();
          $(".slider-wrapper").css("left", 0);
        });
      }
      if (direction === "prev") {
        $(".slider-wrapper").css("left", "-100%");
        slides.eq(slideIndex-2).show();
        $(".slider-wrapper").animate({left: 0}, 500, function() {
          slides.eq(slideIndex).hide();
        });
      }
    }
  });

  // Scroll to top
// document.addEventListener("DOMContentLoaded", function () {
//   const scrollToTopButton = document.getElementById("scrollToTopButton");

//   scrollToTopButton.addEventListener("click", function () {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   });
// });
