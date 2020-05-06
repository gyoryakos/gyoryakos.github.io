$('#button-1').click(() => {
    console.log('Yeah, you clicked me');
});

$('#button-2').click(() => {
    $('#button-1').text('Hajrá, Vasas!');
});

$('#button-3').click(() => {
   $('button').css('background', 'purple');
   $("button").css("color", "white");
   $("button").css("font-size", "20px");
   $("button").css("border", "0");
   $("button").css("border-radius", "5px");
});

let clicks = 0;

$('#button-4').click(() => {
    if(clicks === 0)
    {   
        clicks++;
        $('button').css('background', document.getElementById("color").value);
    }
 });
 