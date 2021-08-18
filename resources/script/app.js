const digits = document.getElementById('digits').value;
const btn = document.getElementById('check');

function main() {
    btn.addEventListener("click", () => console.log(digits));
}
main();
