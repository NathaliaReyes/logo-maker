const Shapes = require('./shapes');

// This is the Triangle class. It extends
class Triangle extends Shapes {
    constructor(text, textColor, shapeColor, borderColor) {
        super(text, textColor, shapeColor);
        this.borderColor = borderColor;
    }

    render() {
        return `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg">
        <polygon points="160 0, 250 200, 40 200" style="fill:${this.shapeColor}; stroke-width:3; stroke:${this.borderColor}" />
        <text x="150" y="150" text-anchor="middle" fill="${this.textColor}" font-size="50" font-family="Helvetica">${this.text}</text>
      </svg>`;
    }
}

module.exports = Triangle;