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

// const password = 'p@ass';

// if(password.length >= 12){
//     console.log('that password is mighty strong');
// }
// else if(password.length >= 8){
//     console.log('that password is long enough!');
// } else {
//     console.log('password is not long enough');
// }

//locgical operation - OR || and AND &&
    // const password = 'p@ass12';

    // if(password.length >= 12 && password.includes('@')){
    //     console.log('that password is mighty strong');
    // }
    // else if(password.length >= 8 || password.includes('@') && password.length >= 5){
    //     console.log('that password is strong enough!');
    // } else {
    //     console.log('password is not strong enough');
    // }


// logical Not (!)

// let user = false;
// if(!user){
//     console.log('you must be logged in to continue');
// }

// console.log(!true)
// console.log(!false);

//break and continue
// const scores = [50, 25, 0, 30, 100, 20, 10];
// for(let i = 0; i < scores.length; i++){
//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score: ', scores[i]);
//    if(scores[i] === 100){
//       console.log('congrats, you got the top score!');
//       break;
//    }
// }

// switch statements 
// const grade = 'A';
// switch(grade){
//     case 'A':
//       console.log('you got an A!');
//       break;
//     case 'B':
//       console.log('you got an B!');
//       break;
//     case 'C':
//         console.log('you got an C!');
//         break;
//     case 'D':
//          console.log('you got an D!');
//          break;
//     case 'E':
//          console.log('you got an D!');
//          break;
//     default:
//         console.log('not a valid grade');
// }

//variables & block scope 
// let age = 30;

// if(true){
//  let age = 40;
//  let name = 'favour'
//    console.log('inside 1st code block', age, name); 

//    if(true){
//     console.log('inside 2nd code block: ', age);
//    }
// }

// console.log('outside code block:', age);

// function declaration

// function greet(){
//     console.log('hello there');
// }

// function expression 
// const speak = function(){
//   console.log("good-day ma")
// };
// speak()

// greet();

//argument & parameters 
// const speak = function(name = 'favour', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();

// retuning values 
// const calcArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }

// const area = calcArea(5);
// console.log(area);

//arrow function 
// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log('area is', area)

//object 


// console.log(blogs)
// let user = {
//     name: 'favour',
//     age: 30,
//     email: 'favourofego@gmail.com',
//     location: 'berlin',
//      blogs: [
//       {title: 'why mac & cheese rules', likes: 30},
//       {title: '10 things to make with marmite', likes: 50}
//      ],
//      login: function(){
//         console.log('the user logged in');
//      },
//      logout: function(){
//        console.log('the user logged out');
//      },

//      logBlogs(){
//         console.log('this user has written the following blogs:');
//         this.blogs.forEach(blog => {
//           console.log(blog.title, blog.likes);
//         })
//      }
// };
// user.logBlogs();
// console.log(this)

// Math object

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.7;

// console.log(Math.round(area));

// const random = Math.random();

// console.log(random);

// let scoreOne = 50;
// let scoreTwo = scoreOne;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// scoreOne = 100;

// console.log(`scoreOne: ${scoreOne}`, `scoreTwo: ${scoreTwo}`);

// const userOne = { name: 'favour', age: 30};
// const userTwo = userOne;

// console.log(userOne, userTwo);

// userOne.name = 'ofego';
// console.log(userOne, userTwo);

// const para = document.querySelector('p');

// console.log(para)

// const paras = document.querySelectorAll('p');

// console.log(paras);

// get an element by ID 
// const title = document.getElementById('page-title');
// console.log(title);

// get element by their class name 
// const errors = document.getElementsByClassName('error');
// console.log(errors);

//get elements by their tag name 
// const paras = document.getElementsByTagName('p');
// console.log(paras[1]);

// const para = document.querySelector('p');
// console.log(para.innerText);
// para.innerText = 'try to stop smoke weed';

// const paras = document.querySelectorAll('p');

//for changing innertext
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += 'new text'
// })

// const content = document.querySelector('.content');
// const people = ['favour', 'john', 'oke'];
// people.forEach(person => {
//     content.innerHTML += `<p>${person}</p>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href', 'https://www.thenetninja.co.uk');

// const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');

// const content = document.querySelector('p');

// console.log(content.classList);
// content.classList.add('success');

// const button = document.querySelector('button');

// button.addEventListener(`click`, () => {
//     console.log('you clicked me');
// });

const ul = document.querySelector('ul')
ul.remove();

const items = document.querySelectorAll('li');
items.forEach(item => {
    item.addEventListener('click', e => {
        e.target.style.textDecoration = 'line-through';
    });
})

