function interpretCommand(command, argu) {
    var ret;
    switch (command) {
        case "send":
            console.log(argu)
            break;
        case "def":
            variables[argu[0]] = [argu[1]]
            break;
        default:
            throw ReferenceError;
            break;
    }
}