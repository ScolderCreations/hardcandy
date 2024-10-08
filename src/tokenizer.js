function tokenize(source /* String */ ) {
    var isString = false
    var tokens = []
    var letter = "", currentToken = "";
    for (let x = 0; x < source.length; x++) {        
        letter = source[x];
        if (letter == '"') {
            isString = !isString;
        }
        if (((letter == " ") & !isString) | (letter == "\n") | (letter == ";")) {
            if (currentToken.length>0) tokens.push(currentToken);
            currentToken = ""
        } else {
            currentToken = currentToken + letter
        }
    }
    tokens.push(currentToken);
    return tokens;
}
module.exports.tokenize = tokenize