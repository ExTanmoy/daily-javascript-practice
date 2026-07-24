//   1.1
// let str = "hello";
// let arr = ["h", "e", "l", "l", "o",];
// console.log(str.length);
// console.log(arr.length);
// console.log(str[0]);
// console.log(arr[3]);
// arr.push();
// console.log(arr);
// arr.pop();
// console.log(arr);

//  1.2
// let text = 'JavaScript';
// console.log(text.split(''));
// console.log(text)

// let textArr =[
//   'J', 'a', 'v', 'a',
//   'S', 'c', 'r', 'i',
//   'p', 't'
// ]
// console.log(textArr);
// console.log(textArr.join(''));

// let a = ["c", "a", "t"];
// console.log(a.join(''));

// 2.1
// let name = "JavaScript";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

// let text = '  Hi There   '
// console.log(text.trim());

// 3.1
// let sentence = "Learning JavaScript is fun!";
// console.log(sentence.slice(0,8));
// console.log(sentence.slice(-4));

//  3.2
// let text1 = 'Hello';
// let text2 = 'World';
// console.log(text1.concat(' ',text2));    // concat
// console.log(text1 + ' ' + text2);       // (+) connector
// console.log(`${text1} ${text2}`);      //   Template Literal

//  4.1  reverse in different method

// let str = 'JavaScript';
// // console.log(str.split('').reverse().join(''));   //  Using .split(""), .reverse(), and .join("") along
// for(let i = str.length - 1; i >= 0; i--){
//     console.log(str[i]);
// }

// let str = 'JavaScript';
// let result = '';
// for(let i = str.length - 1; i >= 0; i--){
//     result = result + str[i];
// }console.log(result);

// 5.1  object intro

// const student = {
//     name:'Anik Roy',
//     age: 25,
//     grade: 'GPA-5',
//     isEnrolled: true,
// }
// console.log(student);
// console.log(student.name);

// 6.1 object modification

// let car = { brand: "Toyota", model: "Corolla", year: 2022 };
// console.log(car.brand);
// console.log(car['model']);
// car['color'] = 'blue';
// console.log(car);
// car.year = 2023;
// console.log(car);

//  7.1  // calling  keys & values of object and deletion
// let book = { title: "The Hobbit", author: "Tolkien", pages: 310 };
// console.log(Object.keys(book));
// console.log(Object.values(book));
// console.log(Object.entries(book));
// delete book.pages;
// console.log(book);

//  7.2  // nested object exploration
// let user = {
//   username: "coder123",
//   address: {
//     city: "Austin",
//     zip: "78701"
//   }
// }
// console.log(user.address.city);
// user.address.state = 'Texas';
// user.address.country = 'USA';
// console.log(user);
// delete user.address.zip;
// console.log(user);


// 8.1
// let scores = { math: 90, science: 85, art: 95 };
// for(let keys in scores){
//     values = scores[keys];
//     console.log(keys,':', values);
// }
// let total = 0;                          // for of loos
// let values = Object.values(scores);
// for(let value of values){
//     total = total + value;
// }
// let average = total / values.length;
// console.log('Average:', average);

// let scores = { math: 90, science: 85, art: 95 };    // for in loops
// let total = 0;
// let count = 0;
// for(let score in scores){
//     total = total + scores[score];
//     count++ ;
// } 
// let average = total / count;
// console.log('Average:', average);

///    9.1
// let contact = {
//   name: "Alex Johnson",
//   email: "ALEX@EMAIL.COM",
//   phone: "555-1234",
// }

// contact.email = contact.email.toLowerCase();

// console.log("---------  Contact Details  ---------");
// for(let key in contact){
//     console.log(key, ':', contact[key])
// }

// contact.favoriteWords = ['Vision', 'Success'];
// contact.favoriteWords.push('Javascript')
// console.log(contact);

// let reversedName = '';
// for(let key of contact.name){
//     reversedName = key + reversedName;
// }console.log(reversedName);

// if (contact.email.toLowerCase().includes('@email.com')){
//     console.log('Email Confirmed');
// }