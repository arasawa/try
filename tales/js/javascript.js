
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
    $('.subtitle').click(function(){
    	$('.textmain').fadeIn("slow")
    });
    $('.subtitle2').click(function(){
    	$('.textmain2').fadeIn("slow")
    });
    $('.subtitle3').click(function(){
    	$('.textmain3').fadeIn("slow")
    });
    $('.contents').click(function() {
    	$('.contentsText').fadeIn("slow")
    });
});
