(function(){
	var game ={
       randomNumber: Math.floor(Math.random()*100),

       init: function(){
       	this.bindEvent();
           
       },
       bindEvent: function(){

        var self = this;
       	var bnt1 = document.getElementById('button1');
       	bnt1.addEventListener('click', this.clickNumberButton);

       	document.getElementById('button2').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button3').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button4').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button5').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button6').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button7').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button8').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button9').addEventListener("click", this.clickNumberButton);

       	document.getElementById('button0').addEventListener("click", this.clickNumberButton);

       	var guessbnt = document.getElementById("guess").addEventListener("click", function(){ self.guess(self);
       });
       },
       clickNumberButton: function(e){
       var userNumber = document.getElementById('userNumber');
       userNumber.value += e.target.textContent;


       },
       guess: function (self){

       	var userNumber = document.getElementById("userNumber");

       	if(userNumber.value == self.randomNumber){
       		var alertmsg = document.getElementById("alertContainer");
            alertmsg.innerHTML = '<div class="alert alert-success alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>OH</strong> wooooooooow, congratulation you got it right .</div>';
            userNumber.value = '';
       	}else if (userNumber.value < self.randomNumber){ 
       		var alertmsg = document.getElementById("alertContainer");
            alertmsg.innerHTML = '<div class="alert alert-info alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>OH</strong> NO, your gussing number is too low.</div>';
            userNumber.value = '';
       	}
            else if (userNumber.value > self.randomNumber){ 
                  var alertmsg = document.getElementById("alertContainer");
            alertmsg.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><strong>OH</strong> eyyyyyyy, your gussing number is too high.</div>';
            userNumber.value = '';
      }

       }
	};
  game.init();
})();