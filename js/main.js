function test()
{
	alert("test");
}
function filmovi_onload()
{
	loadFilmovi();
	refreshRezervacije();
}
function mojifilmovi_onload()
{
	loadFilmovi();
	prikaziOmiljene();
	refreshRezervacije();

}
function mymovies_onload()
{
	loadFilmovi();
	loadMovies();
	showFavourites();
	refreshRezervacije();
}
function prikaziOmiljene()
{
	var ima=false;
	document.getElementById("prikaz_mojih_filmova").innerHTML="";
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			if (arr[0]=="omiljeni")
			{
				ima=true;
				var film=arr[1]+"_"+arr[2];
				document.getElementById("prikaz_mojih_filmova").innerHTML+=localStorage.getItem(film);
			}
		}
	if (ima==false)
	{
		document.getElementById("prikaz_mojih_filmova").innerHTML="<div class=\"col-md-12\">Niste izabrali ni jedan film</div>";
	}
}
function showFavourites()
{
	var ima=false;
	document.getElementById("prikaz_mojih_filmova").innerHTML="";
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			if (arr[0]=="omiljeni")
			{
				ima=true;
				var film="movie_"+arr[2];
				document.getElementById("prikaz_mojih_filmova").innerHTML+=localStorage.getItem(film);
			}
		}
	if (ima==false)
	{
		document.getElementById("prikaz_mojih_filmova").innerHTML="<div class=\"col-md-12\">No movies to show</div>";
	}
}
function dodajOmiljeni(film)
{
	//omiljeni_film_X_Ime filma
	//var arr=film.split("_");
	//var br=arr[2];
	//alert("film");
	localStorage.setItem(film,"true");
}
function obrisiOmiljene()
{

}
function clearLocalStorage()
{
	localStorage.clear();
	location.reload();
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
	if (document.getElementById("film_rez_1") != null) {
		document.getElementById("film_rez_1").innerHTML=localStorage.getItem("brrezervacija_film_1_Skver")?localStorage.getItem("brrezervacija_film_1_Skver"):0;
	}
	if (document.getElementById("film_rez_2") != null) {
		document.getElementById("film_rez_2").innerHTML=localStorage.getItem("brrezervacija_film_2_Tri Bilborda ispred Ebinga u Misuriju")?localStorage.getItem("brrezervacija_film_2_Tri Bilborda ispred Ebinga u Misuriju"):0;
	}
	if (document.getElementById("film_rez_3") != null) {
		document.getElementById("film_rez_3").innerHTML=localStorage.getItem("brrezervacija_film_3_Advokat")?localStorage.getItem("brrezervacija_film_3_Advokat"):0;
	}
	if (document.getElementById("film_rez_4") != null) {
		document.getElementById("film_rez_4").innerHTML=localStorage.getItem("brrezervacija_film_4_Aurora Borealis: Severna svetlost")?localStorage.getItem("brrezervacija_film_4_Aurora Borealis: Severna svetlost"):0;
	}
	if (document.getElementById("film_rez_5") != null) {
		document.getElementById("film_rez_5").innerHTML=localStorage.getItem("brrezervacija_film_5_Oblik vode")?localStorage.getItem("brrezervacija_film_5_Oblik vode"):0;
	}
	if (document.getElementById("film_rez_6") != null) {
		document.getElementById("film_rez_6").innerHTML=localStorage.getItem("brrezervacija_film_6_Fantomska nit")?localStorage.getItem("brrezervacija_film_6_Fantomska nit"):0;
	}
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
   		 if (parseInt(max_projekcija)<=parseInt(projekcija) || 0>parseInt(projekcija))
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

		//alert("Ukupno rezervacija: " + localStorage.getItem(film));




		var body="Ime:"+ime+",\nPrezime: "+prezime+",\nEmail: "+email+",\nTelefon: "+telefon+",\nProjekcija#: "+projekcija+",\nBroj karata: "+br_karata+"\n";
	
		//alert(">film: "+film);
		//alert(body+">max: "+parseInt(max_projekcija));

		//pretest
		window.open('mailto:rezervacija@filmfest.com?subject=Rezervacija za '+film+'&body='+body);
		location.reload();
}

function loadFilmovi()
{
			 var film1="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film1.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Skver</a></h3>\
											<hr>\
											<a href=\"2.1.1 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_1\">0</span></font><br><br>\
											<p>Duration:<i> 142'</i></p>\
											<p>Director:<i> Ruben Östlund</i></p>\
											<p>Cast:<i> Claes Bang, Elisabeth Moss, Dominic West, Terry Notary</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var film2="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film2.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Tri bilborda ispred Ebinga u Misuriju</a></h3>\
											<hr>\
											<a href=\"2.1.2 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_2\">0</span></font><br><br>\
											<p>Duration:<i> 115'</i></p>\
											<p>Director:<i> Martin McDonagh</i></p>\
											<p>Cast:<i> Frances McDormand, Woody Harrelson, Sam Rockwell, Peter Dinklage</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var film3="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film3.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Advokat</a></h3>\
											<hr>\
											<a href=\"2.1.3 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_3\">0</span></font><br><br>\
											<p>Duration:<i> 122'</i></p>\
											<p>Director:<i> Dan Gilroy</i></p>\
											<p>Cast:<i> Denzel Washington, Colin Farrell, Carmen Ejogo</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var film4="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film4.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Aurora Borealis : Severna svetlost</a></h3>\
											<hr>\
											<a href=\"2.1.4 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_4\">0</span></font><br><br>\
											<p>Duration:<i> 104'</i></p>\
											<p>Director:<i> Márta Mészáros</i></p>\
											<p>Cast:<i> Mari Törőcsik, Franciska Törőcsik, Ildikó Tóth, Jákob Ladányi</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var film5="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film5.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Oblik vode</a></h3>\
											<hr>\
											<a href=\"2.1.5 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_5\">0</span></font><br><br>\
											<p>Duration:<i>123'</i></p>\
											<p>Director:<i> Guillermo del Toro</i></p>\
											<p>Cast:<i> Sally Hawkins, Doug Jones, Michael Shannon, Richard Jenkins, Octavia Spencer, Michael Stuhlbarg</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var film6="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film6.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Fantomska nit</a></h3>\
											<hr>\
											<a href=\"2.1.6 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_6\">0</span></font><br><br>\
											<p>Duration:<i>115'</i></p>\
											<p>Director:<i> Paul Thomas Anderson</i></p>\
											<p>Cast:<i> Daniel Day-Lewis, Vicky Krieps, Lesley Manville</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			localStorage.setItem("film_1",film1);
			//localStorage.setItem("info_film_1","Skver_DomOmladine");
			localStorage.setItem("film_2",film2);
			//localStorage.setItem("info_film_2","2_DomOmladine");
			localStorage.setItem("film_3",film3);
			//localStorage.setItem("info_film_3","Advokat_DomOmladine");
			localStorage.setItem("film_4",film4);
			//localStorage.setItem("info_film_4","4_DomOmladine");
			localStorage.setItem("film_5",film5);
			//localStorage.setItem("info_film_5","5_DomOmladine");
			localStorage.setItem("film_6",film6);
}
function loadMovies()
{				
			var movie1="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film1.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">The Square</a></h3>\
											<hr>\
											<a href=\"2.1.1 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_1\">0</span></font><br><br>\
											<p>Duration:<i> 142'</i></p>\
											<p>Director:<i> Ruben Östlund</i></p>\
											<p>Cast:<i> Claes Bang, Elisabeth Moss, Dominic West, Terry Notary</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var movie2="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film2.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Three Billboards outside Ebbing, Missouri</a></h3>\
											<hr>\
											<a href=\"2.1.2 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_2\">0</span></font><br><br>\
											<p>Duration:<i> 115'</i></p>\
											<p>Director:<i> Martin McDonagh</i></p>\
											<p>Cast:<i> Frances McDormand, Woody Harrelson, Sam Rockwell, Peter Dinklage</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var movie3="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film3.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Roman J. Israel, Esq.</a></h3>\
											<hr>\
											<a href=\"2.1.3 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_3\">0</span></font><br><br>\
											<p>Duration:<i> 122'</i></p>\
											<p>Director:<i> Dan Gilroy</i></p>\
											<p>Cast:<i> Denzel Washington, Colin Farrell, Carmen Ejogo</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var movie4="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film4.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Aurora Borealis: Northern lights</a></h3>\
											<hr>\
											<a href=\"2.1.4 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_4\">0</span></font><br><br>\
											<p>Duration:<i> 104'</i></p>\
											<p>Director:<i> Márta Mészáros</i></p>\
											<p>Cast:<i> Mari Törőcsik, Franciska Törőcsik, Ildikó Tóth, Jákob Ladányi</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var movie5="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film5.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">The Shape of Water</a></h3>\
											<hr>\
											<a href=\"2.1.5 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_5\">0</span></font><br><br>\
											<p>Duration:<i>123'</i></p>\
											<p>Director:<i> Guillermo del Toro</i></p>\
											<p>Cast:<i> Sally Hawkins, Doug Jones, Michael Shannon, Richard Jenkins, Octavia Spencer, Michael Stuhlbarg</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			var movie6="<div class=\"col-md-12\">\
								<div class=\"card\">\
									<div class=\"card-body\">\
										<div class=\"media\">\
										  <img class=\"mr-3\" src=\"../images/filmovi/film6.jpg\" alt=\"Film slika\" width=\"25%\">\
										  <div class=\"media-body\">\
											<h3 class=\"mt-0\"><a class=\"ziri-link\">Phantom Thread</a></h3>\
											<hr>\
											<a href=\"2.1.6 film.html\" class=\"btn btn-warning btn-sm\">Idi na stranicu filma</a>\
											<br><br>\
											<img src=\"../images/dropdown-icons/ticket-icon.png\" width=\"20px\">&nbsp;<font color=\"orange\"<span id=\"film_rez_6\">0</span></font><br><br>\
											<p>Duration:<i>115'</i></p>\
											<p>Director:<i> Paul Thomas Anderson</i></p>\
											<p>Cast:<i> Daniel Day-Lewis, Vicky Krieps, Lesley Manville</i></p>\
										  </div>\
										</div>\
									</div>\
									<hr>\
								</div>\
							</div>\
							";
			 
			localStorage.setItem("movie_1",movie1);
			localStorage.setItem("movie_2",movie2);
			localStorage.setItem("movie_3",movie3);
			localStorage.setItem("movie_4",movie4);
			localStorage.setItem("movie_5",movie5);
			localStorage.setItem("movie_6",movie6);
}
function filterMojiFilmovi(filter)
{
	/*
	//1-Naziv,2-Mesto projekcije,3-Broj rezervacija
	var ima=false;
	var arr = new Array();

	document.getElementById("prikaz_mojih_filmova").innerHTML="";
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			if (arr[0]=="omiljeni")
			{
				ima=true;
				var film=arr[1]+"_"+arr[2];
				arr+=localStorage.getItem(film);
			}
		}
	if (ima==false)
	{
		document.getElementById("prikaz_mojih_filmova").innerHTML="<div class=\"col-md-12\">Niste izabrali ni jedan film</div>";
	}

	arr.sort();
	document.getElementById("prikaz_mojih_filmova").innerHTML=arr;
	*/
}


function sortirajPoNazivu() {
	
	var parent = document.getElementById("movies");
	var children = parent.getElementsByTagName("div");
	var ids = [], obj, i, len;
	for (i = 0, len = children.length; i < len; i++) {
		obj = {};
		obj.element = children[i];
		obj.id = children[i].id;
		ids.push(obj);
	}
	ids.sort(function(a, b) {return a.id > b.id;});
	 for (i = 0; i < ids.length; i++) {
		 parent.appendChild(ids[i].element);
	 }
}

function sortirajPoRez() {
	
	var parent = document.getElementById("movies");
	var children = parent.getElementsByTagName("div");
	var ids = [], obj, i, len;
	for (i = 0, len = children.length; i < len; i++) {
		obj = {};
		obj.element = children[i];
		obj.id = parseInt(dohvatiBrRezervacija(children[i].id));
		ids.push(obj);
	}
	ids.sort(function(a, b) {return b.id - a.id;});
	 for (i = 0; i < ids.length; i++) {
		 parent.appendChild(ids[i].element);
	 }
	
}

function sortirajPoMestu() {
	
	var film_mestoProj = {};
	film_mestoProj["Skver"] = "Sava Centar";
	film_mestoProj["Tri Bilborda ispred Ebinga u Misuriju"] = "Dom Omladine";
	film_mestoProj["Advokat"] = "Sava Centar";
	film_mestoProj["Aurora Borealis: Severna svetlost"] = "Sava Centar";
	film_mestoProj["Oblik vode"] = "Sava Centar";
	film_mestoProj["Fantomska nit"] = "Dom Omladine";
	var parent = document.getElementById("movies");
	var children = parent.getElementsByTagName("div");
	var ids = [], obj, i, len;
	for (i = 0, len = children.length; i < len; i++) {
		obj = {};
		obj.element = children[i];
		obj.id = film_mestoProj[children[i].id];
		ids.push(obj);
	}
	ids.sort(function(a, b) {return a.id > b.id;});
	 for (i = 0; i < ids.length; i++) {
		 parent.appendChild(ids[i].element);
	 }
}

function sortirajOmiljenePoMestu()
{
	var ima=false;
	var film_mestoProj = {};
	film_mestoProj["Skver"] = "Sava Centar";
	film_mestoProj["Tri Bilborda ispred Ebinga u Misuriju"] = "Dom Omladine";
	film_mestoProj["Advokat"] = "Sava Centar";
	film_mestoProj["Aurora Borealis: Severna svetlost"] = "Sava Centar";
	film_mestoProj["Oblik vode"] = "Sava Centar";
	film_mestoProj["Fantomska nit"] = "Dom Omladine";
	document.getElementById("prikaz_mojih_filmova").innerHTML="";
	var ids = [], obj, i, len;
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			if (arr[0]=="omiljeni")
			{
				var film=arr[1]+"_"+arr[2];
				obj = {};
				obj.element = localStorage.getItem(film);
				obj.id = film_mestoProj[arr[3]];
				ima=true;
				ids.push(obj);
			}
		}
	if (ima==false)
	{
		document.getElementById("prikaz_mojih_filmova").innerHTML="<div class=\"col-md-12\">Niste izabrali ni jedan film</div>";
	}
	else {
		ids.sort(function(a, b) {return a.id > b.id;});
		for (i = 0; i < ids.length; i++) {
			document.getElementById("prikaz_mojih_filmova").innerHTML+=ids[i].element;
		}
		refreshRezervacije();
	}
}

function sortirajOmiljenePoNazivu()
{
	var ima=false;
	document.getElementById("prikaz_mojih_filmova").innerHTML="";
	var ids = [], obj, i, len;
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			if (arr[0]=="omiljeni")
			{
				var film=arr[1]+"_"+arr[2];
				obj = {};
				obj.element = localStorage.getItem(film);
				obj.id = arr[3];
				ima=true;
				ids.push(obj);
				//document.getElementById("prikaz_mojih_filmova").innerHTML+=localStorage.getItem(film);
			}
		}
	if (ima==false)
	{
		document.getElementById("prikaz_mojih_filmova").innerHTML="<div class=\"col-md-12\">Niste izabrali ni jedan film</div>";
	}
	else {
		ids.sort(function(a, b) {return a.id > b.id;});
		for (i = 0; i < ids.length; i++) {
			document.getElementById("prikaz_mojih_filmova").innerHTML+=ids[i].element;
		}
		refreshRezervacije();
	}
}

function sortirajOmiljenePoBrRez()
{
	var ima=false;
	document.getElementById("prikaz_mojih_filmova").innerHTML="";
	var ids = [], obj, i, len;
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			if (arr[0]=="omiljeni")
			{
				var film=arr[1]+"_"+arr[2];
				obj = {};
				obj.element = localStorage.getItem(film);
				obj.id = parseInt(dohvatiBrRezervacija(arr[3]));
				ima=true;
				ids.push(obj);
			}
		}
	if (ima==false)
	{
		document.getElementById("prikaz_mojih_filmova").innerHTML="<div class=\"col-md-12\">Niste izabrali ni jedan film</div>";
	}
	else {
		ids.sort(function(a, b) {return b.id - a.id;});
		for (i = 0; i < ids.length; i++) {
			document.getElementById("prikaz_mojih_filmova").innerHTML+=ids[i].element;
		}
		refreshRezervacije();
	}
}

function dohvatiBrRezervacija(id_filma) {
	
	for (i = 0; i < localStorage.length; i++) {
			key = localStorage.key(i);
			var arr=key.split('_');
			
			if (arr[0] == "brrezervacija" && arr[3] == id_filma)
			{
				return localStorage.getItem(key);
			}
		}
	return 0;
	
}
