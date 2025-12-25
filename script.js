const products = [
    {
        name: "Foam Wash Cream",
        price: "₹499",
        desc: "High foam formula for deep cleaning & shine.",
        img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
    },
    {
        name: "Car Wax Polish",
        price: "₹799",
        desc: "Long lasting gloss protection.",
        img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c8"
    },
    {
        name: "Interior Cleaner",
        price: "₹599",
        desc: "Removes stains & odor effectively.",
        img: "https://images.unsplash.com/photo-1597008641621-3e5b22d8f3a2"
    }
];

const productContainer = document.querySelector(".products");
const modal = document.getElementById("productModal");

products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>${p.price}</p>
    `;
    card.onclick = () => openModal(p);
    productContainer.appendChild(card);
});

function openModal(p) {
    modal.style.display = "flex";
    modal.querySelector("#modalImg").src = p.img;
    modal.querySelector("#modalTitle").innerText = p.name;
    modal.querySelector("#modalDesc").innerText = p.desc;
    modal.querySelector("#modalPrice").innerText = p.price;
}

document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = e => e.target === modal && (modal.style.display = "none");

