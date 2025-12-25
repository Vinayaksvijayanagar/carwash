document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {
            name: "Foam Wash Cream",
            price: "₹499",
            desc: "High foam cream for deep cleaning and shine.",
            img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9"
        },
        {
            name: "Car Wax Polish",
            price: "₹799",
            desc: "Long-lasting gloss & paint protection.",
            img: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c8"
        },
        {
            name: "Interior Cleaner",
            price: "₹599",
            desc: "Removes dirt & odor from interiors.",
            img: "https://images.unsplash.com/photo-1597008641621-3e5b22d8f3a2"
        }
    ];

    const productList = document.getElementById("productList");

    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.desc}</p>
            <span>${product.price}</span>
        `;

        productList.appendChild(card);
    });
});
