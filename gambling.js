
function dodaj(){
	var d = parseInt(document.getElementById("dodatak").value);
	if( d > 0){
		s += d;
	}
	document.getElementById("dodatak").value="";
	document.getElementById("stanje").innerHTML=s;
}
var s = parseInt(document.getElementById("stanje").innerHTML);

window.onload = function(){
	document.getElementById("stanje").innerHTML = s;
	document.getElementById("poruka").innerHTML = "";
}

function kockaJeBacena(){ 
	var u = parseInt(document.getElementById("ulog").value);
	var o = parseInt(document.getElementById("opklada").value);
	 
	if(u>s || document.getElementById("stanje").innerHTML == 0) {
		document.getElementById("poruka").innerHTML = "Žao nam je, nemate dovoljno novca";
		return;//ili else pa sve ostalo
	}
	if (document.getElementById("ulog").value==""){
		document.getElementById("poruka").innerHTML ="Niste popunili ulog.";
		document.getElementById("poruka").className = "neutral";
		return;
	}
	if(document.getElementById("opklada").value==""){
		document.getElementById("poruka").innerHTML ="Niste popunili broj za opkladu.";
		document.getElementById("poruka").className = "neutral";
		return;
	}
	if (u<=0){
		document.getElementById("poruka").innerHTML = "Morate uneti broj veci od 0.";
		document.getElementById("poruka").className = "neutral";
		return;
	}
	if (o<1 || o>6){
		document.getElementById("poruka").innerHTML = "Broj za opkladu mora biti izmedju 1 i 6.";
		document.getElementById("poruka").className = "neutral";
		return;
	}
	
	var	x = Math.floor(Math.random()*6)+ 1;
	document.getElementById("kocka").innerHTML = x;	 
	if(x==1){
		document.getElementById("kocka").className = "zuto";
		
	} else if(x==2){
		document.getElementById("kocka").className = "oranz";
		
	} else if(x==3){
		document.getElementById("kocka").className = "crvenkasto";
		
	} else if(x==4){
		document.getElementById("kocka").className = "roze";
		
	} else if(x==5){
		document.getElementById("kocka").className = "ruzicasto";
		
	} else {
		document.getElementById("kocka").className = "plavo";
		
	}
	
	if (x == o){
		s += u * 3;
		console.log(s);
		document.getElementById("poruka").innerHTML = "Čestitamo! Dobili ste "+ u*2 + " dinara.";
		document.getElementById("poruka").className = "zeleno";
	} else {
		s -= u;
		console.log(s);
		document.getElementById("poruka").innerHTML = "Žao nam je, izgubili ste "+ u + " dinara.";
		document.getElementById("poruka").className = "crveno";
	}
	document.getElementById("ulog").value ="";
	document.getElementById("ulog").focus();
	document.getElementById("stanje").innerHTML = s;
	
}








