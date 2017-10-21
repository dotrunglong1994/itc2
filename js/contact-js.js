
$(document).ready(function(){
	$("#btn-contact").click(function(){
		if (!$("#name").val()){
			$("#name").css({"border-color":"red"});
		}
		if (!$("#email").val()){
			$("#email").css({"border-color":"red"});
		}
		if (!$("#title").val()){
			$("#title").css({"border-color":"red"});
		}
		if (!$("#content").val()){
			$("#content").css({"border-color":"red"});
		}



	});

	$("#name, #title, #content").change(function(){
		if($(this).val()) 
			$(this).css({"border-color":"#444"});
		else 
			$(this).css({"border-color":"red"});
	});

	$("#email").change(function(){
		var email = $('#email').val();
		var emailRegex = /^\w+@\D{2,10}(\.\D{2,8}){1,2}$/;
		if($(this).val() && email.match(emailRegex)) 
			$(this).css({"border-color":"#444"});
		else 
			$(this).css({"border-color":"red"});

	});

	// var email = $('#email').val();
	// if (email) {
	// 	alert('email: '+ email);
	// }
	
	// var emailRegex = /^\w+@\D{2,10}(\.\D{2,8}){1,2}$/;
	// if(email.match(emailRegex)== false){
	// 	alert("nhap sai dinh dang");
	// }

});
