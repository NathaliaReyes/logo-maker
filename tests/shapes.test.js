const Triangle = require('../lib/triangle.js');
const Circle = require('../lib/circle');
const Square = require('../lib/square');

describe('Triangle', () => {
    describe('render method', () => {
        it('should return a SVG with expected elements', () => {
            const triangle = new Triangle('svg', 'black', 'violet', 'yellow');
            const result = triangle.render();
            expect(result).toContain('<polygon points="160 0, 250 200, 40 200" style="fill:violet; stroke-width:3; stroke:yellow" />')
            expect(result).toContain('<text x="150" y="150" text-anchor="middle" fill="black" font-size="50" font-family="Helvetica">svg</text>');
          
        });
    });
});


describe('Circle', () => {
    describe('render method', () => {
        it('should return a SVG with expected elements', () => {
            const circle = new Circle('nrv', '#6151D3', '#4ACF64', '#4AABCF');
            const result = circle.render();
            expect(result).toContain('circle cx="150" cy="110" r="80" stroke="#4AABCF" stroke-width="3" fill="#4ACF64" />')
            expect(result).toContain('<text x="150" y="125" text-anchor="middle" fill="#6151D3" font-size="60px" font-family="Helvetica">nrv</text>');

        });
    });
});



describe('Square', () => {
    describe('render method', () => {
        it('should return a SVG with expected elements', () => {
            const square = new Square('edx', 'maroon', '#FE6BFE', '#351919');
            const result = square.render();
            expect(result).toContain('<rect x="55" y="15" width="190" height="190" style="fill:#FE6BFE; stroke-width:3; stroke:#351919" />')
            expect(result).toContain('<text x="150" y="125" text-anchor="middle" fill="maroon" font-size="60px" font-family="Helvetica">edx</text>');
        });
    });
});

