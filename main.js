// document.addEventListener("DOMContentLoaded", function () {
//     const donutButton = document.querySelector(".donutButton");
//     const appleButton = document.querySelector(".appleButton");
//     const meatballButton = document.querySelector(".meatballButton");
//     const controllerButton = document.querySelector(".playButtons button:nth-child(1)");
//     const rubikButton = document.querySelector(".playButtons button:nth-child(2)");
//     const glovesButton = document.querySelector(".fightButtons button:nth-child(1)");
//     const fireballButton = document.querySelector(".fightButtons button:nth-child(2)");
//     const bedButton = document.querySelector(".restButtons button:nth-child(1)");
//     const napButton = document.querySelector(".restButtons button:nth-child(2)");
//     const idleGif = document.getElementById("idles");

//     // Ruta del GIF base
//     const baseGifSrc = idleGif.src;

//     // Función para cambiar el GIF y luego volver al GIF base
//     function changeGif(tempGifSrc) {
//         idleGif.src = tempGifSrc;
//         setTimeout(function () {
//             idleGif.src = baseGifSrc;
//         }, 2500); // Cambia a 2 segundos (2000 ms)
//     }

//     // Event listeners para los botones de "Eat"
//     donutButton.addEventListener("click", function () {
//         changeGif("./animations/dragonEatingDonut_final_retopo.gif");
//     });

//     appleButton.addEventListener("click", function () {
//         changeGif("./animations/dragonEatingApple_final_retopo.gif");
//     });

//     meatballButton.addEventListener("click", function () {
//         changeGif("./animations/dragonEatingMeatBall_final_retopo.gif");
//     });

//     // Event listeners para los botones de "Play"
//     controllerButton.addEventListener("click", function () {
//         changeGif("./animations/dragonPlayVideogames_final_retopo.gif"); // Ruta al GIF del controlador
//     });

//     rubikButton.addEventListener("click", function () {
//         changeGif("./animations/dragonPlayRubik_final_retopo.gif"); // Ruta al GIF del cubo de Rubik
//     });

//     // Event listeners para los botones de "Fight"
//     glovesButton.addEventListener("click", function () {
//         changeGif("./animations/dragonAttackBoxing_final_retopo.gif"); // Ruta al GIF de los guantes
//     });

//     fireballButton.addEventListener("click", function () {
//         changeGif("./animations/dragonAttackFire_final_retopo.gif"); // Ruta al GIF de la bola de fuego
//     });

//     // Event listeners para los botones de "Sleep"
//     bedButton.addEventListener("click", function () {
//         changeGif("./animations/dragonSleepRest.gif"); // Ruta al GIF de la cama
//     });

//     napButton.addEventListener("click", function () {
//         changeGif("./animations/dragonSleepNap.gif"); // Ruta al GIF de la siesta
//     });

//     // Función para cambiar la imagen al presionar el botón
//     function changeButtonImage(button, originalSrc, pressedSrc) {
//         const buttonImg = button.querySelector("img");
//         buttonImg.addEventListener("mousedown", function () {
//             buttonImg.src = pressedSrc;
//         });
//         buttonImg.addEventListener("mouseup", function () {
//             buttonImg.src = originalSrc;
//         });
//         // Para dispositivos táctiles
//         buttonImg.addEventListener("touchstart", function () {
//             buttonImg.src = pressedSrc;
//         });
//         buttonImg.addEventListener("touchend", function () {
//             buttonImg.src = originalSrc;
//         });
//     }

//     // Obtener todos los botones y aplicar la función para cambiar la imagen
//     const buttons = document.querySelectorAll(".eatB, .playButtons button, .fightButtons button, .restButtons button");
//     buttons.forEach(function (button) {
//         const originalSrc = button.querySelector("img").src;
//         const pressedSrc = originalSrc.replace(".png", "_d.png");
//         changeButtonImage(button, originalSrc, pressedSrc);
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const idleGif = document.getElementById("idles");
    const buttons = document.querySelectorAll("button");
    let gifChanging = false;

    // Ruta del GIF base
    const baseGifSrc = idleGif.src;

    // Función para cambiar el GIF y luego volver al GIF base
    function changeGif(tempGifSrc) {
        gifChanging = true;
        idleGif.src = tempGifSrc;
        setTimeout(function () {
            idleGif.src = baseGifSrc;
            gifChanging = false;
        }, 2500); // Cambia a 2 segundos (2000 ms)
    }

    // Función para cambiar la imagen al presionar el botón
    function changeButtonImage(button, originalSrc, pressedSrc, gifSrc) {
        const buttonImg = button.querySelector("img");
        button.addEventListener("mousedown", function () {
            buttonImg.src = pressedSrc;
        });
        button.addEventListener("mouseup", function () {
            if (!gifChanging) {
                changeGif(gifSrc);
            }
            buttonImg.src = originalSrc;
        });
        // Para dispositivos táctiles
        button.addEventListener("touchstart", function () {
            buttonImg.src = pressedSrc;
        });
        button.addEventListener("touchend", function () {
            if (!gifChanging) {
                changeGif(gifSrc);
            }
            buttonImg.src = originalSrc;
        });
    }

    // Obtener todos los botones y aplicar la función para cambiar la imagen
    buttons.forEach(function (button) {
        const originalSrc = button.querySelector("img").src;
        const pressedSrc = originalSrc.replace(".png", "_d.png");
        const gifSrc = button.dataset.gifSrc;
        if (gifSrc) {
            changeButtonImage(button, originalSrc, pressedSrc, gifSrc);
        }
    });
});