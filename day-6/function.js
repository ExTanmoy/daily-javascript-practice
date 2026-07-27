//    //01
// function marks(num1, num2){
//     total = num1 / num2;
//     console.log(total);
// }  
// console.log('Emi:')
// marks(20, 5);
// console.log('Tuni:')
// marks(42, 7);
// console.log('Mina:')
// marks(54, 6);

// // 02
// function myInfo(name1, name2){
//     let fullName = name1 + ' ' + name2;
//     return fullName;
// }

// let fullName = myInfo('Tanmoy','Debnath');
// console.log(fullName);

// // 03

// const student = {
//     name: 'MOnir Abdul',
//     id: 15,
//     marks: 75
// }

// function isStudentAPlus(std){
//     console.log('got the student', std);
// }
// const isAPlus = isStudentAPlus(student);  

// // 04

// const numbers = [12, 87, 14, 51, 36, 46];
// const evens = [];
// for(const num of numbers){
//     console.log(num)
    
//     if(num % 2 === 0 ){
//         console.log('even', num)
//         evens.push(num);
//     }
// }


const numbers = [12, 87, 14, 51, 36, 46];

for(const num of numbers){
    const evens = [];
    if(num % 2 === 0 ){
        evens.push(num);
    }
}
console.log(evens);