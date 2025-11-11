const fs = require('fs');
const filename = process.argv[2];

if (!filename) {
  console.log("Usage: node ReadFile.js <nom_fichier>");
  process.exit(1);
}

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error("Erreur:", err.message);
    return;
  }
  console.log(data);
});
