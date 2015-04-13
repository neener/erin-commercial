$(function(){
	var modallinks= $("span.modalhandle"),
		close=$("#close");
		modalbackground=$("#modalcontainer");
		
		$('#modalcontainer').hide();
		
	modallinks.each(function(i, el){
		var modal = $('div.modalcontent[name=\'' + el.getAttribute("id") +'\']');
		var id = modal.data("youtubeId");
		$(el).on('click', function(e){
			e.stopPropagation();
			if($('div.modalcontent.active').length){
					$('div.modalcontent.active').removeClass('active');
			}
			modal.find("figure").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ id + '?modestbranding=1&showinfo=0" frameborder="0" allowfullscreen></iframe>')

		$("div#modalcontainer").show()
		if(!modal.hasClass('active')) modal.addClass('active');


		});
	});

	close.on("click", function(e){
		e.preventDefault();
		$("div#modalcontainer").hide(0);
		$("div#modalcontainer").find("iframe").remove()
	});

	modalbackground.on("click", function(e){
		if(e.target.tagName === 'A'){
			return;
		}
		e.preventDefault();
		$("div#modalcontainer").hide(0);
		$("div#modalcontainer").find("iframe").remove()
	});
});
