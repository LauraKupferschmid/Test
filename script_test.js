document.addEventListener("DOMContentLoaded", () => {
  const marker = document.querySelector("a-marker");

  marker.addEventListener("markerFound", () => {
    console.log("Marker found!");

    document.querySelectorAll(".clickable").forEach((el) => {
      el.addEventListener("click", () => {
        console.log(el.id + " clicked!");
      });

      el.addEventListener("touchstart", () => {
        console.log(el.id + " tapped!");
      });
    });
  });
});