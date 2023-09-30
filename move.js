let header = document.querySelector('header');

window.addEventListener('scroll', () => {

  header.classList.toggle('shadow', window.scrollY > 0); 
});


let openNav = document.querySelector('#menu-icon');
let closeNav = document.getElementById('x-icon');
let navbar = document.querySelector('.navbar');


openNav.addEventListener('click', () =>{
  closeNav.style.display = "initial";
  navbar.style.display = "flex";
  openNav.style.display = "none";
});

closeNav.addEventListener('click', () => {
  closeNav.style.display = 'none';
  navbar.style.display = "none";
  openNav.style.display = "initial";

  
}) 


var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
// coming-container
var swiper = new Swiper(".coming-container", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:2,
        },
        568: {
            slidesPerView:3,
        },
        768: {
            slidesPerView:4,
        },
        968: {
            slidesPerView:5,
        },
    }
  });

  var API_KEY = 'api_key=dec29906cee77fd504440eb9d2421b9e';
  var BASE_URL = 'https://api.themoviedb.org/3';
  var API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
  var IMG_URL = 'https://image.tmdb.org/t/p/w500';
  const main2 = document.getElementById("main2");
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZWMyOTkwNmNlZTc3ZmQ1MDQ0NDBlYjlkMjQyMWI5ZSIsInN1YiI6IjY1MTBjNjM5YTkxMTdmMDBhYjY9MzA3NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nQPyPpNo1Hc2YqXHD7mlnRn402ERFgjb36nrZNO2UL8'
    }
  };
  
  function getMovies(url) {
    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        showMovies(data.results);

      })
      .catch(err => console.error(err));
  }
  
  function showMovies(movies) {
    main2.innerHTML = "";
    movies.forEach(movie => {
      const { poster_path, title, vote_average, overview } = movie;
      const movieEl = document.createElement("div");
      movieEl.classList.add("movie1");
  
      movieEl.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>${overview}</h3>
        </div>
      `;

      main2.appendChild(movieEl);
    });
  }
  
  function getClassByRate(vote_average) {
    if (vote_average >= 8) {
      return 'green';
    } else if (vote_average >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }
  
  getMovies(API_URL);
























