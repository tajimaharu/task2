$(function() {
  $('#accordion dd').hide();
  $('#accordion dt').on('click', function(){
    $(this).next('dd').slideToggle(`fast`);
  });
});
$(function(){
  $('.tab li').on(`click`,function(){
    $(`.tab li`).removeClass(`select`);
    $(this).addClass('select');

    $('.content div').addClass('hide');
    let index = $('.tab li').index($(this));
    $('.content div').eq(index).removeClass('hide');
  });
});
