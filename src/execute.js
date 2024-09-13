file = ""
let tokens = {};
const fs = require("node:fs")
const tk = require("./tokenizer.js")

fs.readFile("./test/test.hc", (err, data) => {
    if (err) throw err;
    file = String(data);
    tokens = tk.tokenize(file)
    // console.log(tokens) // remove later lol
    for (toki = 0; toki < tokens.length; toki++) {
        interpretCommand(tokens[toki])
        // console.warn(toki)
    }
})

const variables = {}
let toki;

function evaluate(token) {

    if (/".*"/.test(String(token))) {
        return String(token).slice(1,-1)
    } else if (token in variables) {
        return variables[token]
    } else {return token;}
}

function interpretCommand(command) {
    switch (command) {
        case "send":
            toki++;
            console.log(String(evaluate(tokens[toki])))
            break;
        case "def":
            toki++;
            variables[tokens[toki]] = evaluate([tokens[toki+1]])
            toki++;
            break;
        case "div":
            toki++
            variables[tokens[toki]] = variables[tokens[toki]] / evaluate(tokens[toki+1])
            toki++
            break;
        case "add":
            toki++
            variables[tokens[toki]] += evaluate(tokens[toki+1])
            toki++
            break;
        case "sub":
            toki++
            variables[tokens[toki]] -= evaluate(tokens[toki+1])
            toki++
            break;
        default:
            console.error("what is "+command);
    }
}

