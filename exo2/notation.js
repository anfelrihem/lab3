// notation.js

// Fonction qui calcule la moyenne d'un tableau de scores
function mean(scores) {
  if (!Array.isArray(scores) || scores.length === 0) return 0; // sécurité
  const total = scores.reduce((acc, val) => acc + val, 0);
  return total / scores.length;
}

// Pour pouvoir utiliser cette fonction dans un autre fichier
module.exports = { mean };
