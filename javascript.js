// ================= SEARCH FUNCTION (SHOW RESULTS TEXT) =================
const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

// Create result display
const resultBox = document.createElement("div");
resultBox.style.padding = "10px";
resultBox.style.fontWeight = "bold";
document.body.prepend(resultBox);

function performSearch() {
    let value = searchInput.value.trim();
    if (value !== "") {
        resultBox.innerText = "Showing results for: " + value;
    }
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") performSearch();
});


// ================= LOCATION CHANGE (UPDATE TEXT) =================
const locationBox = document.querySelector(".nav-address");

locationBox.addEventListener("click", () => {
    let location = prompt("Enter your location:");
    if (location) {
        document.querySelector(".add-second").innerText = location;
    }
});


// ================= CART SYSTEM (VISIBLE COUNT BADGE) =================
let cartCount = 0;
const cart = document.querySelector(".nav-cart");

// create badge
const badge = document.createElement("span");
badge.style.color = "yellow";
badge.style.marginLeft = "5px";
badge.innerText = "(0)";
cart.appendChild(badge);

cart.addEventListener("click", () => {
    cartCount++;
    badge.innerText = "(" + cartCount + ")";
});


// ================= PANEL ACTIVE EFFECT =================
const panelOptions = document.querySelectorAll(".panel-ops p");

panelOptions.forEach(option => {
    option.addEventListener("click", () => {
        panelOptions.forEach(o => o.style.color = "white");
        option.style.color = "yellow"; // highlight selected
    });
});


// ================= HERO LINK (CHANGE TEXT) =================
const heroLink = document.querySelector(".hero-msg a");

heroLink.addEventListener("click", () => {
    document.querySelector(".hero-msg p").innerText =
        "Now you are browsing Amazon India 🇮🇳";
});


// ================= SEE MORE (SCROLL TO SECTION EFFECT) =================
const seeMoreButtons = document.querySelectorAll(".box-content p");

seeMoreButtons.forEach((btn) => {
    btn.style.cursor = "pointer";

    btn.addEventListener("click", () => {
        btn.innerText = "Loading...";
        setTimeout(() => {
            btn.innerText = "See more";
        }, 1000);
    });
});


// ================= PRODUCT HOVER (BETTER UI) =================
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
        box.style.transition = "0.3s";
        box.style.boxShadow = "0 0 15px rgba(0,0,0,0.4)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
        box.style.boxShadow = "none";
    });
});


// ================= BACK TO TOP =================
const backToTop = document.querySelector(".foot-panel1");

backToTop.style.cursor = "pointer";

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ================= FOOTER LINKS (HOVER EFFECT ONLY) =================
const footerLinks = document.querySelectorAll(".foot-panel2 a");

footerLinks.forEach(link => {
    link.style.cursor = "pointer";

    link.addEventListener("mouseenter", () => {
        link.style.textDecoration = "underline";
    });

    link.addEventListener("mouseleave", () => {
        link.style.textDecoration = "none";
    });
});


// ================= GREETING =================
const greeting = document.querySelector(".nav-signin span");

let hour = new Date().getHours();

if (hour < 12) greeting.innerText = "Good Morning";
else if (hour < 18) greeting.innerText = "Good Afternoon";
else greeting.innerText = "Good Evening";