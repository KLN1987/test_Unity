$(function(){
	function showModal(){
    $('.modal').css('display', 'flex');
	}
	function hideModals(){
		$('.modal').css('display', 'none');
	}

	$('.header__button-video').on('click', function(){
		showModal();
 });
	
	$(document).on('click', function(e){
	if (!(
		($(e.target).parents('.modal__content').length)
		||	($(e.target).hasClass('modal__content'))
	  ||	($(e.target).hasClass('header__button-video')))
		) {
			hideModals();
    }
	});
	
});