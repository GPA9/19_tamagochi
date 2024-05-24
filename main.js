document.addEventListener("DOMContentLoaded", function() {
    const donutButton = document.querySelector(".donutButton");
    const appleButton = document.querySelector(".appleButton");
    const meatballButton = document.querySelector(".meatballButton"); // Asumiendo que también quieres agregar el meatballButton
    const idleGif = document.getElementById("idles");

    // Ruta del GIF base
    const baseGifSrc = idleGif.src;

    // Función para cambiar el GIF y luego volver al GIF base
    function changeGif(tempGifSrc) {
        idleGif.src = tempGifSrc;
        setTimeout(function() {
            idleGif.src = baseGifSrc;
        }, 2500); // Cambia a 2 segundos (2000 ms)
    }

    donutButton.addEventListener("click", function() {
        changeGif("./animations/dragonEatingDonut_final_retopo.gif"); // Cambia esta ruta por la ruta correcta de tu GIF de donut
    });

    appleButton.addEventListener("click", function() {
        changeGif("./animations/dragonEatingApple_final_retopo.gif"); // Cambia esta ruta por la ruta correcta de tu GIF de manzana
    });

    meatballButton.addEventListener("click", function() {
        changeGif("./animations/dragonEatingMeatBall_final_retopo.gif"); // Cambia esta ruta por la ruta correcta de tu GIF de albóndiga
    });
});

// "./animations/dragonEatingDonut_final_retopo.gif"
// "./animations/dragonEatingApple_final_retopo.gif"
