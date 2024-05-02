var intv_auto; // Interval for automatic slideshow
var auto_interval_time = 3000; // Interval time for automatic slideshow in milliseconds

document.addEventListener("DOMContentLoaded", function() {
    intv_auto = setInterval(slide_show_auto, auto_interval_time);
});

function next_slide() {
    clearInterval(intv_auto);
    var current_slide = document.querySelector(".active");
    current_slide.classList.remove('active');
    var next_slide = current_slide.nextElementSibling;
    if (!next_slide) {
        next_slide = document.querySelector(".slide-item1");
    }
    next_slide.classList.add('active');
    // Restore automatic slideshow interval after manual slide change
    intv_auto = setInterval(slide_show_auto, auto_interval_time);
}
function previous_slide() {
    clearInterval(intv_auto);
    var current_slide = document.querySelector(".active");
    current_slide.classList.remove('active');
    var prviouse_slide = current_slide.previousElementSibling;

    if (!prviouse_slide) {
    
        prviouse_slide = document.querySelector(".slide-item1:last-child");
    }
 

    prviouse_slide.classList.add('active');
    // Restore automatic slideshow interval after manual slide change
    intv_auto = setInterval(slide_show_auto, auto_interval_time);
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
}

function slide_show_auto() {
    var current_slide = document.querySelector(".active");
    current_slide.classList.remove('active');
    var next_slide = current_slide.nextElementSibling;
    if (!next_slide) {
        next_slide = document.querySelector(".slide-item1");
    }
    next_slide.classList.add('active');
}

var list = document.querySelectorAll('.li-child');

list.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        // Remove the 'selected' class from all items
        list.forEach(function(otherItem) {
            otherItem.classList.remove('selected');
        });

        // Add the 'selected' class to the current item
        item.classList.add('selected');
    });

});

var menu1 = document.querySelector("#menu1");
var menu2 = document.querySelector("#menu2");
var menu3 = document.querySelector("#menu3");

menu1.addEventListener("mouseover", ()=>{
    document.querySelector('.nav-post1').style.display = "block";
    document.querySelector('.nav-post2').style.display = "none";
    document.querySelector('.nav-post3').style.display = "none";
})

menu2.addEventListener("mouseover", ()=>{
    document.querySelector('.nav-post1').style.display = "none";
    document.querySelector('.nav-post2').style.display = "block";
    document.querySelector('.nav-post3').style.display = "none";
})

menu3.addEventListener("mouseover", ()=>{
    document.querySelector('.nav-post1').style.display = "none";
    document.querySelector('.nav-post2').style.display = "none";
    document.querySelector('.nav-post3').style.display = "block";
})

document.getElementById('food-test').addEventListener('click', function() {
 
    window.location.href = 'shop.html';
});


// Debounce function to limit the frequency of the scroll event
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Scroll event listener with debouncing
var header = document.querySelector(".header");
var originalHeight = '80px'; // Change to your original height
var desiredHeight = '50px'; // Change to your desired height when scrolled

function handleScroll() {
    var scrollPosition = window.scrollY;

    if (scrollPosition === 0) {
        header.style.height = originalHeight;
        header.style.borderBottom = "none";
        document.getElementById("btn-scroll").style.display = 'none';
       
    } else {
        header.style.height = desiredHeight;
        header.style.borderBottom = "1px solid black";
        document.getElementById("btn-scroll").style.display = 'block';
    }
}

var debouncedScroll = debounce(handleScroll, 50); // Adjust debounce delay as needed

window.addEventListener("scroll", debouncedScroll);
