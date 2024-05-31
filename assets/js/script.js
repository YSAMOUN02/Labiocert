// Menu
var menu1 = document.querySelector("#menu1");
var menu2 = document.querySelector("#menu2");
var menu3 = document.querySelector("#menu3");

menu1.addEventListener("mouseover", () => {
  document.querySelector('.nav-post1').style.display = "block";
  document.querySelector('.nav-post2').style.display = "none";
  document.querySelector('.nav-post3').style.display = "none";
})

menu2.addEventListener("mouseover", () => {
  document.querySelector('.nav-post1').style.display = "none";
  document.querySelector('.nav-post2').style.display = "block";
  document.querySelector('.nav-post3').style.display = "none";
})

menu3.addEventListener("mouseover", () => {
  document.querySelector('.nav-post1').style.display = "none";
  document.querySelector('.nav-post2').style.display = "none";
  document.querySelector('.nav-post3').style.display = "block";
})
var list = document.querySelectorAll('.li-child');
list.forEach(function (item) {
  item.addEventListener('mouseover', function () {
    // Remove the 'selected' class from all items
    list.forEach(function (otherItem) {
      otherItem.classList.remove('selected');
    });

    // Add the 'selected' class to the current item
    item.classList.add('selected');
  });
});

// navigation
function navigate(event){
  event.preventDefault(); 
  const url = event.target.href;
  console.log(`Navigating to: ${url}`);
  window.location.href = url;
}
// end of menu

// Language Switches 
function switchToEnglish() {
  document.getElementById("home").textContent = "HOME";
  document.getElementById("our-service").textContent = "OUR SERVICE";
  document.getElementById("media-center").textContent = "MEDIA CENTER";
  document.getElementById("location").textContent = "Location AND CONTACT";

  //Hind English flag and show khmer flag
  document.getElementById("english").style.display = "none";
  document.getElementById("khmer").style.display = "inline";
}
//function to switch language to khmer 
function switchToKhmer() {
  //replace text with khmer translations 
  document.getElementById("home").textContent = "ទំព័រដើម";

  //Hide khmer flag and show English flag
  document.getElementById("khmer").style.display = "none";
  document.getElementById("english").style.display = "inline";
}
//Attach click event handlers to flags
document.getElementById("english").addEventListener("click", switchToEnglish);
document.getElementById("khmer").addEventListener("click", switchToKhmer);
// End of Language Switches 

// search bar 
document.querySelector('.search-icon').addEventListener('click', function () {
  var searchBox = document.querySelector('.search-box');
  if (searchBox.classList.contains('show')) {
    searchBox.classList.remove('show');
  } else {
    searchBox.classList.add('show');
  }
});
//Hide the search box 
document.addEventListener('click', function (event) {
  if (!event.target.closest('.search-container')) {
    document.querySelector('.search-box').classList.remove('show');
  }
});
// Function to display suggestions
document.querySelector('.search-box input').addEventListener('input', function () {
  const query = this.value.toLowerCase();
  const searchSuggestions = document.querySelectorAll('.search-suggestions li');
  let hasResults = false;

  searchSuggestions.forEach(li => {
    if (li.textContent.toLowerCase().includes(query)) {
      li.style.display = 'block';
      hasResults = true;
    } else {
      li.style.display = 'none';
    }
  });
  // Remove existing "No results" message if present
  const noResultsMessage = document.querySelector('.search-suggestions li.no-results');
  if (noResultsMessage) {
    noResultsMessage.remove();
  }
  if (!hasResults && query !== '') {
    const noResultLi = document.createElement('li');
    noResultLi.textContent = "No results";
    noResultLi.style.cursor = 'default';
    noResultLi.classList.add('no-results');
    noResultLi.style.display = 'block';
    document.querySelector('.search-suggestions').appendChild(noResultLi);
  }


});
// Add click event to existing list items

// end of search bar 
// slide
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const slideInterval = 300;
function nextSlide() {
  currentSlide = (currentSlide + 1) % slides, length;
  updateCarousel();
}
function updateCarousel() {
  const offset = currentSlide * 100;
  document.querySelector('sliders').style.transform = `translateX(${offset}%)`;
}
function startCarousel() {
  setInterval(nextSlide, slideInterval);
}
startCarousel();
// end of slide
// Client 
var swiper = new Swiper('.swiper', {
  slidesPerView: 4,
  direction: getDirection(),
  loop: true,
  speed: 800,
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  return windowWidth <= 760 ? 'vertical' : 'horizontal';
}
document.querySelector('.button-next').addEventListener('click', function () {
  swiper.slideNext();
});

document.querySelector('.button-prev').addEventListener('click', function () {
  swiper.slidePrev();
});

// Quote Section 
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('quoteForm');
  const responseMessage = document.getElementById('responseMessage');
  const alertMessage = document.getElementById('alertMessage');

  form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      let isValid = true;

      const fields = [
          'fullName', 
          'companyName', 
          'industrySelector', 
          'contactNumber', 
          'emailAddress', 
          'inquiry'
      ];

      fields.forEach(field => {
          const input = document.getElementById(field);
          const errorElement = document.getElementById(`${field}Error`);
          if (!input.value) {
              errorElement.style.display = 'block';
              isValid = false;
          } else {
              errorElement.style.display = 'none';
          }
      });

      if (isValid) {
          responseMessage.classList.remove('hidden');
          alertMessage.classList.add('hidden');
          form.reset();
      } else {
          responseMessage.classList.add('hidden');
          alertMessage.classList.remove('hidden');
      }
  });
});

// End of Quote Section 

// Share button 

document.querySelector('.button-container').addEventListener('click', async function(event) {
  if (event.target.id === 'share-copy') {
      const url = window.location.href;
      try {
          await navigator.clipboard.writeText(url);
          alert('Link copied to clipboard!');
      } catch (err) {
          alert('Failed to copy link.');
      }
  }
});

// End of share button