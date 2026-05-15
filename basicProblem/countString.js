
let string = "education";

let count = 0;

for(let i = 0; i < string.length; i++){

    let vowels = string[i];
    console.log(vowels)

    if( vowels == 'a'||  vowels == 'e' ||  vowels == 'i' ||  vowels == 'o' ||  vowels == 'u'){

        count++;

    }
}

console.log(count);






