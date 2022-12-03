const inquirer = require ('inquirer');

async function collectUserDetails(){
    const answers = await inquirer.prompt({
        name:'username',
        type :'input',
        message:'What is your name?',
        default() {
            return 'user';
        },
    }); 
    
    return answers.username
}
module.exports = collectUserDetails