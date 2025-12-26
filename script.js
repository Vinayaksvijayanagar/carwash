function openProduct(name, desc, imgs){
  document.getElementById("mainImg").src = imgs[0];

  const t = document.querySelectorAll(".thumbs img");
  t[0].src = imgs[0];
  t[1].src = imgs[1];

  document.getElementById("pName").innerText = name;
  document.getElementById("pDesc").innerText = desc;

  document.getElementById("orderBtn").href =
    `https://wa.me/91XXXXXXXXXX?text=I want to order ${name}`;

  document.getElementById("modal").style.display = "flex";
}

function swapImg(src){
  document.getElementById("mainImg").src = src;
}

function closeModal(){
  document.getElementById("modal").style.display = "none";
}

