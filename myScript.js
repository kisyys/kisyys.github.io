var x = 0;
var y = 0;

function bigImg(x) {
	if(y==0) {
		x.style.height = "100%";
		x.style.width = "100%";
	}
	
  
}

function normalImg(x) {
  x.style.height = "90%";
  x.style.width = "90%";
}

function clear() {
	document.getElementById("p1").innerHTML ="";		
	document.getElementById("pic2").src = "";
	document.getElementById("p2").innerHTML ="";
	document.getElementById("pic3").src = "";
	document.getElementById("p3").innerHTML ="";
	document.getElementById("pic4").src = "";
	document.getElementById("p4").innerHTML ="";
	document.getElementById("pic5").src = "";
	document.getElementById("p5").innerHTML ="";
	document.getElementById("pic6").src = "";
	document.getElementById("p6").innerHTML ="";
	document.getElementById("pic7").src = "";
	document.getElementById("p7").innerHTML ="";
	document.getElementById("pic8").src = "";
	document.getElementById("p8").innerHTML ="";
	document.getElementById("pic9").src = "";
	document.getElementById("p9").innerHTML ="";

}

function home() {
	document.getElementById("food1").innerHTML = "Menu";
	document.getElementById("food2").innerHTML = "Menu";
		
	document.getElementById("instructions").innerHTML = "";
		
	document.getElementById("pic1").src = "wokki.jpg";
	document.getElementById("p1").innerHTML ="<b>Kasviswokki</b>";	
	document.getElementById("pic2").src = "pasta2.jpg";
	document.getElementById("p2").innerHTML ="<b>Lihaton juustomakaronilaatikko</b>";
	document.getElementById("pic3").src = "masala.jpg";
	document.getElementById("p3").innerHTML ="<b>Masala</b>";
	document.getElementById("pic4").src = "beans.jpg";
	document.getElementById("p4").innerHTML ="<b>Meksikolainen papukastike</b>";
	document.getElementById("pic5").src = "palsternakkakeitto.jpg";
	document.getElementById("p5").innerHTML ="<b>Palsternakkakeitto</b>";
	document.getElementById("pic6").src = "pinaatti.jpg";
	document.getElementById("p6").innerHTML ="<b>Pinaatti</b>";
	document.getElementById("pic7").src = "pyttipannu.jpg";
	document.getElementById("p7").innerHTML ="<b>Pyttipannu</b>";
	document.getElementById("pic8").src = "seitan_pasta.jpg";
	document.getElementById("p8").innerHTML ="<b>Seitan-chorizopasta</b>";
	document.getElementById("pic9").src = "lasagne.jpg";
	document.getElementById("p9").innerHTML ="<b>Lasagne</b>";
	
	x=0;
	y=0;
	
	window.scrollTo(0, 0);
	
}

function meal1() {
			
	if(x == 0) {
		document.getElementById("food1").innerHTML = "Kasviswokki";
		document.getElementById("food2").innerHTML = "Kasviswokki";
			
		document.getElementById("instructions").innerHTML = "4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=wokki_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=wokki_tick2 value=3&nbsp;porkkanaa> 3 porkkanaa <br> <input type=checkbox id=wokki_tick3 value=pieni&nbsp;kaali> pieni kaali <br> <input type=checkbox id=wokki_tick4 value=purkki&nbsp;vesikastanjoita> purkki vesikastanjoita <br> <input type=checkbox id=wokki_tick5 value=pussi&nbsp;sokeriherneitä> pussi sokeriherneitä <br> <input type=checkbox id=wokki_tick6 value=puoli&nbsp;pussia&nbsp;pakasteparsakaalia> puoli pussia pakasteparsakaalia <br> <input type=checkbox id=wokki_tick7 value=puoli&nbsp;pussia&nbsp;pakastemaissia> puoli pussia pakastemaissia <br> <input type=checkbox id=wokki_tick8 value=paketti&nbsp;Vegetarian&nbsp;Wok&nbsp;Soya&nbsp;Stripsejä>  paketti Vegetarian Wok Soya Stripsejä <br> <input type=checkbox id=wokki_tick9 value=puoli&nbsp;pussia&nbsp;riisinoodelia>  puoli pussia riisinoodelia <br> <input type=checkbox id=wokki_tick10 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=wokki_tick11 value=1&nbsp;tl&nbsp;inkivääriä> 1 tl inkivääriä <br> <input type=checkbox id=wokki_tick12 value=1/2&nbsp;tl&nbsp;kurkumaa> 1/2 tl kurkumaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keitä pakasteet, pilko kasvikset muut kasvikset. Sekoita ne keskenään. <br> Kaada tilkka öljyä pannulle, sekoita mausteet ja lisää kasvisseos pannulle. Paista ainakin 20 min. <br> <br> Lisää soija stripsit ja paista vielä 5 min. Paista erikseen jos ei mahdu samalle pannulle. <br> <br> Keitä riisinoodelit ohjeen mukaan ja huuhtele kylmällä vedellä. ";
			
		document.getElementById("pic1").src = "wokki.jpg";
		
		clear();
		
		window.scrollTo(0, 0);
		
	}
	
	y=1;
	
}

function meal2() {
	document.getElementById("food1").innerHTML = "Meksikolainen papukastike";
	document.getElementById("food2").innerHTML = "Meksikolainen papukastike";
		
	document.getElementById("instructions").innerHTML = 
		
	"4 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=papu_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=papu_tick2 value=3&nbsp;valkosipulinkynttä> 3 valkosipulinkynttä <br> <input type=checkbox id=papu_tick3 value=2&nbsp;rkl&nbsp;tomaattipyreetä> 2 rkl tomaattipyreetä <br> <input type=checkbox id=papu_tick4 value=1&nbsp;tölkki&nbsp;(400g)&nbsp;tomaattimurskaa> 1 tölkki (400 g) tomaattimurskaa <br> <input type=checkbox id=papu_tick5 value=1/2&nbsp;dl&nbsp;vettä> 1/2 dl vettä <br> <input type=checkbox id=papu_tick6 value=1&nbsp;tölkki&nbsp;(230g)&nbsp;(musta)papuja>  1 tölkki (230 g) papuja (esim. mustapapuja tai kidneypapuja) <br> <input type=checkbox id=papu_tick7 value=100&nbsp;g&nbsp;pakastemaissia> 100 g pakastemaissia <br> <input type=checkbox id=papu_tick8 value=2&nbsp;dl&nbsp;juustoraastetta> 2 dl juustoraastetta <br> <input type=checkbox id=papu_tick9 value=1&nbsp;tl&nbsp;savupaprikajautetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=papu_tick10 value=1&nbsp;tl&nbsp;juustokuminaa> 1 tl juustokuminaa <br> <input type=checkbox id=papu_tick11 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=papu_tick12 value=1&nbsp;rkl&nbsp;oreganoa> 1 rkl oreganoa <br> <input type=checkbox id=papu_tick13 value=3/4&nbsp;tl&nbsp;suolaa> 3/4 tl suolaa <br> <input type=checkbox id=papu_tick14 value=1&nbsp;tl&nbsp;sokeria> 1 tl sokeria <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Pilko sipuli ja valkosipulinkynnet ja kuulota ne. Kääntele joukkoon mausteet ja tomaattipyree. Paista pari minuuttia. <br> <br> Lisää tomaattimurska, vesi, pavut ja maissit. Mausta suolalla ja sokerilla. Anna kastikkeen muhia vartin verran. <br> <br> Kuorruta pinta juustoraasteella. Nosta pannu uuniin grillivastuksen alle noin viideksi minuutiksi, kunnes juusto sulaa. Jos paitinpannusi ei kestä uunia tai et viitsi kuumentaa uunia, laita kansi päälle ja anna kastikkeen muhia, kunnes juusto sulaa. <br> <br> Tarjoa papukastike esimerkiksi nachojen, lohkoperunoiden tai bataattiranskalaisten kera. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://vegeviettelys.blogspot.com/2020/04/meksikolainen-papukastike.html ";
		
	document.getElementById("pic1").src = "beans.jpg";
	
	clear();
	
	x=1;
	y=1;
	
	window.scrollTo(0, 0);
}


function meal3() {
	document.getElementById("food1").innerHTML = "Seitan-chorizopasta";
	document.getElementById("food2").innerHTML = "Seitan-chorizopasta";
		
	document.getElementById("instructions").innerHTML = 
		
	"4 annosta / 45 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=seitan_pasta_tick1 value=250&nbsp;g&nbsp;(täysjyvä)spagettia> 250 g (täysjyvä) spagettia <br> <input type=checkbox id=seitan_pasta_tick2 value=2&nbsp;suippopaprikaa> 2 suippopaprikaa (n. 200g) <br> <input type=checkbox id=seitan_pasta_tick3 value=2&nbsp;salottisipulia> 2 salottisipulia <br> <input type=checkbox id=seitan_pasta_tick4 value=300&nbsp;g&nbsp;seitan-chorizoa&nbsp;(Vegem)> 300 g seitan chorizoa (Vegem) <br> <input type=checkbox id=seitan_pasta_tick5 value=2&nbsp;dl&nbsp;kaurakermaa> 2 dl kaurakermaa <br> <input type=checkbox id=seitan_pasta_tick6 value=3&nbsp;rkl&nbsp;tomaattipyrettä> 3 rkl tomaattipyrettä <br> <input type=checkbox id=seitan_pasta_tick7 value=1&nbsp;kourallinen&nbsp;tilliä> 1 kourallinen tilliä <br> <input type=checkbox id=seitan_pasta_tick8 value=1&nbsp;tl&nbsp;savupaprikajauhetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=seitan_pasta_tick9 value=1/2&nbsp;tl&nbsp;mustapippuria> ½ tl mustapippuria <br> <input type=checkbox id=seitan_pasta_tick10 value=1/2&nbsp;tl&nbsp;suolaa> ½ tl suolaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keitä spagetti pakkauksen ohjeen mukaan. <br> <br> Pilko paprika ja sipuli ja paista pannulla. Lisää sekaan pilkottu chorizo ja paista siihen pinta. Lisää pannulle myös silputtu tilli. <br> <br> Lisää kypsä spagetti kasvisten ja chorizon kanssa pannulle ja kaada myös hieman keitinvettä (n 1 dl). Lisää pannulle loput aineksisti ja sekoita hyvin. Anna hautua miedolla lämmöllä kunnes neste imeytyy. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://ruoka-alkemisti.blogspot.com/2018/09/seitan-chorizopasta.html";
		
	document.getElementById("pic1").src = "seitan_pasta.jpg";
	
	clear();
	
	x=1;
	y=1;
	
	window.scrollTo(0, 0);
}


function meal4() {
	document.getElementById("food1").innerHTML = "Lihaton juustomakaronilaatikko";
	document.getElementById("food2").innerHTML = "Lihaton juustomakaronilaatikko";
		
	document.getElementById("instructions").innerHTML = 
		
	"4-6 annosta / 90 minuuttia <br> <br> <b> Soijarouheseos </b> <br> <input type=checkbox id=veke_makaroonilaatikko_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=veke_makaroonilaatikko_tick2 value=2&nbsp;valkosipulinkynttä> 2 valkosipulinkynttä <br> <input type=checkbox id=veke_makaroonilaatikko_tick3 value=2&nbsp;dl&nbsp;tummaa&nbsp;soijarouhetta> 2 dl tummaa soijarouhetta <br> <input type=checkbox id=veke_makaroonilaatikko_tick4 value=2&nbsp;rkl&nbsp;rypsiöljyä> 2 rkl rypsiöljyä <br> <input type=checkbox id=veke_makaroonilaatikko_tick5 value=3&nbsp;dl&nbsp;vettä> 3 dl vettä <br> <input type=checkbox id=veke_makaroonilaatikko_tick6 value=1/2&nbsp;dl&nbsp;ravintohiivahiutaleita> 1/2 dl ravintohiivahiutaleita <br> <input type=checkbox id=veke_makaroonilaatikko_tick7 value=1&nbsp;rkl&nbsp;savupaprikajauhetta> 1 rkl savupaprikajauhetta <br> <input type=checkbox id=veke_makaroonilaatikko_tick8 value=2&nbsp;rkl&nbsp;kasvisliemijauhetta> 2 rkl kasvisliemijauhetta <br> <input type=checkbox id=veke_makaroonilaatikko_tick9 value=1&nbsp;tl&nbsp;kuivattua&nbsp;basilikaa> 1 tl kuivattua basilikaa <br> <input type=checkbox id=veke_makaroonilaatikko_tick10 value=mustapippuria&nbsp;myllystä> mustapippuria myllystä <br> <br> <b> Muut aineet </b> <br> <input type=checkbox id=veke_makaroonilaatikko_tick11 value=400&nbsp;g&nbsp;tummaa&nbsp;makaroonia> 400 g tummaa makaronia <br> <input type=checkbox id=veke_makaroonilaatikko_tick12 value=150&nbsp;g&nbsp;juustoraastetta> 150 g juustoraastetta <br> <input type=checkbox id=veke_makaroonilaatikko_tick13 value=6&nbsp;dl&nbsp;kiehuvaa&nbsp;kasvislientä> 6 dl kiehuvaa kasvislientä <br> <input type=checkbox id=veke_makaroonilaatikko_tick14 value=4&nbsp;dl&nbsp;kaurakermaa> 4 dl kaurakermaa <br> <input type=checkbox id=veke_makaroonilaatikko_tick15 value=1&nbsp;rkl&nbsp;rypsiöljyä> 1 rkl rypsiöljyä <br> <input type=checkbox id=veke_makaroonilaatikko_tick16 value=1/2&nbsp;tl&nbsp;suolaa> 1/2 tl suolaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuumenna uuni (200°C). <br> <br> Silppua sipuli ja valkosipulinkynnet ja kuulota ne. Mittaa soijarouhe kuivana pannulle ja lisää mausteet. <br> Kaada vettä pannulle desilitra kerrallaan ja paista soijarouhe välissä kuivaksi ennen kuin lisäät vettä. Jatka, kunnes kaikki vesi on käytetty. <br> Kääntele lopuksi ravintohiivahiutaleet soijarouheseoksen joukkoon. <br> <br> Sekoita yhteen soijarouheseos, kuivat makaronit ja 50 g juustoraastetta. <br> Rasvaa uunivuoan pohja ja kaada makaroni-soijarouheseos vuokaan. <br> Sekoita yhteen kasvisliemi ja suola. Kaada vuokaan ensin kiehuva kasvisliemi, sitten kaurakerma ja ripottele pinnalle lopuksi loput juustoraasteesta. <br> <br> Paista makaronilaatikkoa uunin alatasolla noin 50-60 minuuttia. Anna makaronilaatikon vetäytyä hetki. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://chocochili.net/2018/10/vegaaninen-juustomakaronilaatikko/ ";
		
	document.getElementById("pic1").src = "pasta2.jpg";
	
	clear();
	
	x=1;
	y=1;
	
	window.scrollTo(0, 0);
}

function mealX() {
	document.getElementById("food1").innerHTML = "Coming soon..";
	document.getElementById("food2").innerHTML = "Coming soon..";
	
	document.getElementById("instructions").innerHTML = "Please hold your hourses.."; 
		
		
	document.getElementById("pic1").src = "";
	
	clear();
	
	x=1;
	y=1;
	
	window.scrollTo(0, 0);
}



function randomMeal() {
    
	var random = Math.floor(Math.random() * 4);
	
	if(random == 0) {
		meal1();
		
	}
	else if (random == 1) {
		meal2();
	}
	
	else if (random == 2) {
		meal3();
	}

	else if (random == 3) {
		meal4();
	}
	
	y=1;
	
	window.scrollTo(0, 0);
}

let lista = []
function lisaaListaan() {

	//Kasviswokki
	if(document.getElementById('wokki_tick1') !== null) {
		if(document.getElementById("wokki_tick1").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick1").value);
		}
	}
	
	if(document.getElementById('wokki_tick2') !== null) {
		if(document.getElementById("wokki_tick2").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick2").value);
		}
	}	
	if(document.getElementById('wokki_tick3') !== null) {
		if(document.getElementById("wokki_tick3").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick3").value);
		}
	}

	if(document.getElementById('wokki_tick4') !== null) {
		if(document.getElementById("wokki_tick4").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick4").value);
		}
	}

	if(document.getElementById('wokki_tick5') !== null) {
		if(document.getElementById("wokki_tick5").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick5").value);
		}
	}

	if(document.getElementById('wokki_tick6') !== null) {
		if(document.getElementById("wokki_tick6").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick6").value);
		}
	}

	if(document.getElementById('wokki_tick7') !== null) {
		if(document.getElementById("wokki_tick7").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick7").value);
		}
	}

	if(document.getElementById('wokki_tick8') !== null) {
		if(document.getElementById("wokki_tick8").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick8").value);
		}
	}

	if(document.getElementById('wokki_tick9') !== null) {
		if(document.getElementById("wokki_tick9").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick9").value);
		}
	}

	if(document.getElementById('wokki_tick10') !== null) {
		if(document.getElementById("wokki_tick10").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick10").value);
		}
	}

	if(document.getElementById('wokki_tick11') !== null) {
		if(document.getElementById("wokki_tick11").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick11").value);
		}
	}

	if(document.getElementById('wokki_tick12') !== null) {
		if(document.getElementById("wokki_tick12").checked == true) {
			if (!lista.includes("Kasviswokki")) {
				lista.push("");
				lista.push("Kasviswokki");
			}
			lista.push(document.getElementById("wokki_tick12").value);
		}
	}

	//Meksikolainen papukastike
	if(document.getElementById('papu_tick1') !== null) {
		if(document.getElementById("papu_tick1").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick1").value);
		}
	}
	if(document.getElementById('papu_tick2') !== null) {
		if(document.getElementById("papu_tick2").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick2").value);
		}
	}

	if(document.getElementById('papu_tick3') !== null) {
		if(document.getElementById("papu_tick3").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick3").value);
		}
	}

	if(document.getElementById('papu_tick4') !== null) {
		if(document.getElementById("papu_tick4").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick4").value);
		}
	}

	if(document.getElementById('papu_tick5') !== null) {
		if(document.getElementById("papu_tick5").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick5").value);
		}
	}

	if(document.getElementById('papu_tick6') !== null) {
		if(document.getElementById("papu_tick6").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick6").value);
		}
	}

	if(document.getElementById('papu_tick7') !== null) {
		if(document.getElementById("papu_tick7").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick7").value);
		}
	}

	if(document.getElementById('papu_tick8') !== null) {
		if(document.getElementById("papu_tick8").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick8").value);
		}
	}

	if(document.getElementById('papu_tick9') !== null) {
		if(document.getElementById("papu_tick9").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick9").value);
		}
	}

	if(document.getElementById('papu_tick10') !== null) {
		if(document.getElementById("papu_tick10").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick10").value);
		}
	}

	if(document.getElementById('papu_tick11') !== null) {
		if(document.getElementById("papu_tick11").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick11").value);
		}
	}

	if(document.getElementById('papu_tick12') !== null) {
		if(document.getElementById("papu_tick12").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick12").value);
		}
	}

	if(document.getElementById('papu_tick13') !== null) {
		if(document.getElementById("papu_tick13").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick13").value);
		}
	}

	if(document.getElementById('papu_tick14') !== null) {
		if(document.getElementById("papu_tick14").checked == true) {
			if (!lista.includes("Meksikolainen papukastike")) {
				lista.push("");
				lista.push("Meksikolainen papukastike");
			}
			lista.push(document.getElementById("papu_tick14").value);
		}
	}

	//Seitan-chorizopasta
	if(document.getElementById('seitan_pasta_tick1') !== null) {
		if(document.getElementById("seitan_pasta_tick1").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick1").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick2') !== null) {
		if(document.getElementById("seitan_pasta_tick2").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick2").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick3') !== null) {
		if(document.getElementById("seitan_pasta_tick3").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick3").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick4') !== null) {
		if(document.getElementById("seitan_pasta_tick4").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick4").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick5') !== null) {
		if(document.getElementById("seitan_pasta_tick5").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick5").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick6') !== null) {
		if(document.getElementById("seitan_pasta_tick6").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick6").value);
		}
	}
	
	if(document.getElementById('seitan_pasta_tick7') !== null) {
		if(document.getElementById("seitan_pasta_tick7").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick7").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick8') !== null) {
		if(document.getElementById("seitan_pasta_tick8").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick8").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick9') !== null) {
		if(document.getElementById("seitan_pasta_tick9").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick9").value);
		}
	}

	if(document.getElementById('seitan_pasta_tick10') !== null) {
		if(document.getElementById("seitan_pasta_tick10").checked == true) {
			if (!lista.includes("Seitan-chorizopasta")) {
				lista.push("");
				lista.push("Seitan-chorizopasta");
			}
			lista.push(document.getElementById("seitan_pasta_tick10").value);
		}
	}
	
	//Lihaton juustomakaronilaatikko
	if(document.getElementById('veke_makaroonilaatikko_tick1') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick1").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick1").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick2') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick2").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick2").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick3') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick3").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick3").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick4') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick4").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick4").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick5') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick5").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick5").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick6') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick6").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick6").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick7') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick7").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick7").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick8') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick8").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick8").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick9') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick9").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick9").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick10') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick10").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick10").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick11') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick11").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick11").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick12') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick12").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick12").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick13') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick13").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick13").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick14') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick14").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick14").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick15') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick15").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick15").value);
		}
	}

	if(document.getElementById('veke_makaroonilaatikko_tick16') !== null) {
		if(document.getElementById("veke_makaroonilaatikko_tick16").checked == true) {
			if (!lista.includes("Lihaton juustomakaronilaatikko")) {
				lista.push("");
				lista.push("Lihaton juustomakaronilaatikko");
			}
			lista.push(document.getElementById("veke_makaroonilaatikko_tick16").value);
		}
	}


	console.log(lista.toString());
}

function tulostaLista() {
	if(lista[0]=="") {
		lista.shift(); 
	}

	document.getElementById("food1").innerHTML = "Ostoslista";
	document.getElementById("food2").innerHTML = "Ostoslista";
		
	document.getElementById("instructions").innerHTML = lista.join('<br/>') ;

	//document.getElementById("pic1").src = "shopping.jpg";
	
	document.getElementById("pic1").src = "";
	clear();
	
	window.scrollTo(0, 0);

}