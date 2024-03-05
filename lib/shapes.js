class Shapes {
    constructor(text, textColor, shapeColor, shape) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;