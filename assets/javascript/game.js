$(document).ready(function() {

  var guessesRemaining = 0;
  var numWins = 0;
  var numLosses = 0;
  var WordsArray = ["larynx", "leg", "nose", "ear", "head", "foot", "shoulder"];
  var randomWord = "";      // randomly chosen word
  var anyLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","n", "o","p","q","r","s","t","u","v","w","x","y","z"];
  var lettersInWord = [];     // determine what letters are actually in the word
  var numOfLtrsInWord = 0;    // calculate the # of letters in each randonWord
  var correctLtrsAndUndersc = [];     // correctly guessed letters and/or underscores
  var incorrectLtrs = [];   // incorrectly guessed letters
  var qualifyAsLetter = true;

//  document.getElementById("letterIn").innerHTML = correctLtrsAndUndersc.join(" ");

  function allLetter(inputtxt, isInputALetter) 
    { 

    var isInputALetter = false;

    for (var i=0; i < anyLetters.length; i++) {
      if (anyLetters[i] == inputtxt) {
          isInputALetter = true;
          qualifyAsLetter = true;
          console.log("Letter matched: " + inputtxt);
          i = anyLetters.length;
      }
      else {
        isInputALetter = false;
        qualifyAsLetter = false;
      }
    };

    };


  function startNewGame(){

 //  Resets game at beginning (each time they win or lose)

  console.log(" B RESET: RemGuess: " + guessesRemaining + " correctLtrsAndUndersc " + correctLtrsAndUndersc +  " incorrectLtrs " + incorrectLtrs);

  guessesRemaining = 9;
  correctLtrsAndUndersc = [];
  incorrectLtrs = [];

  console.log(" A RESET: RemGuess: " + guessesRemaining + " correctLtrsAndUndersc " + correctLtrsAndUndersc +  " incorrectLtrs " + incorrectLtrs);


 // Generate a ramdom word from an array of words (and store it in a variable)

    randomWord = WordsArray[Math.floor(Math.random() * WordsArray.length)];
    console.log(" we have this randomWord" + randomWord);


    console.log("randomWord.length: " + randomWord.length + " should equal the following");

    lettersInWord = randomWord.split("");
    console.log(lettersInWord);

    numberOfSpacesNeeded = lettersInWord.length;
  console.log(" numberOfSpacesNeeded: " + numberOfSpacesNeeded);

// each space has an underscore for the letters to guess   numberOfSpacesNeeded
  for (var i=0; i < numberOfSpacesNeeded; i++) {
    correctLtrsAndUndersc.push("_");
    console.log(" Each Underscore " + correctLtrsAndUndersc[i] + " " + i);
    };   //  end of for loop

	console.log(" Guess bank " + correctLtrsAndUndersc);

  //  .join gets rid of the commas that we see above in Guess Bank
  //  Also, push items to the screen.
	document.getElementById("letterIn").innerHTML = correctLtrsAndUndersc.join(" ");
	document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
	document.getElementById("numWins").innerHTML = numWins;
	document.getElementById("numLosses").innerHTML = numLosses;
	document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs;

  } // end of startNewGame function 

// Create a function that takes in a letter argument and loops through the entire word // we are trying to match and sees if any of the letters match.

  function compareLetters(letter) {   // see if userguessed letter matches any letter

    var matchedUp = false;

    for (var i=0; i < randomWord.length; i++) {
      if (randomWord[i] == letter) {
          matchedUp = true;
          console.log("Letter matched: " + letter);
      };
    };

    if (matchedUp) {
      for (var i=0; i < randomWord.length; i++) {
        if (randomWord[i] === letter) {
        console.log("assigning it to the i: " + i + " position");
          // assign it to a specific position in the array
 //        document.getElementById("letterIn").innerHTML = correctLtrsAndUndersc.join(" ");
                correctLtrsAndUndersc[i] = letter;
        }; // end of if
      }; // end of for
      console.log("end of matchedUp for and if");
    } // end of if (matchedUp)
    
    else {    
      console.log("qualifyAsLetter " + qualifyAsLetter) ;
      if (qualifyAsLetter) {
     //     incorrectLtrs.push(letter);			a must if not below
     //     guessesRemaining--;                  a must if not below
      
      }
      console.log("q5q guessesRemaining: " + guessesRemaining);
      
      // Don't automatically push to incorrect list (only if it is not already in there)

    if (incorrectLtrs.length === 0) 
    {
    	incorrectLtrs.push(letter);     
    	console.log("Pushed the heck out of it")                  
          guessesRemaining--;						
    }
    else 
    {
	    console.log("Before FOR Loop Length:" + incorrectLtrs.length + " ltr: " + letter);
		var alreadyguessed = false;
	    for (var index=0; index < incorrectLtrs.length; index++) {
			if (incorrectLtrs[index] === letter) {
				alreadyguessed = true;
				index = incorrectLtrs.length; 
			}
		};
		
		console.log("alreadyguessed: " + alreadyguessed);

		if (!alreadyguessed) {          //  If it has not been guessed, then deduct and push
			incorrectLtrs.push(letter);
	        guessesRemaining--;						
		}
				
/*			
		    if (incorrectLtrs[index] === letter) {      // if it matches any already there
	        	console.log("Already pushed and maximize index: " + index);
	          	console.log("F1-IF ltr to ltr : " + incorrectLtrs[index] + " " + letter);
	          	index = incorrectLtrs.length;  // get out of for loop
	        }
	        else {
	          	// pushes it to the array
	          	console.log("F2-ELSE: " + incorrectLtrs[index] + " " + letter);
	          	console.log("push to array");
	          	incorrectLtrs.push(letter);                        	///  A MUST  !!
	          	guessesRemaining--;									///  A MUST  !!
	          	index = incorrectLtrs.length;  // get out of for loop
	          	console.log("Push and maximize index: " + index);
	//      	  document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs; 
	        }   // end of else
*/	  
	     // } // end of for

	      console.log("Does not match incorrectLtrs: " + incorrectLtrs);
	      
	    }  // end of else

	      console.log("correctLtrsAndUndersc: " + correctLtrsAndUndersc);
	   }
  }   //   Ends compareLetters function;


  function WinOrLoseGame() {
    console.log(" numWins: " + numWins + " numLosses: " + numLosses + " gsuessesRemaining: " + guessesRemaining);

    // Fill screen with counts
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("letterIn").innerHTML = correctLtrsAndUndersc.join(" ");
    document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs.join(" ");
    console.log ("Compare A: " + randomWord + " to B: " + correctLtrsAndUndersc);

    var mergedCorrectLtrs = correctLtrsAndUndersc.join("");
    console.log("mergedCorrectLtrs: " + mergedCorrectLtrs);

  // update win and loss counters 

    if (randomWord == mergedCorrectLtrs) {
    numWins++;

    alert("You Won this game!!");

    document.getElementById("numWins").innerHTML = numWins;
    document.getElementById("letterIn").innerHTML = correctLtrsAndUndersc.join(" ");
    document.getElementById("guessesRemaining").innerHTML = guessesRemaining;
    document.getElementById("numLosses").innerHTML = numLosses;
    document.getElementById("incorrectLtrs").innerHTML = incorrectLtrs;

    startNewGame();

    }

    else if (guessesRemaining == 0) {
      numLosses++;
      alert("You have lost this game.");

      document.getElementById("numLosses").innerHTML = numLosses;

      startNewGame();

    }
  };

//  ******************      AND SO IT BEGINS     *******************

  startNewGame();   // This is where the game starts/restarts and resets variables


// get your first input from user
  document.onkeyup = function() {
//    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var userGuess = event.key.toLowerCase();

//    console.log("event key: " + event.key);
//    console.log("event: ", event);  // comma does not concatenate 

    console.log("userGuess after toLowerCase: " + userGuess);

// validating if the input is a valid letter
    

    qualifyAsLetter = true;

    console.log("This is the daggone letter " + userGuess);
    allLetter(userGuess, qualifyAsLetter);

    console.log(" qualifyAsLetter -outside: " + qualifyAsLetter);
 
    if (qualifyAsLetter) {
      console.log("It's a letter: " + userGuess);
      compareLetters(userGuess);
      WinOrLoseGame();
    }
    else {
      alert("NOT a letter");
    }

  };

});  //End of document ready