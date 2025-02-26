let text = "hello everyone test";

function Cap(msg = ""){
    UpperMsg = msg[0].toUpperCase() + msg.slice(1);
    return UpperMsg;
}

function CapSentence(msg = ""){
    let words = msg.split(" ");
    console.log(words);
    let results = "";
    for (let i = 0; i < words.length; i++){
        results = results + Cap(words[i] + " ");
    }

    return results;
}

console.log(CapSentence(text));