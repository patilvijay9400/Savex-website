const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // slidesPerView:1.5,
    // effect: 'fade',
    // fadeEffect: {
    //   crossFade: true
    // },
    // autoplay: {
    //     delay: 2000,
    //   },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  var swiperBrand = new Swiper("#swiper-brand", {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 30,
    loop:true,
    autoplay: {
        delay: 3000,
      },
    pagination: {
      el: "#pagination-02",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  });



  var swiperCategory = new Swiper("#swiper-category", {
    direction: 'horizontal',
    spaceBetween: 30,
    loop:true,
    // autoplay: {
    //     delay: 1000,
    //   },

    pagination: {
      el: "#pagination-03",
      clickable: true
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
    
  });


  const ctx = document.querySelector('#myChart');

      new Chart(ctx, {
        type: 'line',
        responsive:true,
        data: {
          labels: ['HP', 'Lenovo', 'Benq', 'Bose', 'Solarwinds',],
          datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });