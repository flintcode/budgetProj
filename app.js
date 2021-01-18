const income = document.getElementById("income");
const submit = document.getElementById("submit");
const essentials = document.getElementById("essentials");
const disc = document.getElementById("discretionary");
const savings = document.getElementById("savings");
const container = document.getElementById("container");

const ultSaver = (income) => {
  
   const essentials = () => {
   let amount = income * 0.5;
    let totalAmount = `This is your amount to spend on essentials monthly: ${amount}`;
    let rent = `spend ${amount * 0.36} on rent`;
    let food = `spend ${amount * 0.04} on food`;
    let transport = `spend ${amount * 0.07} on transportation`;
    let utilities = `spend ${amount * 0.03} on utilities`;
    return {totalAmount,rent,food,transport,utilities};
  }  

   let discretionary = () => {
    let amount = income * 0.1;
    let totalAmount = `This is your amount to spend on discretionary items monthly: ${amount}`;
    let eatingOut = `spend ${amount * 0.36} eating out`;
    let phone = `spend ${amount * 0.04} on your phone bill`;
    let internet = `spend ${amount * 0.07} on internet`;
    let spending = `spend ${amount * 0.03} on consumer spending`;
     return {totalAmount,eatingOut,phone,internet,spending};
  }  
   
    let savings = () => {
      let amount = income * 0.4;
      let totalAmount = `This is your amount you need to save monthly: ${amount}`;
      let investment =`spend ${amount * 0.4} on an ETF` ;
      return{totalAmount,investment};
  }  

return {essentials,discretionary,savings};

}

const liteSaver = (income) => {

   const essentials = () => {
   let amount = income * 0.5;
    let totalAmount = `This is your amount to spend on essentials monthly: ${amount}`;
    let rent = `spend ${amount * 0.36} on rent` ;
    let food = `spend ${amount * 0.04} on groceries/food`;
    let transport = `spend ${amount * 0.07} on transportation`;
    let utilities = `spend ${amount * 0.03} on utilities`;
    return {totalAmount,rent,food,transport,utilities}
  }  

   let discretionary = () => {
    let amount = income * 0.3;
     let totalAmount = `This your amount to spend on discretionary items monthly: ${amount}`
    let eatingOut = `spend ${amount * 0.36} on eating Out`;
    let phone = `spend ${amount * 0.04} on your phone bill`;
    let internet = `spend ${amount * 0.07} on your internet bill`;
    let spending = `spend ${amount * 0.03} on consumer spendings`;
     return {totalAmount,eatingOut,phone,internet,spending}
  }  
   
    let savings = () => {
      let amount = income * 0.2;
      let totalAmount = `This your amount you need to save monthly: ${amount}`;
      let investment = `spend ${amount * 0.4} on an ETF`;
      return{totalAmount,investment};
  }  

return {essentials,discretionary,savings};
}

submit.addEventListener('click', () => {
  essentials.textContent = "";
   disc.textContent = "";
   savings.textContent = "";
  const ult = ultSaver(income.value)
  essentials.textContent += JSON.stringify(ult.essentials());
  disc.textContent += JSON.stringify(ult.discretionary());
  savings.textContent += JSON.stringify(ult.savings());
});




// const moduleText = (essential,disc,savings) => {
  
//     const essentialsText = () => {
//       return document.getElementById("essentials").textContent = essential
//   }
  
//   const discText = () => {
//      return document.getElementById("discretionary").textContent = disc
//   }
  
//   const savingsText = () => {
//     return document.getElementById("savings").textContent = savings
//   } 
// }