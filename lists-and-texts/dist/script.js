let myNames = ["Bea", "Kitti", "Betti", "Ákos"];
myNames.forEach((v) =>
  {if(v !== "Ákos")
  {
    $("ul").append('<li>'+ v + '</li>');
  }
  else
  {
    $("ul").append('<li>'+ v.bold() + '</li>');
  }});

  let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
  };
  
  $("main").append('<h1 class="k">' + additionalBlock.title + '</h1>');
  $("main").append('<p>' + additionalBlock.text + '</p>');

