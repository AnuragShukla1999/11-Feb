function extractNameAndStreet({name, address: {street}}) {
    return { name, street };
}
const person = {
    name: "Anurag",
    age: 21,
    address: {
        street: "BB, Block B, Industrial Area.",
        city: "Sector 62, Noida",
        State: "Utter Pradesh"
    }
};
const {name, street} = extractNameAndStreet(person);
console.log(name);   // "Anurag"
console.log(street);   // "BB, Block B, Industrial Area."