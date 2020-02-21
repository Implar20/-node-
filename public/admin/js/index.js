(function(window) {
  $(".menu li").click(function(e) {
    $(this).addClass("active");
    $(this)
      .siblings()
      .removeClass("active");
  });
})(window);
