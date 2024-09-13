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
var toki = 0

function evaluate(token) {
    try {
        return variables[String(token)]
    } catch {
        return eval(token)
    }
}

function interpretCommands(command) {
    switch (command) {
        case "send":
            toki++
            if (/^"$"/.test(tokens[toki]))
            console.log(tokens[toki])
            break;
        case "def":
            if (!argu[0]) throw SyntaxError;
            else variables[argu[0]] = [argu[1]]
            break;
        default:
            throw ReferenceError;
    }
}