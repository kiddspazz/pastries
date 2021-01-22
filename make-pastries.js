const cupcakeFactory = require('./cupcake-factory.js');
const croissantFactory = require('./croissant-factory.js');

let cupcakeMaker = new cupcakeFactory.CupcakeFactory;
let croissantMaker = new croissantFactory.CroissantFactory;

console.log('cupcakeMaker makes a pastry:');
cupcakeMaker.makePastry();

console.log('croissantMaker makes a pastry:');;
croissantMaker.makePastry();
