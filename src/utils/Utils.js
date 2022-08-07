import { gsap, ScrollToPlugin } from "gsap/all"
gsap.registerPlugin(ScrollToPlugin);

function handleAnchorClick(e, location) {
    e.preventDefault();
    gsap.to(window, {duration: 1.5, scrollTo: location});
}

export { handleAnchorClick };