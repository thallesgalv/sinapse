/*--------------------------------------------------------------Redimencionar logo no scroll--------------------------------------------------------------*/

$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 40 && ($(window).width() > 767)) {
            $('header > nav').addClass(' alt-logo');
        } else {
            $('header > nav').removeClass(' alt-logo');
        }
    });
})

/*--------------------------------------------------------------Particles---------------------------------------------------------------------------------*/

$(document).ready(function() {
    $('#particles').particleground({
      minSpeedX: 0.1,
      maxSpeedX: 0.7,
      minSpeedY: 0.1,
      maxSpeedY: 0.7,
      directionX: 'center', // 'center', 'left' or 'right'. 'center' = dots bounce off edges
      directionY: 'center', // 'center', 'up' or 'down'. 'center' = dots bounce off edges
      density: 10000, // How many particles will be generated: one particle every n pixels
      dotColor: '#fff',
      lineColor: '#fff',
      particleRadius: 7, // Dot size
      lineWidth: 1,
      curvedLines: false,
      proximity: 60, // How close two dots need to be before they join
      parallax: false,
      parallaxMultiplier: 5, // The lower the number, the more extreme the parallax effect
      onInit: function() {},
      onDestroy: function() {}
    });
    });

    /*--------------------------------------------------------------Manipulação de classes---------------------------------------------------------------*/
      
function toggleMenu() {
    document.querySelector('nav').classList.toggle('nav-ativo');
    document.querySelector('.fa-bars').classList.toggle('fa-times');
    document.querySelector('body').classList.toggle('menu-block-scroll');
}

document.querySelector('.hamburguer').addEventListener ('click', toggleMenu)