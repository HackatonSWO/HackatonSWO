// Movimiento Decoder
$(document).ready(function () {
    $(".desplazar").click(function () {
        $(".decode-container").toggleClass("show hide");
    });
});

// Decoder functionality
$(document).ready(function () {
    $('.decode-form').submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        var binaryInput = $form.find('.codigo').val().replace(/\s+/g, '');
        var textOutput = '';

        for (var i = 0; i < binaryInput.length; i += 8) {
            var byte = binaryInput.substr(i, 8);
            textOutput += String.fromCharCode(parseInt(byte, 2));
        }

        $form.find('.result').text(textOutput);
    });
});


// Card structure
$(document).ready(function () {
    $('.copy-button-one').on('click', function () {
        var $temp = $('<textarea>');
        var $container = $(this).closest('.card');
        var $textToCopy = $container.find('.text-to-copy-one');
        var $copiedText = $container.find('.copied-text');
        $('body').append($temp);
        $temp.val($textToCopy.text()).select();
        document.execCommand('copy');
        $temp.remove();
    });
});


// Card structure
$(document).ready(function () {
    $('.copy-button-two').on('click', function () {
        var $temp = $('<textarea>');
        var $container = $(this).closest('.card');
        var $textToCopy = $container.find('.text-to-copy-two');
        var $copiedText = $container.find('.copied-text');
        $('body').append($temp);
        $temp.val($textToCopy.text()).select();
        document.execCommand('copy');
        $temp.remove();
    });
});

//Modal 
$(document).ready(function () { $('#staticBackdrop').modal('toggle') });