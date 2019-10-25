const fs = require("fs");
const file = fs.createWriteStream('./big');

for(let i = 0; i <= 1e6; i++) {
    file.write('Estaba la pájara pinta sentada en un verde limón. Con el pico cortaba la rama, con la rama cortaba la flor. Estaba la pájara pinta sentada en un verde limón. Con el pico cortaba la rama, con la rama cortaba la flor. Estaba la pájara pinta sentada en un verde limón. Con el pico cortaba la rama, con la rama cortaba la flor.');
}

file.end();
