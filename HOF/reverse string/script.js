function reverseString(st) {
    let ans = "";
    for (let i = st.length - 1; i>=0; i--) {
        ans += st[i];
    }
    return ans;
};
let input = "Hello";
setTimeout(() => {
    console.log(reverseString(input));
})