 
//    buttonNumber----------

function buttonNumber(btnNum){
	switch(btnNum){
	  case "7": case "8": case "9": case "4":
	  case "5": case "6": case "1": case "2":
	  case "3": case "0":
	  document.getElementById('input').value = document.getElementById('input').value + btnNum;
	  break;
	    
	  case "C": document.getElementById('input').value ="";
	  break;
	  case "<": var str = document.getElementById('input').value ;
				   str = str.substr(0,str.length -1);
				   document.getElementById('input').value = str;
		 break;
	}
 
}
 //   Random Number--------!!!!
  
	    var inputs = document.getElementById('randomNum');
	        inputs. addEventListener('click',function(){
			for (let i = 0; i < 1;i++) {
 			     	var randomNumber = Math.floor(1000 + Math.random() * 9000);
 		            inputs =randomNumber;
		            document.getElementById('input-GeneratePin').value =inputs;  
	          		 
	}
	
})
// checks input value---------

        var submitBtn = document.getElementById('submitBtn')
	        submitBtn.addEventListener('click',function(){
        var num = document.getElementById('input-GeneratePin').value;
		var inputNum = document.getElementById('input').value;

		if (num == inputNum) {
 		  document.getElementById('exactDigit');
		   exactDigit.style.display='block';

		}else{ 
			 document.getElementById('incorrectDigit');
			 incorrectDigit.style.display ='block';

		}

 })


