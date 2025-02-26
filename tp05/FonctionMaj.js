let text = "hello";

function Cap(msg = ""){
    UpperMsg = msg[0].toUpperCase() + msg.slice(1);
    return UpperMsg;
}

console.log(Cap(text));