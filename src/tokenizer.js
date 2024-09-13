export function tokenize(source /* String */ ) {
    var isString = false
    var tokens = []
    var letter, currentToken;
    for (let x = 0; x < source.length; x++) {        
        letter = source[x];
        if (letter == '"') {
            isString = !isString;
        }
        if (letter == " " & !isString) {
            tokens.push(currentToken);
            currentToken = ""
        } else {
            currentToken = currentToken + letter
        }
    }
    return tokens;
}