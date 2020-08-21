$(function(){ 
    var navMain = $("#navbarSupportedContent");
    navMain.on("click", "li", null, function () {
        navMain.collapse('hide');
    });
});