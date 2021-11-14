/* eslint-disable @typescript-eslint/no-var-requires */
const { createCanvas, registerFont } = require('canvas')
const fs = require('fs')

registerFont('../../src/assets/fonts/PermanentMarker-Regular.ttf', { family: 'Permanent Marker', weight: 400 })

const canvas = createCanvas(800, 200)
const ctx = canvas.getContext('2d')

const INPUT_TEXT = "WEB PROJECTS";

const words = INPUT_TEXT.split(' ');
const wordPoints = {};

words.forEach(word => {

    // Draw word on canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = '36px "Permanent Marker"';
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 1;
    ctx.strokeText(word, 5, 40);

    // Get image data
    const data = ctx.getImageData(0, 0, canvas.width, 100);

    // Collect { x, y } points which have alpha > 128
    const points = [];
    for (let y = 0, y2 = data.height; y < y2; y++) {
        for (let x = 0, x2 = data.width; x < x2; x++) {
            if (data.data[(y * 4 * data.width) + (x * 4) + 3] > 128) {
                points.push({ x, y });
            }
        }
    }
    wordPoints[word] = points;

    //console.log(points);
});

// Write { x, y } points to a JSON file
fs.writeFile('./web-project-points.json', JSON.stringify(wordPoints),
    (err) => {
        if (err) {
            console.error('Error writing JSON file');
        }
    }
);
