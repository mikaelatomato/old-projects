
const CONTAINER_WIDTH = 600;
const CONTAINER_HEIGHT = 600;

const createCells = (amount = 16) => {
    const container = document.querySelector(".container");
    const size = `${CONTAINER_WIDTH / amount}px`;
    for (let i = 0; i < amount * amount; i++) {
        const cell = document.createElement("div");
        cell.style.width = size;
        cell.style.height = size;
        cell.classList.add("cell");
        cell.addEventListener('mouseenter', darkenEvent);
        container.append(cell);
    }
}

const darkenEvent = (event) => {
    event.target.style.backgroundColor = "black";
}

const cleanGrid = () => {
    const container = document.querySelector(".container");
    container.replaceChildren();
}

const newButton = document.querySelector(".new");
newButton.addEventListener("click", () => {
    let newSize;
    do {
        newSize = parseInt(prompt("How many squares squared? (ex 16): "));
    } while (!Number.isInteger(newSize) || newSize < 1 || newSize > 64);
    cleanGrid();
    createCells(newSize);
})

createCells();