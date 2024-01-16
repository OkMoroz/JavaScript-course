// const bill = 275;
// /* Write your code below. Good luck! 🙂 */
// let tip;
// bill >= 50 && bill <= 300
//   ? (tip = bill * (15 / 100))
//   : (tip = bill * (20 / 100));
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
// );

const bill = 275;
/* Write your code below. Good luck! 🙂 */
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
