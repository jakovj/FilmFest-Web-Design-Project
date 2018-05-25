function message()
{
	alert("test");
}
function refreshFilm(film)
{
	if (localStorage.getItem(film))
		document.getElementById("br_rezervacija").innerHTML=localStorage.getItem(film);
	else
		document.getElementById("br_rezervacija").innerHTML=0;
}
function refreshRezervacije()
{
	document.getElementById("film_rez_1").innerHTML=localStorage.getItem("film_1_Skver");
	document.getElementById("film_rez_2").innerHTML=localStorage.getItem("film_2_Tri Bilborda ispred Ebinga u Misuriju");
	document.getElementById("film_rez_3").innerHTML=localStorage.getItem("film_3_Advokat");
	document.getElementById("film_rez_4").innerHTML=localStorage.getItem("film_4_Aurora Borealis: Severna svetlost");
	document.getElementById("film_rez_5").innerHTML=localStorage.getItem("film_5_Oblik vode");
	document.getElementById("film_rez_6").innerHTML=localStorage.getItem("film_6_Fantomska nit");
}
function provera_rezervacije(ime,prezime,email,telefon,projekcija,max_projekcija,br_karata)
{		
		if (ime=="" || prezime=="" || email=="" || telefon=="" || projekcija=="" || br_karata=="")
		{
			alert("Ostavili ste prazna polja");
			return false;
		}
		 var uzorak_ime = /^\D{2,}$/;
   		 if (!uzorak_ime.test(ime)) 
   		 {
   		 	alert("Lose ime");
			return false;
   		 }
   		 var uzorak_prezime = /^\D{2,}$/;
   		 if (!uzorak_prezime.test(prezime)) 
   		 {
   		 	alert("Lose prezime");
			return false;
   		 }
   		 var uzorak_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   		 if (!uzorak_email.test(email.toLowerCase())) 
   		 {
   		 	alert("Los email");
			return false;
   		 }

   		 var uzorak_telefon = /^\d{3}-\d{3}-\d{3,4}$/;
		 if (!uzorak_telefon.test(telefon)) 
   		 {
   		 	alert("Los telefon");
			return false;
   		 }
   		 if (parseInt(max_projekcija)<=parseInt(projekcija) || 0>=parseInt(projekcija))
   		 {
   		 	alert("Nepostojeca projekcija izabrana");
			return false;
   		 }
   		 if (parseInt(br_karata)>10)
   		 {
   		 	alert("Nemoguce rezervisati vise od 10 karata");
			return false;
   		 }
   		 if (parseInt(br_karata)<=0)
   		 {
   		 	alert("Broj karata nije validan");
			return false;
   		 }

   		 return true;
}
function obrisi_polja()
{
	document.getElementById("ime").value="";
	document.getElementById("prezime").value="";
	document.getElementById("email").value="";
	document.getElementById("telefon").value="";
	document.getElementById("projekcija").value="";
	document.getElementById("br_karata").value="";
}
function rezervisi(film,max_projekcija)
{

		var ime=document.getElementById("ime").value;
		var prezime=document.getElementById("prezime").value;
		var email=document.getElementById("email").value;
		var telefon=document.getElementById("telefon").value;
		var projekcija=document.getElementById("projekcija").value;
		var br_karata=document.getElementById("br_karata").value;

		//pretest
		if (!provera_rezervacije(ime,prezime,email,telefon,projekcija,max_projekcija,br_karata)) return;
		else obrisi_polja();

		alert("Rezervacija uspesno izvrsena");



		//Cuvanje broja rezervacija
		var res=parseInt(localStorage.getItem(film));
		if (res)
		{
			localStorage.setItem(film,(res+parseInt(br_karata)));
		}else
		{
			localStorage.setItem(film,parseInt(br_karata));
		}

		alert("Ukupno rezervacija: " + localStorage.getItem(film));




		var body="Ime:"+ime+",\nPrezime: "+prezime+",\nEmail: "+email+",\nTelefon: "+telefon+",\nProjekcija#: "+projekcija+",\nBroj karata: "+br_karata+"\n";
	
		//alert(">film: "+film);
		//alert(body+">max: "+parseInt(max_projekcija));

		//pretest
		window.open('mailto:rezervacija@filmfest.com?subject=Rezervacija za '+film+'&body='+body);
}