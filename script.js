window.addEventListener("scroll",()=>{
 let st=document.documentElement.scrollTop;
 let h=document.documentElement.scrollHeight - document.documentElement.clientHeight;
 document.getElementById("progressBar").style.width=(st/h)*100+"%";
});

window.addEventListener("scroll",()=>{
 document.querySelectorAll(".reveal").forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight-100){
    el.classList.add("active");
  }
 });
});

function openProduct(name, desc, imgs){
 modalImg.src = imgs[0];
 const t=document.querySelectorAll(".thumbs img");
 t[0].src=imgs[0];
 t[1].src=imgs[1];
 pName.innerText=name;
 pDesc.innerText=desc;
 orderBtn.href=`https://wa.me/91XXXXXXXXXX?text=I want to order ${name}`;
 productModal.style.display="flex";
}

function changeImg(src){ modalImg.src=src }
function closeModal(){ productModal.style.display="none" }

const reviews=[
"Excellent product quality!",
"Professional car care results",
"Highly recommended",
"Best value for money"
];
let i=0;
setInterval(()=>{
 reviewText.innerHTML=`⭐⭐⭐⭐⭐<p>${reviews[i]}</p><span>– Verified Buyer</span>`;
 i=(i+1)%reviews.length;
},3000);

const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
 topBtn.style.display=window.scrollY>400?"block":"none";
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
const heroImages = [
  "images/adv-1.png",
  "images/adv-2.png",
  "images/adv-3.png"
];

let heroIndex = 0;
const hero = document.getElementById("hero");

// initial background
hero.style.backgroundImage = `url(${heroImages[0]})`;

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[heroIndex]})`;
}, 4000); // change every 4 seconds


