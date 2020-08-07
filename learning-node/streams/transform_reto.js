const { Transform } = require('stream');

const transformStream = new Transform({
    transform(chunk, encoding, callback) {
        this.push(toCamelCase(chunk.toString()));
        callback();
    }
});

function toCamelCase(str) {
    let wordsCamelCased = str.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    return wordsCamelCased.join(' ');
}

process.stdin.pipe(transformStream).pipe(process.stdout);
