const words = [
    "Apple",
    "Banana",
    "Cherry",
    12,
    true,
    {
        name: "Anurag",
    },
    function hello() {
        console.log("hello world");
    },
];

const newWords = words;

newWords[1] = "Kiwi";

console.log(words);
console.log(newWords)