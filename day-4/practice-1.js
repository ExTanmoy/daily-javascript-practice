//   01 Array & length

// let fruits = ['Apple', 'Banana', 'Mango'];
// console.log(fruits.length);


//  02 push, pop, shift, unshift

// let numbers = [10, 20, 30];

// numbers.push(40);
// console.log(numbers);

// numbers.pop();
// console.log(numbers);

// numbers.unshift(5);
// console.log(numbers);

// numbers.shift();
// console.log(numbers);

//  03      (reverse, includes, indexOf)

// let animals = ['Cat', 'Dog', 'Tiger', 'Cat'];
// animals.reverse();
// console.log(animals);
// console.log(animals.includes('Tiger'));
// console.log(animals.indexOf('Cat'));
// console.log(animals.reverse());
// console.log(animals.indexOf('Cat'));

//  04     (slice, splice)

// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// let selectedColors = colors.slice(1,3);
// console.log(selectedColors);
// console.log(colors);

// let colors = ['Red', 'Green', 'Blue', 'Yellow'];
// let spliceColor = colors.splice(1,2,999);
// console.log(spliceColor);
// console.log(colors);

// 05   (for loop & for...of loop)

// let colors = ['Red', 'Green', 'Blue', 'Yellow'];             //for loop
// for(let i = 0; i < colors.length; i++){
//     console.log('Index of', i, 'is', colors[i]);
// }

// let colors = ['Red', 'Green', 'Blue', 'Yellow'];        // for of loop
// for(let color of colors){
//     console.log(color);
// }

// let names = ['one', 'two', 'three', 'four', 'five', 'six']    
// let afterReverse = [];

// for(name of names){                  // reverse array through for of loop
//     console.log(name);
//     afterReverse.unshift(name);
//     console.log(afterReverse);
// } console.log('Final output of Reverse: ', afterReverse);


// for(let i = names.length -1; i >= 0; i--){
//     console.log(names[i]);
// }