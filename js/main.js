// Navbar Menu Icon //
let menu = document.querySelector('#menu-box');
let navbar = document.querySelector('.navbar ul');
menu.onclick = () => {
    menu.classList.toggle('menu-box')
    navbar.classList.toggle('open')
}
// Section Four //
$('.responsive0').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    dots:true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '35px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
// Section Five //
$('.responsive').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    dots:true,
    autoplay:true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite:true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1268,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1068,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  