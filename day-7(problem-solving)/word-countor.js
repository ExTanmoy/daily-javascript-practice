// // without function

// let text = 'I am practicing code of JavaScript';
// let wordCount = text.split(' ').length;
// console.log('Total Words:', wordCount);

// with function
function wordCountor(str){
    let makingArray = str.split(' ');
    let totalWords = makingArray.length;
    return totalWords;
}
let text = wordCountor('I am practicing code of JavaScript');
console.log('Total Words:', text);