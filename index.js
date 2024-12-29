document.addEventListener('DOMContentLoaded', () => {
    var tl = gsap.timeline({defaults:{duration: 1}});
  
    tl.from(".heading-container", {y: 50, opacity: 0})
      .to("p", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
      .to("h1", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          gsap.to(".row .col-6.col-lg-3.flex-grow-1", {
            y: -10,
            opacity: 1,
            stagger: 0.2,
            duration: 1
          });
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2
    });
  
    const rowElement = document.querySelector(".row.d-flex");
    if (rowElement) {
      observer.observe(rowElement);
    }
  });