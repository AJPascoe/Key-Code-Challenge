  
const eventkey = document.querySelector("#eventk");
const eventcode = document.querySelector("#eventc");
const eventwhich = document.querySelector("#eventw");
const eventlocation = document.querySelector("#eventl");

document.addEventListener("keypress", event => {
    let key = event.key;
    eventk.innerHTML = key;
});

document.addEventListener("keypress", event => {
    let keyh = event.code;
    eventc.innerHTML = keyh;
});

document.addEventListener("keypress", event => {
    let keyd = event.location;
    eventl.innerHTML = keyl;
});
document.addEventListener("keypress", event => {
    let keyp = event.which;
    eventw.innerHTML = keyp;
});