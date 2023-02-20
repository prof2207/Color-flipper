const colors = ["green", "blue", "yellow", "red", "rgba(133, 122, 200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const randromNumber = getRandromNumber();
    console.log(randromNumber);

    document.body.style.backgroundColor = colors[randromNumber];
    color.textContent = colors[randromNumber];
});

function getRandromNumber() {
    return Math.floor(Math.random() * colors.length);
}
