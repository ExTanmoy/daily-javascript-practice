// 01   
// let text = ' Javascript ';
// console.log(text.length);

// 02   Object
//  let student = {
//     name: 'Anik Roy',
//     age: 20,
//     class: 12,
//     isPassed: true,
//     favSubject: ['Math', 'English', 'ICT'],
//  }
//  console.log(student);

// special
// const college = {
//     name: 'vnc',
//     address: 'baily road',
//     students: 800,
//     events: ['21 Feb', 'Independence day', 'Victory Day'],
//     people: {
//         count: 200,
//         principal: {
//             name: 'sabura mam',
//             yearsOfExperience: 25,
//             degree: 'English'
//         }
//     }
// }

// console.log(college.people.principal.degree);
// console.log(college['people']['principal'].name);
// college.events[2] = 'Eid ul adha'
// console.log(college.events)

//  // 03
//  let text = 'I love programming.';
// console.log(text.toUpperCase());
// console.log(text.toLowerCase());

// // 04
// let sentence = 'My favorite programming language is Javascript.';
// console.log(sentence.includes("Javascript"));
// console.log(sentence.includes("Python"));

// 05
// let fruits = "Apple, Banana, Mango";
// console.log(fruits.slice(7,13));

//  06  // Dot Notation   // Bracket Notation
// let student = {
//     name: 'Anik Roy',
//     age: 20,
//     class: 12,
//     isPassed: true,
//     favSubject: ['Math', 'English', 'ICT'],
// }
// console.log(student.name , student.age, student.favSubject);  
// console.log(student['name']);  

// 07    update, add, delete 
// let mobile = {
//     brand: 'Samsung',
//     model: 'Galaxy S23',
//     camera: 'Duel',
//     megapixel: 50,
// }
// console.log(mobile);

// mobile.model = 'Galaxy S25';  // data update
// console.log(mobile);

// mobile.released = 2024;      // add property
// console.log(mobile);

// delete mobile.megapixel;    // delete property
// console.log(mobile);

// 08  object key value entries
// let laptop ={
//         brand: 'HP',
//         price: 5000,
//         ram: '8gb',
// }
// console.log(Object.keys(laptop));
// console.log(Object.values(laptop));
// console.log(Object.entries(laptop))

// 09    //
//  let student = {
//         name: 'Anik Roy',
//         'home address': 'Dhaka',
//         'father name' : 'Dipok Roy',
//         age: 20,
//         class: 12,
//         isPassed: true,
//         favSubject: ['Math', 'English', 'ICT'],
//  }
//  console.log(student['father name']);

// 10 trim()

// const emailUserProvided = '  Anik@Roy.com  ';
// const emailSavedInDatabase= 'Anik@roy.com';
// console.log('####:',emailUserProvided.trimStart().trimEnd().toUpperCase(), '###');

// 11 
// let firstName = 'Tanmoy ';
// let secondName = 'Debnath';

// let fullName = firstName + secondName;   // variable e (,) deya jabe na. (+) deya jabe. // console er vetore (,) deya jabe
// console.log(fullName);

// console.log(firstName.concat(secondName));  //concat();

//  12
// const commitment = 'I will work hard and will never give up.'
// reverse  this = '.pu evig reven'

// const parts = commitment.split(' ');
// const reversedParts = parts.reverse();
// const reversedCommitment = reversedParts.join(' ')
// console.log(parts);
// console.log(reversedParts);
// console.log(reversedCommitment);

// 13
// const companiesStr = 'Tesla SpaceX Paypal NeuraLink SolarCity Twitter';
// const companies = companiesStr.split(' ');
// console.log(companies)
// const againStr = companies.join(' ')
// console.log(againStr)


// 14
// for...of --> array
// for...in --> object
// const student = {        
//     name: 'Akbar mogol', 
//     id: 111,
//     age: 14,
//     favSubjects: ['physics', 'math', 'chemistry']
// }

// // for in method/loop
// for(let key in student){
//     console.log(key);
//     let value = student[key];
//     console.log(key , value);
// }

// //  for of method/loop
// let keys = Object.keys(student);
// console.log(keys);
// for(let key of keys){
//     value = student[key]
//     console.log(key, value)
// }
