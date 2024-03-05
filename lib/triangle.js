const Shapes = require('./shapes');

class Triangle extends Shapes {
    constructor() {
        super();
    }

    render() {
        return `<svg height="200" width="300">
        <${this.shape} cx="50" cy="50" r="40" stroke="${this.shapeColor}" stroke-width="3" fill="${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="20px" font-family="Arial">${this.text}</text>
      </svg>`;
    }
}

module.exports = Triangle;