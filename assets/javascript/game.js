window.onload = function(){
    
    console.log('Page is loaded');
    var words = ["Madonna", "Queen", "Prince", "Eagles", "Genesis"];
    var currentWord = words[Math.floor(Math.random() * words.length)];
    var lettersGuessed = [];
    var numOfGuesses= 0;
    var winScore = 0;
    
    console.log(currentWord);
    
    var numberOfLetters = currentWord.length;
    var solution = "_ ".repeat(numberOfLetters);
    console.log("Number of letters = " + numberOfLetters);

    document.getElementById("myWord").innerHTML = solution;

    document.addEventListener('keyup', function(event){
        numOfGuesses++;
        document.getElementById("numberOfGuesses").innerHTML = 10 - numOfGuesses;
        var index = currentWord.indexOf(event.key);
        if(index === -1){
            //wrong guess
            console.log('Wrong!');
            lettersGuessed.push(event.key);
            console.log(lettersGuessed);

            document.getElementById("LettersGuessed").innerHTML = lettersGuessed.toString();
        }else{
            //correct guess
            console.log('Correct!');

            solution = solution.substr(0, index) + event.key + solution.substr(index + event.key.length);

            console.log(solution)
            document.getElementById("myWord").innerHTML = solution;
    
            
        }
    });
}


    





















