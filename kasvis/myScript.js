var y = 0;

let lista = []

let ruuat = ["Linssicurry", "Nakkikeitto", "Bolognesekastike", "Lasagnette", "Pyttipannu", "Intialainen pinaattikastike", "Makaronilaatikko", "Chana masala", "Meksikolainen papukastike", "Palsternakkakeitto", "Seitan-chorizopasta", "Wokki", "Sienikastike", "Vihis", "Pasta carbonara", "Gochujang-nuudelit"]
ruuat.sort();

let ruuat2 = []
menu();


function menu() {
	for(let i = 0; i<ruuat.length; i++) {
		var palat = ruuat[i].split(" ");
		var ruoka = "";
		if(palat.length>1) {
			for(let e = 0; e<palat.length; e++) {
				if(e==palat.length-1) {
					ruoka = ruoka + palat[e];
				} else {
					ruoka = ruoka + palat[e] + "_";
				}	
			}
		} else {
			ruoka = ruuat[i];
		}
		ruuat2.push(ruoka);
	}	
	ruuat2.sort();
}


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
	for(let i = 0; i<ruuat.length; i++) {
		document.getElementById("pic"+i).src ="";
		document.getElementById("p"+i).innerHTML ="";	
	}
	y = 1;
	window.scrollTo(0, 0);
}


function home() {
	const start = document.querySelector(".container");

	for(let n = 0; n < ruuat.length; n++) {
		start.insertAdjacentHTML("beforeend", 
		`<div class="row" style="min-height:450px;"  style="margin:auto;">		
				<div class="col-sm-5" style="margin:auto;">
					<img id="pic${n}" src="${ruuat[n]}.jpg" alt="" class="img-fluid" style="width:90%;" style="height:90%;" onclick="meals(${n})" onmouseover="bigImg(this)" onmouseout="normalImg(this)">
					<p id="p${n}" style="text-align:center">
					<b> ${ruuat[n]} </b>					
					</p>	
				</div>
				
				<div class="col-sm-5" style="margin:auto;">
					<img id="pic${n+1}" src="${ruuat[n+1]}.jpg" alt="" class="img-fluid" style="width:90%;" style="height:90%;" onclick="meals(${n+1})" onmouseover="bigImg(this)" onmouseout="normalImg(this)">
					<p id="p${n+1}" style="text-align:center">
					<b> ${ruuat[n+1]} </b>					
					</p>	
				</div>
		</div>`
		);
		n++;
	}
}


function home2() {
	document.getElementById("food1").innerHTML = "Kasvismenu";
	document.getElementById("food2").innerHTML = "Kasvismenu";
		
	document.getElementById("instructions").innerHTML = "";

	for(let i = 0; i<ruuat.length; i++) {
		document.getElementById("pic"+i).src = ruuat[i] +".jpg";
		document.getElementById("p"+i).innerHTML ="<b>" + ruuat[i] + "</b>";	
	}	
	
	document.getElementById("pic00").src ="";
	y=0;	
	window.scrollTo(0, 0);

}


function meals(meal_number) {

	if(ruuat[meal_number]=="Chana masala") {
		
		document.getElementById("food1").innerHTML = "Chana masala";
		document.getElementById("food2").innerHTML = "Chana masala";

		document.getElementById("instructions").innerHTML =

		"4-6 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Chana_masala_tick0 value=2&nbsp;purkkia&nbsp;kikherneit??&nbsp;suolaliemess??&nbsp;(n.&nbsp;450&nbsp;g)> 2 purkkia kikherneit?? suolaliemess?? (n. 450 g) <br><input type=checkbox id=Chana_masala_tick1 value=1&nbsp;rkl&nbsp;??ljy??> 1 rkl ??ljy?? <br><input type=checkbox id=Chana_masala_tick2 value=1&nbsp;iso&nbsp;sipuli> 1 iso sipuli <br><input type=checkbox id=Chana_masala_tick3 value=1&nbsp;tl&nbsp;kuminan&nbsp;siemeni??> 1 tl kuminan siemeni?? <br><input type=checkbox id=Chana_masala_tick4 value=6&nbsp;valkosipulinkyntt??> 6 valkosipulinkyntt?? <br><input type=checkbox id=Chana_masala_tick5 value=25g&nbsp;tuoretta&nbsp;inkiv????ri??> 25g tuoretta inkiv????ri?? <br><input type=checkbox id=Chana_masala_tick6 value=2-4&nbsp;vihre????&nbsp;chili??> 2-4 vihre???? chili?? <br><input type=checkbox id=Chana_masala_tick7 value=30&nbsp;g&nbsp;tuoretta&nbsp;korianteria> 30 g tuoretta korianteria <br><input type=checkbox id=Chana_masala_tick8 value=1&nbsp;rkl&nbsp;jauhettua&nbsp;korianteria> 1 rkl jauhettua korianteria <br><input type=checkbox id=Chana_masala_tick9 value=1-2&nbsp;tl&nbsp;chilijauhetta> 1-2 tl chilijauhetta <br><input type=checkbox id=Chana_masala_tick10 value=1&nbsp;tl&nbsp;maustekurkuma> 1 tl maustekurkuma <br><input type=checkbox id=Chana_masala_tick11 value=1&nbsp;purkki&nbsp;(400&nbsp;g)&nbsp;purkitettuja&nbsp;luumutomaatteja> 1 purkki (400 g) purkitettuja luumutomaatteja <br><input type=checkbox id=Chana_masala_tick12 value=1&nbsp;??&nbsp;tl&nbsp;suolaa> 1 ?? tl suolaa <br><input type=checkbox id=Chana_masala_tick13 value=1&nbsp;tl&nbsp;garam&nbsp;masalaa> 1 tl garam masalaa <br><input type=checkbox id=Chana_masala_tick14 value=1&nbsp;rkl&nbsp;sitruunamehua> 1 rkl sitruunamehua <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Laita kikherneet kattilaan, jossa on 5 dl vett?? (voit valmistaa osan purkista tulevalla nesteell??), ja keit?? viisi minuuttia. <br>  <br> Kuori ja pilko sipuli. Paista ensiksi kuminansiemeni?? hieman ja lis???? sen j??lkeen sipuli ja kuulota ne. <br>  <br> Valmista currytahna seuraavaksi eli pilko valkosipuli, inkiv????ri, chili ja 25 g tuoretta korianteria ja laita ne mortteliin. Jauha ne tahnaksi lis????m??ll?? tarvittaessa tilkka vett??. <br>  <br> Kaavi tahna sipulipannulle ja paista sekoitellen pari minuuttia, lis???? sitten jauhettu korianteri, chilijauhe ja kurkuma (ja tilkka ??ljy??, jos seos n??ytt???? tarttumisvaaralta) ja kypsenn?? edelleen sekoittaen, viel?? pari minuuttia. <br>  <br> Lis???? pannulle purkitetut luumutomaatit, sekoita joukkoon kikherneet ja niiden keittovesi sek?? suola ja nosta sitten l??mp???? saadaksesi kastikkeen kiehuvaksi. Pienenn?? l??mp?? keskil??mm??lle ja anna kiehua noin 20 minuuttia, kunnes seos on hieman paksuuntunut. Sekoita joukkoon garam masala ja sitruunamehu ja tarkista mausteet. <br>  <br> Sammuta l??mp?? ja anna Chana masalan j????hty?? hieman, hienonna loput korianterinlehdet karkeasti, ripottele pinnalle ja tarjoile. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://www.theguardian.com/food/2022/jan/12/how-to-make-chana-masala-recipe-felicity-cloake-masterclass <br>  <br> ";

		document.getElementById("pic00").src = "Chana masala.jpg";

		clear();
	
	}

	if(ruuat[meal_number]=="Bolognesekastike") {

		document.getElementById("food1").innerHTML = "Bolognesekastike";
		document.getElementById("food2").innerHTML = "Bolognesekastike";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 180 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Bolognesekastike_tick0 value=1&nbsp;kpl&nbsp;porkkana> 1 kpl porkkana <br><input type=checkbox id=Bolognesekastike_tick1 value=1&nbsp;kpl&nbsp;sipuli> 1 kpl sipuli <br><input type=checkbox id=Bolognesekastike_tick2 value=1&nbsp;kpl&nbsp;varsisellerin&nbsp;varsi> 1 kpl varsisellerin varsi <br><input type=checkbox id=Bolognesekastike_tick3 value=2&nbsp;rkl&nbsp;oliivi??ljy??> 2 rkl oliivi??ljy?? <br><input type=checkbox id=Bolognesekastike_tick4 value=400&nbsp;g&nbsp;kasvisjauhelihaa> 400 g kasvisjauhelihaa <br><input type=checkbox id=Bolognesekastike_tick5 value=1&nbsp;1/2&nbsp;dl&nbsp;valkoviini??> 1 1/2 dl valkoviini?? <br><input type=checkbox id=Bolognesekastike_tick6 value=500&nbsp;g&nbsp;(1&nbsp;tlk)&nbsp;paseerattua&nbsp;tomaattia> 500 g (1 tlk) paseerattua tomaattia <br><input type=checkbox id=Bolognesekastike_tick7 value=40&nbsp;g&nbsp;(3&nbsp;rkl)&nbsp;tomaattipyreet??> 40 g (3 rkl) tomaattipyreet?? <br><input type=checkbox id=Bolognesekastike_tick8 value=1&nbsp;kpl&nbsp;kasvisliemikuutio> 1 kpl kasvisliemikuutio <br><input type=checkbox id=Bolognesekastike_tick9 value=1/4&nbsp;tl&nbsp;suolaa> 1/4 tl suolaa <br><input type=checkbox id=Bolognesekastike_tick10 value=1&nbsp;dl&nbsp;kauramaitoa> 1 dl kauramaitoa <br><input type=checkbox id=Bolognesekastike_tick11 value=300&nbsp;g&nbsp;pastaa> 300 g pastaa  <br><input type=checkbox id=Bolognesekastike_tick12 value=(parmesaanijuustoraastetta)> (parmesaanijuustoraastetta) <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Paloittele vihannekset puolen sentin kuutioiksi. Paista niit?? miedolla l??mm??ll?? 10 minuuttia. <br>  <br> Lis???? kasvisjauheliha sekaan ja ruskista se. Lis???? viini ja keit?? kasaan hetki. <br>  <br> Sekoita tomaattis??ilykkeet, kasvisliemikuutio ja suola kastikkeeseen. Hauduta v??lill?? sekoittaen 2 tuntia, ensimm??inen tunti kannen alla ja toinen ilman kantta. Lis???? kauramaito noin 10 minuuttia ennen hauduttamisen loppua. <br>  <br> Keit?? pasta ohjeen mukaan. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://yhteishyva.fi/reseptit/ragu-alla-bolognese/7xBn9HNqS9vuQEre8vWTYO <br>  <br> ";

		document.getElementById("pic00").src = "Bolognesekastike.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Intialainen pinaattikastike") {

		document.getElementById("food1").innerHTML = "Intialainen pinaattikastike";
		document.getElementById("food2").innerHTML = "Intialainen pinaattikastike";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Intialainen_pinaattikastike_tick0 value=2&nbsp;sipulia> 2 sipulia <br><input type=checkbox id=Intialainen_pinaattikastike_tick1 value=4&nbsp;valkosipulinkyntt??&nbsp;hienonnettuna> 4 valkosipulinkyntt?? hienonnettuna <br><input type=checkbox id=Intialainen_pinaattikastike_tick2 value=2&nbsp;rkl&nbsp;raastettua&nbsp;inkiv????ri??> 2 rkl raastettua inkiv????ri?? <br><input type=checkbox id=Intialainen_pinaattikastike_tick3 value=1&nbsp;punainen&nbsp;keskivahva&nbsp;chili&nbsp;hienonnettuna> 1 punainen keskivahva chili hienonnettuna <br><input type=checkbox id=Intialainen_pinaattikastike_tick4 value=??ljy??&nbsp;paistamiseen> ??ljy?? paistamiseen <br><input type=checkbox id=Intialainen_pinaattikastike_tick5 value=2&nbsp;tl&nbsp;jauhettua&nbsp;juustokuminaa> 2 tl jauhettua juustokuminaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick6 value=2&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 2 tl jauhettua korianteria <br><input type=checkbox id=Intialainen_pinaattikastike_tick7 value=1&nbsp;tl&nbsp;kurkumaa> 1 tl kurkumaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick8 value=1&nbsp;tl&nbsp;garam&nbsp;masalaa> 1 tl garam masalaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick9 value=2&nbsp;tomaattia> 2 tomaattia <br><input type=checkbox id=Intialainen_pinaattikastike_tick10 value=500&nbsp;g&nbsp;tuoretta&nbsp;pinaattia&nbsp;(osan&nbsp;voi&nbsp;korvata&nbsp;my??s&nbsp;pakastetulla)> 500 g tuoretta pinaattia (osan voi korvata my??s pakastetulla) <br><input type=checkbox id=Intialainen_pinaattikastike_tick11 value=1&nbsp;tlk&nbsp;(2-2&nbsp;1/2&nbsp;dl)&nbsp;kaurakermaa> 1 tlk (2-2 1/2 dl) kaurakermaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick12 value=1-2&nbsp;tl&nbsp;suolaa> 1-2 tl suolaa <br><input type=checkbox id=Intialainen_pinaattikastike_tick13 value=2-3&nbsp;rkl&nbsp;sitruunamehua> 2-3 rkl sitruunamehua <br><input type=checkbox id=Intialainen_pinaattikastike_tick14 value=2&nbsp;pkt&nbsp;(????&nbsp;225&nbsp;g)&nbsp;paneer-juustoa&nbsp;(tai&nbsp;noin&nbsp;vastaava&nbsp;m????r??&nbsp;esim.&nbsp;halloumia,&nbsp;tofua&nbsp;tai&nbsp;kaurapalaa)> 2 pkt (???? 225 g) paneer-juustoa (tai noin vastaava m????r?? esim. halloumia, tofua tai kaurapalaa) <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuori ja hienonna sipulit. Kuutioi tomaatit <br>  <br> Kuumenna ??ljy pannulla ja kuullota sipuleita muutama minuutti. Lis???? valkosipuli, inkiv????ri, chili ja kuivamausteet. Jatka pastamista viel?? muutama minuutti. Lis???? tomaattikuutiot ja anna muhia vartin verran v??lill?? sekoitellen. <br>  <br> Paista sill?? v??lin paneer-juusto (tai esim tofu, halloumi tai kaurapala) toisella paistinpannulla tilkassa ??ljy??. <br>  <br> Lis???? pinaatti tomaattien ja mausteiden joukkoon. Sekoittele kunnes pinaatti painuu kasaan. Jos k??yt??t pakastepinaattia, kuumenna kunnes pinaatti sulaa. <br>  <br> Lis???? kaurakerma ja soseuta kastike sauvasekoittimella tasaiseksi. Mausta maun mukaan suolalla ja sitruunamehulla. Sekoita lopuksi joukkoon paistettu juusto. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: http://vegeviettelys.blogspot.com/2019/05/palak-paneer.html <br>  <br> ";

		document.getElementById("pic00").src = "Intialainen pinaattikastike.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Lasagnette") {

		document.getElementById("food1").innerHTML = "Lasagnette";
		document.getElementById("food2").innerHTML = "Lasagnette";

		document.getElementById("instructions").innerHTML =

		"6 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Lasagnette_tick0 value=1&nbsp;sipuli> 1 sipuli <br><input type=checkbox id=Lasagnette_tick1 value=1-2&nbsp;valkosipulikyntt??> 1-2 valkosipulikyntt?? <br><input type=checkbox id=Lasagnette_tick2 value=1/2&nbsp;paprika> 1/2 paprika <br><input type=checkbox id=Lasagnette_tick3 value=2&nbsp;porkkanaa> 2 porkkanaa <br><input type=checkbox id=Lasagnette_tick4 value=2&nbsp;herkkusient??> 2 herkkusient?? <br><input type=checkbox id=Lasagnette_tick5 value=2&nbsp;dl&nbsp;soijarouhetta> 2 dl soijarouhetta <br><input type=checkbox id=Lasagnette_tick6 value=2&nbsp;rkl&nbsp;vehn??jauhoja> 2 rkl vehn??jauhoja <br><input type=checkbox id=Lasagnette_tick7 value=1&nbsp;purkki&nbsp;tomaattimurskaa&nbsp;(+&nbsp;1&nbsp;dl&nbsp;vett??&nbsp;purkin&nbsp;huuhteluun)> 1 purkki tomaattimurskaa (+ 1 dl vett?? purkin huuhteluun) <br><input type=checkbox id=Lasagnette_tick8 value=1&nbsp;kpl&nbsp;kasvisliemikuutio> 1 kpl kasvisliemikuutio <br><input type=checkbox id=Lasagnette_tick9 value=4&nbsp;dl&nbsp;kasvismaitoa> 4 dl kasvismaitoa <br><input type=checkbox id=Lasagnette_tick10 value=70&nbsp;g&nbsp;tomaattipyrett??> 70 g tomaattipyrett?? <br><input type=checkbox id=Lasagnette_tick11 value=1&nbsp;rkl&nbsp;jauheliha-&nbsp;tai&nbsp;grillimaustetta> 1 rkl jauheliha- tai grillimaustetta <br><input type=checkbox id=Lasagnette_tick12 value=1/2&nbsp;tl&nbsp;jauhettua&nbsp;mustapippuria> 1/2 tl jauhettua mustapippuria <br><input type=checkbox id=Lasagnette_tick13 value=1/2&nbsp;tl&nbsp;suolaa> 1/2 tl suolaa <br><input type=checkbox id=Lasagnette_tick14 value=200&nbsp;g&nbsp;Torino&nbsp;T??ysjyv??&nbsp;Lasagne&nbsp;Piccolo> 200 g Torino T??ysjyv?? Lasagne Piccolo <br><input type=checkbox id=Lasagnette_tick15 value=??ljy??&nbsp;voiteluun&nbsp;ja&nbsp;paistamiseen> ??ljy?? voiteluun ja paistamiseen <br><input type=checkbox id=Lasagnette_tick16 value=juustoraastetta&nbsp;pinnalle> juustoraastetta pinnalle <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuori ja hienonna sipulit, porkkana, paprika ja herkkusienet. Ruskista ??ljyss??. <br>  <br> Lis???? soijarouhe ja paista viel?? hetki. <br>  <br> Lis???? sitten jauhot, tomaattimurska+vesi ja liemikuutio. Sekoita tasaiseksi ja anna kastikkeen kiehahtaa. <br>  <br> Lis???? kasvimaito, tomaattipyre ja mausteet. Kuumenna kiehuvaksi samalla sekoittaen. <br>  <br> Voitele uunivuoka ja mittaa raaka pasta vuokaan. Kaada kuuma kastike varovasti pastan p????lle ja sekoita hieman. Ripottele pinnalle hieman juustoraastetta. <br>  <br> Kypsenn?? uunin alaosassa 200 asteessa noin 30 minuuttia. Anna vet??yty?? 10 minuuttia enne tarjoilua. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: Facebook-ryhm??st??: Vegaaniset kasvisruuat <br>  <br> ";

		document.getElementById("pic00").src = "Lasagnette.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Linssicurry") {

		document.getElementById("food1").innerHTML = "Linssicurry";
		document.getElementById("food2").innerHTML = "Linssicurry";
		
		document.getElementById("instructions").innerHTML =

		"4 annosta / 45 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Linssicurry_tick0 value=1&nbsp;rkl&nbsp;??ljy??> 1 rkl ??ljy?? <br><input type=checkbox id=Linssicurry_tick1 value=4&nbsp;valkosipulinkyntt??> 4 valkosipulinkyntt?? <br><input type=checkbox id=Linssicurry_tick2 value=5&nbsp;cm&nbsp;tuoretta&nbsp;inkiv????ri??> 5 cm tuoretta inkiv????ri?? <br><input type=checkbox id=Linssicurry_tick3 value=1&nbsp;rkl&nbsp;jauhettua&nbsp;tuoretta&nbsp;kurkumaa&nbsp;tai&nbsp;1&nbsp;tl&nbsp;jauhettua&nbsp;kurkumaa> 1 rkl jauhettua tuoretta kurkumaa tai 1 tl jauhettua kurkumaa <br><input type=checkbox id=Linssicurry_tick4 value=1-2&nbsp;chili??> 1-2 chili?? <br><input type=checkbox id=Linssicurry_tick5 value=1&nbsp;tl&nbsp;jauhettua&nbsp;kuminaa> 1 tl jauhettua kuminaa <br><input type=checkbox id=Linssicurry_tick6 value=1/2&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1/2 tl jauhettua korianteria <br><input type=checkbox id=Linssicurry_tick7 value=1/2&nbsp;tl&nbsp;chilijauhetta> 1/2 tl chilijauhetta <br><input type=checkbox id=Linssicurry_tick8 value=2&nbsp;tl&nbsp;curryjauhetta> 2 tl curryjauhetta <br><input type=checkbox id=Linssicurry_tick9 value=1&nbsp;tl&nbsp;garam&nbsp;masalaa> 1 tl garam masalaa <br><input type=checkbox id=Linssicurry_tick10 value=1&nbsp;tl&nbsp;suolaa> 1 tl suolaa <br><input type=checkbox id=Linssicurry_tick11 value=rouhittua&nbsp;mustapippuria&nbsp;maun&nbsp;mukaan> rouhittua mustapippuria maun mukaan <br><input type=checkbox id=Linssicurry_tick12 value=1&nbsp;kuppi&nbsp;(180-190g)&nbsp;linssej??> 1 kuppi (180-190g) linssej?? <br><input type=checkbox id=Linssicurry_tick13 value=2&nbsp;kuppia&nbsp;(480&nbsp;ml)&nbsp;kasvislient??> 2 kuppia (480 ml) kasvislient?? <br><input type=checkbox id=Linssicurry_tick14 value=1&nbsp;purkki&nbsp;(400&nbsp;g)&nbsp;murskattuja&nbsp;tomaatteja> 1 purkki (400 g) murskattuja tomaatteja <br><input type=checkbox id=Linssicurry_tick15 value=1&nbsp;t??lkki&nbsp;(400&nbsp;ml)&nbsp;t??ysrasvaista&nbsp;kookosmaitoa> 1 t??lkki (400 ml) t??ysrasvaista kookosmaitoa <br><input type=checkbox id=Linssicurry_tick16 value=3&nbsp;rkl&nbsp;mantelitahnaa> 3 rkl mantelitahnaa <br><input type=checkbox id=Linssicurry_tick17 value=1/2&nbsp;pient??&nbsp;sitruunaa> 1/2 pient?? sitruunaa <br><input type=checkbox id=Linssicurry_tick18 value=1/2&nbsp;kuppia&nbsp;(~&nbsp;8&nbsp;g)&nbsp;tuoretta&nbsp;korianteria&nbsp;karkeasti&nbsp;hienonnettuna> 1/2 kuppia (~ 8 g) tuoretta korianteria karkeasti hienonnettuna <br><input type=checkbox id=Linssicurry_tick19 value=tarjoiluun:&nbsp;riisi??> tarjoiluun: riisi?? <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Huuhtele linssit kylm??ss?? vedess??, kunnes vesi on kirkasta. <br>  <br> Kuori ja pilko valkosipulit, tuore inkiv????ri ja kurkuma pieneksi silpuksi. Pilko paprika palasiksi. Paista pilkottuja aineksia 2 minuuttia sekoittaen.  <br>  <br> Lis???? kumina, korianteri, chilijauhe, curryjauhe, garam masala, suola ja mustapippuri maun mukaan ja paista minuutti, kunnes tuoksuvat. <br>  <br> Kaada joukkoon kasvisliemi, linssit ja murskatut tomaatit ja sekoita hyvin.Hauduta 20-25 minuuttia tai kunnes linssit ovat kypsi?? ja suurimmaksi osaksi pehmenneet. <br>  <br> Sekoita joukkoon kookosmaito, mantelivoi sek?? suola ja pippuri maun mukaan. Jatka kypsent??mist?? miedolla l??mm??ll?? 5-8 minuuttia, kunnes curry on paksuuntunut ja kermainen. <br>  <br> Sekoita lopuksi joukkoon sitruunamehu ja korianteri ja sammuta l??mp??. <br>  <br> Tarjoa curry riisin ja koristele lis??korianterilla. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://rainbowplantlife.com/vegan-red-lentil-curry/ <br>  <br> ";

		document.getElementById("pic00").src = "Linssicurry.jpg";

		clear();
	}

	if(ruuat[meal_number]=="Makaronilaatikko") {

		document.getElementById("food1").innerHTML = "Makaronilaatikko";
		document.getElementById("food2").innerHTML = "Makaronilaatikko";

		document.getElementById("instructions").innerHTML = 
			
		"4-6 annosta / 90 minuuttia <br> <br> <b> Soijarouheseos </b> <br> <input type=checkbox id=Makaronilaatikko_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=Makaronilaatikko_tick2 value=2&nbsp;valkosipulinkyntt??> 2 valkosipulinkyntt?? <br> <input type=checkbox id=Makaronilaatikko_tick3 value=2&nbsp;dl&nbsp;tummaa&nbsp;soijarouhetta> 2 dl tummaa soijarouhetta <br> <input type=checkbox id=Makaronilaatikko_tick4 value=2&nbsp;rkl&nbsp;rypsi??ljy??> 2 rkl rypsi??ljy?? <br> <input type=checkbox id=Makaronilaatikko_tick5 value=3&nbsp;dl&nbsp;vett??> 3 dl vett?? <br> <input type=checkbox id=Makaronilaatikko_tick6 value=1/2&nbsp;dl&nbsp;ravintohiivahiutaleita> 1/2 dl ravintohiivahiutaleita <br> <input type=checkbox id=Makaronilaatikko_tick7 value=1&nbsp;rkl&nbsp;savupaprikajauhetta> 1 rkl savupaprikajauhetta <br> <input type=checkbox id=Makaronilaatikko_tick8 value=2&nbsp;rkl&nbsp;kasvisliemijauhetta> 2 rkl kasvisliemijauhetta <br> <input type=checkbox id=Makaronilaatikko_tick9 value=1&nbsp;tl&nbsp;kuivattua&nbsp;basilikaa> 1 tl kuivattua basilikaa <br> <input type=checkbox id=Makaronilaatikko_tick10 value=mustapippuria&nbsp;myllyst??> mustapippuria myllyst?? <br> <br> <b> Muut aineet </b> <br> <input type=checkbox id=Makaronilaatikko_tick11 value=400&nbsp;g&nbsp;tummaa&nbsp;makaroonia> 400 g tummaa makaronia <br> <input type=checkbox id=Makaronilaatikko_tick12 value=150&nbsp;g&nbsp;juustoraastetta> 150 g juustoraastetta <br> <input type=checkbox id=Makaronilaatikko_tick13 value=6&nbsp;dl&nbsp;kiehuvaa&nbsp;kasvislient??> 6 dl kiehuvaa kasvislient?? <br> <input type=checkbox id=Makaronilaatikko_tick14 value=4&nbsp;dl&nbsp;kaurakermaa> 4 dl kaurakermaa <br> <input type=checkbox id=Makaronilaatikko_tick15 value=1&nbsp;rkl&nbsp;rypsi??ljy??> 1 rkl rypsi??ljy?? <br> <input type=checkbox id=Makaronilaatikko_tick16 value=1/2&nbsp;tl&nbsp;suolaa> 1/2 tl suolaa <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuumenna uuni (200??C). <br> <br> Silppua sipuli ja valkosipulinkynnet ja kuulota ne. Mittaa soijarouhe kuivana pannulle ja lis???? mausteet. <br> Kaada vett?? pannulle desilitra kerrallaan ja paista soijarouhe v??liss?? kuivaksi ennen kuin lis????t vett??. Jatka, kunnes kaikki vesi on k??ytetty. <br> K????ntele lopuksi ravintohiivahiutaleet soijarouheseoksen joukkoon. <br> <br> Sekoita yhteen soijarouheseos, kuivat makaronit ja 50 g juustoraastetta. <br> Rasvaa uunivuoan pohja ja kaada makaroni-soijarouheseos vuokaan. <br> Sekoita yhteen kasvisliemi ja suola. Kaada vuokaan ensin kiehuva kasvisliemi, sitten kaurakerma ja ripottele pinnalle lopuksi loput juustoraasteesta. <br> <br> Paista Makaronilaatikkoa uunin alatasolla noin 50-60 minuuttia. Anna makaronilaatikon vet??yty?? hetki. <br> <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://chocochili.net/2018/10/vegaaninen-juustoMakaronilaatikko/ ";
			
		document.getElementById("pic00").src = "Makaronilaatikko.jpg";
		
		clear();

	}

	if(ruuat[meal_number]=="Meksikolainen papukastike") {

		document.getElementById("food1").innerHTML = "Meksikolainen papukastike";
		document.getElementById("food2").innerHTML = "Meksikolainen papukastike";
			
		document.getElementById("instructions").innerHTML = 
			
		"4 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=Meksikolainen_papukastike_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=Meksikolainen_papukastike_tick2 value=3&nbsp;valkosipulinkyntt??> 3 valkosipulinkyntt?? <br> <input type=checkbox id=Meksikolainen_papukastike_tick3 value=2&nbsp;rkl&nbsp;tomaattipyreet??> 2 rkl tomaattipyreet?? <br> <input type=checkbox id=Meksikolainen_papukastike_tick4 value=1&nbsp;t??lkki&nbsp;(400g)&nbsp;tomaattimurskaa> 1 t??lkki (400 g) tomaattimurskaa <br> <input type=checkbox id=Meksikolainen_papukastike_tick5 value=1/2&nbsp;dl&nbsp;vett??> 1/2 dl vett?? <br> <input type=checkbox id=Meksikolainen_papukastike_tick6 value=1&nbsp;t??lkki&nbsp;(230g)&nbsp;(musta)papuja>  1 t??lkki (230 g) papuja (esim. mustapapuja tai kidneypapuja) <br> <input type=checkbox id=Meksikolainen_papukastike_tick7 value=100&nbsp;g&nbsp;pakastemaissia> 100 g pakastemaissia <br> <input type=checkbox id=Meksikolainen_papukastike_tick8 value=2&nbsp;dl&nbsp;juustoraastetta> 2 dl juustoraastetta <br> <input type=checkbox id=Meksikolainen_papukastike_tick9 value=1&nbsp;tl&nbsp;savupaprikajautetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=Meksikolainen_papukastike_tick10 value=1&nbsp;tl&nbsp;juustokuminaa> 1 tl juustokuminaa <br> <input type=checkbox id=Meksikolainen_papukastike_tick11 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=Meksikolainen_papukastike_tick12 value=1&nbsp;rkl&nbsp;oreganoa> 1 rkl oreganoa <br> <input type=checkbox id=Meksikolainen_papukastike_tick13 value=3/4&nbsp;tl&nbsp;suolaa> 3/4 tl suolaa <br> <input type=checkbox id=Meksikolainen_papukastike_tick14 value=1&nbsp;tl&nbsp;sokeria> 1 tl sokeria <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Pilko sipuli ja valkosipulinkynnet ja kuulota ne. K????ntele joukkoon mausteet ja tomaattipyree. Paista pari minuuttia. <br> <br> Lis???? tomaattimurska, vesi, pavut ja maissit. Mausta suolalla ja sokerilla. Anna kastikkeen muhia vartin verran. <br> <br> Kuorruta pinta juustoraasteella. Nosta pannu uuniin grillivastuksen alle noin viideksi minuutiksi, kunnes juusto sulaa. Jos paitinpannusi ei kest?? uunia tai et viitsi kuumentaa uunia, laita kansi p????lle ja anna kastikkeen muhia, kunnes juusto sulaa. <br> <br> Tarjoa papukastike esimerkiksi nachojen, lohkoperunoiden tai bataattiranskalaisten kera. <br> <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://vegeviettelys.blogspot.com/2020/04/meksikolainen-papukastike.html ";
			
		document.getElementById("pic00").src = "Meksikolainen papukastike.jpg";
		
		clear();

	}

	if(ruuat[meal_number]=="Nakkikeitto") {

		document.getElementById("food1").innerHTML = "Nakkikeitto";
		document.getElementById("food2").innerHTML = "Nakkikeitto";
			
		document.getElementById("instructions").innerHTML = 
			
		"8 annosta / 90 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=Nakkikeitto_tick0 value=1,5&nbsp;kg&nbsp;perunoita> 1,5 kg perunoita <br> <input type=checkbox id=Nakkikeitto_tick1 value=3&nbsp;porkkanaa> 3 porkkanaa <br> <input type=checkbox id=Nakkikeitto_tick2 value=1&nbsp;purjo> 1 purjo <br> <input type=checkbox id=Nakkikeitto_tick3 value=1&nbsp;parsakaali> 1 parsakaali <br> <input type=checkbox id=Nakkikeitto_tick4 value=lehtikaalia> lehtikaalia <br> <input type=checkbox id=Nakkikeitto_tick5 value=2&nbsp;l&nbsp;vett??> 2 l vett?? <br> <input type=checkbox id=Nakkikeitto_tick6 value=4&nbsp;kasvisliemikuutiota> 4 kasvisliemikuutiota <br> <input type=checkbox id=Nakkikeitto_tick7 value=16&nbsp;kokonaista&nbsp;maustepippuria> 16 kokonaista maustepippuria <br> <input type=checkbox id=Nakkikeitto_tick8 value=16&nbsp;kokonaista&nbsp;mustapippuria> 16 kokonaista mustapippuria <br> <input type=checkbox id=Nakkikeitto_tick9 value=4&nbsp;laakerinlehte??> 4 laakerinlehte?? <br> <input type=checkbox id=Nakkikeitto_tick10 value=2&nbsp;pkt&nbsp;/&nbsp;200&nbsp;g&nbsp;Muu&nbsp;Nakkeja> 2 pkt / 200 g Muu Nakkeja <br> <input type=checkbox id=Nakkikeitto_tick11 value=4&nbsp;tl&nbsp;??ljy??> 4 tl ??ljy?? <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Kuori vihannekset ja pilko ne suupaloiksi. Mittaa vesi kattilaan ja kuumenna kiehuvaksi. <br> Lis???? vihannekset, kasvisliemikuutiot ja mausteet. Keit??, kunnes perunat ovat pehmeit??. <br>  <br> Sill?? v??lin kun kasvikset kiehuu, suikaloi purjo ja paloittele nakit. Kuumenna paistinpannu ja lis???? sille tilkka ??ljy??. <br> Lis???? nakit ja purjo ja paista keskil??mm??ll??, kunnes nakeissa on kaunis ruskea pinta. <br> <br> Lis???? lopuksi paistetut nakit kattilaan. <br> <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://chocochili.net/2021/09/2x-vegaaninen-nakkikeitto/";
			
		document.getElementById("pic00").src = "Nakkikeitto.jpg";
		
		clear();

	}

	if(ruuat[meal_number]=="Palsternakkakeitto") {

		document.getElementById("food1").innerHTML = "Palsternakkakeitto";
		document.getElementById("food2").innerHTML = "Palsternakkakeitto";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 50 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Palsternakkakeitto_tick0 value=800&nbsp;g&nbsp;palsternakkaa> 800 g palsternakkaa <br><input type=checkbox id=Palsternakkakeitto_tick1 value=1&nbsp;sipuli> 1 sipuli <br><input type=checkbox id=Palsternakkakeitto_tick2 value=2&nbsp;valkosipulinkyntt??> 2 valkosipulinkyntt?? <br><input type=checkbox id=Palsternakkakeitto_tick3 value=5&nbsp;cm&nbsp;pala&nbsp;inkiv????ri??> 5 cm pala inkiv????ri?? <br><input type=checkbox id=Palsternakkakeitto_tick4 value=oliivi??ljy??> oliivi??ljy?? <br><input type=checkbox id=Palsternakkakeitto_tick5 value=1&nbsp;tl&nbsp;kuminan&nbsp;siemeni??> 1 tl kuminan siemeni?? <br><input type=checkbox id=Palsternakkakeitto_tick6 value=1&nbsp;tl&nbsp;garam&nbsp;masala> 1 tl garam masala <br><input type=checkbox id=Palsternakkakeitto_tick7 value=200&nbsp;g&nbsp;halkaistuja&nbsp;punaisia&nbsp;linssej??> 200 g halkaistuja punaisia linssej?? <br><input type=checkbox id=Palsternakkakeitto_tick8 value=4&nbsp;kypsent??m??t??nt??&nbsp;papadumia> 4 kypsent??m??t??nt?? papadumia <br><input type=checkbox id=Palsternakkakeitto_tick9 value=1,5&nbsp;litraa&nbsp;luomukasvislient??> 1,5 litraa luomukasvislient?? <br><input type=checkbox id=Palsternakkakeitto_tick10 value=4&nbsp;rkl&nbsp;luonnonjogurttia> 4 rkl luonnonjogurttia <br><input type=checkbox id=Palsternakkakeitto_tick11 value=4&nbsp;oksaa&nbsp;tuoretta&nbsp;korianteria> 4 oksaa tuoretta korianteria <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Esil??mmit?? uuni 180 asteeseen. <br>  <br> Laita 2 palsternakkaa sivuun my??hemp???? k??ytt???? varten. Kuori sipuli, hienonna karkeasti loput palsternakat (pid?? kuoret p????ll??) ja kuori ja raasta valkosipuli ja inkiv????ri. <br>  <br> Kypsenn?? palsternakkat ja sipulit peitettyn?? 20 minuuttia ??ljyss?? v??lill?? sekoittaen. <br>  <br> Lis???? valkosipuli, inkiv????ri, kuminan siemenet, garam masala ja linssit ja keit?? viel?? 5 minuuttia. <br>  <br> Pilko/murusta joukkoon kypsent??m??tt??m??t papadumit, lis???? sitten liemi ja keit?? 20 minuuttia, lis???? vett?? tarvittaessa. <br>  <br> Kuori sill?? v??lin varatut palsternakkat nauhoiksi, kunnes saavutat puumaisen ytimen (h??vit?? t??m?? pala), vaalenna 30 sekuntia nopeasti kiehuvassa vedess??, valuta ja taputtele kuivaksi. <br>  <br> Mausta suolalla ja levit?? sitten yhdeksi kerrokseksi ??ljyttylle uunipellille. Paista 15 minuuttia tai kunnes ne ovat kullanruskeita ja rapeita. <br>  <br> Mausta keitto t??ydelliseksi lis??ten jogurtin. Ripottele p????lle palsternakkalastuja ja korianterinlehti??. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://www.jamieoliver.com/recipes/vegetable-recipes/spiced-parsnip-soup/ <br>  <br> ";

		document.getElementById("pic00").src = "Palsternakkakeitto.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Pyttipannu") {

		document.getElementById("food1").innerHTML = "Pyttipannu";
		document.getElementById("food2").innerHTML = "Pyttipannu";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Pyttipannu_tick0 value=1&nbsp;sipuli> 1 sipuli <br><input type=checkbox id=Pyttipannu_tick1 value=6&nbsp;keskikokoista&nbsp;perunaa> 6 keskikokoista perunaa <br><input type=checkbox id=Pyttipannu_tick2 value=pieni&nbsp;parsakaali> pieni parsakaali <br><input type=checkbox id=Pyttipannu_tick3 value=puoli&nbsp;pussia&nbsp;pakastemaissia> puoli pussia pakastemaissia <br><input type=checkbox id=Pyttipannu_tick4 value=paketti&nbsp;lihankorviketta,&nbsp;esim.&nbsp;My&nbsp;Best&nbsp;Veggie&nbsp;Burger&nbsp;Burger&nbsp;pihvej??> paketti lihankorviketta, esim. My Best Veggie Burger Burger pihvej?? <br><input type=checkbox id=Pyttipannu_tick5 value=suolaa&nbsp;maun&nbsp;mukaan> suolaa maun mukaan <br><input type=checkbox id=Pyttipannu_tick6 value=jauhettua&nbsp;mustapippuria&nbsp;maun&nbsp;mukaan> jauhettua mustapippuria maun mukaan <br><input type=checkbox id=Pyttipannu_tick7 value=4&nbsp;kpl&nbsp;kananmunia> 4 kpl kananmunia <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keit?? perunat. Samalla kun perunat kiehuvat, pilko muut kasvikset. <br>  <br> Kaada tilkka ??ljy?? pannulle, lis???? pilkotut kasvikset pannulle. Paista ainakin 15 min. <br>  <br> Kun perunat ovat kypsi??, kuori ja pilko ne. Pilko my??s lihankorvike ja lis???? ne, pilkotut perunat ja pakastemaissi pannulle. Mausta suolalla ja pippurilla mauan mukaan. <br>  <br> Paista viel?? 10 min tai niin kauan kun kunnes ovat valmiita. Paista tarvittaessa erikseen, jos kaikki eiv??t mahdu samalle pannulle. <br>  <br> Paista viel?? kananmuna mieleiseksi annoksen sivuun. <br>  <br>  <br>  <br> ";

		document.getElementById("pic00").src = "Pyttipannu.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Seitan-chorizopasta") {

		document.getElementById("food1").innerHTML = "Seitan-chorizopasta";
		document.getElementById("food2").innerHTML = "Seitan-chorizopasta";
			
		document.getElementById("instructions").innerHTML = 
			
		"4 annosta / 45 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=seitan_pasta_tick1 value=250&nbsp;g&nbsp;(t??ysjyv??)spagettia> 250 g (t??ysjyv??) spagettia <br> <input type=checkbox id=seitan_pasta_tick2 value=2&nbsp;suippopaprikaa> 2 suippopaprikaa (n. 200g) <br> <input type=checkbox id=seitan_pasta_tick3 value=2&nbsp;salottisipulia> 2 salottisipulia <br> <input type=checkbox id=seitan_pasta_tick4 value=300&nbsp;g&nbsp;seitan-chorizoa&nbsp;(Vegem)> 300 g seitan chorizoa (Vegem) <br> <input type=checkbox id=seitan_pasta_tick5 value=2&nbsp;dl&nbsp;kaurakermaa> 2 dl kaurakermaa <br> <input type=checkbox id=seitan_pasta_tick6 value=3&nbsp;rkl&nbsp;tomaattipyrett??> 3 rkl tomaattipyrett?? <br> <input type=checkbox id=seitan_pasta_tick7 value=1&nbsp;kourallinen&nbsp;tilli??> 1 kourallinen tilli?? <br> <input type=checkbox id=seitan_pasta_tick8 value=1&nbsp;tl&nbsp;savupaprikajauhetta> 1 tl savupaprikajauhetta <br> <input type=checkbox id=seitan_pasta_tick9 value=1/2&nbsp;tl&nbsp;mustapippuria> ?? tl mustapippuria <br> <input type=checkbox id=seitan_pasta_tick10 value=1/2&nbsp;tl&nbsp;suolaa> ?? tl suolaa <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keit?? spagetti pakkauksen ohjeen mukaan. <br> <br> Pilko paprika ja sipuli ja paista pannulla. Lis???? sekaan pilkottu chorizo ja paista siihen pinta. Lis???? pannulle my??s silputtu tilli. <br> <br> Lis???? kyps?? spagetti kasvisten ja chorizon kanssa pannulle ja kaada my??s hieman keitinvett?? (n 1 dl). Lis???? pannulle loput ainekset ja sekoita hyvin. Anna hautua miedolla l??mm??ll?? kunnes neste imeytynyt. <br> <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://ruoka-alkemisti.blogspot.com/2018/09/seitan-chorizopasta.html";
			
		document.getElementById("pic00").src = "Seitan-chorizopasta.jpg";
		
		clear();

	}

	if(ruuat[meal_number]=="Sienikastike") {

		document.getElementById("food1").innerHTML = "Sienikastike";
		document.getElementById("food2").innerHTML = "Sienikastike";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 30 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Sienikastike_tick0 value=200g&nbsp;tuoreita&nbsp;herkkusieni??/tatteja> 200g tuoreita herkkusieni??/tatteja <br><input type=checkbox id=Sienikastike_tick1 value=2&nbsp;sipuli> 2 sipuli <br><input type=checkbox id=Sienikastike_tick2 value=1&nbsp;rkl&nbsp;voita> 1 rkl voita <br><input type=checkbox id=Sienikastike_tick3 value=2,5&nbsp;dl&nbsp;kauraruokaa&nbsp;(ruokakerman&nbsp;korvike)> 2,5 dl kauraruokaa (ruokakerman korvike) <br><input type=checkbox id=Sienikastike_tick4 value=2&nbsp;rkl&nbsp;soijaa> 2 rkl soijaa <br><input type=checkbox id=Sienikastike_tick5 value=??ljy??> ??ljy?? <br><input type=checkbox id=Sienikastike_tick6 value=jauhettua&nbsp;mustapippuria&nbsp;maun&nbsp;mukaan> jauhettua mustapippuria maun mukaan <br><input type=checkbox id=Sienikastike_tick7 value=lis??ksi&nbsp;valmis&nbsp;kuiva-aineseos&nbsp;Luomuviljapihvej??&nbsp;150&nbsp;g&nbsp;tai&nbsp;pussi&nbsp;Ikean&nbsp;Huvudroll&nbsp;kasviproteiinipy??ryk??it??> lis??ksi valmis kuiva-aineseos Luomuviljapihvej?? 150 g tai pussi Ikean Huvudroll kasviproteiinipy??ryk??it?? <br><input type=checkbox id=Sienikastike_tick8 value=lis??ksi&nbsp;perunoita> lis??ksi perunoita <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Pilko ja paista sipulit ??ljyss??. Lis???? sienet ja paista muutama minuutti.  <br>  <br> Lis???? kauraruoka, soija, mustapippuri ja persilja. Anna porista miedolla l??mm??ll?? n. 5 min (kun kastike on saostunut). <br>  <br> Herkuttele kasvispihvien tai -py??ryk??iden ja perunoiden kera! <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: http://www.herkuttelijat.fi/2014/03/mahtavan-hyva-erilainen-ja-maukas.html <br>  <br>  <br>  <br> ";

		document.getElementById("pic00").src = "Sienikastike.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Wokki") {
	
		document.getElementById("food1").innerHTML = "Wokki";
		document.getElementById("food2").innerHTML = "Wokki";
			
		document.getElementById("instructions").innerHTML = "4 annosta / 60 minuuttia <br> <br> <b> Aineet </b> <br> <input type=checkbox id=Wokki_tick1 value=1&nbsp;sipuli> 1 sipuli <br> <input type=checkbox id=Wokki_tick2 value=3&nbsp;porkkanaa> 3 porkkanaa <br> <input type=checkbox id=Wokki_tick3 value=pieni&nbsp;kaali> pieni kaali <br> <input type=checkbox id=Wokki_tick4 value=purkki&nbsp;vesikastanjoita> purkki vesikastanjoita <br> <input type=checkbox id=Wokki_tick5 value=pussi&nbsp;sokeriherneit??> pussi sokeriherneit?? <br> <input type=checkbox id=Wokki_tick6 value=puoli&nbsp;pussia&nbsp;pakasteparsakaalia> puoli pussia pakasteparsakaalia <br> <input type=checkbox id=Wokki_tick7 value=puoli&nbsp;pussia&nbsp;pakastemaissia> puoli pussia pakastemaissia <br> <input type=checkbox id=Wokki_tick8 value=paketti&nbsp;Vegetarian&nbsp;Wok&nbsp;Soya&nbsp;Stripsej??>  paketti Vegetarian Wok Soya Stripsej?? <br> <input type=checkbox id=Wokki_tick9 value=puoli&nbsp;pussia&nbsp;riisinoodelia>  puoli pussia riisinoodelia <br> <input type=checkbox id=Wokki_tick10 value=1&nbsp;tl&nbsp;jauhettua&nbsp;korianteria> 1 tl jauhettua korianteria <br> <input type=checkbox id=Wokki_tick11 value=1&nbsp;tl&nbsp;inkiv????ri??> 1 tl inkiv????ri?? <br> <input type=checkbox id=Wokki_tick12 value=1/2&nbsp;tl&nbsp;kurkumaa> 1/2 tl kurkumaa <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keit?? pakasteet, pilko muut kasvikset. Sekoita ne kesken????n. <br> Kaada tilkka ??ljy?? pannulle, sekoita mausteet ja lis???? kasvisseos pannulle. Paista ainakin 20 min. <br> <br> Lis???? soija stripsit ja paista viel?? 5 min. Paista erikseen jos ei mahdu samalle pannulle. <br> <br> Keit?? riisinoodelit ohjeen mukaan ja huuhtele kylm??ll?? vedell??. ";
			
		document.getElementById("pic00").src = "Wokki.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Vihis") {
	
		document.getElementById("food1").innerHTML = "Vihis";
		document.getElementById("food2").innerHTML = "Vihis";
		
		document.getElementById("instructions").innerHTML =
		
		"1 annos / 1,5 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Vihis_tick0 value=1&nbsp;kpl&nbsp;HoviRuoka&nbsp;Vihis&nbsp;kasvispiirakka&nbsp;115g> 1 kpl HoviRuoka Vihis kasvispiirakka 115g <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Ota Vihis pakkauksesta, halkaise ja l??mmit?? 1 minuutti mikrossa. <br>  <br> Mausta mielesi mukaan, esim. ketsupilla ja nauti vaiks suodatinpussista! <br>  <br>  <br>  <br> ";
		
		document.getElementById("pic00").src = "Vihis.jpg";
		
		clear();

	}

	if(ruuat[meal_number]=="Pasta carbonara") {
	
		document.getElementById("food1").innerHTML = "Pasta carbonara";
		document.getElementById("food2").innerHTML = "Pasta carbonara";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 30 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Pasta_carbonara_tick0 value=4&nbsp;rkl&nbsp;vett??> 4 rkl vett?? <br><input type=checkbox id=Pasta_carbonara_tick1 value=3&nbsp;rkl&nbsp;soijakastiketta> 3 rkl soijakastiketta <br><input type=checkbox id=Pasta_carbonara_tick2 value=2&nbsp;rkl&nbsp;tummaa&nbsp;siirappia> 2 rkl tummaa siirappia <br><input type=checkbox id=Pasta_carbonara_tick3 value=4&nbsp;tl&nbsp;riisiviinietikkaa> 4 tl riisiviinietikkaa <br><input type=checkbox id=Pasta_carbonara_tick4 value=3&nbsp;tl&nbsp;nestem??ist??&nbsp;savuaromia> 3 tl nestem??ist?? savuaromia <br><input type=checkbox id=Pasta_carbonara_tick5 value=6&nbsp;dl&nbsp;Hernist??> 6 dl Hernist?? <br><input type=checkbox id=Pasta_carbonara_tick6 value=??ljy??&nbsp;paistamiseen> ??ljy?? paistamiseen <br><input type=checkbox id=Pasta_carbonara_tick7 value=12&nbsp;ker????&nbsp;tagliatellea> 12 ker???? tagliatellea <br><input type=checkbox id=Pasta_carbonara_tick8 value=4&nbsp;kev??tsipulia> 4 kev??tsipulia <br><input type=checkbox id=Pasta_carbonara_tick9 value=2&nbsp;iso&nbsp;valkosipulinkynsi> 2 iso valkosipulinkynsi <br><input type=checkbox id=Pasta_carbonara_tick10 value=2&nbsp;rkl&nbsp;oliivi??ljy??> 2 rkl oliivi??ljy?? <br><input type=checkbox id=Pasta_carbonara_tick11 value=5&nbsp;dl&nbsp;juustonmakuista&nbsp;kaurakermaa> 5 dl juustonmakuista kaurakermaa <br><input type=checkbox id=Pasta_carbonara_tick12 value=??&nbsp;dl&nbsp;ravintohiivahiutaleita> ?? dl ravintohiivahiutaleita <br><input type=checkbox id=Pasta_carbonara_tick13 value=mustapippuria&nbsp;myllyst??> mustapippuria myllyst?? <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Sekoita ensin yhteen vesi, soijakastike, tumma siirappi, riisiviinietikka ja savuaromi. Sekoita kastike Herniksen joukkoon ja anna nesteen imeyty?? v??lill?? k????nnellen (t??h??n menee muutama minuutti). <br>  <br> Paista Hernis-pekoni rapeaksi paistinpannulla ??ljyss?? ja nosta pekoni sitten talouspaperin p????lle odottamaan. <br>  <br> Keit?? tagliatelle pakkauksen ohjeen mukaan. <br>  <br> Silppua kev??tsipuli ja hienonna valkosipulinkynnet. Kuumenna ??ljy paistinpannulla ja kuullota valkosipulia ??ljyss?? hetki. Kaada sitten paistinpannulle kaurakerma, lis???? ravintohiivahiutaleet. Sekoittele tasaiseksi ja lis???? sitten pannulle kev??tsipuli ja mustapippuri. <br>  <br> Yhdist?? kastike ja keitetty pasta. Lis???? lopuksi joukkoon Hernis-pekoni. <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://chocochili.net/2021/10/vegaaninen-pasta-carbonara/ <br>  <br>  <br>  <br> ";

		document.getElementById("pic00").src = "Pasta carbonara.jpg";

		clear();

	}

	if(ruuat[meal_number]=="Gochujang-nuudelit") {
	
		document.getElementById("food1").innerHTML = "Gochujang-nuudelit";
		document.getElementById("food2").innerHTML = "Gochujang-nuudelit";

		document.getElementById("instructions").innerHTML =

		"4 annosta / 30 minuuttia <br> <br> <b> Aineet </b> <br>  <input type=checkbox id=Gochujang-nuudelit_tick0 value=150&nbsp;g&nbsp;leveit??&nbsp;riisinuudeleita> 150 g leveit?? riisinuudeleita <br><input type=checkbox id=Gochujang-nuudelit_tick1 value=1/2&nbsp;ps&nbsp;(n.&nbsp;6&nbsp;dl)&nbsp;Hernist??> 1/2 ps (n. 6 dl) Hernist?? <br><input type=checkbox id=Gochujang-nuudelit_tick2 value=??ljy??&nbsp;paistamiseen> ??ljy?? paistamiseen <br><input type=checkbox id=Gochujang-nuudelit_tick3 value=2&nbsp;dl&nbsp;vett??> 2 dl vett?? <br><input type=checkbox id=Gochujang-nuudelit_tick4 value=2-3&nbsp;rkl&nbsp;gochujang-chilitahnaa> 2-3 rkl gochujang-chilitahnaa <br><input type=checkbox id=Gochujang-nuudelit_tick5 value=4&nbsp;1/2&nbsp;rkl&nbsp;soijakastiketta> 4 1/2 rkl soijakastiketta <br><input type=checkbox id=Gochujang-nuudelit_tick6 value=2&nbsp;rkl&nbsp;seesami??ljy??> 2 rkl seesami??ljy?? <br><input type=checkbox id=Gochujang-nuudelit_tick7 value=2&nbsp;rkl&nbsp;riisiviinietikkaa> 2 rkl riisiviinietikkaa <br><input type=checkbox id=Gochujang-nuudelit_tick8 value=1&nbsp;rkl&nbsp;inkiv????ri??&nbsp;raastettuna> 1 rkl inkiv????ri?? raastettuna <br><input type=checkbox id=Gochujang-nuudelit_tick9 value=2&nbsp;valkosipulinkyntt??&nbsp;hienonnettuna> 2 valkosipulinkyntt?? hienonnettuna <br> <br> <button onclick=lisaaListaan()>Lis???? ostoslistaan</button> <br> <br> <br> <b> Valmistusohje </b> <br> Keit?? nuudelit pakkauksen ohjeen mukaan melkein kypsiksi. Valuta siivil??ss??. <br>  <br> Kuumenna ??ljy pannulla. Lis???? Hernis ja paista pari minuuttia. Lis???? vesi ja anna hautua, kunnes vesi on imeytynyt Hernikseen. <br>  <br> Sill?? v??lin valmista kastike sekoittamalla kaikki kastikkeen ainekset: gochujang-chilitahna, soijakastike, seesami??ljy, riisiviinietikka, raastettu inkiv????ri ja hienonnettu valkosipuli yhteen.  <br>  <br> Kun vesi on imeytynyt Hernikseen, lis???? viel?? tilkka ??ljy?? ja ruskista Hernis nopeasti. Lis???? nuudelit ja kastike. Sekoita ja anna kuumeta.  <br>  <br> Yll?? oleva resepti on muokattu alkuper??isest?? reseptist??, joka on l??ydetty: https://vegeviettelys.blogspot.com/2021/10/gochujang-nuudelit.html <br>  <br>  <br>  <br> ";

		document.getElementById("pic00").src = "Gochujang-nuudelit.jpg";

		clear()

	}

}


function randomMeal() { 
	var random = Math.floor(Math.random() * ruuat.length);

	for(let i = 0; i<ruuat.length; i++) {
		if(random == i) {
			meals(i);	
		}
	}	
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
	//console.log(lista.toString());
}


function tulostaLista() {

	if(lista[0]=="") {
		lista.shift(); 
	}

	document.getElementById("food1").innerHTML = "Ostoslista";
	document.getElementById("food2").innerHTML = "Ostoslista";
		
	document.getElementById("instructions").innerHTML = lista.join('<br/>') ;
	
	document.getElementById("pic00").src = "";
	
	clear();	
}