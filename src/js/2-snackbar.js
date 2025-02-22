import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const delay = Number(form.elements.delay.value);
    const state = form.elements.state.value;

    if (isNaN(delay) || delay <= 0 || !state) {
        iziToast.warning({
            title: "Warning",
            message: "Please enter a valid delay and select a state.",
            position: "topRight",
        });
        return;
    }
    
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (state === "fulfilled") {
            resolve(delay);
        } else if (state === "rejected") {
            reject(delay);
        } else {
            console.error("State is undefined!");
        }
    }, delay);
});

    promise
        .then((delay) => {
            iziToast.success({
                message: `Fulfilled promise in ${delay}ms`,
                position: "topRight",
            });
            form.reset();
        })
        .catch((delay) => {
            iziToast.error({
                message: `Rejected promise in ${delay}ms`,
                position: "topRight",
            });
            form.reset();
        });
    

    form.reset();

    });



