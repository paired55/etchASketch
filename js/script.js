const setResolution = document.querySelector("#setResolution");
const gridContainer = document.querySelector(".gridContainer");

setResolution.addEventListener("click", () => {
	gridContainer.replaceChildren();
	const newResolution = prompt("Enter an even number, maximum 100");
	if (
		isNaN(newResolution) == false &&
		newResolution <= 100 &&
		newResolution > 0 &&
		newResolution % 2 == 0
	) {
		createGrids(newResolution);
	} else {
		alert("Error! You entered an incorrect value.");
	}
});

function createGrids(resolution) {
	for (i = 0; i < resolution; i++) {
		const gridContainer = document.querySelector(".gridContainer");
		const gridVertical = document.createElement("div");
		gridVertical.classList.add("gridVertical");
		gridContainer.append(gridVertical);
	}

	const gridVerticalElements = document.querySelectorAll(".gridVertical");

	gridVerticalElements.forEach((gridVerticalContainer) => {
		Array.from({ length: resolution }).forEach(() => {
			const gridHorizontal = document.createElement("div");
			gridHorizontal.classList.add("gridHorizontal");
			gridVerticalContainer.append(gridHorizontal);
		});
	});
}

const resetButton = document.querySelector("#resetGrid");
resetButton.addEventListener("click", () => {
	gridContainer.replaceChildren();
});

let isDrawing = false;

gridContainer.addEventListener("mousedown", handleMouseDown);
gridContainer.addEventListener("mousemove", handleMouseMove);
gridContainer.addEventListener("mouseup", handleMouseUp);

gridContainer.addEventListener("dragstart", (e) => {
	e.preventDefault();
});

gridContainer.addEventListener("drop", (e) => {
	e.preventDefault();
});

function handleMouseDown(e) {
	isDrawing = true;
	e.target.style.backgroundColor = "#000"; // Change the color on click
}

function handleMouseMove(e) {
	if (!isDrawing) return;

	e.target.style.backgroundColor = "#000"; // Change the color while dragging
}

function handleMouseUp() {
	isDrawing = false;
}
