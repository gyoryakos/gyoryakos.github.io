var counter = 1;

$('#button').click(() => {
    var node = document.createElement("li");
    var textnode = document.createTextNode(document.getElementById('input').value);
    node.appendChild(textnode);
    document.getElementById('inputList').appendChild(node);
    node.id = counter;
    counter++;
    node.addEventListener("click", function() {
        node.style.textDecoration = "line-through";
    });
    $('input').val('');
});