const charactersList = document.querySelector(".anime-slider-section");
const searchBar = document.querySelector(".searchBar");
let animes = [];
let mainanimes = [];
searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filteredCharacters = mainanimes.filter((character) => {
    return character.original_title.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});
let api_key = "37ece673dd43e72f7379fc90ec1177eb";
const loadCharacters = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        api_key +
        "&sort_by=popularity.desc"
    );
    animes = await res.json();
    mainanimes = animes.results;
    console.log(animes);
    displayCharacters(animes.results);
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
        <img src="https://image.tmdb.org/t/p/w185${character.poster_path}" alt="" />
       </div>
       <div class="layer layer1"></div>
       <div class="layer layer2"></div>
       <div class="contentBx">
        <div>
          <h3>${character.original_title}</h3>
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
