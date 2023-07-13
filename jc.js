$("#contact-form").submit(function(){

	event.preventDefault();
	
	var dados = $(this).serialize();
	ver campos =$(this).find('.required');

	$(campos).each(function(){
		for(i=0; i=$(this).val() == ''; i++){
			if($(this).val() == '' )
			{
				alert("preencha os campos obrigatórios");
				$(this).focus();
				e.preventDefault();
				valid = false
			}else{
				$.ajax({
					type: "POST",
					url: "cadastrar.php",
					data: dados,
					success: function(data)
					{
						$("#status").slideDown();
						$("#status").html(data);
					}
				});
			$('#contact-form').trigger("rest");
			
			}	
		}
	});
});