const { Triangle, Square, Circle } = require('./shapes');

describe('Triangle', () => {
    test('test for a blue triangle', () => {
        const shape = new Triangle();
        let color = 'blue';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${color}"/>`);
    });
});

describe('Square', () => {
    test('test for a green square', () => {
        const shape = new Square();
        let color = 'green';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="73" y="40" width="160" height="160" fill="${color}"/>`);
    });
});

describe('Circle', () => {
    test('test for a red circle', () => {
        const shape = new Circle();
        let color = 'red';
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="115" r="80" fill="${color}"/>`);
    });
});