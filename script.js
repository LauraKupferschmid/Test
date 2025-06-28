document.addEventListener("DOMContentLoaded", () => {
    const marker = document.querySelector("a-marker");

    marker.addEventListener("markerFound", () => {
        console.log("Marker found!");

        document.querySelector("#motorOil").addEventListener("click", () => {
            console.log("Motoröl clicked!");
        });

        document.querySelector("#wash").addEventListener("click", () => {
            console.log("Waschen clicked!");
        });

        document.querySelector("#lightning").addEventListener("click", () => {
            console.log("Blitz clicked!");
        });

        document.querySelector("#ramon").addEventListener("click", () => {
            console.log("Ramon clicked!");
        });

        document.querySelector("#chief").addEventListener("click", () => {
            console.log("Chief clicked!");
        });

        motorOil.addEventListener("touchstart", () => {
            console.log("Motoröl tapped!");
        });

    });
});

document.querySelectorAll(".clickable").forEach((el) => {
  el.addEventListener("click", () => {
    console.log(el.id + " clicked!");
  });
});