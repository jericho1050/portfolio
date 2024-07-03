document.addEventListener('DOMContentLoaded', ()=> {
    var tl = gsap.timeline({defaults:{duration: 1}});

    tl.from(".heading-container", {y: 50, opacity: 0})
        .to("p", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
        .to("h1", {clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)"}, "-=.7")
        .from(".row .col-6.col-lg-3.flex-grow-1", {y: 50, opacity: 0, stagger: .3}, "-=.7")
})