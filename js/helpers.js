$(function(){
  
  // Quick Class Toggler
  $(document).on('tap', '.js-class-toggler', function(event){
    event.preventDefault();
    event.stopPropagation();

    var element = $(this).data('element');
    var className = $(this).data('class');

    $(element).toggleClass(className);

  });

});