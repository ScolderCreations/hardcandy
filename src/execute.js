const tk = require("./tokenizer.js")
const fs = require("node:fs")
fs.readFile("../test/test.hc", (e, data) => {
    if (e) throw e;
    file = String(data);
})

let tokens = tk.tokenize(file)
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