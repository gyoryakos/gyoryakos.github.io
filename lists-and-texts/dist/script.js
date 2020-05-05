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