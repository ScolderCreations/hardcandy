file = ""
const tk = require("./tokenizer.js")
const fs = require("node:fs")
fs.readFile("./test/test.hc", (err, data) => {
    if (err) throw err;
    file = String(data);
    let tokens = tk.tokenize(file)
    console.log(tokens)
})

const variables = {}
var tokenindex = 0

function interpretCommand(command, argu) {
    switch (command) {
        case "send":
            console.log(argu)
            break;
        case "def":
            if (!argu[0]) throw SyntaxError;
            else variables[argu[0]] = [argu[1]]
            break;
        default:
            throw ReferenceError;
    }
}