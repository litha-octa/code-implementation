let word = "malam";
if (typeof word !== "string") {
    console.log("false ! input harus huruf ya !");}

let newString = '';
for (let i = word.length - 1; i >= 0; i--) {
    newString = newString + word[i];
}
console.log
(`${word} diubah menjadi ${newString},
    jadi :`);

if (word === newString) {
    console.log(` ${word} merupakan kata Palindrome !`)
} else {
    console.log(` ${word} bukan merupakan kata Palindrome !`)
}