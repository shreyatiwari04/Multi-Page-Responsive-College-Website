$(function() { 
	$(".navbar").load("navbar.html");
    $("#footer").load("footer.html"); 
});

if (document.querySelector("#course")) {
    var slide_index = 1;
    displaySlides(slide_index);

    function nextSlide(n, param)
        displaySlides(slide_index += n, param);  

    function currentSlide(n)
        displaySlides(slide_index += n);

    function displaySlides(n, param) {
        var i,
        slides = document.getElementsByClassName("showSlide");

        if (n > slides.length) 
            slide_index = 1; 
        if (n < 1) 
            slide_index = slides.length;

        for (i = 0; i < slides.length; i++)
            slides[i].style.display = "none";

        if (param === 'left')
            slides[slide_index - 1].style.animationName = "slideRight";
        else
            slides[slide_index - 1].style.animationName = "slideLeft";

        slides[slide_index - 1].style.display = "flex";
    }
}