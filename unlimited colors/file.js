let start = document.querySelector("#start");
let stopper = document.querySelector("#stop");

const colorGenerator = () => {
    const HEX = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += HEX[Math.floor(Math.random() * 16)];
    }
    return color;
}
let intervalId;
const startBackgroundChanger = () => {
    if (!intervalId) {
        const colorChanger = () => {
            document.body.style.backgroundColor = colorGenerator();
        }
        intervalId = setInterval(colorChanger, 1000);
    }
}

const stopBackgroundChanger = () => {
    clearInterval(intervalId);
    intervalId = null;
}

start.addEventListener("click", startBackgroundChanger);
stopper.addEventListener("click", stopBackgroundChanger);