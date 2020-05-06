$('#button').click(() => {
    $('ul').append('<li>' +  document.getElementById('anything').value + '</li>');
    $('#anything').val('');
});