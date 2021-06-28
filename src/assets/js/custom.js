$('#mostrar-submenu').on( "click", function() {
	$(this).toggleClass('active');
	$('.bd-sidebar').toggleClass('active');
});

$('.collapsable-tab .display-toggle').on( "click", function() {
	var data=$(this).attr("data-target");
	alert(data);
});

$('.fixed li a').on( "click", function() {
	$('.fixed li a').removeClass('active');
	$(this).addClass('active');
});

$('.list-opener').on( "click", function() {
	event.preventDefault();
	$(this).toggleClass('active');
	$(this).next('.collapse-list').toggle();
})
	
$('#open-adv-search').on( "click", function() {
	event.preventDefault();
	$(this).toggleClass('active');
	$('#adv-search-panel').toggle();
	$('#basic-search').toggle();
});

$('.show-menu').on( "click", function() {
    $(this).parent('#right-side-menu').toggleClass('active');	
    $(this).toggleClass('hidden');
    $('#left-panel').toggleClass('collapsed');
});

$('.hide-menu').on( "click", function() {
	$(this).parent('#right-side-menu').toggleClass('active');
	$(this).parent('#right-side-menu').find('.show-menu').toggleClass('hidden');
	$('#left-panel').toggleClass('collapsed');
})