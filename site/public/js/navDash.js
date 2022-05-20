var menuToggle = document.querySelector('.toggle-menu');

if(window.matchMedia("(min-width: 1200px)").matches){

    var tlmenu = new TimeLineMax({
        paused: true
    })

    tlmenu.fromTo(".nav .menu li span, .logo span", 0.2,
    {
        opacity: 1,
        display: "block"
    },
    {
        opacity: 0,
        display: "none",
        ease: "power2.out"
    }
    )

    tlmenu.fromTo(".logo .bi", 0.3,
    {css: {marginRight: "15px"}},
    {css: {marginRight: 0}, ease: "power2.out"},
    .01
    )
    
    tlmenu.fromTo(".nav", 0.5,
     {width: "280px"},
     {width: "80px", ease: "power2.out"},
     .1
    )

    tlmenu.fromTo(".content, .footer", 0.5,
     {width: "calc(100% - 280px)"},
     {width: "calc(100% - 80px)", ease: "power2.out"},
     .1
     )

     menuToggle.onclick = () => {
         menuToggle.classList.toggle('active'); 
          if(menuToggle.classList.contains('active')) {
            tlmenu.reverse(0)
          } else {
              tlmenu.play(0)
          }  
     }
}