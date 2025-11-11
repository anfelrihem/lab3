const fs = require('fs');

const args = process.argv.slice(2);
if (args.length < 2) {
  console.error("Usage: node exo4.js <filename> <text>");
  process.exit(1);
}

const filename = args[0];           // Premier argument = nom du fichier
const text = args.slice(1).join(" "); // Reste = texte à écrire

fs.writeFile(filename, text, 'utf8', (err) => {
  if (err) {
    console.error("Error writing the file:", err.message);
    return;
  }
  console.log("The file has been saved!");
});
