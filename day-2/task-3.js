// let age = 31;
// let hasTicket = true;

// if(age>18 && hasTicket){
//     console.log('Entry Allowed');
// }
// else{
//     console.log('Not Allowed');
// }

// 2
// let isWeekend = false;
// let isholiday = false;

// if(isWeekend === true || isholiday){
//     console.log('No work today');
// }
// else{
//     console.log('Working Day');
// }

//3
// let username = 'admin';
// let password = '1234'
// if (username === 'admin' && password ==='1234'){
//     console.log('Login Successful');
// }
// else{
//     console.log('Login Error');
// }

//4 Grading SYstem

// const marks = 22;
// if(marks >= 80){
//     console.log('A+');
// }else if(marks >= 70){
//     console.log('A');
// }else if(marks >= 60){
//     console.log('A-');
// }else if(marks >= 50){
//     console.log('B');
// }else if(marks >= 40){
//     console.log('C');
// }else if(marks >= 33){
//     console.log('D');
// }else{
//     console.log('Failed');
// }

// 5 BMI Calculator

// let bmi = 255;
// if (bmi < 18.5){
//     console.log('Underweight');
// }else if(bmi <= 24.9){
//     console.log('Normal Weight');
// }else if(bmi <= 29.9){
//     console.log('Overweight');
// }else{
//     console.log('Obese');
// }

// 6 Season Detector

// let month = 6;
//  if(month === 12 || month === 1 || month === 2){
//     console.log('Winter');
//  } else if(month === 3 || month === 4 || month === 5){
//     console.log('Summer');
//  } else if(month === 6 || month === 7 || month === 8){
//     console.log('Monsoon');
//  } else if(month === 9 || month === 10 || month === 11){
//     console.log('Autumn');
//  } else{
//     console.log('Invalid Month Number');
//  }

// 7

// let age = 55;
// let hasID = false;
// if (age >= 18){
//     if(hasID){
//         console.log('You are eligible to vote.');
//     } else{
//         console.log('ID required to vote');
//     }
// } else{
//     console.log('Too young to vote');
// }

// 8

let isLoggedIn = false;
let isAdmin = true;

if (isLoggedIn){
    if(isAdmin){
        console.log('Admin Dashboard');
    } else{
        console.log('User Dashboard');
    }
} else{
    console.log('Please Login');
}