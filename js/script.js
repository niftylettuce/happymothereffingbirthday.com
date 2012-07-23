$(function() {

  (function happyMotherEffingBirthday() {
    $happyMotherEffingBirthday = $('#happy-mother-effing-birthday');
    var motherEffingHeight = $happyMotherEffingBirthday.height();
    $happyMotherEffingBirthday.find('span').each(function() {
      $(this).stop().animate({ 'font-size': (motherEffingHeight / 2.5) }, "fast");
    });
    $(window).resize(happyMotherEffingBirthday);
  })();

});
