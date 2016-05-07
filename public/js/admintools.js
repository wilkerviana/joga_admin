var sucessRegister = function(){
	$('.register__btn').click(function(){
		$('.modal__overlay').addClass('active');
		$('.modal').addClass('active');
		$('.btn--proceed').click(function(){
			$('.modal__overlay').removeClass('active');
		$('.modal').removeClass('active');
		});
	});
}

var deletePicture = function(){
	$('.btn__picture--delete').click(function(){
		$(this).siblings('.edit__picture__box').children('.edit__picture--delete').addClass('edit__picture--delete--active');
		$('.btn__picture__cancel').click(function(){
	 		$('.edit__picture--delete').removeClass('edit__picture--delete--active');
		});
	});
}

$(document).ready(sucessRegister);
$(document).ready(deletePicture);