// let radius = 10;
// const pi = 3.14;

// console.log(radius, pi)

// console.log(10/2);
// let result = radius % 3;

// let result = pi * radius**2
// order of operation - B I D M A S

// let result = 5 *(10-3)**2;
// console.log(result);

// let likes = 10 
// likes +=10;
// console.log(likes);


//template strings

// const title = 'Best reads of 2019';
// const author = 'Mario';
// const likes = 30;

//concatenation way
// const result = 'the blog called' + title + 'by' + author + 'has' + likes + 'likes'
// console.log(result);

//template string way 
// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

//creating html templates 
// let html  = `
//   <h2>${title}</h2>
//   <p>By ${author}</p>
//   <span>Ths blog has ${likes} likes </span>
// `
// console.log(html)

// for loops

// for(let i = 0; i < 5; i++){
//   console.log('In loop:', i);
// }

// const names = ['favour', 'john', 'oke'];

// for (let i = 0; i < names.length; i++){
//     console.log(names[i]);
// }

//while loops
// let i = 0;
// while(i < 5){
//   console.log('In loop:', i);
//   i++;
// }

// const names = ['favour', 'john', 'oke'];

// let i = 0;
// while(i < names.length){
//   console.log(names[i]);
//   i++;
// }

// do while loops 

// let i = 5;

// do{
//   console.log('val of i is: ', i);
//   i++;
// }while(i < 5);


// if statements 
// const age = 20;

// if(age >  20){
//    console.log('you are over 20 years old');
// }

// const age = 24;

// if(age > 20){
//     console.log('you are over 20 years old');
// }


// const names = ['favour', 'john', 'oke'];

// if(names.length > 3){
//     console.log('that a lot of names')
// }


// else if statements

const password = 'p@ass';

if(password.length >= 12){
    console.log('that password is mighty strong');
}
else if(password.length >= 8){
    console.log('that password is long enough!');
} else {
    console.log('password is not long enough');
}