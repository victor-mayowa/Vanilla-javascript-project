const colors = ["lightblue", "green", "rgba(133,122,200)", "#f15025", "rgba(6, 172, 250)" , "rgba(34, 146, 128)"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
    color.style.color = colors[randomNumber];
});
function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}