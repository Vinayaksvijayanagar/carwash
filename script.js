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

document.addEventListener("DOMContentLoaded", () => {

  const heroSlides = [
    {
      img: "images/adv-1.png",
      title: "Aesthetic Interior Care",
      desc: "Restore shine and elegance to every dashboard"
    },
    {
      img: "images/adv-2.png",
      title: "Elegant Exterior Finish",
      desc: "Professional detailing for premium vehicles"
    },
    {
      img: "images/adv-3.png",
      title: "Thick & Slick Foam Wash",
      desc: "High-foaming formula for deep cleaning"
    }
  ];

  let index = 0;
  const hero = document.getElementById("hero");
  const heroTitle = document.getElementById("heroTitle");
  const heroDesc = document.getElementById("heroDesc");

  function updateHero(){
    hero.style.opacity = "0";

    setTimeout(() => {
      hero.style.backgroundImage = `url('${heroSlides[index].img}')`;
      heroTitle.textContent = heroSlides[index].title;
      heroDesc.textContent = heroSlides[index].desc;

      hero.style.opacity = "1";
      index = (index + 1) % heroSlides.length;
    }, 500);
  }

  // first load
  updateHero();

  let interval = setInterval(updateHero, 4000);

  // pause on hover
  hero.addEventListener("mouseenter", () => clearInterval(interval));
  hero.addEventListener("mouseleave", () => {
    interval = setInterval(updateHero, 4000);
  });

});


