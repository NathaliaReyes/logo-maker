// This is the super class for all shapes. It contains the text, textColor, and shapeColor properties. 
// It also contains the render() method, which is a placeholder for the child classes to implement. 
// This class is exported so that it can be used in the child classes.
class Shapes {
    constructor(text, textColor, shapeColor, borderColor) {
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.borderColor = borderColor;
    }

    render() {
        throw new Error('Child class must implement a render() method.');
    }
}

module.exports = Shapes;