$(function() {
    var div = $(".staticHeader");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 140) {
            div.removeClass('staticHeader').addClass("fixedHeader");
        } else {
            div.removeClass("fixedHeader").addClass('staticHeader');
        }
    });
});

function showMobileNav() {
    document.querySelector(".nav-mobile").style.display = "block", document.body.style.overflow = "hidden"
}

function hideMobileNav() {
    document.querySelector(".nav-mobile").style.display = "none", document.body.style.overflow = "auto"
}

document.addEventListener("click", function(e) {
    e.target.closest(".icon-menu") && (e.preventDefault(), showMobileNav()), e.target.closest(".nav-mobile-close") && (e.preventDefault(), hideMobileNav())
})
