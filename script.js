function openProduct(name, price, desc){
 document.getElementById("pName").innerText=name;
 document.getElementById("pDesc").innerText=desc;
 document.getElementById("pPrice").innerText=price;

 document.getElementById("orderBtn").href =
 `https://wa.me/91XXXXXXXXXX?text=I want to order ${name} (${price})`;

 document.getElementById("productModal").style.display="flex";
}

function closeModal(){
 document.getElementById("productModal").style.display="none";
}

