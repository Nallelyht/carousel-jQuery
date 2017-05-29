//jQuery(document).ready(function (){
//	alert("Hola!")
//});

/*function saludar(){
document.getElementById("saludo).innerHTML="saludo";
}*/

//$(document).ready(function(){
//	$("button").click(function(){
//		$("#saludo").append("Hola!")
//	});
//});

//$(document).ready(function () {
//	$("#cambiar-color").click(function () {
//		$("#resaltar").css("color", "red");
//	});
//	$("button").click(function () {
//		$("ul").append("<li>Mas comida que Jquery</li>");
//	});
//});
$(document).ready(function (){
	$(".my-images").hide();
	$("#img01").show("slow",function(){
		$("#02").click(function(){
			$(".my-images").hide();
			$("#img02").show("slow", function(){
				$("#03").click(function(){
					$(".my-images").hide();
					$("#img03").show("slow",function(){
						$("#04").click(function(){
							$(".my-images").hide();
							$("#img04").show("slow", function(){
								$("#05").click(function(){
									$(".my-images").hide();
									$("#img05").show("slow", function(){
										$("#01").click(function(){
											$(".my-images").hide();
											$("#img01").show("slow");
										});
									});
								});
							});
						});
					});
				});
			});
		});
	});

})
