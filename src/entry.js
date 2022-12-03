

const chalk = require('chalk');
const askQuestion = require('./askQuestion');
const checkoutQuestion = require('./checkoutQuestion');
const collectUserDetails = require('./collectUserDetails');
const displayCatalogue = require('./displayCatalogue');
const products = require('./products');



 async function entry() {
   let name =  await collectUserDetails()
   
   let hairChoice
   let cart=[]
   
   console.log(chalk.green(`Hi ${name}, Welcome to Possibilities Hair Store `));
  
  
   displayCatalogue(products);
  const  question1 = await askQuestion(products);
  const selectedProduct = products.filter((item)=> item.value === question1)
  cart.push(...selectedProduct)
  
  
  const  question2 = await askQuestion(products);
  const selectedProduct2 = products.filter((item)=> item.value === question2)
  cart.push(...selectedProduct2)

  console.table(cart)

   await checkoutQuestion() 
  
  const checkout = cart.reduce(
  (accumulator,currentvalue) => accumulator + currentvalue.price,
  0,
  );

  console.table(checkout);
 }

 entry();