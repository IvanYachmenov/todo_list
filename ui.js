const menuButton = document.getElementById("menu-button");
const sideMenu = document.getElementById("side-menu");

// menu
menuButton.addEventListener("click", (e) => {
    sideMenu.style.left = "0px";
});

// push-notification
const push = document.getElementById("push-notification");

document.addEventListener("change", (e) => {
    if (e.target.classList.contains("task-checkbox") && e.target.checked) {
        push.classList.add("show");
        setTimeout(() => {
            push.classList.remove("show");
        }, 2000);
    }
});

// close-menu
const closeMenu = document.getElementById("close-menu");

closeMenu.addEventListener("click", () => {
    sideMenu.style.left = "-220px";
});

// move menu -> move main

menuButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
    document.body.classList.toggle("menu-open");
});

closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
});
