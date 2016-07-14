
$(function(){
    $('.maincontents').children('a').on('click',function(){
        var $this = $(this);
		if($this.hasClass('open')) {
			$this.removeClass('open')
			.next().hide();
		}else{
			$this.addClass('open')
			.next().show();
		}
    });
});
