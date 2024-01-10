var tl = gsap.timeline();

tl.from(".hero_left h1,.hero_left button", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  delay: 0.2,
  duration: 1,
});
tl.from(".cuvre", {
  y: 50,
  stagger: 0.3,
  opacity: 0,
  delay: 0.2,
  duration: 1,
});

gsap.from(".hero_right img", {
  x: 50,
  stagger: 0.3,
  opacity: 0,
  delay: 0.7,
  duration: 1,
});

gsap.to(".imgweb", {
  scrollTrigger: {
    trigger: ".section1",
    scroller: "body",
    // markers: true,
    start: "top 80%",
    end: "bottom 10%",
    scrub: "true",
  },
  x: 300,
  //   opacity: 0,
  //   scale: 1.5,
  //   duration: 2,
});

tl.from(
  ".section1 .content .innerContent h1,.section1 .content .innerContent h3,.section1 .content .innerContent p,.mainCard .card",
  {
    y: 50,
    stagger: 0.3,
    opacity: 0,
    delay: 0,
    duration: 1,
  }
);
const section1 = document.querySelector(".section1");
gsap.to(section1, {
  background: "#101442",
  color: "#fff",
  scrollTrigger: {
    trigger: ".section1",
    start: "top center",
    end: "top center",
    scrub: 2,
  },
});
// tl.to(".mainCard .card", {
//   scrollTrigger: {
//     trigger: ".section1",
//     markers: true,
//     start: "top 10%",
//     end: "bottom 10%",
//     scrub: 1,
//   },
//   y: 0,
//   opacity: 0,
//   //   scale: 1.1,
//   delay: 0.2,
//   duration: 2,
// });
