const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { Triangle, Square, Circle } = require('../lib/shapes');

const questions = [
  'What text would you like in your logo? You might choose maximum 3 (three) characters.',
  'What color would you like that text to be? (Enter a color keyword (OR a hexadecimal number)).',
  'Which of these 3 shapes would you like your logo to be?',
  'What color would you like the shape to be? (Enter a color keyword (OR a hexadecimal number))'
];

class CLI {
  constructor() {
    this.shape = '';
    this.text = '';
    this.textColor = '';
    this.shapeColor = '';
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
            if (response.length < 1) {
                return console.log('Please enter a keyword Color or a hexadecimal color reference.');
            } 
            if(response.includes(' ') === true) {
                return console.log('Please enter a color without spaces (or a hexidecimal color reference).');
            }
            if(response.includes('#') === false) {
                return console.log('Please enter a valid hexadecimal color reference.');
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
            if (response.length < 1) {
              return console.log('Please enter a keyword Color or a hexadecimal color reference.');
            } 
            if(response.includes(' ') === true) {
                return console.log('Please enter a color without spaces (or a hexidecimal color reference).');
            }
            if(response.includes('#') === false) {
                return console.log('Please enter a valid hexadecimal color reference.');
            } 
            return true;
          }
        }
      ])
      .then((res) => {
        this.text = res.text;
        this.textColor = res.textColor;
        this.shape = res.shape;
        this.shapeColor = res.shapeColor;
        let logoCreated;
        if (this.shape === 'circle') {
          logoCreated = new Circle(this.text, this.textColor, this.shapeColor);
        } else if (this.shape === 'square') {
          logoCreated = new Square(this.text, this.textColor, this.shapeColor);
        } else {
          logoCreated = new Triangle(this.text, this.textColor, this.shapeColor);
        }
        const logo = logoCreated.render();
        return logo;
      })
      .then((logo) => {
        fs.writeFile('./examples/logo.svg', logo, (err) => {
          err ? console.log(err) : console.log('Generated logo.svg');
        });
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}



module.exports = CLI;