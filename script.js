/* =========================
   PAGE NAVIGATION SYSTEM
========================= */

function showPage(pageId) {

document.querySelectorAll(".page")
.forEach(page => {
page.classList.remove("active");
});

document.getElementById(pageId)
.classList.add("active");

}

/* =========================
   GIFT BOX ANIMATION
========================= */

function openGiftBox() {

const lid = document.querySelector(".gift-lid");
const sparkles = document.getElementById("giftSparkles");

lid.style.transform = "translateY(-80px) rotate(-10deg)";

lid.style.transition = "1s ease";

sparkles.innerHTML =
"✨ 💖 ✨ 💫 ✨ 💖 ✨";

setTimeout(() => {

sparkles.innerHTML =
"🎁 Gift Is Opening...";

}, 1200);

setTimeout(() => {

showPage("page5");

}, 2500);

}

/* =========================
   FLOATING HEART EFFECT
========================= */

function createFloatingHeart() {

const heart = document.createElement("div");

heart.innerHTML = "❤️";

heart.style.position = "fixed";

heart.style.left = Math.random() * 100 + "vw";

heart.style.top = "100vh";

heart.style.fontSize = (16 + Math.random() * 20) + "px";

heart.style.opacity = "0.7";

heart.style.zIndex = "-1";

heart.style.animation = "floatUp 6s linear forwards";

document.body.appendChild(heart);

setTimeout(() => {
heart.remove();
}, 6000);

}

setInterval(createFloatingHeart, 800);

/* =========================
   FLOAT ANIMATION (JS SUPPORT)
========================= */

const style = document.createElement("style");

style.innerHTML = `
@keyframes floatUp {
0% {
transform: translateY(0);
opacity: 1;
}
100% {
transform: translateY(-120vh);
opacity: 0;
}
}
`;

document.head.appendChild(style);

/* =========================
   INITIAL PAGE
========================= */

document.addEventListener("DOMContentLoaded", () => {

showPage("page1");

});