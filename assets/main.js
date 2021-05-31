
setInterval(() => {

    if (window.scrollY > 2) {

        $("#Header").removeClass("haveShadow");
        $("#Header").addClass("haveborder");

    } else {

        $("#Header").addClass("haveShadow");
        $("#Header").removeClass("haveborder");

    }

}, 300);