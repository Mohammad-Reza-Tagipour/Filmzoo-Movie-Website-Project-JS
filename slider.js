const sliders = document.querySelector(".carouselbox");
const moviesLoad = document.querySelector(".movie-load-section");

const homeslider = document.querySelector(".swiper-wrapper");
let scrollPerClick;
let ImagePadding = 20;

showMovieData();
showTopMovies();

//
let scrollAmount = 0;

function sliderScrollLeft() {
  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }
}

function sliderScrollRight() {
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });
  }
}

//
////////////////////////////////

async function showMovieData() {
  try {
    const api_key = "37ece673dd43e72f7379fc90ec1177eb";
    let result = await axios.get(
      "https://api.themoviedb.org/3/discover/movie?api_key=" +
        api_key +
        "&sort_by=popularity.desc"
    );
    console.log(result);
    result = result.data.results;
    console.log(result);
    result.map((cur, index) => {
      sliders.insertAdjacentHTML(
        "beforeend",
        `
          <img class='img-${index} slider-img' src='https://image.tmdb.org/t/p/w185${cur.poster_path}' />
          `
      );
      homeslider.insertAdjacentHTML(
        "beforeend",
        `
        <div class="swiper-slide container">
        <img src="https://image.tmdb.org/t/p/w400${cur.poster_path}" alt="${cur.original_name}" />
        <div class="home-text">
          <span>Treding</span>
          <h1>${cur.original_title}</h1>
          <p class="overview">${cur.overview}</p>
          <div class="rate-box">
          <a href="#" class="btn">Download Now</a>
          <span class="rate">${cur.vote_average}</span>
          </div>
          <a href="#" class="play"><i class="bx bx-play"></i></a>
        </div>
      </div>
          `
      );
    });
    scrollPerClick =
      document.querySelector(".img-1").clientWidth + ImagePadding;
  } catch (err) {
    console.log(err);
    sliders.insertAdjacentHTML(
      "beforeend",
      `
        <p class="error-msg"> imgs cannot be loaded
        </p>
          `
    );
  }
}

////////////////////////////////////////////////////////////////////////

let api_key = "37ece673dd43e72f7379fc90ec1177eb";
let My_Urll = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&discover/movie?primary_release_year=2022&sort_by=vote_average.desc `;
// console.log(My_Urll);
let movies;
const bestMoviesFrom2010 = async (url) => {
  try {
    let res = await fetch(url);
    movies = await res.json();

    getMovies(movies);

    console.log(movies);
  } catch (err) {
    console.log(err);
  }
};
bestMoviesFrom2010(My_Urll);

const getMovies = (movies) => {
  let movieCards = "";
  movies.map((movie) => {
    movieCards += ``;
  });
};

////////////////////////////////////////////////////////////////////////

async function showTopMovies() {
  try {
    const api_key = "37ece673dd43e72f7379fc90ec1177eb";
    let result = await axios.get(
      "https://api.themoviedb.org/3/tv/top_rated?api_key=" + api_key + "&page=1"
    );
    console.log(result);
    result = result.data.results;
    console.log(result);
    result.map((cur, index) => {
      moviesLoad.insertAdjacentHTML(
        "beforeend",
        `
        <div class="box">
        <div class="imgBx">
          <img src="https://image.tmdb.org/t/p/w185${cur.poster_path}" alt="" />
        </div>
        <div class="layer layer1"></div>
        <div class="layer layer2"></div>
        <div class="contentBx">
          <div>
            <h3 id="">${cur.original_name}</h3>
            <p class="vote">
             ${cur.vote_average}
            </p>
            <p class="overview">
            ${cur.overview}...
           </p>
          </div>
        </div>
      </div>
          `
      );
    });
  } catch (err) {
    console.log(err);
    sliders.insertAdjacentHTML(
      "beforeend",
      `
        <p class="error-msg"> imgs cannot be loaded
        </p>
          `
    );
  }
}

////////////////////////////////////////////////////////////////

let loadMoreBtnMovies = document.querySelector(".load-more-btn-movies");
let currentItemsMovie = 5;

loadMoreBtnMovies.onclick = () => {
  let boxes = [...document.querySelectorAll(".movie-load-section .box")];

  for (var i = currentItemsMovie; i < currentItemsMovie + 3; i++) {
    boxes[i].style.display = "inline-block";
    if (currentItemsMovie <= boxes.length === 20) {
      boxes.style.display = "none";
    }
  }
  if (currentItemsMovie >= boxes.length) {
    boxes.style.display = "none";
  }
  currentItemsMovie += 3;
};

let sliceOverview = (overview) => {
  if (overview.length > 80) {
    return overview.length === 80;
  }
};
