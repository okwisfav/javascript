// const calcArea = (radius) => {
//   return 3.14 * radius**2;
// };

// const area = calcArea(5);
// console.log('area is:', area);

// const bill = function(product, tax){
//   let total = 0;
//   for(let i = 0; i <  products.length; i++){
//     total += product[i] + product[i] * tax;
//   }
//   return total;
// }

// const bill = ( products, tax ) => {
//     let total = 0;
//     for(let i = 0; i <  products.length; i++){
//       total += products[i] + products[i] * tax;
//     }
//     return total;
// }

// console.log(bill([10, 15, 30], 0.2));
 

//callback & foreach 
// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

//  people.forEach((person, index) => {
//     console.log(index, person);
//  });

const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun','chun-li'];
let html = ``;
people.forEach((person) =>{
  html+= `<li style="color: purple">${person}</li>`;
})