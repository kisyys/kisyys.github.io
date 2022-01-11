
function myFunction() {
    
	var random = Math.floor(Math.random() * 4);
	
	console.log(random);
	
	if(random == 0) {
		document.getElementById("food").innerHTML = "Kasviswokki";
		
		document.getElementById("instructions").innerHTML = "4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br> 1 sipuli <br> 3 porkkanaa <br> pieni kaali <br> purkki vesikastanjoita <br> pussi sokeriherneitä <br> puoli pussia pakasteparsakaalia <br> puoli pussia pakastemaissia <br> paketti Vegetarian Wok Soya Stripsejä <br> puoli pussia riisinoodelia <br> <br> <b> Mausteet </b> <br> 1 tl korianteria <br> 1 tl inkivääriä <br> 1 rkl soijaa <br> Muuta??? <br> <br> <b> Valmistusohje </b> <br> Keitä pakasteet, pilko kasvikset muut kasvikset. Sekoita ne keskenään. <br> Kaada tilkka öljyä pannulle, sekoita mausteet ja lisää kasvisseos pannulle. Paista ainakin 20 min. <br> <br> Lisää soija stripsit ja paista vielä 5 min. Paista erikseen jos ei mahdu samalle pannulle. <br> <br> Keitä riisinoodelit ohjeen mukaan ja huuhtele kylmällä vedellä. ";
		
		document.getElementById("pic1").src = "wokki.jpg";
	}
	else if (random == 1) {
		document.getElementById("food").innerHTML = "Meksikolainen papukastike";
		
		document.getElementById("instructions").innerHTML = 
		
		"4 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> 1 sipuli <br> 3 valkosipulinkynttä <br> 2 rkl tomaattipyreetä <br> 1-2 rkl sriracha-chilikastiketta <br> 1 tl savupaprikajauhetta <br> 1 tl juustokuminaa <br> 1 tl jauhettua korianteria <br> 1 rkl oreganoa <br> 1 tlk (400 g) tomaattimurskaa <br> 1/2 dl vettä <br> 1 tlk (230 g) papuja (esim. mustapapuja tai kidneypapuja) <br> 100 g maissia (pakaste) <br> 3/4 tl suolaa <br> 1 tl sokeria <br> 2 dl juustoraastetta <br> <br> <b> Valmistusohje </b> <br> Pilko sipuli ja valkosipulinkynnet ja kuulota ne. Kääntele joukkoon mausteet ja tomaattipyree. Paista pari minuuttia. <br> <br> Lisää tomaattimurska, vesi, pavut ja maissit. Mausta suolalla ja sokerilla. Anna kastikkeen muhia vartin verran. <br> <br> Kuorruta pinta juustoraasteella. Nosta pannu uuniin grillivastuksen alle noin viideksi minuutiksi, kunnes juusto sulaa. Jos paitinpannusi ei kestä uunia tai et viitsi kuumentaa uunia, laita kansi päälle ja anna kastikkeen muhia, kunnes juusto sulaa. <br> <br> Tarjoa papukastike esimerkiksi nachojen, lohkoperunoiden tai bataattiranskalaisten kera. ";
		
		document.getElementById("pic1").src = "beans.jpg";
	}
	
	else if (random == 2) {
		document.getElementById("food").innerHTML = "Seitan-chorizopasta";
		
		document.getElementById("instructions").innerHTML = 
		
		"4 annosta / 30 minuuttia <br> <br> <b> Aineet </b> <br> 250 g (täysjyvä) spagettia <br> 2 suippopaprikaa (n. 200g) <br> 2 salottisipulia <br> 300 g seitan chorizoa (Vegem) <br> 1 kourallinen tuoretta tilliä <br> 2 dl kaurakermaa <br> 3 rkl tomaattipyrettä <br> 1 tl savupaprikajauhetta <br> ½ tl mustapippuria <br> ½ tl suolaa <br> <br> <b> Valmistusohje </b> <br> Keitä spagetti pakkauksen ohjeen mukaan. <br> <br> Pilko paprika ja sipuli ja paista pannulla. Lisää sekaan pilkottu chorizo ja paista siihen pinta. Lisää pannulle myös silputtu tilli. <br> <br> Lisää kypsä spagetti kasvisten ja chorizon kanssa pannulle ja kaada myös hieman keitinvettä (n 1 dl). Lisää pannulle loput aineksisti ja sekoita hyvin. Anna hautua miedolla lämmöllä kunnes neste imeytyy.";
		
		document.getElementById("pic1").src = "pasta.jpg";
	}

	else if (random == 3) {
		document.getElementById("food").innerHTML = "Vegaaninen juustomakaronilaatikko";
		
		document.getElementById("instructions").innerHTML = 
		
		"4-6 annosta / 90 minuuttia <br> <br> <b> Soijarouheseos </b> <br> 1 sipuli <br> 2 valkosipulinkynttä <br> 2 dl tummaa soijarouhetta <br> 2 rkl Becel Original juoksevaa kasviöljyvalmistetta <br> 1 rkl savupaprikajauhetta <br> 2 rkl kasvisliemijauhetta <br> 1 tl kuivattua basilikaa <br> mustapippuria myllystä <br> 3 dl vettä <br> 1/2 dl ravintohiivahiutaleita <br> <br> <b> Muut aineet </b> <br> 400 g tummaa makaronia <br> 150 g vegaanista sulavaa juustoraastetta (esim. Porlammin Vege Plus) <br> 6 dl kiehuvaa kasvislientä <br> 1/2 tl suolaa <br> 4 dl kaurakermaa <br> 1 rkl Becel Original kasviöljyvalmistetta vuoan pohjalle <br> <br> <b> Valmistusohje </b> <br> Kuumenna uuni (200°C). <br> <br> Silppua sipuli ja valkosipulinkynnet ja kuulota ne. Mittaa soijarouhe kuivana pannulle ja lisää mausteet. <br> Kaada vettä pannulle desilitra kerrallaan ja paista soijarouhe välissä kuivaksi ennen kuin lisäät vettä. Jatka, kunnes kaikki vesi on käytetty. <br> Kääntele lopuksi ravintohiivahiutaleet soijarouheseoksen joukkoon. <br> <br> Sekoita yhteen soijarouheseos, kuivat makaronit ja 50 g juustoraastetta. <br> Rasvaa uunivuoan pohja ja kaada makaroni-soijarouheseos vuokaan. <br> Sekoita yhteen kasvisliemi ja suola. Kaada vuokaan ensin kiehuva kasvisliemi, sitten kaurakerma ja ripottele pinnalle lopuksi loput juustoraasteesta. <br> <br> Paista makaronilaatikkoa uunin alatasolla noin 50-60 minuuttia. Anna makaronilaatikon vetäytyä hetki. ";
		
		document.getElementById("pic1").src = "pasta2.jpg";
	}
	
	
	
}