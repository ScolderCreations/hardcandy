file = ""
let tokens;
const tk = require("./tokenizer.js")
const fs = require("node:fs")
fs.readFile("./test/test.hc", (err, data) => {
    if (err) throw err;
    file = String(data);
    let tokens = tk.tokenize(file)
    console.log(tokens) // remove later lol
    for (let toki = 0; toki < tokens.length; toki++) {
        interpretCommand(tokens[toki])
    }
})

const variables = {}
let toki;

function evaluate(token) {
    try {
        return variables[String(token)]
    } catch {
        return eval(token)
    }
}

function interpretCommand(command) {
    switch (command) {
        case "send":
            toki++
            console.log(evaluate(tokens[toki]))
            break;
        case "def":
            toki++
            variables[tokens[toki]] = [tokens[toki+1]]
            toki++
            break;
        default:
            throw ReferenceError;
    }
}

