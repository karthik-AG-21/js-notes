let text = "programming";
let newText = "";

for (let i = 0; i < text.length; i++) {

    let found = false;

    for (let j = 1; j < newText.length; j++) {

        if (text[i] == text[j]) {
            found = true;
        }
    }

    if (!found) {
        newText += text[i];
    }
}

console.log(newText);