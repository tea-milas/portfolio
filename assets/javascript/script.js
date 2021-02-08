const isElementInView = (element) => {
    let pageTop = $(window).scrollTop();
    let pageBottom = pageTop + $(window).height();
    let elementTop = $(element).offset().top;
    let elementBottom = elementTop + $(element).height();
    
    return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
}


$(window).on("scroll", function() {
    const $projects = $("#project__section");
    const $about = $('#about');
    const $home = $('#home');

    if(isElementInView($home)) {
        $("nav ul li a").css("color", "#E5E5E5");
        $("nav ul li a:hover").css("color", "#A4742C");
    } else if (isElementInView($projects)) {
        $("nav ul li a").css("color", "#332A2A");
        $("nav ul li a:hover").css("color", "#A4742C");
    } else if(isElementInView($about) && !isElementInView($projects)) {
        $("nav ul li a").css("color", "#E5E5E5");
        $("nav ul li a:hover").css("color", "#A4742C");
    } 
});