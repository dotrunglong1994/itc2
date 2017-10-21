$(window).on('load',function(){
	$('#name').on('focus',function(){
		$('#email').show();
		$('#password').show();

	});
	$('#start_discussion').on('focus',function(){
		// $('#start_discussion').css({"padding":"30px 10px"});
		$('#start_discussion').attr('rows', 5);

	});


	$("#btn-contact").click(function(){
		var email = $('#email').val();
		var emailRegex = /^\w+@\D{2,10}(\.\D{2,8}){1,2}$/;
		$("#name,#email, #title, #password").css({"border-color":"#444"});

		if (!$("#name").val()){
			$("#name").css({"border-color":"red"});
		}
		if (!$("#email").val() || !email.match(emailRegex)){
			$("#email").css({"border-color":"red"});
		}
		if (!$("#password").val()){
			$("#password").css({"border-color":"red"});
		}
	});


}); 