var Nb =( parseFloat(prompt("Entrez un nombre entre 0 et 20 : ")));
var NbRandom = Math.floor((Math.random() * 20));
//var rndNb = Math.floor(NbRandom)
if(Nb === NbRandom)
{
	console.log("bravo vous avez trouver le nombre");
}
else
{
	if(Nb < NbRandom)
	{
		console.log(" le nombre choisi est plus petit");
	}
	else
	{
		console.log(" le nombre choisi est plus grand");
	}
}

 