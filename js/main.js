$(document).ready(function () {

    $('#req-button').click(function () {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {

            if ($('#dane-programisty').length === 1) {
                $.each(data, function (key, value) {
                    $('#dane-programisty').append("<p></p>");
                    $('p:last-child').html(key + ': ' + value);
                })

            } else {

                $('button').after('<div id="dane-programisty">');

                $.each(data, function (key, value) {
                    $('#dane-programisty').append("<p></p>");
                    $('p:last-child').html(key + ': ' + value);
                })
            }

        })
    })
})
