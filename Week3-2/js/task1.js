(function(){

	var task1 = {
		render: function(){
			document.getElementById("screenX").textContent = window.screenX;
			document.getElementById("screenY").textContent = window.screenY;
			document.getElementById("screenWidth").textContent = window.innerWidth;
			document.getElementById("screenHeight").textContent = window.innerHeight;
			document.getElementById("location").textContent = window.location;
			document.getElementById("location").textContent = window.location;
			document.getElementById("location").textContent = window.location.pathname;
		},

		resize: function() {
			window.addEventListener("resize",this.render);
		},

		devInfo: function() {
				var btnDev = document.getElementById("dev-info");
				btnDev.addEventListener("click", function(){
		    		var devInfo = "<br>" + "Kessely" + "<br>" + "Faculty of Science and Technology" + "<br>" + "<a href='https://github.com/kesseleyT'>https://github.com/kesseleyT</a>";
					var devInformation = document.getElementById("dev-info-container");
			        devInformation.innerHTML = devInfo;
		    	});
		}
	};
	task1.render();
	task1.resize();
	task1.devInfo();
})();
