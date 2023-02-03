$(document).ready(function() {
	$('#namefade').fadeOut(5000);
	
	var content = $('#content')[0];

	$('.carousel').carousel('pause').on('slid.bs.carousel', function(e) {
		console.log($('#overlay')[0].className = 'slide-'+$(e.relatedTarget).index());
    });
	
	$('#ship').click(function(e) {
		$('.carousel').carousel(0); //goes back to carousel slide[0]
		$('.carousel').carousel('pause'); // pauses carousel
		console.log(e.target.id);
		if (this.className != e.target.id)
			// this.className = 'ship-aft' or 'ship-main' or 'ship-bow'
			this.className = content.className = e.target.id; // darkens ship section, shows content
	});

	$(document).on('click', '#overview', function(){
		$("#ship").attr('class', 'overview');
     	$("#content").attr('class', 'overview');
 	});
});
