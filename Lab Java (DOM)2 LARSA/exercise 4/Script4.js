document.addEventListener('mousemove', function(e)
{
document.getElementById("X").innerHTML = "Position de la souris en X : " + e.clientX;
document.getElementById("Y").innerHTML = "Position de la souris en Y : " + e.clientY;
}, false);