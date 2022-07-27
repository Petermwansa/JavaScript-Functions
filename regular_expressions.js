//USING THE TEST REGULAR EXPRESSON
test = () => {
    //the following code block returns only if the casing is matching
    let myString = "Peter Mwansa";
    let myRegex = /Mwansa/;
    let result = myRegex.test(test);
    console.log(result);


    //this code can be used to search for more than two patterns
    let myPets = "I have a lot of pets, a dog, a cat, a fish and a bird";
    let myPetRegex = /dog|cat|fish|bird/;
    let petResult = myPetRegex.test(myPets);
    console.log(petResult);

    //the regex to ignore the case
    let myMatch = "freeCodeCamp is coool";
    let fccRegex = /frEECodeCamp/i; // Change this line
    let matchResult = fccRegex.test(myString);
    console.log(matchResult);

    //this is used to extract a part from the string
    let extractStr = "Extract the word 'coding' from this string.";
    let codingRegex = /coding/;
    let resultExtract = extractStr.match(/coding/);

    console.log(resultExtract);


    //finding more than the first match
    let twinkleStar = "Twinkle, twinkle, little star";
    let starRegex = /Twinkle/ig; // Change this line
    let resultMany = twinkleStar.match(starRegex); // Change this line

    console.log(resultMany);


    //to match the workds that have a certain pattern in them
    let exampleStr = "Let's have fun with regular expressions!";
    let unRegex = /un./; // Change this line
    let resultPattern = unRegex.test(exampleStr);  
    console.log(resultPattern);


    //matching single characters with multiple possibilities
    let bigStr = "big";
    let bagStr = "bag";
    let bugStr = "bug";
    let bogStr = "bog";
    let bgRegex = /b[aiu]g/;
    bigStr.match(bgRegex);
    bagStr.match(bgRegex);
    bugStr.match(bgRegex);
    bogStr.match(bgRegex);  

    let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
    let vowelRegex = /[aeiou]/gi; // Change this line
    let resultSample = quoteSample.match(vowelRegex); // Change this line


    // match the letter of the alphabet 
    let quoteSampleAlpha = "The quick brown fox jumps over the lazy dog.";
    let alphabetRegex = /[a-z]/ig; // Change this line
    let resultAlphabet = quoteSampleAlpha.match(alphabetRegex); // Change this line
    console.log(resultAlphabet);


    //match both numbers and the letter
    let jennyStr = "Jenny8675309";
    let myRegexNumAlpha = /[a-z0-9]/ig;
    let resultBoth = jennyStr.match(myRegex);
    console.log(resultBoth);


    //to single out the specified characters
    let quoteSampleSingle = "3 blind mice.";
    let myRegexSingle = /[^aeiou^0-9]/gi; // Change this line
    let resultSingle = quoteSampleSingle.match(myRegexSingle); // Change this line
    console.log(resultSingle);


    //find a the matches when a character occurs more than once
    let difficultSpelling = "Mississippi";
    let myRegexMult = /s+/gi; // Change this line
    let resultMult = difficultSpelling.match(myRegexMult);
    console.log(resultMult);


    //chars that occur zero or more times
    let soccerWord = "gooooooooal!";
    let gPhrase = "gut feeling";
    let oPhrase = "over the moon";
    let goRegex = /go*/;
    soccerWord.match(goRegex);
    gPhrase.match(goRegex);
    oPhrase.match(goRegex);  //the three match calls would return the values ["goooooooo"], ["g"], and null


    //to match the chartacters that occur zero or more times
    let chewieQuote  = "Aaaaaaaaaaaaaaaarrrgh!";
    let chewieRegex = /Aa*/;
    let resultMore = chewieQuote.match(chewieRegex);
    console.log(resultMore);

    let chewieQuote1  = "bbbaby this is the bbaby girl that is very bbbbbbeautiful";
    let chewieRegex1 = /b*/gi;
    let resultMore1 = chewieQuote1.match(chewieRegex1);
    console.log(resultMore1);



    //using the lazy matching
    let textLazy = "<h1>Winter is coming</h1>";
    let myRegexLazy = /<.*?>/;
    let resultLazy = textLazy.match(myRegexLazy);
    console.log(resultLazy);


    //to find the pattern that will return true only if in the beginning
    let firstString = "Ricky is first and can be found.";
    let firstRegex = /^Ricky/;
    let first1  = firstRegex.test(firstString);
    let notFirst = "You can't find Ricky now.";
    let result1 = firstRegex.test(notFirst);

    console.log(result1);
    console.log(first1);   //the first one returns false while the second one return true



    //matching ending string pattern

    let theEnding = "This is a never ending story";
    let storyRegex = /story$/;
    storyRegex.test(theEnding);
    let noEnding = "Sometimes a story will have to end";
    storyRegex.test(noEnding);     //The first test call would return true, while the second would return false

    let resultEnd = storyRegex.test(theEnding);
    console.log(resultEnd);


    //match letters and numbers
    let longHand = /[A-Za-z0-9_]+/;
    let shortHand = /\w+/;
    let numbers = "42";
    let varNames = "important_var";
    longHand.test(numbers);
    shortHand.test(numbers);
    longHand.test(varNames);
    shortHand.test(varNames);


    let quoteSampleMatch = "The five boxing wizards jump quickly.";
    let alphabetRegexV2 = /\w/ig; 
    let resultMatch = quoteSampleMatch.match(alphabetRegexV2).length;

    console.log(resultMatch);




    //match letters and numbers

    let quoteSampleAll = "The five boxing wizards jump quickly.";
    let nonAlphabetRegex = /\W/ig; 
    let resultAll = quoteSample.match(nonAlphabetRegex).length;

    console.log(resultAll);





    //match all numbers

    let movieName = "2001: A Space Odyssey";
    let numRegex = /\d/ig; 
    let resultAllNum = movieName.match(numRegex).length;

    console.log(resultAllNum);




    //match all non-numbers
    let movieNameNon = "2001: A Space Odyssey";
    let noNumRegex = /\D/ig; // Change this line
    let resultNon = movieNameNon.match(noNumRegex).length;
    console.log(resultNon);




    //restrict possible usernames
    let username = "JackOfAllTrades";
    let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
    let resultUser = userCheck.test(username);
    console.log(resultUser);




    //match whitespace
    let sample = "Whitespace is important in separating words";
    let countWhiteSpace = /\s/g; // Change this line
    let resultWhite = sample.match(countWhiteSpace);
    console.log(resultWhite);




    //match all but whitespaces
    let sampleNonWhite = "Whitespace is important in separating words";
    let countNonWhiteSpace = /\S/ig; 
    let resultNonWhite = sample.match(countNonWhiteSpace);
    console.log(resultNonWhite);





    //specify lower and upper number of matches
    let ohStr = "Ohhh no";
    let ohRegex = /Oh{3,5}\sno/; // Change this line
    let resultSpecify = ohRegex.test(ohStr);
    console.log(resultSpecify);


    //specify only the lower bound
    let A4 = "haaaah";
    let A2 = "haah";
    let A100 = "h" + "a".repeat(100) + "h";
    let multipleA = /ha{3,}h/;
    multipleA.test(A4);
    multipleA.test(A2);
    multipleA.test(A100);   

    let haStr = "Hazzzzah";
    let haRegex = /Haz{4,}ah/ig; // Change this line
    let resultLower = haRegex.test(haStr);
    console.log(resultLower);



    //specify exact matches
    let timStr = "Timmmmber";
    let timRegex = /Tim{4}ber/ig; // Change this line
    let resultExact = timRegex.test(timStr);
    console.log(resultExact);




    //to check for all or non
    let american = "color";
    let british = "colour";
    let rainbowRegex= /colou?r/;
    rainbowRegex.test(american);
    rainbowRegex.test(british);

    let favWord = "favorite";
    let favRegex = /favou?rite/; // Change this line
    let resultAllNon = favRegex.test(favWord);
    console.log(resultAllNon);




    //lookaheads
    let sampleWord = "astronaut";
    let pwRegex = /(?=\w{6})(?=\w*\d{2})/ig; // Change this line
    let resultLook = pwRegex.test(sampleWord);

    console.log(resultLook);



    //check for mixed grouping
    let testStr = "Pumpkin";
    let testRegex = /P(engu|umpk)in/;
    testRegex.test(testStr);

    let myStringGroup = "Eleanor Roosevelt";
    let myRegexGroup = /(Franklin|Eleanor).*Roosevelt/; // Change this line
    let resultGroup = myRegexGroup.test(myStringGroup);



    //reuse patterns using 
    
    let repeatNum = "42 42 42";
    let reRegex = /^(\d+)\s\1\s\1$()/; // Change this line
    let resultReuse = reRegex.test(repeatNum);
    console.log(resultReuse);



    //search and replace
    let wrongText = "The sky is silver.";
    let silverRegex = /silver/;
    wrongText.replace(silverRegex, "blue");

    "Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');   //this will return "Camp Code"


    let str = "one two three";
    let fixRegex = /(\w+)(\w+)(\w+)/; // Change this line
    let replaceText = "$3 $2 $1"; // Change this line
    let resultReplace = str.replace(fixRegex, replaceText);
    console.log(resultReplace);



    //remove whitespace from start and end
    let hello = "   Hello, World!  ";
    let wsRegex = /^\s+|\s+$/g; // Change this line
    let resultRemove = hello.replace(wsRegex, ""); // Change this line
    console.log(resultRemove);




}