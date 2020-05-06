let clicks = 0;

$('#increase').click(() => {
    clicks++;
    $('h2').text(clicks);
});

$('#decrease').click(() => {
    clicks--
    $('h2').text(clicks);
});