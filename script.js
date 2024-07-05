document.addEventListener("DOMContentLoaded", 
	function(event){
		document.querySelector("button")
		.addEventListener("click", function() {

			//Call Server to get the name
			$ajaxUtils
				.sendGetRequest("name.json",
					function (res) {
						var message = res.Firstname + " " + res.Lastname;
						if (res.LikesChinesefood) {
							message += " likes chinese food";
						}
						else {
							message += " doesnot like chinese food";
						}
						message += " and uses ";
						message += res.numberofdisplays;
						message += " displays for coding.";
						document.querySelector('#content')
							.innerHTML = "<h2>" + message + "!</h2>";
					});

		});

})

// document.querySelector("button")
// .onclick = SayHello;