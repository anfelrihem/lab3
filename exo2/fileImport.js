// fileImport.js

// Importation de la fonction mean depuis notation.js
const { mean } = require('./notation.js');

// Exemple d'utilisation
const scores1 = [12, 18, 14, 20];
const scores2 = [10, 10, 10, 10];

console.log("Moyenne scores1 :", mean(scores1)); // 16
console.log("Moyenne scores2 :", mean(scores2)); // 10
