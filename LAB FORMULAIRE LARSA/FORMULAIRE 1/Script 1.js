function surligne(champ, erreur) 
{ 
if(erreur) 
champ.style.backgroundColor = "#fba"; 
else 
champ.style.backgroundColor = ""; 
}

function verifNomUtilisateur(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifMotDePasse(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifNom(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifPrenom(champ) 
{ 
if(champ.value.length < 2 || champ.value.length > 25) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

function verifMail(champ) 
{ 
var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/; 
if(!regex.test(champ.value)) 
{ 
surligne(champ, true); 
return false; 
} 
else 
{ 
surligne(champ, false); 
return true; 
} 
}

alert("Vous avez saisi le Nom : " + document.getElementById("form").elements["nomUtili"].value);
("Vous avez saisi le Nom : " + document.getElementById("form").elements["password"].value);