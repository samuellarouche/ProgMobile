window.addEventListener("load",function(){
	i = 0;
	document.getElementById("btn").addEventListener("click",function(){
		i++;
		document.getElementById("txt").innerHTML = "vous avez cliquer sur le bouton " + i + " fois ";
	});
});
window.addEventListener