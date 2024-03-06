const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const triangle = require('../lib/triangle');
const circle = require('../lib/circle');
const square = require('../lib/square');

const questions = [
  'What text would you like in your logo? You may choose a maximum of 3 (three) characters.',
  'What color would you like that text to be? (Enter a color keyword (OR a hexadecimal number)).',
  'Which of these 3 shapes would you like your logo to be?',
  'What color would you like the shape to be? (Enter a color keyword (OR a hexadecimal number))',
  'Do you want to add a border to the shape? (yes/no)',
  'What color would you like the border to be? (Enter a color keyword (OR a hexadecimal number))'
];

class CLI {
  constructor() {
    this.options = [];
  }

  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          message: questions[0],
          name: 'text',
          validate: function(response) {
              if (response.length > 3 || response.length < 1) {
                  return console.log('Please enter a valid response (maximum 3 characteres).');
              } 
              return true;
          }
        },
        {
          type: 'input',
          message: questions[1],
          name: 'textColor',
          validate: function(response) {
            if(response < 1 || (!response.includes('#') && response.includes(' '))) {
              return console.log('Please enter a keyword Color or a hexadecimal color reference.');
            }
            return true;
            
          }
        },
        {   
          type: 'list',
          message: questions[2],
          choices: ['circle', 'triangle', 'square'],        
          name: 'shape'
        },
        {
          type: 'input',
          message: questions[3],
          name: 'shapeColor',
          validate: function(response) {
            if (response.length < 1 || (!response.includes('#') && response.includes(' '))) {
              return console.log('Please enter a keyword Color or a hexadecimal color reference.');
              
            }
            
            return true;
          }
        },
        {
          type: 'list',
          message: questions[4],
          choices: ['yes', 'no'],
          name: 'border',
        },
        {
          type: 'input',
          message: questions[5],
          name: 'borderColor',
          when: function(answers) {
            return answers.border === 'yes';
          },
          validate: function(response) {
            if (response.length < 1 || (!response.includes('#') && response.includes(' '))) {
              return console.log('Please enter a keyword Color or a hexadecimal color reference.');
              
            }
            if(response === 'white' || response === '#ffffff' || response === '#fff'){
              return console.log(' White border is not recommended. Please choose another color.');
            }
            return true;
          }
        }
      ])
      .then((data) => {
        this.options = data;
        this.options.text = this.options.text.toUpperCase();
        let logoCreated;
        switch (data.shape) {
          case 'circle':
            logoCreated = new circle(data.text, data.textColor, data.shapeColor, data.borderColor);
            break;
          case 'triangle':
            logoCreated = new triangle(data.text, data.textColor, data.shapeColor, data.borderColor);
            break;
          case 'square':
            logoCreated = new square(data.text, data.textColor, data.shapeColor, data.borderColor);
            break;
          default:
            break;
        }
        const logo = logoCreated.render();
        return logo;
        
      })
      .then((logo) => {
        return writeFile(
          join(__dirname, '..', 'examples', 'logo.svg'),
          logo
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}



module.exports = CLI;