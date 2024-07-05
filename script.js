document.addEventListener("DOMContentLoaded", 
	function(event){
		document.querySelector("button")
		.addEventListener("click", function() {

			//Call Server to get the name
			$ajaxUtils
				.sendGetRequest("name.txt",
					function (request) {
						var name = request.responseText;
						document.querySelector('#content')
							.innerHTML = "<h2>Hello " + name + "!</h2>";
					});

		});

})

// document.querySelector("button")
// .onclick = SayHello;