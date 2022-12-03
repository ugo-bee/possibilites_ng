

const chalk =require('chalk');
const inquirer = require('inquirer');





async function checkoutQuestion() {
    const reply = await inquirer.prompt({
        name:'answer',
        type :'list',
        message: 'Checkout Cart ?',
        choices: ["YES","NO"]
    });
    
    return reply.answer ;

    
}

 module.exports = checkoutQuestion;