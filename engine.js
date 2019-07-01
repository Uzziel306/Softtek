const shapeCatalog = require('./shapes');
const colorCatalog = require('./colors');
let shapesRes = [];

const engine = (shapes) => {
    for (const shape of shapes) {
        const shapeData = shape.toLowerCase().replace(/\s/g, '').split(',');
        validation(shapeData);
        
    }
    const resSorted = shapesRes.sort((a, b) => {
        const len = a.length - 1;
        if (a[1] < b[1]) return -1;
        if (a[1] > b[1]) return 1;
        if (a[len] > b[len]) return 1;
        if (a[len] < b[len]) return -1;
        return 0;
      });

      printRes(resSorted)
}

const validation = (shape) => {
    if (shape.length <= 1 && shape.length >= 5)
        handleError("Bad input: Please cheack README.md file to more information");

    const shapeName = shape[0];
    const len = shape.length - 1;
    const shapeColor = shape[len];

    if (!shapeCatalog.includes(shapeName))
        handleError(`Shape '${shapeName}' is not accepted`);
    if (!colorCatalog.includes(shapeColor))
        handleError(`Color '${shapeColor}' is not accepted`)
    calculateArea(shape)
}

const calculateArea = (shape) => {
    try {
        let res = 0.00;
    switch (shape[0]) {
        case 'circle':
            res = (Math.PI * (shape[1] * shape[1]));
            break;
        case 'rectangle':
            res = (shape[1] * shape[2])
            break;
        case 'square':
            res = (shape[1] * shape[1]);
            break;
        case 'triangle':
            res = ((shape[1] * shape[2]) / 2)
            break;
        default:
            handleError(`Shape '${shape}' is not accepted`);
    }
    // shapesRes.push(`${shape[0]}, ${res.toFixed(2)}, ${shape[shape.length - 1]}`)
    shapesRes.push([shape[0], res.toFixed(2), shape[shape.length - 1]])
    } catch (error) {
        handleError(`Bad input: Please cheack README.md file to more information\n\n\n${error}`);
    }
}

const handleError = (errorMessage) => {
    console.error(errorMessage);
    process.exit(1)
}

const printRes = (res)=>{
    res.forEach(element => {
        console.log(`${element[0]},${element[1]},${element[2]}`)
    });
}

module.exports = engine;