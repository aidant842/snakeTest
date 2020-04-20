document.getElementById('easy').onclick = function () { easy() };
document.getElementById('medium').onclick = function () { medium() };
document.getElementById('hard').onclick = function () { hard() };
/* document.getElementById('impossible').onclick = function () { impossible() }; */

function easy() {
    setup(150);
    console.log("start called");
    document.getElementById('start').classList.toggle("hidden");

}

function medium() {
    setup(100);
    console.log("start called");
    document.getElementById('start').classList.toggle("hidden");
}

function hard() {
    setup(60);
    console.log("start called");
    document.getElementById('start').classList.toggle("hidden");
}

/* function impossible() {
    setup(60);
    console.log("start called");
    document.getElementById('start').classList.toggle("hidden");
} */

