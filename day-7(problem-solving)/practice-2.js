// // 09 min max Number checker 

// // without function

// let numbers = [155, 45, 12, 89, 3, 67, 23, 99, 8]
// let largest = numbers[0];
// let smallest = numbers[0];

// for(let num of numbers){
//     if(num > largest){
//         largest = num;
//     }
//     if(num < smallest){
//         smallest = num;
//     }
// }
// console.log(largest);
// console.log(smallest);

// // with function

// function findMinMax(numbers){
//     let largest = numbers[0];
//     let smallest = numbers[0];
//     for(let num of numbers){
//         if(num > largest){
//             largest = num;
//         } 
        
//         if(num < smallest){
//             smallest = num;
//         } 
        
//     }
//     return {
//         max: largest,
//         min: smallest
//     }
// }

// let result = findMinMax([45, 12, 89, 3, 67, 23, 99, 8]);

// console.log(result);    //output = { max: 99, min: 3 }
// console.log(result.max);    //output = 99;
// console.log(result.min);    //output = 3;



// // 10 (Average Calculation)
// // without function

// let numbers = [30, 50, 70];
// let total = 0;
// let count = 0;


// for(let number of numbers){
//     total = total + number;
//     count++;
// }
// let average = total / count;
// console.log('Average =', total, '÷', count );

// // with function

// function genarateAvg(numbers){
//     let total = 0;
//     let count = 0;

//     for(let number of numbers){
//         total = total + number;
//         count++ ;
//     }
//     let average = total / count;
//     return average;
    
//     // // return `Average = ${total} ÷ ${count} = ${average}`;  // alt rule for pretty output (Average = 150 ÷ 3)
// }

// let result = genarateAvg([30, 50, 70, 50])
// console.log(result);



// // 11  ( filter numbers greater than x)
// // without function

// let numbers = [1,2,30,5,50,500,60,73,275,192,455];
// let result = [];
// let value = 50
// for(number of numbers){
//     if(number > value){
//         result.push(number);
//     }   
// }
// console.log(result);

// // with Function

// function getFilterNumbers(numbers, value){
//     let result = [];
//     for(number of numbers){
//         if(number > value){
//             result.push(number);
//         }
//     }
//     return result;
// }
// let filteredNumbers = getFilterNumbers([1,2,30,5,50,500,60,73,275,192,455], 50);
// console.log(filteredNumbers);
