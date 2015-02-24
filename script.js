$(document).ready(function () {
  console.log("Script included!");
});

$(document).ready(function () {
    var addItem = $('#addItem');
    var removeItem = $('#remove');
    addItem.click(function () {
        var toAdd = $('input#text').val();
        $('#shoppingList').append('<li><input type="checkbox"/>' + toAdd + '</li>');
    });
});




$(function() {
    $('.instructions').addClass('hidden').hide();
    $('#button').click(function() {
        if ($('.instructions').hasClass('hidden')) {
            $('.instructions').removeClass('hidden').fadeIn(1000);
        }
        else {
            $('.instructions').addClass('hidden').fadeOut(1000);
        }
    });
});

$(function () {
    $('input:checkbox').on('change', function () {
        var input = $(this).next('span');
        if (this.checked) {
            $(input).css('textDecoration', 'line-through');
        } else {
            $(input).css('textDecoration', 'none');
        }
    })
})
