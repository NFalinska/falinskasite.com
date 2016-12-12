 $(document).ready(function(){
 
 
  $("#menu_line, #s1").on("click","a", function (event) {
         event.preventDefault();
         var id  = $(this).attr('href'),
             top = $(id).offset().top;
         $('body,html').animate({scrollTop: top}, 1500);
     });
		  	
		
	$('#mymodal_form').on('show.bs.modal', function() {
  $(this).fadeTo( "slow", 0.79 );
   })
   
   $('#mymodal_form').on('hide.bs.modal', function() {
	$("#order_table").show();
	$("#btnbuy").show()
    $("#success_form").hide();
   })

  
  $("#success_form").hide();
   $("#success_form_short").hide();

  
   
});

function showform() {
 //$(this).modal('show','handleUpdate');	
  $("#mymodal_form").modal('show','handleUpdate');

}


function aftersuccessform() {
 $("#order_table").hide('slow');
 $("#btnbuy").hide('slow')
 $("#success_form").show('2000');
}
