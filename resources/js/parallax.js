// parallax.js
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const applyParallaxEffect = (selector) => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(selector, {
        backgroundPosition: "center 0",
        ease: "none",
        scrollTrigger: {
            trigger: selector,
            start: "top top",
            end: "bottom bottom",
            scrub: 7,
        }
    });
};
