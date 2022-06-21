let underline = document.getElementById('hover-underline');
let menuItems = document.querySelectorAll('#main-menu li');
let startItem = document.querySelector('#main-menu li.active');

/***
 ** Sliding Underline on Navigation Hover
***/
function navHoverLine(){
  setTimeout(function(){
    let startItem = document.querySelector('#main-menu li.active');
    let startBounding = startItem.getBoundingClientRect();
    let startWidth = startBounding.width - 48;
    let startLeft = startBounding.left + 24;
    let bounding = startItem.getBoundingClientRect();
    let itemWidth = bounding.width;
    let itemLeft = bounding.left;

    let widthString = itemWidth.toString() + "px";
    let leftString = itemLeft.toString() + "px";
    let stWidthString = startWidth.toString() + "px";
    let stLeftString = startLeft.toString() + "px";

    underline.style.width = stWidthString;
    underline.style.left = stLeftString;
    underline.style.backgroundColor = '#fff';

    for (let i = 0; i < menuItems.length; i++) {
      menuItems[i].onmouseenter = function mouseOverTest (){
        bounding = menuItems[i].getBoundingClientRect();
        itemWidth = bounding.width - 48;
        itemLeft = bounding.left + 24;
        widthString = itemWidth.toString() + "px";
        leftString = itemLeft.toString() + "px";

        underline.style.width = widthString;
        underline.style.left = leftString;

        if (menuItems[i].classList.contains('active')) {
          underline.style.backgroundColor = '#fff';
        } else {
          underline.style.backgroundColor = 'rgba(255,255,255,.5)';
        }
      }

      menuItems[i].onmouseleave = function mouseOverTest (){
        underline.style.width = '0';
        underline.style.left = stLeftString;
      }
    }
  }, 500);
};

document.addEventListener("DOMContentLoaded", navHoverLine());

/***
 ** Display Corresponding Destination Info
***/
function destMars(place){
  let destTitle = document.querySelector('#dest-description h2');
  let destParagraph = document.querySelector('#dest-description p');
  let destDistance = document.querySelector('#dest-distance .subheading-one');
  let destTravel = document.querySelector('#dest-travel .subheading-one');
  let destImage = document.getElementById('dest-image');
  destTitle.innerText = place;

  switch(place) {
  case 'MOON':
    destParagraph.innerText = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    destDistance.innerText = "384,400 km";
    destTravel.innerText = "3 days";
    destImage.src = "images/destination/image-moon.png";
    break;
  case 'MARS':
    destParagraph.innerText = "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!";
    destDistance.innerText = "225 mil. km";
    destTravel.innerText = "9 months";
    destImage.src = "images/destination/image-mars.png";
    break;
  case 'EUROPA':
    destParagraph.innerText = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    destDistance.innerText = "628 mil. km";
    destTravel.innerText = "3 years";
    destImage.src = "images/destination/image-europa.png";
    break;
  case 'TITAN':
    destParagraph.innerText = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    destDistance.innerText = "1.6 bil. km";
    destTravel.innerText = "7 years";
    destImage.src = "images/destination/image-titan.png";
    break;
  default:
    destParagraph.innerText = "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    destDistance.innerText = "384,400 km";
    destTravel.innerText = "3 days";
    destImage.src = "images/destination/image-moon.png";
    break;
}
}

/***
 ** Select Active Destination
***/
function activeclassSelect(e) {
  let elems = document.querySelectorAll(".d-active");
  let selectedDest = '';
  [].forEach.call(elems, function(el) {
      if (e.target.type == 'submit'){
        el.classList.remove("d-active");
      }
  });
if (e.target.type == 'submit'){
  e.target.className = "nav-text d-active";
  selectedDest = e.target.innerText;
  destMars(selectedDest);
  }
}
