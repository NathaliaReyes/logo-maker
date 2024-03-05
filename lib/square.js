const Shapes = require('./shapes'); 

class Square extends Shapes {

    render() {
        return `<svg height="200" width="300">
        <${this.shape} width="200" height="200" style="fill:${this.shapeColor};stroke-width:3;stroke:${this.shapeColor}" />
        <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}" font-size="20px" font-family="Arial">${this.text}</text>
      </svg>`;
    }
}

module.exports = Square;