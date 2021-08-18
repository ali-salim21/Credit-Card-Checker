let digits = 0;
const btn = document.getElementById('check');

function main() {
    btn.addEventListener("click", () => {
        digits = document.getElementById('digits').value;
        console.log(digits);
    })
}
main();
