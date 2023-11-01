const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { Triangle, Circle, Square } = require('./lib/shapes');

function prompts() {
    inquirer.prompt([
        {

            type: 'input',
            name: 'characters',
            message: 'Enter no more than three characters to be displayed on your logo: ',
        },
        {
            type: 'input',
            name: 'letterColor',
            message: 'Enter the color you wish the characters to be (use color keyword or hexadecimal number): ',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape of your logo: ',
            choices: ['Triangle', 'Square', 'Circle'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the color you wish the shape to be (use color keyword or hexadecimal number): ',
        },

    ])
        .then((answers) => {
            if (answers.characters.length > 3) {
                console.log('Please enter 3 characters or less.');
                prompts();
            } else {
                writeToFile("logo.svg", answers, "./examples");
            }
        });
}

function ensureFolderExists(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
    }
}

function writeToFile(fileName, answers, folderPath) {
    ensureFolderExists(folderPath);

    let shapeChoice;
    if (answers.shape === 'Triangle') {
        shapeChoice = new Triangle();
        fileName = 'triangle_logo.svg'; // Change the file name for a Triangle.
    } else if (answers.shape === 'Square') {
        shapeChoice = new Square();
        fileName = 'square_logo.svg'; // Change the file name for a Square.
    } else {
        shapeChoice = new Circle();
        fileName = 'circle_logo.svg'; // Change the file name for a Circle.
    }

    const filePath = path.join(folderPath, fileName);

    let svgLogo = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">';

    if (answers.shape === 'Triangle') {
        svgLogo += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}"/>`;
    } else if (answers.shape === 'Square') {
        svgLogo += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}"/>`;
    } else {
        svgLogo += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}"/>`;
    }

    svgLogo += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.letterColor}">${answers.characters}</text>`;
    svgLogo += "</svg>";

    fs.writeFile(filePath, svgLogo, (err) => {
        if (err) {
            console.log('Error saving the SVG file:', err);
        } else {
            console.log(`SVG file saved successfully at ${filePath}`);
        }
    });
}

prompts();