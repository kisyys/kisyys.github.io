var x = 0;
var y = 0;

let lista = []

let ruuat = ["Linssicurry", "Nakkikeitto", "Bolognesekastike", "Lasagnette", "Pyttipannu", "Intialainen pinaattikastike", "Makaronilaatikko", "Chana masala", "Meksikolainen papukastike", "Palsternakkakeitto", "Seitan-chorizopasta", "Wokki", "Sienikastike"]
ruuat.sort();

let ruuat2 = ["Linssicurry", "Nakkikeitto", "Bolognesekastike", "Lasagnette", "Pyttipannu", "Intialainen_pinaattikastike", "Makaronilaatikko", "Chana masala", "Meksikolainen_papukastike", "Palsternakkakeitto" , "Seitan-chorizopasta", "Wokki", "Sienikastike"]
ruuat2.sort();


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
				document.getElementById("food1").innerHTML = "Bolognesekastike";
				document.getElementById("food2").innerHTML = "Bolognesekastike";

				document.getElementById("instructions").innerHTML =

				"4 annosta / 180 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Bolognesekastike_tick0 value=1&nbsp;kpl&nbsp;porkkana> 1 kpl porkkana <br><input type=checkbox id=Bolognesekastike_tick1 value=1&nbsp;kpl&nbsp;sipuli> 1 kpl sipuli <br><input type=checkbox id=Bolognesekastike_tick2 value=1&nbsp;kpl&nbsp;varsisellerin&nbsp;varsi> 1 kpl varsisellerin varsi <br><input type=checkbox id=Bolognesekastike_tick3 value=2&nbsp;rkl&nbsp;oliiviöljyä> 2 rkl oliiviöljyä <br><input type=checkbox id=Bolognesekastike_tick4 value=400&nbsp;g&nbsp;kasvisjauhelihaa> 400 g kasvisjauhelihaa <br><input type=checkbox id=Bolognesekastike_tick5 value=1&nbsp;1/2&nbsp;dl&nbsp;valkoviiniä> 1 1/2 dl valkoviiniä <br><input type=checkbox id=Bolognesekastike_tick6 value=500&nbsp;g&nbsp;(1&nbsp;tlk)&nbsp;paseerattua&nbsp;tomaattia> 500 g (1 tlk) paseerattua tomaattia <br><input type=checkbox id=Bolognesekastike_tick7 value=40&nbsp;g&nbsp;(3&nbsp;rkl)&nbsp;tomaattipyreetä> 40 g (3 rkl) tomaattipyreetä <br><input type=checkbox id=Bolognesekastike_tick8 value=1&nbsp;kpl&nbsp;kasvisliemikuutio> 1 kpl kasvisliemikuutio <br><input type=checkbox id=Bolognesekastike_tick9 value=1/4&nbsp;tl&nbsp;suolaa> 1/4 tl suolaa <br><input type=checkbox id=Bolognesekastike_tick10 value=1&nbsp;dl&nbsp;kauramaitoa> 1 dl kauramaitoa <br><input type=checkbox id=Bolognesekastike_tick11 value=300&nbsp;g&nbsp;pastaa> 300 g pastaa  <br><input type=checkbox id=Bolognesekastike_tick12 value=(parmesaanijuustoraastetta)> (parmesaanijuustoraastetta) <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Paloittele vihanneksetpuolen sentin kuutioiksi. Paista niitä miedolla lämmöllä 10 minuuttia. <br>  <br> Lisää kasvisjauheliha sekaan ja ruskista se. Lisää viini ja keitä kasaan hetki. <br>  <br> Sekoita tomaattisäilykkeet, kasvisliemikuutio ja suola kastikkeeseen. Hauduta välillä sekoittaen 2 tuntia, ensimmäinen tunti kannen alla ja toinen ilman kantta. Lisää kauramaito noin 10 minuuttia ennen hauduttamisen loppua. <br>  <br> Keitä pasta ohjeen mukaan. <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://yhteishyva.fi/reseptit/ragu-alla-bolognese/7xBn9HNqS9vuQEre8vWTYO <br>  <br> ";

				document.getElementById("pic0").src = "Bolognesekastike.jpg";

				clear();

				x=1;
				y=1;

				window.scrollTo(0, 0);
									
			}
		
			y=1;
			
		}

		//1
		else if (meal_number == 1) {

			document.getElementById("food1").innerHTML = "Chana masala";
			document.getElementById("food2").innerHTML = "Chana masala";

			document.getElementById("instructions").innerHTML =

			"4-6 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Chana_masala_tic0 value=2&nbsp;purkkia&nbsp;kikherneitä&nbsp;suolaliemessä&nbsp;(n.&nbsp;450&nbsp;g)> 2 purkkia kikherneitä suolaliemessä (n. 450 g) <br><input type=checkbox id=Chana_masala_tic1 value=1&nbsp;rkl&nbsp;öljyä> 1 rkl öljyä <br><input type=checkbox id=Chana_masala_tic2 value=1&nbsp;iso&nbsp;sipuli> 1 iso sipuli <br><input type=checkbox id=Chana_masala_tic3 value=1&nbsp;tl&nbsp;kuminan&nbsp;siemeniä> 1 tl kuminan siemeniä <br><input type=checkbox id=Chana_masala_tic4 value=6&nbsp;valkosipulinkynttä> 6 valkosipulinkynttä <br><input type=checkbox id=Chana_masala_tic5 value=25g&nbsp;tuoretta&nbsp;inkivääriä> 25g tuoretta inkivääriä <br><input type=checkbox id=Chana_masala_tic6 value=2-4&nbsp;vihreää&nbsp;chiliä> 2-4 vihreää chiliä <br><input type=checkbox id=Chana_masala_tic7 value=30&nbsp;g&nbsp;tuoretta&nbsp;korianteria> 30 g tuoretta korianteria <br><input type=checkbox id=Chana_masala_tic8 value=1&nbsp;rkl&nbsp;jauhettua&nbsp;korianteria> 1 rkl jauhettua korianteria <br><input type=checkbox id=Chana_masala_tic9 value=1-2&nbsp;tl&nbsp;chilijauhetta> 1-2 tl chilijauhetta <br><input type=checkbox id=Chana_masala_tic10 value=1&nbsp;tl&nbsp;maustekurkuma> 1 tl maustekurkuma <br><input type=checkbox id=Chana_masala_tic11 value=1&nbsp;x&nbsp;purkki&nbsp;(400&nbsp;g)&nbsp;purkitettuja&nbsp;luumutomaatteja> 1 x purkki (400 g) purkitettuja luumutomaatteja <br><input type=checkbox id=Chana_masala_tic12 value=1&nbsp;½&nbsp;tl&nbsp;suolaa> 1 ½ tl suolaa <br><input type=checkbox id=Chana_masala_tic13 value=1&nbsp;tl&nbsp;garam&nbsp;masalaa> 1 tl garam masalaa <br><input type=checkbox id=Chana_masala_tic14 value=1&nbsp;rkl&nbsp;sitruunamehua> 1 rkl sitruunamehua <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Laita kikherneet kattilaan, jossa on 5 dl vettä (voit valmistaa osan purkista tulevalla nesteellä), ja keitä viisi minuuttia. <br>  <br> Kuori ja pilko sipuli. Paista ensiksi kuminansiemeniä hieman ja lisää sen jälkeen sipuli ja kuulota ne. <br>  <br> Valmista currytahna seuraavaksi eli pilko valkosipuli, inkivääri, chili ja 25 g tuoretta korianteria ja laita ne mortteliin. Jauha ne tahnaksi lisäämällä tarvittaessa tilkka vettä. <br>  <br> Kaavi tahna sipulipannulle ja paista sekoitellen pari minuuttia, lisää sitten jauhettu korianteri, chilijauhe ja kurkuma (ja tilkka öljyä, jos seos näyttää tarttumisvaaralta) ja kypsennä edelleen sekoittaen, vielä pari minuuttia. <br>  <br> Lisää pannulle purkitetut luumutomaatit, sekoita joukkoon kikherneet ja niiden keittovesi sekä suola ja nosta sitten lämpöä saadaksesi kastikkeen kiehuvaksi. Pienennä lämpö keskilämmölle ja anna kiehua noin 20 minuuttia, kunnes seos on hieman paksuuntunut. Sekoita joukkoon garam masala ja sitruunamehu ja tarkista mausteet. <br>  <br> Sammuta lämpö ja anna Chana masalan jäähtyä hieman, hienonna loput korianterinlehdet karkeasti, ripottele pinnalle ja tarjoile. <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://www.theguardian.com/food/2022/jan/12/how-to-make-chana-masala-recipe-felicity-cloake-masterclass <br>  <br> ";

			document.getElementById("pic0").src = "Chana masala.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);

		}

		//2
		else if (meal_number == 2) {

			document.getElementById("food1").innerHTML = "Intialainen pinaattikastike";
			document.getElementById("food2").innerHTML = "Intialainen pinaattikastike";

			document.getElementById("instructions").innerHTML =

			"4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Intialainen_pinaattikastike_tick0 value=2&nbsp;sipulia> 2 sipulia <br><input type=checkbox id=Intialainen_pinaattikastike_tick1 value=4&nbsp;valkosipulinkynttä&nbsp;hienonnettuna> 4 valkosipulinkynttä hienonnettuna <br><input type=checkbox id=Intialainen_pinaattikastike_tick2 value=2&nbsp;rkl&nbsp;raastettua&nbsp;inkivääriä> 2 rkl raastettua inkivääriä <br><input type=checkbox id=Intialainen_pinaattikastike_tick3 value=1&nbsp;punainen&nbsp;keskivahva&nbsp;chili&nbsp;hienonnettuna> 1 punainen keskivahva chili hienonnettuna <br><input type=checkbox id=Intialainen_pinaattikastike_tick4 value=öljyä&nbsp;paistamiseen> öljyä paistamiseen <br><input type=checkbox id=Intialainen_pinaattikastike_tick5 value=2&nbsp;tl&nbsp;jauhettua&nbsp;juustokuminaa> 2 tl jauhettua juustokuminaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick6 value=2&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 2 tl jauhettua korianteria <br><input type=checkbox id=Intialainen_pinaattikastike_tick7 value=1&nbsp;tl&nbsp;kurkumaa> 1 tl kurkumaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick8 value=1&nbsp;tl&nbsp;garam&nbsp;masalaa> 1 tl garam masalaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick9 value=2&nbsp;tomaattia> 2 tomaattia <br><input type=checkbox id=Intialainen_pinaattikastike_tick10 value=500&nbsp;g&nbsp;tuoretta&nbsp;pinaattia&nbsp;(osan&nbsp;voi&nbsp;korvata&nbsp;myös&nbsp;pakastetulla)> 500 g tuoretta pinaattia (osan voi korvata myös pakastetulla) <br><input type=checkbox id=Intialainen_pinaattikastike_tick11 value=1&nbsp;tlk&nbsp;(2-2&nbsp;1/2&nbsp;dl)&nbsp;kaurakermaa> 1 tlk (2-2 1/2 dl) kaurakermaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick12 value=1-2&nbsp;tl&nbsp;suolaa> 1-2 tl suolaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick13 value=2-3&nbsp;rkl&nbsp;sitruunamehua> 2-3 rkl sitruunamehua <br><input type=checkbox id=Intialainen_pinaattikastike_tick14 value=2&nbsp;pkt&nbsp;(Ã &nbsp;225&nbsp;g)&nbsp;paneer-juustoa&nbsp;(tai&nbsp;noin&nbsp;vastaava&nbsp;määrä&nbsp;esim.&nbsp;halloumia,&nbsp;tofua&nbsp;tai&nbsp;kaurapalaa)> 2 pkt (Ã  225 g) paneer-juustoa (tai noin vastaava määrä esim. halloumia, tofua tai kaurapalaa) <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuori ja hienonna sipulit. Kuutioi tomaatit <br>  <br> Kuumenna öljy pannulla ja kuullota sipuleita muutama minuutti. Lisää valkosipuli, inkivääri, chili ja kuivamausteet. Jatka pastamista vielä muutama minuutti. Lisää tomaattikuutiot ja anna muhia vartin verran välillä sekoitellen. <br>  <br> Paista sillä välin paneer-juusto (tai esim tofu, halloumi tai kaurapala) toisella paistinpannulla tilkassa öljyä. <br>  <br> Lisää pinaatti tomaattien ja mausteiden joukkoon. Sekoittele kunnes pinaatti painuu kasaan. Jos käytät pakastepinaattia, kuumenna kunnes pinaatti sulaa. <br>  <br> Lisää kaurakerma ja soseuta kastike sauvasekoittimella tasaiseksi. Mausta maun mukaan suolalla ja sitruunamehulla. Sekoita lopuksi joukkoon paistettu juusto. <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: http://vegeviettelys.blogspot.com/2019/05/palak-paneer.html <br>  <br> ";

			document.getElementById("pic0").src = "Intialainen pinaattikastike.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);

		}

		//3
		else if (meal_number == 3) {
			document.getElementById("food1").innerHTML = "Lasagnette";
			document.getElementById("food2").innerHTML = "Lasagnette";

			document.getElementById("instructions").innerHTML =

			"6 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Lasagnette_tick0 value=1&nbsp;sipuli> 1 sipuli <br><input type=checkbox id=Lasagnette_tick1 value=1-2&nbsp;valkosipulikynttä> 1-2 valkosipulikynttä <br><input type=checkbox id=Lasagnette_tick2 value=1/2&nbsp;paprika> 1/2 paprika <br><input type=checkbox id=Lasagnette_tick3 value=2&nbsp;porkkanaa> 2 porkkanaa <br><input type=checkbox id=Lasagnette_tick4 value=2&nbsp;herkkusientä> 2 herkkusientä <br><input type=checkbox id=Lasagnette_tick5 value=2&nbsp;dl&nbsp;soijarouhetta> 2 dl soijarouhetta <br><input type=checkbox id=Lasagnette_tick6 value=2&nbsp;rkl&nbsp;vehnäjauhoja> 2 rkl vehnäjauhoja <br><input type=checkbox id=Lasagnette_tick7 value=1&nbsp;purkki&nbsp;tomaattimurskaa&nbsp;(+&nbsp;1&nbsp;dl&nbsp;vettä&nbsp;purkin&nbsp;huuhteluun)> 1 purkki tomaattimurskaa (+ 1 dl vettä purkin huuhteluun) <br><input type=checkbox id=Lasagnette_tick8 value=1&nbsp;kpl&nbsp;kasvisliemikuutio> 1 kpl kasvisliemikuutio <br><input type=checkbox id=Lasagnette_tick9 value=4&nbsp;dl&nbsp;kasvismaitoa> 4 dl kasvismaitoa <br><input type=checkbox id=Lasagnette_tick10 value=70&nbsp;g&nbsp;tomaattipyrettä> 70 g tomaattipyrettä <br><input type=checkbox id=Lasagnette_tick11 value=1&nbsp;rkl&nbsp;jauheliha-&nbsp;tai&nbsp;grillimaustetta> 1 rkl jauheliha- tai grillimaustetta <br><input type=checkbox id=Lasagnette_tick12 value=1/2&nbsp;tl&nbsp;jauhettua&nbsp;mustapippuria> 1/2 tl jauhettua mustapippuria <br><input type=checkbox id=Lasagnette_tick13 value=1/2&nbsp;tl&nbsp;suolaa> 1/2 tl suolaa <br><input type=checkbox id=Lasagnette_tick14 value=200&nbsp;g&nbsp;Torino&nbsp;Täysjyvä&nbsp;Lasagne&nbsp;Piccolo> 200 g Torino Täysjyvä Lasagne Piccolo <br><input type=checkbox id=Lasagnette_tick15 value=öljyä&nbsp;voiteluun&nbsp;ja&nbsp;paistamiseen> öljyä voiteluun ja paistamiseen <br><input type=checkbox id=Lasagnette_tick16 value=juustoraastetta&nbsp;pinnalle> juustoraastetta pinnalle <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuori ja hienonna sipulit, porkkana, paprika ja herkkusienet. Ruskista öljyssä. <br>  <br> Lisää soijarouhe ja paista vielä hetki. <br>  <br> Lisää sitten jauhot, tomaattimurska+vesi ja liemikuutio. Sekoita tasaiseksi ja anna kastikkeen kiehahtaa. <br>  <br> Lisää kasvimaito, tomaattipyre ja mausteet. Kuumenna kiehuvaksi samalla sekoittaen. <br>  <br> Voitele uunivuoka ja mittaa raaka pasta vuokaan. Kaada kuuma kastike varovasti pastan päälle ja sekoita hieman. Ripottele pinnalle hieman juustoraastetta. <br>  <br> Kypsennä uunin alaosassa 200 asteessa noin 30 minuuttia. Anna vetäytyä 10 minuuttia enne tarjoilua. <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: Facebook-ryhmästä: Vegaaniset kasvisruuat <br>  <br> ";

			document.getElementById("pic0").src = "Lasagnette.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);
		}

		//4
		else if (meal_number == 4) {

			document.getElementById("food1").innerHTML = "Linssicurry";
			document.getElementById("food2").innerHTML = "Linssicurry";

			document.getElementById("instructions").innerHTML =

			"4 annosta / 45 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Linssicurry_tick0 value=1&nbsp;rkl&nbsp;öljyä> 1 rkl öljyä <br><input type=checkbox id=Linssicurry_tick1 value=4&nbsp;valkosipulinkynttä> 4 valkosipulinkynttä <br><input type=checkbox id=Linssicurry_tick2 value=5&nbsp;cm&nbsp;tuoretta&nbsp;inkivääriä> 5 cm tuoretta inkivääriä <br><input type=checkbox id=Linssicurry_tick3 value=1&nbsp;rkl&nbsp;jauhettua&nbsp;tuoretta&nbsp;kurkumaa&nbsp;tai&nbsp;1&nbsp;tl&nbsp;jauhettua&nbsp;kurkumaa> 1 rkl jauhettua tuoretta kurkumaa tai 1 tl jauhettua kurkumaa <br><input type=checkbox id=Linssicurry_tick4 value=1-2&nbsp;serrano-paprikaa> 1-2 serrano-paprikaa <br><input type=checkbox id=Linssicurry_tick5 value=1&nbsp;tl&nbsp;jauhettua&nbsp;kuminaa> 1 tl jauhettua kuminaa <br><input type=checkbox id=Linssicurry_tick6 value=1/2&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1/2 tl jauhettua korianteria <br><input type=checkbox id=Linssicurry_tick7 value=1/2&nbsp;tl&nbsp;chilijauhetta> 1/2 tl chilijauhetta <br><input type=checkbox id=Linssicurry_tick8 value=2&nbsp;tl&nbsp;curryjauhetta> 2 tl curryjauhetta <br><input type=checkbox id=Linssicurry_tick9 value=1&nbsp;tl&nbsp;garam&nbsp;masalaa> 1 tl garam masalaa <br><input type=checkbox id=Linssicurry_tick10 value=1&nbsp;tl&nbsp;suolaa> 1 tl suolaa <br><input type=checkbox id=Linssicurry_tick11 value=rouhittua&nbsp;mustapippuria&nbsp;maun&nbsp;mukaan> rouhittua mustapippuria maun mukaan <br><input type=checkbox id=Linssicurry_tick12 value=1&nbsp;kuppi&nbsp;(180-190g)&nbsp;â€‹â€‹linssejä> 1 kuppi (180-190g) â€‹â€‹linssejä <br><input type=checkbox id=Linssicurry_tick13 value=2&nbsp;kuppia&nbsp;(480&nbsp;ml)&nbsp;kasvislientä> 2 kuppia (480 ml) kasvislientä <br><input type=checkbox id=Linssicurry_tick14 value=1&nbsp;purkki&nbsp;(400&nbsp;g)&nbsp;murskattuja&nbsp;tomaatteja> 1 purkki (400 g) murskattuja tomaatteja <br><input type=checkbox id=Linssicurry_tick15 value=1&nbsp;tölkki&nbsp;(400&nbsp;ml)&nbsp;täysrasvaista&nbsp;kookosmaitoa> 1 tölkki (400 ml) täysrasvaista kookosmaitoa <br><input type=checkbox id=Linssicurry_tick16 value=3&nbsp;rkl&nbsp;makeuttamatonta&nbsp;kermaista&nbsp;mantelivoita> 3 rkl makeuttamatonta kermaista mantelivoita <br><input type=checkbox id=Linssicurry_tick17 value=1/2&nbsp;pientä&nbsp;sitruunaa> 1/2 pientä sitruunaa <br><input type=checkbox id=Linssicurry_tick18 value=1/2&nbsp;kuppia&nbsp;(~&nbsp;8&nbsp;g)&nbsp;tuoretta&nbsp;korianteria&nbsp;karkeasti&nbsp;hienonnettuna> 1/2 kuppia (~ 8 g) tuoretta korianteria karkeasti hienonnettuna <br><input type=checkbox id=Linssicurry_tick19 value=tarjoiluun:&nbsp;riisiä> tarjoiluun: riisiä <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Huuhtele linssit kylmässä vedessä, kunnes vesi on kirkasta. <br>  <br> Kuori ja pilko valkosipulit, tuore inkivääri ja kurkuma pieneksi silpuksi. Pilko paprika palasiksi. Paista pilkottuja aineksia 2 minuuttia sekoittaen.  <br>  <br> Lisää kumina, korianteri, chilijauhe, curryjauhe, garam masala, suola ja mustapippuri maun mukaan ja paista minuutti, kunnes tuoksuvat. <br>  <br> Kaada joukkoon kasvisliemi, linssit ja murskatut tomaatit ja sekoita hyvin.Hauduta 20-25 minuuttia tai kunnes linssit ovat kypsiä ja suurimmaksi osaksi pehmenneet. <br>  <br> Sekoita joukkoon kookosmaito, mantelivoi sekä suola ja pippuri maun mukaan. Jatka kypsentämistä miedolla lämmöllä 5-8 minuuttia, kunnes curry on paksuuntunut ja kermainen. <br>  <br> Sekoita lopuksi joukkoon sitruunamehu ja korianteri ja sammuta lämpö. <br>  <br> Tarjoa curry riisin ja koristele lisäkorianterilla. <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://rainbowplantlife.com/vegan-red-lentil-curry/ <br>  <br> ";

			document.getElementById("pic0").src = "Linssicurry.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);

		}

		//5
		else if (meal_number == 5) {
			document.getElementById("food1").innerHTML = "Makaronilaatikko";
			document.getElementById("food2").innerHTML = "Makaronilaatikko";
				
			document.getElementById("instructions").innerHTML = 
				
			"4-6 annosta / 90 minuuttia <br> <br> <b> Soijarouheseos </b> <br> <input type=checkbox id=Makaronilaatikko_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=Makaronilaatikko_tick2 value=2&nbsp;valkosipulinkynttä> 2 valkosipulinkynttä <br> <input type=checkbox id=Makaronilaatikko_tick3 value=2&nbsp;dl&nbsp;tummaa&nbsp;soijarouhetta> 2 dl tummaa soijarouhetta <br> <input type=checkbox id=Makaronilaatikko_tick4 value=2&nbsp;rkl&nbsp;rypsiöljyä> 2 rkl rypsiöljyä <br> <input type=checkbox id=Makaronilaatikko_tick5 value=3&nbsp;dl&nbsp;vettä> 3 dl vettä <br> <input type=checkbox id=Makaronilaatikko_tick6 value=1/2&nbsp;dl&nbsp;ravintohiivahiutaleita> 1/2 dl ravintohiivahiutaleita <br> <input type=checkbox id=Makaronilaatikko_tick7 value=1&nbsp;rkl&nbsp;savupaprikajauhetta> 1 rkl savupaprikajauhetta <br> <input type=checkbox id=Makaronilaatikko_tick8 value=2&nbsp;rkl&nbsp;kasvisliemijauhetta> 2 rkl kasvisliemijauhetta <br> <input type=checkbox id=Makaronilaatikko_tick9 value=1&nbsp;tl&nbsp;kuivattua&nbsp;basilikaa> 1 tl kuivattua basilikaa <br> <input type=checkbox id=Makaronilaatikko_tick10 value=mustapippuria&nbsp;myllystä> mustapippuria myllystä <br> <br> <b> Muut aineet </b> <br> <input type=checkbox id=Makaronilaatikko_tick11 value=400&nbsp;g&nbsp;tummaa&nbsp;makaroonia> 400 g tummaa makaronia <br> <input type=checkbox id=Makaronilaatikko_tick12 value=150&nbsp;g&nbsp;juustoraastetta> 150 g juustoraastetta <br> <input type=checkbox id=Makaronilaatikko_tick13 value=6&nbsp;dl&nbsp;kiehuvaa&nbsp;kasvislientä> 6 dl kiehuvaa kasvislientä <br> <input type=checkbox id=Makaronilaatikko_tick14 value=4&nbsp;dl&nbsp;kaurakermaa> 4 dl kaurakermaa <br> <input type=checkbox id=Makaronilaatikko_tick15 value=1&nbsp;rkl&nbsp;rypsiöljyä> 1 rkl rypsiöljyä <br> <input type=checkbox id=Makaronilaatikko_tick16 value=1/2&nbsp;tl&nbsp;suolaa> 1/2 tl suolaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuumenna uuni (200°C). <br> <br> Silppua sipuli ja valkosipulinkynnet ja kuulota ne. Mittaa soijarouhe kuivana pannulle ja lisää mausteet. <br> Kaada vettä pannulle desilitra kerrallaan ja paista soijarouhe välissä kuivaksi ennen kuin lisäät vettä. Jatka, kunnes kaikki vesi on käytetty. <br> Kääntele lopuksi ravintohiivahiutaleet soijarouheseoksen joukkoon. <br> <br> Sekoita yhteen soijarouheseos, kuivat makaronit ja 50 g juustoraastetta. <br> Rasvaa uunivuoan pohja ja kaada makaroni-soijarouheseos vuokaan. <br> Sekoita yhteen kasvisliemi ja suola. Kaada vuokaan ensin kiehuva kasvisliemi, sitten kaurakerma ja ripottele pinnalle lopuksi loput juustoraasteesta. <br> <br> Paista Makaronilaatikkoa uunin alatasolla noin 50-60 minuuttia. Anna makaronilaatikon vetäytyä hetki. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://chocochili.net/2018/10/vegaaninen-juustoMakaronilaatikko/ ";
				
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
				
			"4 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=Meksikolainen_papukastike_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=Meksikolainen_papukastike_tick2 value=3&nbsp;valkosipulinkynttä> 3 valkosipulinkynttä <br> <input type=checkbox id=Meksikolainen_papukastike_tick3 value=2&nbsp;rkl&nbsp;tomaattipyreetä> 2 rkl tomaattipyreetä <br> <input type=checkbox id=Meksikolainen_papukastike_tick4 value=1&nbsp;tölkki&nbsp;(400g)&nbsp;tomaattimurskaa> 1 tölkki (400 g) tomaattimurskaa <br> <input type=checkbox id=Meksikolainen_papukastike_tick5 value=1/2&nbsp;dl&nbsp;vettä> 1/2 dl vettä <br> <input type=checkbox id=Meksikolainen_papukastike_tick6 value=1&nbsp;tölkki&nbsp;(230g)&nbsp;(musta)papuja>  1 tölkki (230 g) papuja (esim. mustapapuja tai kidneypapuja) <br> <input type=checkbox id=Meksikolainen_papukastike_tick7 value=100&nbsp;g&nbsp;pakastemaissia> 100 g pakastemaissia <br> <input type=checkbox id=Meksikolainen_papukastike_tick8 value=2&nbsp;dl&nbsp;juustoraastetta> 2 dl juustoraastetta <br> <input type=checkbox id=Meksikolainen_papukastike_tick9 value=1&nbsp;tl&nbsp;savupaprikajautetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=Meksikolainen_papukastike_tick10 value=1&nbsp;tl&nbsp;juustokuminaa> 1 tl juustokuminaa <br> <input type=checkbox id=Meksikolainen_papukastike_tick11 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=Meksikolainen_papukastike_tick12 value=1&nbsp;rkl&nbsp;oreganoa> 1 rkl oreganoa <br> <input type=checkbox id=Meksikolainen_papukastike_tick13 value=3/4&nbsp;tl&nbsp;suolaa> 3/4 tl suolaa <br> <input type=checkbox id=Meksikolainen_papukastike_tick14 value=1&nbsp;tl&nbsp;sokeria> 1 tl sokeria <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Pilko sipuli ja valkosipulinkynnet ja kuulota ne. Kääntele joukkoon mausteet ja tomaattipyree. Paista pari minuuttia. <br> <br> Lisää tomaattimurska, vesi, pavut ja maissit. Mausta suolalla ja sokerilla. Anna kastikkeen muhia vartin verran. <br> <br> Kuorruta pinta juustoraasteella. Nosta pannu uuniin grillivastuksen alle noin viideksi minuutiksi, kunnes juusto sulaa. Jos paitinpannusi ei kestä uunia tai et viitsi kuumentaa uunia, laita kansi päälle ja anna kastikkeen muhia, kunnes juusto sulaa. <br> <br> Tarjoa papukastike esimerkiksi nachojen, lohkoperunoiden tai bataattiranskalaisten kera. <br> <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://vegeviettelys.blogspot.com/2020/04/meksikolainen-papukastike.html ";
				
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

			document.getElementById("food1").innerHTML = "Palsternakkakeitto";
			document.getElementById("food2").innerHTML = "Palsternakkakeitto";

			document.getElementById("instructions").innerHTML =

			"4 annosta / 50 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Palsternakkakeitto_tick0 value=800&nbsp;g&nbsp;palsternakkaa> 800 g palsternakkaa <br><input type=checkbox id=Palsternakkakeitto_tick1 value=1&nbsp;sipuli> 1 sipuli <br><input type=checkbox id=Palsternakkakeitto_tick2 value=2&nbsp;valkosipulinkynttä> 2 valkosipulinkynttä <br><input type=checkbox id=Palsternakkakeitto_tick3 value=5&nbsp;cm&nbsp;pala&nbsp;inkivääriä> 5 cm pala inkivääriä <br><input type=checkbox id=Palsternakkakeitto_tick4 value=oliiviöljyä> oliiviöljyä <br><input type=checkbox id=Palsternakkakeitto_tick5 value=1&nbsp;tl&nbsp;kuminan&nbsp;siemeniä> 1 tl kuminan siemeniä <br><input type=checkbox id=Palsternakkakeitto_tick6 value=1&nbsp;tl&nbsp;garam&nbsp;masala> 1 tl garam masala <br><input type=checkbox id=Palsternakkakeitto_tick7 value=200&nbsp;g&nbsp;halkaistuja&nbsp;punaisia&nbsp;linssejä> 200 g halkaistuja punaisia linssejä <br><input type=checkbox id=Palsternakkakeitto_tick8 value=4&nbsp;kypsentämätöntä&nbsp;papadumia> 4 kypsentämätöntä papadumia <br><input type=checkbox id=Palsternakkakeitto_tick9 value=1,5&nbsp;litraa&nbsp;luomukasvislientä> 1,5 litraa luomukasvislientä <br><input type=checkbox id=Palsternakkakeitto_tick10 value=4&nbsp;rkl&nbsp;luonnonjogurttia> 4 rkl luonnonjogurttia <br><input type=checkbox id=Palsternakkakeitto_tick11 value=4&nbsp;oksaa&nbsp;tuoretta&nbsp;korianteria> 4 oksaa tuoretta korianteria <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Esilämmitä uuni 180 asteeseen. <br>  <br> Laita 2 palsternakkaa sivuun myöhempää käyttöä varten. Kuori sipuli, hienonna karkeasti loput palsternakat (pidä kuoret päällä) ja kuori ja raasta valkosipuli ja inkivääri. <br>  <br> Kypsennä palsternakkat ja sipulit peitettynä 20 minuuttia öljyssä välillä sekoittaen. <br>  <br> Lisää valkosipuli, inkivääri, kuminan siemenet, garam masala ja linssit ja keitä vielä 5 minuuttia. <br>  <br> Pilko/murusta joukkoon kypsentämättömät papadumit, lisää sitten liemi ja keitä 20 minuuttia, lisää vettä tarvittaessa. <br>  <br> Kuori sillä välin varatut palsternakkat nauhoiksi, kunnes saavutat puumaisen ytimen (hävitä tämä pala), vaalenna 30 sekuntia nopeasti kiehuvassa vedessä, valuta ja taputtele kuivaksi. <br>  <br> Mausta suolalla ja levitä sitten yhdeksi kerrokseksi öljyttylle uunipellille. Paista 15 minuuttia tai kunnes ne ovat kullanruskeita ja rapeita. <br>  <br> Mausta keitto täydelliseksi lisäten jogurtin. Ripottele päälle palsternakkalastuja ja korianterinlehtiä. <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: https://www.jamieoliver.com/recipes/vegetable-recipes/spiced-parsnip-soup/ <br>  <br> ";

			document.getElementById("pic0").src = "Palsternakkakeitto.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);

		}

		//9
		else if (meal_number == 9) {

			document.getElementById("food1").innerHTML = "Pyttipannu";
			document.getElementById("food2").innerHTML = "Pyttipannu";

			document.getElementById("instructions").innerHTML =

			"4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Pyttipannu_tick0 value=1&nbsp;sipuli> 1 sipuli <br><input type=checkbox id=Pyttipannu_tick1 value=6&nbsp;keskikokoista&nbsp;perunaa> 6 keskikokoista perunaa <br><input type=checkbox id=Pyttipannu_tick2 value=pieni&nbsp;parsakaali> pieni parsakaali <br><input type=checkbox id=Pyttipannu_tick3 value=puoli&nbsp;pussia&nbsp;pakastemaissia> puoli pussia pakastemaissia <br><input type=checkbox id=Pyttipannu_tick4 value=paketti&nbsp;lihankorviketta,&nbsp;esim.&nbsp;My&nbsp;Best&nbsp;Veggie&nbsp;Burger&nbsp;Burger&nbsp;pihvejä> paketti lihankorviketta, esim. My Best Veggie Burger Burger pihvejä <br><input type=checkbox id=Pyttipannu_tick5 value=suolaa&nbsp;maun&nbsp;mukaan> suolaa maun mukaan <br><input type=checkbox id=Pyttipannu_tick6 value=jauhettua&nbsp;mustapippuria&nbsp;maun&nbsp;mukaan> jauhettua mustapippuria maun mukaan <br><input type=checkbox id=Pyttipannu_tick7 value=4&nbsp;kpl&nbsp;kananmunia> 4 kpl kananmunia <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keitä perunat. Samalla kun perunat kiehuvat, pilko muut kasvikset. <br>  <br> Kaada tilkka öljyä pannulle, lisää pilkotut kasvikset pannulle. Paista ainakin 15 min. <br>  <br> Kun perunat ovat kypsiä, kuori ja pilko ne. Pilko myös lihankorvike ja lisää ne, pilkotut perunat ja pakastemaissi pannulle. Mausta suolalla ja pippurilla mauan mukaan. <br>  <br> Paista vielä 10 min tai niin kauan kun kunnes ovat valmiita. Paista tarvittaessa erikseen, jos kaikki eivät mahdu samalle pannulle. <br>  <br> Paista vielä kananmuna mieleiseksi annoksen sivuun. <br>  <br>  <br>  <br> ";

			document.getElementById("pic0").src = "Pyttipannu.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);

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

			document.getElementById("food1").innerHTML = "Sienikastike";
			document.getElementById("food2").innerHTML = "Sienikastike";

			document.getElementById("instructions").innerHTML =

			"4 annosta / 30 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Sienikastike_tick0 value=200&nbsp;g&nbsp;tuoreita&nbsp;herkkusieniä/tatteja> 200 g tuoreita herkkusieniä/tatteja <br><input type=checkbox id=Sienikastike_tick1 value=2&nbsp;sipuli> 2 sipuli <br><input type=checkbox id=Sienikastike_tick2 value=1&nbsp;rkl&nbsp;voita> 1 rkl voita <br><input type=checkbox id=Sienikastike_tick3 value=2,5&nbsp;dl&nbsp;kauraruokaa&nbsp;(ruokakerman&nbsp;korvike)> 2,5 dl kauraruokaa (ruokakerman korvike) <br><input type=checkbox id=Sienikastike_tick4 value=2&nbsp;rkl&nbsp;soijaa> 2 rkl soijaa <br><input type=checkbox id=Sienikastike_tick5 value=öljyä> öljyä <br><input type=checkbox id=Sienikastike_tick6 value=jauhettua&nbsp;mustapippuria&nbsp;maun&nbsp;mukaan> jauhettua mustapippuria maun mukaan <br><input type=checkbox id=Sienikastike_tick7 value=lisäksi&nbsp;valmis&nbsp;kuiva-aineseos&nbsp;Luomuviljapihvejä&nbsp;150&nbsp;g&nbsp;tai&nbsp;pussi&nbsp;Ikean&nbsp;Huvudroll&nbsp;kasviproteiinipyöryköitä> lisäksi valmis kuiva-aineseos Luomuviljapihvejä 150 g tai pussi Ikean Huvudroll kasviproteiinipyöryköitä <br><input type=checkbox id=Sienikastike_tick8 value=lisäksi&nbsp;perunoita> lisäksi perunoita <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Pilko ja paista sipulit öljyssä. Lisää sienet ja paista muutama minuutti.  <br>  <br> Lisää kauraruoka, soija, mustapippuri ja persilja. Anna porista miedolla lämmöllä n. 5 min (kun kastike on saostunut). <br>  <br> Herkuttele kasvispihvien tai -pyöryköiden ja perunoiden kera! <br>  <br> Yllä oleva resepti on muokattu alkuperäisestä reseptistä, joka on löydetty: http://www.herkuttelijat.fi/2014/03/mahtavan-hyva-erilainen-ja-maukas.html <br>  <br>  <br>  <br> ";

			document.getElementById("pic0").src = "Sienikastike.jpg";

			clear();

			x=1;
			y=1;

			window.scrollTo(0, 0);

		}

		//12
		else if (meal_number == 12) {
			
			document.getElementById("food1").innerHTML = "Wokki";
			document.getElementById("food2").innerHTML = "Wokki";
				
			document.getElementById("instructions").innerHTML = "4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=Wokki_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=Wokki_tick2 value=3&nbsp;porkkanaa> 3 porkkanaa <br> <input type=checkbox id=Wokki_tick3 value=pieni&nbsp;kaali> pieni kaali <br> <input type=checkbox id=Wokki_tick4 value=purkki&nbsp;vesikastanjoita> purkki vesikastanjoita <br> <input type=checkbox id=Wokki_tick5 value=pussi&nbsp;sokeriherneitä> pussi sokeriherneitä <br> <input type=checkbox id=Wokki_tick6 value=puoli&nbsp;pussia&nbsp;pakasteparsakaalia> puoli pussia pakasteparsakaalia <br> <input type=checkbox id=Wokki_tick7 value=puoli&nbsp;pussia&nbsp;pakastemaissia> puoli pussia pakastemaissia <br> <input type=checkbox id=Wokki_tick8 value=paketti&nbsp;Vegetarian&nbsp;Wok&nbsp;Soya&nbsp;Stripsejä>  paketti Vegetarian Wok Soya Stripsejä <br> <input type=checkbox id=Wokki_tick9 value=puoli&nbsp;pussia&nbsp;riisinoodelia>  puoli pussia riisinoodelia <br> <input type=checkbox id=Wokki_tick10 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=Wokki_tick11 value=1&nbsp;tl&nbsp;inkivääriä> 1 tl inkivääriä <br> <input type=checkbox id=Wokki_tick12 value=1/2&nbsp;tl&nbsp;kurkumaa> 1/2 tl kurkumaa <br> <br> <button onclick=lisaaListaan()>Lisää listaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keitä pakasteet, pilko muut kasvikset. Sekoita ne keskenään. <br> Kaada tilkka öljyä pannulle, sekoita mausteet ja lisää kasvisseos pannulle. Paista ainakin 20 min. <br> <br> Lisää soija stripsit ja paista vielä 5 min. Paista erikseen jos ei mahdu samalle pannulle. <br> <br> Keitä riisinoodelit ohjeen mukaan ja huuhtele kylmällä vedellä. ";
				
			document.getElementById("pic0").src = "Wokki.jpg";

			clear();
	
			x=1;
			y=1;
			
			window.scrollTo(0, 0);

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
	var random = Math.floor(Math.random() * ruuat.length);

	for(let i = 0; i<ruuat.length; i++) {
		if(random == 0) {
			x=0;
		}
		if(random == i) {
			meal(i);	
		}

	}
	
	window.scrollTo(0, 0);
}


function lisaaListaan() {

	if(lista.length<1000){
		for(let i = 0; i<100; i++) {
			for(let u = 0; u<ruuat2.length; u++) {
	
				if(document.getElementById(ruuat2[u]+"_tick"+i) !== null) {
					if(document.getElementById(ruuat2[u]+"_tick"+i).checked == true) {
						if (!lista.includes(ruuat2[u])) {
							lista.push("");
							lista.push(ruuat2[u]);
						}
						lista.push(document.getElementById(ruuat2[u]+"_tick"+i).value);
					}
				}
			}	
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
