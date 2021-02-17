/* Put your javascript in here */
function clickArrowLeft() {
    document.addEventListener('click', (event) => {
        const arrow_left = document.querySelector("#arrow_left");
        const classes = arrow_left.classList;
        console.log(classes)
    }
}

