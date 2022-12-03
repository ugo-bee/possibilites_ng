

const chalk =require('chalk');
const inquirer = require('inquirer');





async function askQuestion(products) {
    const reply = await inquirer.prompt({
        name:'answer',
        type :'list',
        message: 'What would you like to order ?',
        choices: products
    });
    
    return reply.answer ;
}

 module.exports = askQuestion;