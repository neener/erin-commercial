$(function(){
	var modallinks= $("span.modalhandle"),
		close=$("#close");
		modalbackground=$("#modalcontainer");
		
		$('#modalcontainer').hide();
		
	modallinks.each(function(i, el){
		var modal = $('div.modalcontent[name=\'' + el.getAttribute("id") +'\']');
		$(el).on('click', function(e){
			e.stopPropagation();
			if($('div.modalcontent.active').length){
					$('div.modalcontent.active').removeClass('active');
			}

		$("div#modalcontainer").show()
		if(!modal.hasClass('active')) modal.addClass('active');


		});
	});

	close.on("click", function(e){
		e.preventDefault();
		$("div#modalcontainer").hide(0);
	});
	modalbackground.on("click", function(e){
		if(e.target.tagName === 'A'){
			return;
		}
		e.preventDefault();
		$("div#modalcontainer").hide(0);
	});
});
