let animeSlider = document.querySelector(".anime-slider-section");
let My_Url = "https://gogoanime.consumet.org/popular";
let pAnimes = [];
const popularAnime = async (url) => {
  try {
    let res = await fetch(url);
    pAnimes = await res.json();
    getpopuAnimes(pAnimes);

    console.log(pAnimes);
  } catch (err) {
    console.log(err);
  }
};
popularAnime(My_Url);
console.log(pAnimes);
// const getpopuAnimes = (Animes) =>
// const getpopuAnimes = (Animes) => {
//   let htmlDisp = Animes.map((anime) => {
//     return `<div class="box">
//     <div class="imgBx">
//       <img src="${anime.animeImg}" alt="" />
//      </div>
//      <div class="layer layer1"></div>
//      <div class="layer layer2"></div>
//      <div class="contentBx">
//       <div>
//         <h3>${anime.animeTitle}</h3>
//         <p>
//           Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           Necessitatibus quisquam aut magnam obcaecati molestiae assumenda
//           vel iusto maxime quo qui
//         </p>
//        </div>
//      </div>
//     </div> `;
//   });
//   animeSlider.innerHTML = htmlDisp;
// };
const getpopuAnimes = (animes) => {
  let cards = "";
  animes.map((anime) => {
    cards += `<div class="box">
      <div class="imgBx">
        <img src="${anime.animeImg}" alt="" />
       </div>
       <div class="layer layer1"></div>
       <div class="layer layer2"></div>
       <div class="contentBx">
        <div>
          <h3>${anime.animeTitle}</h3>
          <p>
           
          </p>
         </div>
       </div>
      
      </div>
   

      `;
  });
  animeSlider.innerHTML = cards;
};

////////////////////////////
// LOAD MORE BUTTON
let loadMoreBtn = document.querySelector(".load-more-btn");
let currentItems = 6;

loadMoreBtn.onclick = () => {
  let boxes = [...document.querySelectorAll(".anime-slider-section .box")];
  for (var i = currentItems; i < currentItems + 3; i++) {
    boxes[i].style.display = "inline-block";
    if (currentItems <= boxes.length === 20) {
      boxes.style.display = "none";
    }
  }
  if (currentItems >= boxes.length) {
    boxes.style.display = "none";
  }
  currentItems += 3;
};
