const ShapesTriangle = require('../lib/triangle.js');
// const ShapesCircle = require('../lib/circle');
// const ShapesSquare = require('../lib/square');

describe('Triangle', () => {
    describe('render method', () => {
        it('should return a string containing a polygon with the text from the input', () => {
            const triangle = new ShapesTriangle('abc', 'black', 'red', 'blue');
            // Debugging purposes
            console.log(triangle.render());
            // This line removes newlines and indentation from the received string
            const receivedSVG = triangle.render().replace(/\n\s*/g, '');
            const expectedSVG = `<svg height="200" width="300" xmlns="http://www.w3.org/2000/svg"><polygon points="160 0, 250 200, 40 200" style="fill:red; stroke-width:3; stroke:blue" /><text x="150" y="150" text-anchor="middle" fill="black" font-size="50" font-family="Helvetica">abc</text></svg>`;
            expect(receivedSVG).toEqual(expectedSVG);
        });
    });
});