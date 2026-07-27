// // 01

// // normal method

// let a = 5;
// let b = 20;
// let sum = a + b;
// console.log(sum);

// // function method
// function addNumbers(a,b){
//     let sum = a + b;
//     return sum;
// }
// let result = addNumbers(15,20);
// console.log(result);
// console.log(addNumbers(5,10));

// // 02 odd even number
// normal method
// let number = 7767;
// if(i % 2 === 0){
//     console.log('Even Number');
// }
// else{
//     console.log('Odd Number');
// }

// // function method
// function checkOddEven(number){
//     if(number % 2 === 0){
//         return 'Even Number';
//     }
//     else{
//         return 'Odd Number';
//     }
// }
// console.log(checkOddEven(9));

// // 03
// let number = 6;
// sum = 0;
// for(let i = 1; i <= number; i++){
//     sum = sum + i
//     // console.log(sum, '+', i, '=', sum = sum + i)
// }
//     console.log(sum);

// // function method
// function sumRange(number){
//     let sum = 0;
//     for(i = 1 ; i <= number; i++){
//         console.log(sum, '+', i, '=', sum = sum + i);
        
//     }return sum;
// }
// console.log('Total Sum =',sumRange(68));

// // 04 factorial (!)

// let number = 5;
// let sum = 1
// for(i = 1; i <= number; i++){
//     sum = sum * i ;
    
// }console.log(sum)

// // function

// function getFactorial(number){
//     let sum = 1;
//     for(i = 1; i <= number; i++){
//     sum = sum * i ;
//     }return sum;
// }
// console.log(getFactorial(5));

// // 05

// let i = 55;
// let fizz = i % 3 === 0;
// let buzz = i % 5 === 0;
// let fizzBuzz = i % 3 === 0 && i % 5 === 0;

// if(fizzBuzz){
//     console.log('FizzBuzz');
// }else if(buzz){
//     console.log('Buzz');
// }else if(fizz){
//     console.log('Fizz');
// }

// let number = 15;
// for(let i = 1; i <= number; i++){
//     console.log(i, '=>')
//     if(i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
// }else if(i % 5 === 0){
//     console.log('Buzz');
// }else if(i % 3 === 0){
//     console.log('fizz');
// }else{
//     console.log('Nothing')
// }
// }

// //function

// function fizzBuzz(number){
//     for(let i = 1; i <= number; i++){
//     console.log(i, '=>')
//     if(i % 3 === 0 && i % 5 === 0){
//     console.log('FizzBuzz');
// }else if(i % 5 === 0){
//     console.log('Buzz');
// }else if(i % 3 === 0){
//     console.log('fizz');
// }else{
//     console.log('i')
// }
// } 
// }

// fizzBuzz(15)

// // 06  //reverse string
// let str = "Programming"
// let result = '';
// for(i = 0; i < str.length; i++){
//     result = str[i] + result ;  
// }
// console.log(result) ;

// function reverseStr(str){
//     let result = '';
//     for(i = 0; i < str.length; i++){
//         result = str[i] + result ;  
// }
//     return result;
// }console.log(reverseStr('Programming'))

// // 07

// let str = 'I am Tanmoy';
// let vowel = 'aeiouAEIOU';
// let count = 0;

// for(let i = 0; i < str.length; i++){
//     let letter = str[i];
    
//     if(vowel.includes(letter)){
//         console.log(letter, '= vowel')
//         count++;
//     }else{
//         console.log(letter);
//     }
// }console.log('Total Vowel', count);

// // Function Method
function checkVowel(str){
    let vowel = 'aeiouAEIOU'
    let count = 0;

    for(let i = 0; i < str.length; i++){
    let letter = str[i];
    
    if(vowel.includes(letter)){
        console.log(letter, '= vowel')
        count++;
    }else{
        console.log(letter);
    }
}
return count;
}

let vowelCount = checkVowel('This is me Tanmoy');
console.log('Total Vowel Found:',vowelCount);