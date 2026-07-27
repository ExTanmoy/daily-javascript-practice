let str = "I am Tanmoy.  @ 2026";
let vowels = 'aeiou';

            // // Catagory counting variable
let vowelCount = 0;
let spaceCount = 0;
let specialCharCount = 0;
let numberCount = 0;
let consonantCount = 0;

// // loop
for(let i = 0; i < str.length; i++){
    let letter = str[i];
    let lowerLetter = letter.toLowerCase();

            // // Vowel Checking
    if(vowels.includes(lowerLetter)){
        console.log(letter, 'is => Vowel');
        vowelCount++;
    }

            // // Consonant Checking
    else if(/[a-z]/.test(lowerLetter)){
        console.log(letter, 'is => Consonant');
        consonantCount++;
    }
            // // Space Checking
    else if(/\s/.test(letter)){
        console.log(letter, 'is => Space');
        spaceCount++;
    }
    
    
            // // Number Checking
    else if(/[0-9]/.test(letter)){
        console.log(letter, 'is => Number');
        numberCount++;
    }
    
            // // Special Character Checking
    else{
        console.log(letter, 'is => Special Character');
        specialCharCount++;
    }
}

            // // SUMMERY
console.log("\n====== SUMMARY ======");
console.log("Total Vowels:", vowelCount);
console.log("Total Consonants:", consonantCount);
console.log("Total Spaces:", spaceCount);
console.log("Total Special Characters:", specialCharCount);
console.log("Total Numbers:", numberCount);