var x = 0;
var y = 0;

let lista = []

let ruuat = ["Linssicurry", "Nakkikeitto", "Bolognesekastike", "Lasagnette", "Pyttipannu", "Intialainen pinaattikastike", "Makaronilaatikko", "Chana masala", "Meksikolainen papukastike", "Palsternakkakeitto", "Seitan-chorizopasta", "Wokki"]
ruuat.sort();


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
	document.getElementById("p0").innerHTML ="";

	for(let i = 1; i<ruuat.length; i++) {
		document.getElementById("pic"+i).src ="";
		document.getElementById("p"+i).innerHTML ="";	
	}
}


function home() {
	document.getElementById("food1").innerHTML = "Kasvismenu";
	document.getElementById("food2").innerHTML = "Kasvismenu";
		
	document.getElementById("instructions").innerHTML = "";

	for(let i = 0; i<ruuat.length; i++) {

		document.getElementById("pic"+i).src = ruuat[i] +".jpg";
		document.getElementById("p"+i).innerHTML ="<b>" + ruuat[i] + "</b>";	

	}	
	
	x=0;
	y=0;	
	window.scrollTo(0, 0);	
}


function meal(meal_number) {
	
		//0
		if(meal_number ==0) {

			if(x == 0) {
				mealX();
						
			}
		
			y=1;
			
		}

		//1
		else if (meal_number == 1) {

			mealX();

		}

		//2
		else if (meal_number == 2) {

			mealX();

		}

		//3
		else if (meal_number == 3) {
			document.getElementById("food1").innerHTML = "Wokki";
			document.getElementById("food2").innerHTML = "Wokki";
				
			document.getElementById("instructions").innerHTML = "4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=wokki_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=wokki_tick2 value=3&nbsp;porkkanaa> 3 porkkanaa <br> <input type=checkbox id=wokki_tick3 value=pieni&nbsp;kaali> pieni kaali <br> <input type=checkbox id=wokki_tick4 value=purkki&nbsp;vesikastanjoita> purkki vesikastanjoita <br> <input type=checkbox id=wokki_tick5 value=pussi&nbsp;sokeriherneitä> pussi sokeriherneitä <br> <input type=checkbox id=wokki_tick6 value=puoli&nbsp;pussia&nbsp;pakasteparsakaalia> puoli pussia pakasteparsakaalia <br> <input type=checkbox id=wokki_tick7 value=puoli&nbsp;pussia&nbsp;pakastemaissia> puoli pussia pakastemaissia <br> <input type=checkbox id=wokki_tick8 value=paketti&nbsp;Vegetarian&nbsp;Wok&nbsp;Soya&nbsp;Stripsejä>  paketti Vegetarian Wok Soya Stripsejä <br> <input type=checkbox id=wokki_tick9 value=puoli&nbsp;pussia&nbsp;riisinoodelia>  puoli pussia riisinoodelia <br> <input type=checkbox id=wokki_tick10 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=wokki_tick11 value=1&nbsp;tl&nbsp;inkivääriä> 1 tl inkivääriä <br> <input type=checkbox id=wokki_tick12 value=1/2&nbsp;tl&nbsp;kurkumaa> 1/2 tl kurkumaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keitä pakasteet, pilko kasvikset muut kasvikset. Sekoita ne keskenään. <br> Kaada tilkka öljyä pannulle, sekoita mausteet ja lisää kasvisseos pannulle. Paista ainakin 20 min. <br> <br> Lisää soija stripsit ja paista vielä 5 min. Paista erikseen jos ei mahdu samalle pannulle. <br> <br> Keitä riisinoodelit ohjeen mukaan ja huuhtele kylmällä vedellä. ";
				
			document.getElementById("pic0").src = "Wokki.jpg";

			clear();
	
			x=1;
			y=1;
			
			window.scrollTo(0, 0);


		}

		//4
		else if (meal_number == 4) {

			mealX();
			

		}

		//5
		else if (meal_number == 5) {
			document.getElementById("food1").innerHTML = "Makaronilaatikko";
			document.getElementById("food2").innerHTML = "Makaronilaatikko";
				
			document.getElementById("instructions").innerHTML = 
				
			"4-6 annosta / 90 minuuttia <br> <br> <b> Soijarouheseos </b> <br> <input type=checkbox id=makaronilaatikko_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=makaronilaatikko_tick2 value=2&nbsp;valkosipulinkynttä> 2 valkosipulinkynttä <br> <input type=checkbox id=makaronilaatikko_tick3 value=2&nbsp;dl&nbsp;tummaa&nbsp;soijarouhetta> 2 dl tummaa soijarouhetta <br> <input type=checkbox id=makaronilaatikko_tick4 value=2&nbsp;rkl&nbsp;rypsiöljyä> 2 rkl rypsiöljyä <br> <input type=checkbox id=makaronilaatikko_tick5 value=3&nbsp;dl&nbsp;vettä> 3 dl vettä <br> <input type=checkbox id=makaronilaatikko_tick6 value=1/2&nbsp;dl&nbsp;ravintohiivahiutaleita> 1/2 dl ravintohiivahiutaleita <br> <input type=checkbox id=makaronilaatikko_tick7 value=1&nbsp;rkl&nbsp;savupaprikajauhetta> 1 rkl savupaprikajauhetta <br> <input type=checkbox id=makaronilaatikko_tick8 value=2&nbsp;rkl&nbsp;kasvisliemijauhetta> 2 rkl kasvisliemijauhetta <br> <input type=checkbox id=makaronilaatikko_tick9 value=1&nbsp;tl&nbsp;kuivattua&nbsp;basilikaa> 1 tl kuivattua basilikaa <br> <input type=checkbox id=makaronilaatikko_tick10 value=mustapippuria&nbsp;myllystä> mustapippuria myllystä <br> <br> <b> Muut aineet </b> <br> <input type=checkbox id=makaronilaatikko_tick11 value=400&nbsp;g&nbsp;tummaa&nbsp;makaroonia> 400 g tummaa makaronia <br> <input type=checkbox id=makaronilaatikko_tick12 value=150&nbsp;g&nbsp;juustoraastetta> 150 g juustoraastetta <br> <input type=checkbox id=makaronilaatikko_tick13 value=6&nbsp;dl&nbsp;kiehuvaa&nbsp;kasvislientä> 6 dl kiehuvaa kasvislientä <br> <input type=checkbox id=makaronilaatikko_tick14 value=4&nbsp;dl&nbsp;kaurakermaa> 4 dl kaurakermaa <br> <input type=checkbox id=makaronilaatikko_tick15 value=1&nbsp;rkl&nbsp;rypsiöljyä> 1 rkl rypsiöljyä <br> <input type=checkbox id=makaronilaatikko_tick16 value=1/2&nbsp;tl&nbsp;suolaa> 1/2 tl suolaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuumenna uuni (200°C). <br> <br> Silppua sipuli ja valkosipulinkynnet ja kuulota ne. Mittaa soijarouhe kuivana pannulle ja lisää mausteet. <br> Kaada vettä pannulle desilitra kerrallaan ja paista soijarouhe välissä kuivaksi ennen kuin lisäät vettä. Jatka, kunnes kaikki vesi on käytetty. <br> Kääntele lopuksi ravintohiivahiutaleet soijarouheseoksen joukkoon. <br> <br> Sekoita yhteen soijarouheseos, kuivat makaronit ja 50 g juustoraastetta. <br> Rasvaa uunivuoan pohja ja kaada makaroni-soijarouheseos vuokaan. <br> Sekoita yhteen kasvisliemi ja suola. Kaada vuokaan ensin kiehuva kasvisliemi, sitten kaurakerma ja ripottele pinnalle lopuksi loput juustoraasteesta. <br> <br> Paista makaronilaatikkoa uunin alatasolla noin 50-60 minuuttia. Anna makaronilaatikon vetäytyä hetki. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://chocochili.net/2018/10/vegaaninen-juustomakaronilaatikko/ ";
				
			document.getElementById("pic0").src = "Makaronilaatikko.jpg";
			
			clear();
			
			x=1;
			y=1;
			
			window.scrollTo(0, 0);

		}

		//6
		else if (meal_number == 6) {
			document.getElementById("food1").innerHTML = "Meksikolainen papukastike";
			document.getElementById("food2").innerHTML = "Meksikolainen papukastike";
				
			document.getElementById("instructions").innerHTML = 
				
			"4 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=papu_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=papu_tick2 value=3&nbsp;valkosipulinkynttä> 3 valkosipulinkynttä <br> <input type=checkbox id=papu_tick3 value=2&nbsp;rkl&nbsp;tomaattipyreetä> 2 rkl tomaattipyreetä <br> <input type=checkbox id=papu_tick4 value=1&nbsp;tölkki&nbsp;(400g)&nbsp;tomaattimurskaa> 1 tölkki (400 g) tomaattimurskaa <br> <input type=checkbox id=papu_tick5 value=1/2&nbsp;dl&nbsp;vettä> 1/2 dl vettä <br> <input type=checkbox id=papu_tick6 value=1&nbsp;tölkki&nbsp;(230g)&nbsp;(musta)papuja>  1 tölkki (230 g) papuja (esim. mustapapuja tai kidneypapuja) <br> <input type=checkbox id=papu_tick7 value=100&nbsp;g&nbsp;pakastemaissia> 100 g pakastemaissia <br> <input type=checkbox id=papu_tick8 value=2&nbsp;dl&nbsp;juustoraastetta> 2 dl juustoraastetta <br> <input type=checkbox id=papu_tick9 value=1&nbsp;tl&nbsp;savupaprikajautetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=papu_tick10 value=1&nbsp;tl&nbsp;juustokuminaa> 1 tl juustokuminaa <br> <input type=checkbox id=papu_tick11 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=papu_tick12 value=1&nbsp;rkl&nbsp;oreganoa> 1 rkl oreganoa <br> <input type=checkbox id=papu_tick13 value=3/4&nbsp;tl&nbsp;suolaa> 3/4 tl suolaa <br> <input type=checkbox id=papu_tick14 value=1&nbsp;tl&nbsp;sokeria> 1 tl sokeria <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Pilko sipuli ja valkosipulinkynnet ja kuulota ne. Kääntele joukkoon mausteet ja tomaattipyree. Paista pari minuuttia. <br> <br> Lisää tomaattimurska, vesi, pavut ja maissit. Mausta suolalla ja sokerilla. Anna kastikkeen muhia vartin verran. <br> <br> Kuorruta pinta juustoraasteella. Nosta pannu uuniin grillivastuksen alle noin viideksi minuutiksi, kunnes juusto sulaa. Jos paitinpannusi ei kestä uunia tai et viitsi kuumentaa uunia, laita kansi päälle ja anna kastikkeen muhia, kunnes juusto sulaa. <br> <br> Tarjoa papukastike esimerkiksi nachojen, lohkoperunoiden tai bataattiranskalaisten kera. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://vegeviettelys.blogspot.com/2020/04/meksikolainen-papukastike.html ";
				
			document.getElementById("pic0").src = "Meksikolainen papukastike.jpg";
			
			clear();
			
			x=1;
			y=1;
			
			window.scrollTo(0, 0);


		}

		//7
		else if (meal_number == 7) {

			document.getElementById("food1").innerHTML = "Nakkikeitto";
			document.getElementById("food2").innerHTML = "Nakkikeitto";
				
			document.getElementById("instructions").innerHTML = 
				
			"8 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=Nakkikeitto_tick0 value=1,5&nbsp;kg&nbsp;perunoita> 1,5 kg perunoita <br> <input type=checkbox id=Nakkikeitto_tick1 value=3&nbsp;porkkanaa> 3 porkkanaa <br> <input type=checkbox id=Nakkikeitto_tick2 value=1&nbsp;purjo> 1 purjo <br> <input type=checkbox id=Nakkikeitto_tick3 value=1&nbsp;parsakaali> 1 parsakaali <br> <input type=checkbox id=Nakkikeitto_tick4 value=lehtikaalia> lehtikaalia <br> <input type=checkbox id=Nakkikeitto_tick5 value=2&nbsp;l&nbsp;vettä> 2 l vettä <br> <input type=checkbox id=Nakkikeitto_tick6 value=4&nbsp;kasvisliemikuutiota> 4 kasvisliemikuutiota <br> <input type=checkbox id=Nakkikeitto_tick7 value=16&nbsp;kokonaista&nbsp;maustepippuria> 16 kokonaista maustepippuria <br> <input type=checkbox id=Nakkikeitto_tick8 value=16&nbsp;kokonaista&nbsp;mustapippuria> 16 kokonaista mustapippuria <br> <input type=checkbox id=Nakkikeitto_tick9 value=4&nbsp;laakerinlehteä> 4 laakerinlehteä <br> <input type=checkbox id=Nakkikeitto_tick10 value=2&nbsp;pkt&nbsp;/&nbsp;200&nbsp;g&nbsp;Muu&nbsp;Nakkeja> 2 pkt / 200 g Muu Nakkeja <br> <input type=checkbox id=Nakkikeitto_tick11 value=4&nbsp;tl&nbsp;öljyä> 4 tl öljyä <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuori vihannekset ja pilko ne suupaloiksi. Mittaa vesi kattilaan ja kuumenna kiehuvaksi. <br> Lisää vihannekset, kasvisliemikuutiot ja mausteet. Keitä, kunnes perunat ovat pehmeitä. <br>  <br> Sillä välin kun kasvikset kiehuu, suikaloi purjo ja paloittele nakit. Kuumenna paistinpannu ja lisää sille tilkka öljyä. <br> Lisää nakit ja purjo ja paista keskilämmöllä, kunnes nakeissa on kaunis ruskea pinta. <br> <br> Lisää lopuksi paistetut nakit kattilaan. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://chocochili.net/2021/09/2x-vegaaninen-nakkikeitto/";
				
			document.getElementById("pic0").src = "Nakkikeitto.jpg";
			
			clear();
			
			x=1;
			y=1;
			
			window.scrollTo(0, 0);

		}

		//8
		else if (meal_number == 8) {

			mealX();

		}

		//9
		else if (meal_number == 9) {

			mealX();

		}

		//10
		else if (meal_number == 10) {

			document.getElementById("food1").innerHTML = "Seitan-chorizopasta";
			document.getElementById("food2").innerHTML = "Seitan-chorizopasta";
				
			document.getElementById("instructions").innerHTML = 
				
			"4 annosta / 45 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=seitan_pasta_tick1 value=250&nbsp;g&nbsp;(täysjyvä)spagettia> 250 g (täysjyvä) spagettia <br> <input type=checkbox id=seitan_pasta_tick2 value=2&nbsp;suippopaprikaa> 2 suippopaprikaa (n. 200g) <br> <input type=checkbox id=seitan_pasta_tick3 value=2&nbsp;salottisipulia> 2 salottisipulia <br> <input type=checkbox id=seitan_pasta_tick4 value=300&nbsp;g&nbsp;seitan-chorizoa&nbsp;(Vegem)> 300 g seitan chorizoa (Vegem) <br> <input type=checkbox id=seitan_pasta_tick5 value=2&nbsp;dl&nbsp;kaurakermaa> 2 dl kaurakermaa <br> <input type=checkbox id=seitan_pasta_tick6 value=3&nbsp;rkl&nbsp;tomaattipyrettä> 3 rkl tomaattipyrettä <br> <input type=checkbox id=seitan_pasta_tick7 value=1&nbsp;kourallinen&nbsp;tilliä> 1 kourallinen tilliä <br> <input type=checkbox id=seitan_pasta_tick8 value=1&nbsp;tl&nbsp;savupaprikajauhetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=seitan_pasta_tick9 value=1/2&nbsp;tl&nbsp;mustapippuria> ½ tl mustapippuria <br> <input type=checkbox id=seitan_pasta_tick10 value=1/2&nbsp;tl&nbsp;suolaa> ½ tl suolaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keitä spagetti pakkauksen ohjeen mukaan. <br> <br> Pilko paprika ja sipuli ja paista pannulla. Lisää sekaan pilkottu chorizo ja paista siihen pinta. Lisää pannulle myös silputtu tilli. <br> <br> Lisää kypsä spagetti kasvisten ja chorizon kanssa pannulle ja kaada myös hieman keitinvettä (n 1 dl). Lisää pannulle loput aineksisti ja sekoita hyvin. Anna hautua miedolla lämmöllä kunnes neste imeytyy. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://ruoka-alkemisti.blogspot.com/2018/09/seitan-chorizopasta.html";
				
			document.getElementById("pic0").src = "Seitan-chorizopasta.jpg";
			
			clear();
			
			x=1;
			y=1;
			
			window.scrollTo(0, 0);
		


		}

		//11
		else if (meal_number == 11) {
			
			mealX();

		}

		//12
		else if (meal_number == 12) {

			mealX();

		}
	
	
}



function mealX() {
	document.getElementById("food1").innerHTML = "Coming soon..";
	document.getElementById("food2").innerHTML = "Coming soon..";
	
	document.getElementById("instructions").innerHTML = "Please hold your horses.."; 
		
		
	document.getElementById("pic0").src = "";
	
	clear();
	
	x=1;
	y=1;
	
	window.scrollTo(0, 0);
}



function randomMeal() {
    
	var random = Math.floor(Math.random() * 5);
	
	if(random == 0) {
		meal(3);
		
	}
	else if (random == 1) {
		meal(5);
	}
	
	else if (random == 2) {
		meal(6);
	}

	else if (random == 3) {
		meal(7);
	}

	else if (random == 3) {
		meal(10);
	}
	
	y=1;
	
	window.scrollTo(0, 0);
}


function lisaaListaan() {

	//Wokki
	if(document.getElementById('wokki_tick1') !== null) {
		if(document.getElementById("wokki_tick1").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick1").value);
		}
	}
	
	if(document.getElementById('wokki_tick2') !== null) {
		if(document.getElementById("wokki_tick2").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick2").value);
		}
	}	
	if(document.getElementById('wokki_tick3') !== null) {
		if(document.getElementById("wokki_tick3").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick3").value);
		}
	}

	if(document.getElementById('wokki_tick4') !== null) {
		if(document.getElementById("wokki_tick4").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick4").value);
		}
	}

	if(document.getElementById('wokki_tick5') !== null) {
		if(document.getElementById("wokki_tick5").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick5").value);
		}
	}

	if(document.getElementById('wokki_tick6') !== null) {
		if(document.getElementById("wokki_tick6").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick6").value);
		}
	}

	if(document.getElementById('wokki_tick7') !== null) {
		if(document.getElementById("wokki_tick7").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick7").value);
		}
	}

	if(document.getElementById('wokki_tick8') !== null) {
		if(document.getElementById("wokki_tick8").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick8").value);
		}
	}

	if(document.getElementById('wokki_tick9') !== null) {
		if(document.getElementById("wokki_tick9").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick9").value);
		}
	}

	if(document.getElementById('wokki_tick10') !== null) {
		if(document.getElementById("wokki_tick10").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick10").value);
		}
	}

	if(document.getElementById('wokki_tick11') !== null) {
		if(document.getElementById("wokki_tick11").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
			}
			lista.push(document.getElementById("wokki_tick11").value);
		}
	}

	if(document.getElementById('wokki_tick12') !== null) {
		if(document.getElementById("wokki_tick12").checked == true) {
			if (!lista.includes("Wokki")) {
				lista.push("");
				lista.push("Wokki");
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
	
	//Makaronilaatikko
	if(document.getElementById('makaronilaatikko_tick1') !== null) {
		if(document.getElementById("makaronilaatikko_tick1").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick1").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick2') !== null) {
		if(document.getElementById("makaronilaatikko_tick2").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick2").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick3') !== null) {
		if(document.getElementById("makaronilaatikko_tick3").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick3").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick4') !== null) {
		if(document.getElementById("makaronilaatikko_tick4").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick4").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick5') !== null) {
		if(document.getElementById("makaronilaatikko_tick5").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick5").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick6') !== null) {
		if(document.getElementById("makaronilaatikko_tick6").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick6").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick7') !== null) {
		if(document.getElementById("makaronilaatikko_tick7").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick7").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick8') !== null) {
		if(document.getElementById("makaronilaatikko_tick8").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick8").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick9') !== null) {
		if(document.getElementById("makaronilaatikko_tick9").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick9").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick10') !== null) {
		if(document.getElementById("makaronilaatikko_tick10").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick10").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick11') !== null) {
		if(document.getElementById("makaronilaatikko_tick11").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick11").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick12') !== null) {
		if(document.getElementById("makaronilaatikko_tick12").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick12").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick13') !== null) {
		if(document.getElementById("makaronilaatikko_tick13").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick13").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick14') !== null) {
		if(document.getElementById("makaronilaatikko_tick14").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick14").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick15') !== null) {
		if(document.getElementById("makaronilaatikko_tick15").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick15").value);
		}
	}

	if(document.getElementById('makaronilaatikko_tick16') !== null) {
		if(document.getElementById("makaronilaatikko_tick16").checked == true) {
			if (!lista.includes("Makaronilaatikko")) {
				lista.push("");
				lista.push("Makaronilaatikko");
			}
			lista.push(document.getElementById("makaronilaatikko_tick16").value);
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
	
	document.getElementById("pic0").src = "";
	clear();
	
	window.scrollTo(0, 0);

}