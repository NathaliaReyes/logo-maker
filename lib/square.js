const Shapes = require('./shapes'); 

// This is the Square class. It extends
class Square extends Shapes {
    constructor(text, textColor, shapeColor, borderColor) {
        super(text, textColor, shapeColor);
        this.shape = 'rect';
        this.borderColor = borderColor;
    }


    render() {
        return `<svg version="1.1" height="210" width="310" xmlns="http://www.w3.org/2000/svg">
        <${this.shape} x="55" y="15" width="190" height="190" style="fill:${this.shapeColor}; stroke-width:3; stroke:${this.borderColor}" />
        <text x="150" y="125" text-anchor="middle" fill="${this.textColor}" font-size="60px" font-family="Arial">${this.text}</text>
      </svg>`;
    }
}

module.exports = Square;