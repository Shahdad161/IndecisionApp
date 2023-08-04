//arguments object: no longer bound with arrow functions
// const add = function (a, b) {
//   console.log(arguments); //displays the given arguments
//   return a + b;
// };
// const add2 = (a, b) => {
//   //console.log(arguments); //doesnt displays the  arguments ERROR
//   return a + b;
// };
//this keyword: no longer bound
// const user = {
//   name: "Shah Dad",
//   cities: ["Turbat", "karachi", "Lahore", "Bahawalpur", "Quetta"],
//   printCitiesLived: function () {
//     this.cities.forEach((city) => {
//       //if a es5 function was used here it would have given error
//       console.log(`${this.name} lived in ${city}`);
//     });
//   },
// };
// user.printCitiesLived();

// const multiplier = {
//   arrofNum: [1, 2, 3, 4, 5],
//   multiplyBy: 2,
//   multiplyAllNumbers() {
//     return this.arrofNum.map((num) => num * this.multiplyBy);
//   },
// };
// console.log(multiplier.multiplyAllNumbers());
