const Triangle = require('./triangle');

describe('Triangle Class', () => {
    it('should render an SVG string for a triangle', () => {
        const triangle = new Triangle();
        const svg = triangle.render('SVG', 'red');

        // You can write assertions to validate the generated SVG string
        expect(svg).toContain('<polygon points="');
        expect(svg).toContain('fill="red"');
    });

    it('should set the shape color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.color).toBe('blue');
    });

    // Add more test cases as needed
});