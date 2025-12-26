/* Scroll progress */
window.addEventListener("scroll",()=>{
 let st=document.documentElement.scrollTop;
 let h=document.documentElement.scrollHeight - document.documentElement.clientHeight;
 document.getElementById("progressBar").style.width=(st/h)*100+"%";
});

/* Reveal animation */
window.addEventListener("scroll",()=>{
 document.querySelectorAll(".reveal").forEach(el=>{
  if(el.getBoundingClientRect().top < window.innerHeight-100){
    el.classList.add("active");
  }
 });
});

/* Product modal */
function openProduct(name,price,desc){
 pName.innerText=name;
 pDesc.innerText=desc;
 pPrice.innerText=price;
 orderBtn.href=`https://wa.me/91XXXXXXXXXX?text=I want to order ${name} (${price})`;
 productModal.style.display="flex";
}
function closeModal(){productModal.style.display="none";}

/* Reviews slider */
const reviews=[
"Best car wash products I’ve used!",
"Premium quality & fast support",
"My car shines like new",
"Highly recommended for professionals"
];
let i=0;
setInterval(()=>{
 document.getElementById("reviewText").innerHTML=
 `⭐⭐⭐⭐⭐<p>${reviews[i]}</p><span>– Verified Buyer</span>`;
 i=(i+1)%reviews.length;
},3000);

/* 3D tilt */
document.querySelectorAll(".product-card,.founder-card").forEach(card=>{
 card.addEventListener("mousemove",(e)=>{
  let x=e.offsetX/card.offsetWidth-0.5;
  let y=e.offsetY/card.offsetHeight-0.5;
  card.style.transform=`rotateX(${y*10}deg) rotateY(${-x*10}deg)`;
 });
 card.addEventListener("mouseleave",()=>{
  card.style.transform="rotateX(0) rotateY(0)";
 });
});

/* Back to top */
const topBtn=document.getElementById("topBtn");
window.addEventListener("scroll",()=>{
 topBtn.style.display=window.scrollY>400?"block":"none";
});
topBtn.onclick=()=>window.scrollTo({top:0,behavior:"smooth"});

