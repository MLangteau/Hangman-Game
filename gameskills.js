$(document).ready(function() {
	// body...
// var whatever = 
//  var = document.getElementById('whatever');
//  whatever.innerhtml = "write over me";
//  same as
// $(#first").html(message or "message");  
// $(#first").append(message or "message");  
// $(#first").prepend(message or "message");  


/*   worked by itself
	document.onkeyup = function() {
		console.log("event key: " + event.key);
		console.log("event: ", event);  // comma does not concatenate 
		var userGuess = event.key.toUpperCase()
*/
        var str = "";
   
        var badGuess = 0;
        var totalGuess = 0;  
        var badLettersArray = [];
        var whatArray = [];
        var anyLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","N", "O","P","Q","R","S","T","U","V","W","X","Y","Z"];

 //     var themeWordsArray [] = "arm", "leg", "nose", "ear", "head", "foot", "shoulder"];

        var themeWordsArray = [
        					  	  ["A","R","M"], 
                              	  ["L", "E", "G"],
	                              ["N","O","S","E"],
	                              ["E","A","R"],
	                              ["H","E","A","D"], 
	                              ["F","O","O","T"],
	                              ["S","H","O","U","L","D","E","R"]
                              ];

        var random = Math.floor((Math.random() * (themeWordsArray.length-1)));

		console.log("random index number A0 L1 N2 E3 H4 F5 S6 " + random);

//        var randomWord = themeWordsArray[Math.floor(Math.random() * themeWordsArray.length)];

        var wordToGuess = themeWordsArray[random];   // big word

	    console.log("Random word from themeWordsArray show a word wordToGuess: " + wordToGuess);

        var whatArray = new Array(wordToGuess.length);
		console.log(" Next up this is whatArray: " + whatArray);

        var goodGuess = 0;  

// each space has an underscore for the letters to guess  (guessField)
		for (var i=0; i < whatArray.length; i++) {
				whatArray [i] = "_";
		        console.log("whatArray " + whatArray [i]);
		        console.log('i am here in the code so far');
		        console.log("  ");
        };   //  end of for loop
        
        console.log("Out of loop 1: " + whatArray + "i: " + i);

  //      Prints the underscores to the guess line         
		function printToScreen () {
          for (var i=0; i < whatArray.length; i++) {
          	console.log("***  IN PRINT LOOP  ***");
			var letterIn = document.getElementById("letterIn");
			var printables = document.createTextNode(whatArray[i]);
			letterIn.appendChild(printables);
	    
	        console.log("whatArray " + whatArray [i]);
    	    console.log('i am here in the code so far: *1*');
            };   //  end of for loop
         };  //  end of startgame function 

         console.log("** OUT OF LOOP 2 ");
   // is userGuess letter matching one or more letters in word ?
   		var compare = function () {
  // 			var a = document.formBox;
  // 			var b = a.elements["quelch"];

  // 			var userGuess = b.value;

   			userGuess = userGuess.toUpperCase();

   			for (var i=0; i < wordToGuess.length; i++) {
   				if (wordToGuess[i] == userGuess) {
   					whatArray [i] = userGuess + " ";
   					var matchedUp = true;
				}  // end to if 
//			b.value = "";
   			}  // end to for 

   			// deletes the guessfield and replaces with new one
   			var whatArray = document.getElementById("whatArray");
   			whatArray.innerhtml="";
   			printToScreen();

   			// if userGuess is not in the word, userGuess will be added to wrongletterlist
   			if (!matchedUp){
   				var wrongOh = document.getElementById("wrongOh");
   				var printables = document.createTextNode(" " + userGuess);
   				wrongOh.appendChild(printables);
   				goodGuess++;
   	//			var hangman = document.getElementById("hangman");
   				// play a sound ??
   			}
   	//  all letter found yet?
	   	 	var allFound = true;
			for (var i=0; i < whatArray.length; i++) {
				if (whatArray[i] === "_ "){
					allFound = false;
				}
			}
			if (allFound) {
				window.alert ("You Win this game");
			}

			// if you have 6 guesses, you lose
			if (goodGuess === 9) {
				window.alert ("Oh no!  You have LOST!")
			}
		}

		function init() {
			printToScreen();
		}

		window.onload = init;

});  //End of document ready