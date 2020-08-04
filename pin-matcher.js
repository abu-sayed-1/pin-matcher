
  
function calculate(x){
	switch(x){
		 case "7": case "8": case "9": case "4": case "5":case "6": case "1":case "2": case "3": case "0":document.getElementById('input').value =document.getElementById('input').value +x;
		 break;
		  
		 case "C":document.getElementById('input').value ="";
		 break;
		 case "<":var str = document.getElementById('input').value ;
					 str = str.substr(0,str.length -1);
					 document.getElementById('input').value = str;
		 break;
	}
 
}
 
// function generatePin(){
// 	onclick="generatePin('random-num')"
// }

	  var inputs = document.getElementById('randomNum');
	     inputs. addEventListener('click',function(){
			for (let i =0; i <1;i++) {
	        	var randomNumber = Math.random()*9999;
		        var roundNum = Math.round(randomNumber);
		         inputs =roundNum;
		        document.getElementById('input-GeneratePin').value =inputs;  
	         
        
		
	}
	
})

      var submitBtn = document.getElementById('submitBtn')
	   submitBtn.addEventListener("click",function(){
        var num = document.getElementById('input-GeneratePin').value;
		var inputNum =document.getElementById('input').value;
		if (num == inputNum) {
			 
			    document.getElementById('right');
				right.style.display='block';
			 
		}
		else{ 
			 document.getElementById("footer");
			 footer.style.display=("block");
			 
		}
		
 })










// var depositBtn = document.getElementById("addDeposit");
//      depositBtn.addEventListener("click",function(){
//      const despositAmount = document.getElementById("depositAmount").value;
//        const depositNumber = parseFloat(despositAmount);

 

 



// function calculate(x){
// 	switch(x){
// 		 case "7": case "8": case "9": case "4": case "5":case "6": case "1":case "2": case "3": case "0":document.getElementById('input').value =document.getElementById('input').value +x;
// 		 break;

// 		 case "C":document.getElementById('input').value ="";
// 		 break;
// 		 case "<":var str = document.getElementById('input').value ;
// 					 str = str.substr(0,str.length -1);
// 					 document.getElementById('input').value = str;
// 		 break;
// 	}
// }
  


// 	  var inputs = document.getElementById("randomNum");
// 	     inputs. addEventListener('click',function(){
// 			for (let i =0; i <1;i++) {
// 	        	var randomNumber = Math.random()*9999;
// 		        var roundNum = Math.round(randomNumber);
// 		         inputs =roundNum;
// 		      document.getElementById("input-GeneratePin").value =inputs;  
			  
		
// 	}
	
 	 
// 	  var num = document.getElementById('input-GeneratePin').value;
// 	  var inputNum =document.getElementById('input').value;
// 		if (num<=inputNum) {
			 
// 			console.log('rakib');
			
// 		}
// 		else{
// 			console.log('not Ok');
// 		}
