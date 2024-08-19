document.addEventListener('DOMContentLoaded', function() {
    gsap.registerPlugin(ScrollTrigger);

    function setupAnimationOpacity(element, startValue, endValue) {
        gsap.set(element, {
            y: 0,
            opacity: 0,
        });

        let triggerOptions = {
            trigger: element,
            start: startValue,
            end: endValue,
            // scrub: true,
            // markers: true,
        };

        gsap.to(element, {
            scrollTrigger: triggerOptions,
            opacity: 1,
            y: 0,
            duration: 1.3,
        });
    }

    setupAnimationOpacity(".hero", "top 100%", "bottom 0%");
    setupAnimationOpacity(".calendar", "top 80%", "bottom 50%");
    setupAnimationOpacity(".leyend", "top 80%", "bottom 50%");
    setupAnimationOpacity(".technology", "top 80%", "bottom 50%");
    setupAnimationOpacity(".entretaiment", "top 80%", "bottom 50%");
    setupAnimationOpacity(".galery", "top 80%", "bottom 50%");
    setupAnimationOpacity(".form", "top 80%", "bottom 50%");
    setupAnimationOpacity(".partners", "top 80%", "bottom 50%");
    setupAnimationOpacity(".share", "top 80%", "bottom 50%");
});