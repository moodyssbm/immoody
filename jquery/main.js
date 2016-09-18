$(document).ready(function() {
    $('.playbutton').mouseenter(function() {
        $('.playbutton').fadeTo('fast',1);
    });
    $('.playbutton').mouseleave(function() {
        $('.playbutton').fadeTo('fast',0.5);
    });
});
