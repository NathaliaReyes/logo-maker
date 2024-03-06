const Shapes = require('../lib/shapes');

// This is the Circle class. It extends
class Circle extends Shapes {
    constructor(text, textColor, shapeColor, borderColor) {
        super(text, textColor, shapeColor);
        this.shape = 'circle';
        this.borderColor = borderColor;
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} cx="150" cy="110" r="80" stroke="${this.borderColor}" stroke-width="3" fill="${this.shapeColor}" />
        <text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="60px" font-family="Arial">${this.text}</text>
      </svg>`;
    }
}

module.exports = Circle;
