const charactersList = document.querySelector(".anime-slider-section");
const searchBar = document.querySelector(".searchBar");
let animes = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = animes.filter((character) => {
    return character.animeTitle.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://gogoanime.consumet.org/popular");
    animes = await res.json();
    displayCharacters(animes);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
      <div class="box">
      <div class="imgBx">
        <img src="${character.animeImg}" alt="" />
       </div>
       <div class="layer layer1"></div>
       <div class="layer layer2"></div>
       <div class="contentBx">
        <div>
          <h3>${character.animeTitle}</h3>
          <p>
           
          </p>
         </div>
       </div>
      
      </div>
        `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
