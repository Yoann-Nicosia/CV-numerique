// const slidingNewsletter = document.querySelector('.slide-in');

// window.addEventListener('scroll', () => {

//     const {scrollTop, clientHeight} = document.documentElement;

//     // console.log(scrollTop, clientHeight);

//     const topElementToTopViewport = slidingNewsletter.getBoundingClientRect().top;

//     console.log(topElementToTopViewport);

//     if(scrollTop > (scrollTop + topElementToTopViewport).toFixed() - clientHeight * 0.8){
//         slidingNewsletter.classList.add('active')
//     }
// })





// animationIsDone = false;

// function preventScroll(e) {

//     e.preventDefault();
//     e.stopPropagation();
// }

// document.getElementById('body').on('wheel', function(e) {

//     if (animationIsDone === false) {
//         // $("#main-header").removeClass("yellow-overlay").addClass("yellow-overlay-darker");
//         // $(".site-info").first().addClass("is-description-visible");
//         var element = document.getElementById('votreElement'); // Remplacez 'votreElement' par l'ID de votre élément

//         element.style.transition = 'opacity 2s'; // Réglez la durée de la transition (2 secondes dans cet exemple)
//         element.style.opacity = '0'; // Définissez l'opacité à 0 pour faire disparaître l'élément

//         preventScroll(e);

//         setTimeout(function() {
//             animationIsDone = true;
//         }, 1000);

//     }


// });
var element = document.getElementById('votreElement');
window.addEventListener('wheel', function(event)
{
 if (event.deltaY < 0)
 {
  console.log('scrolling up');
  element.style.transition = "transform 5s ease"; // Définir une transition de 0.5 secondes avec un effet "ease"
  element.style.transform = "translateX(-100px)"; // Déplacer l'élément horizontalement de 100 pixels
  element.style.transition = 'opacity 2s'; // Réglez la durée de la transition (2 secondes dans cet exemple)
  element.style.opacity = '0';
 }
 else if (event.deltaY > 0)
 {
  console.log('scrolling down');
  element.style.transition = "transform 5s"; // Définir une transition de 0.5 secondes avec un effet "ease"
  element.style.transform = "translateX(100px)"; // Déplacer l'élément horizontalement de 100 pixels
  element.style.transition = 'opacity 2s'; // Réglez la durée de la transition (2 secondes dans cet exemple)
  element.style.opacity = '1';
 }
});


