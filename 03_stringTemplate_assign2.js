var stringHandsOn = function () {
    console.log(``);
    var givenString= "     Hey you are doing good, keep it up     "
    console.log(`1] The given string is : ${givenString}`);
    console.log(``);
    console.log(`2] Length of the string is : ${givenString.length}`);
    console.log(``);
    var afterTrim = givenString.trim();
    var afterTrimLength = afterTrim.length;
    // console.log("Trimming : ",trim,"length",trim.length);
    console.log(`3] After removing exctra spaces : ${afterTrim}`);
    console.log(``);
    var exctraSpaces= givenString.length - afterTrimLength;
    console.log(`4] Total Number of Exctra Spaces : ${exctraSpaces}`);
    console.log(``);
    console.log(`5] First Character After Trim is "${afterTrim.charAt(0)}" and Last Character After Trim is "${afterTrim.charAt(afterTrimLength-1)}".`);
    console.log(``);
    var resultSplit=afterTrim.split(" ");
    console.log(`6] Total words available in string after trim : ${resultSplit.length}`); 
    var indexOfGood = givenString.indexOf("good");
    console.log(``);
    console.log(`7] The index of word "good" from given string is : ${indexOfGood}`);
    console.log(``);
    console.log(`8.a] Substring Starting from index22 using substring : ${afterTrim.substring(22)}`);
    console.log(`8.b] Substring Starting from index22 using slice : ${afterTrim.slice(22)}`);
    console.log(``);
    console.log(`9] Is string ends with word "up" after trimming : ${afterTrim.endsWith("up")}`);
    console.log(``);
    console.log(`10] Is string starts with word "Hey" after trimming : ${afterTrim.startsWith("Hey")}`);
}   
stringHandsOn();