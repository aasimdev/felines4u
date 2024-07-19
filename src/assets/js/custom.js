$(document).ready(function () {
    $('a[data-bs-toggle="dropdown"]').on('click', function (e) {
        e.preventDefault();
        var $dropdownMenu = $(this).next('.dropdown-menu');

        $('.dropdown-menu').not($dropdownMenu).hide();
        $dropdownMenu.toggle();
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('nav').length) {
            $('.dropdown-menu').hide();
        }
    });
    $("button[data-bs-target='#navbarSupportedContent']").click(function() {
        $("#navbarSupportedContent").toggleClass("h-0 h-full");
    });
});


