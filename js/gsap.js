jQuery(document).ready(function($) {

    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);

    /*
     * Split Text Animation
     */
    const splitPhrases = document.querySelectorAll(".split-text");
    function setupSplits() {
    splitPhrases.forEach(splitPhrase => {
        // Reset if needed
        if(splitPhrase.anim) {
        splitPhrase.anim.progress(1).kill();
        splitPhrase.split.revert();
        }

        splitPhrase.split = new SplitText(splitPhrase, {
        type: "lines,words,chars",
        linesClass: "split-line"
        });

        // Set up the anim
        splitPhrase.anim = gsap.from(splitPhrase.split.chars, {
        scrollTrigger: {
            trigger: splitPhrase,
            toggleActions: "restart pause resume reverse",
            start: "top 80%",
        },
        duration: 1,
        ease: "circ.out",
        y: 150,
        stagger: 0.02
        });
    });
    }
    setupSplits();


    /**
     * Fade In Up
     * @type {jQuery|HTMLElement|*}
     */
     const fadeInUp = $('.gsap-fade-in-up');
     if(fadeInUp.length){
         gsap.utils.toArray(".gsap-fade-in-up").forEach(box => {
             var tl = gsap.timeline({
                 scrollTrigger: {
                     trigger: box,
                     toggleActions: "restart none none reset",
                 }
             });
             tl.from(box, {
                 duration:1.25,
                 autoAlpha:0,
                 y:25,
                 ease:'circ',
                 delay:1
             });
         });
     }

     /**
      * Fade In Left
      * @type {jQuery|HTMLElement|*}
      */
     const fadeInLeft = $('.gsap-fade-in-left');
     if(fadeInLeft.length){
         gsap.utils.toArray(".gsap-fade-in-left").forEach(box => {
             var tl = gsap.timeline({
                 scrollTrigger: {
                     trigger: box,
                     toggleActions: "restart none none reset",
                 }
             });
             tl.from(box, {
                 duration:1.5,
                 autoAlpha:0,
                 x:-200,
                 ease:'circ',
                 delay:.5
             });
         });
     }

     /**
      * Fade In Right
      * @type {jQuery|HTMLElement|*}
      */
     const fadeInRight = $('.gsap-fade-in-right');
     if(fadeInRight.length){
         gsap.utils.toArray(".gsap-fade-in-right").forEach(box => {
             var tl = gsap.timeline({
                 scrollTrigger: {
                     trigger: box,
                     toggleActions: "restart none none reset",
                 }
             });
             tl.from(box, {
                 duration:1.5,
                 autoAlpha:0,
                 x:200,
                 ease:'circ',
                 delay:1.5
             });
         });
     }

});
