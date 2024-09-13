import * as tokenizer from "./tokenizer"

let tokens = tokenizer.tokenize()
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