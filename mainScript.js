

 
  const positions = {'Zrenjanin':{'left': 40, 'top': 18},
					'Novi Sad': {'left': 25, 'top': 20},
					'Indjija':{'left': 25, 'top': 23},
					'Vrbas':{'left': 20, 'top': 15},
					'Cacak':{'left': 25, 'top': 52},
					'Kragujevac':{'left': 49, 'top': 43},
					'Leskovac':{'left': 65, 'top': 65},
					'Pirot':{'left': 85, 'top': 60},
					'Sabac':{'left': 20, 'top': 30},
					'Nis':{'left': 67, 'top': 57},
					'Jagodina':{'left': 55, 'top': 37},
					'Lazarevac':{'left': 40, 'top': 32},
					'Smederevo':{'left': 48, 'top': 29},
					'Vranje': {"left":72, "top":70},
					'Loznica':{'left': 15, 'top': 35},
					'Uzice':{'left': 23, 'top': 57},
					'Kraljevo':{'left': 36, 'top': 48},
					'Arandjelovac':{'left': 35, 'top': 35},
					'Vrsac':{'left': 56, 'top': 22},
					'Krusevac':{'left': 55, 'top': 52},
					'Zajecar':{'left':75, 'top': 50},
					'Stara Pazova':{'left':23, 'top': 26},
					'Pozarevac':{'left':54, 'top': 32},
					'Kula':{'left':15, 'top': 13},
					'Bor':{'left':75, 'top': 40},
					'Prokuplje':{'left':57, 'top': 61},
					
					
					
					
  }
  const globalniPartneriSpisak= ['Gigatron', 'Galerija Podova', 'ArtInvest', 'Metro Obuca', 'Djak']
  
  const detailBoxes ={
					'Zrenjanin':{'id': 'div1',
					'textPartners': 
					'Targetirana kompanija je DAD draxelmeier, koja zaposljava preko 6000 radnika.Partneri u akciji su Milupino, koja je lokalna prodavnica opreme za decu i Gigatron.sa Milupinom je sklopljen ugovor o podeli vaucera za opremu u visini od 1000 dinara na kupovinu preko 4000.Vauceri isporuceni ekspozituri 20.12. Pratimo konverziju klijenata.', 
					'textAdresses':"",'opis': 'Djak, Gigatron, Milupino'},
					
					'Novi Sad': {'id': 'div2', 'textPartners': "Targetirana kompanija je LEAR sa preko 2500 zaposlenih.poslati vauceri za podelu svim zaposlenima. Vauceri su vazeci samo ukoliko se overe u ekspozituri, sto znaci da potencijalni korisnik, mora da dodje do jedne od ekspozitura, i licno preuzme. ", 'textAdresses':"", 'opis':""},
					
					'Indjija':{'id': 'div3', 'textPartners': "Poseta kompaniji Indoadriatic industry u INdjiji.U Staroj Pazovi, poseta kompanijiFroneri Adriatic, dogovorena distribucija vaucera Djak, posteri sa ponudom za prenos zarade", 'textAdresses':"", 'opis':""},
					
					'Vrbas':{'id': 'div4', 'textPartners': "Poseta kompanija Carnex i Jaffa Crvenka, specijalna ponuda za zaposlene (vauceri/dani kupovine); uspostavljanje lokalnog partnerstva sa ITI trgovinom (bela tehnika/mesovita roba). Prosledjen ugovor o saranji i na zahtev dkokumentacija za otvaranje racuna i Masterata kartice.", 'textAdresses':"", 'opis':""},
					
					'Cacak':{'id': 'div5', 'textPartners': "poseta kompaniji Vorwerk, specijalna ponuda za zaposlene (vauceri/dani kupovine). odrzan sastanak sa kompanijom metalac zainteresovani za vucere", 'textAdresses':"", 'opis':""},
					
					'Kragujevac':{'id': 'div6', 'textPartners': "Perfeto obuca (lokalno partnerstvo) u cilju akvizicije Payroll-a na podrucju KG. Dogovreno stampanje vaucera i dani kupovine.U planu sklapanje novih lokalnih partnerstva iz druguih industrija (bela tehnika/namestaj/odeca).Targetirane kompanije -javna preduzeca sa liste A-3.", 'textAdresses':"", 'opis':""},
					
					'Leskovac':{'id': 'div7', 'textPartners': "Poseta kompanija Aptiv, Yura, Falke. .Sa lokalnim partnerom VERA home dogovorena distribucija vaucera i organizovanje dana kupovine 17% .", 'textAdresses':"", 'opis':""},
					
					'Pirot':{'id': 'div8', 'textPartners': "Poseta kompanije Tigar (Michelin), specijalan ponuda za zaposlene vauceri kaoi dani kupone sa Gigatron partnerom.Termin je 9-15.12 odnsno nedelja posle podele zarada. Odobren je popus od 20% na sve artikle. Orgaizovana je CRM kampanja u kojoj su obavesteni svi nasi klijenti , poslate Viber poruke.Odrzana nedelja kupovine sa oko 100 prikupljenih lidova, uglavnom zaposlenih u fabrici.Pratimo konverziju u klijente", 'textAdresses':"", 'opis':""},
					
					'Sabac':{'id': 'div9', 'textPartners': "Sa kompanijom PWL dogovorena stampa vaucera koji ce biti prosledjeni fabrici yazaki. Odstampani vauceri koji upucuju na rednje PWL a u tri grada", 'textAdresses':'','opis':""},
					
					'Nis':{'id': 'div10', 'textPartners': "Kontaktiran Johnson electric podeljeni vauceri potpisani ugovori sa Tehnomedijom uz 20% popusta na maloprodajne cene i tepihmix 10%", 'textAdresses':"", 'opis':""},
					
					'Jagodina':{'id': 'div11', 'textPartners': "Poseta kompanijama Andrea confectioni i yuhor. Dgovorena distribucija vaucera svim zaposlenima (700+700) kao i shopping dani u Djaku i Gigatronu. Poptisan ugovor sa robnom kucom Hrast: 10 % popusta na namestaj", 'textAdresses':"", 'opis':""},
					
					'Lazarevac':{'id': 'div12', 'textPartners': "Sa lokalnim prodavcem obuce Bubamara dogovorena saradnja i ponuda vaucera radnicima Kolubare.Poslate SMS poruke zaposlenima u Kolubari. Sa kompanijom Djordjevic sport dogovorena saradnja (vauceri+dani kupovine)", 'textAdresses':"", 'opis':""},
					
					'Smederevo':{'id': 'div13', 'textPartners': "U Smederevu sa distributerom PC opreme komparator dogovreni dani kupovine, sa Opticarskom radnjom izradu vaucera", 'textAdresses':"", 'opis':""},
					
					'Vranje': {'id': 'div14', 'textPartners': "Sa Alfa PLamom dogovorena saradnja poslat ugovor na potpisivanje, Sa Simpom dogovoreno ukljucivanje u paket uz stambeni kredit. podeljeni vauceri Donaline 10% ", 'textAdresses':"", 'opis':""},
					
					'Loznica':{'id': 'div15', 'textPartners': "", 'textAdresses':"", 'opis':""},
					
					'Uzice':{'id': 'div16', 'textPartners': "Atlas namestaj zainteresovan za ovaj tip saradnje u toku prelog ugvora", 'textAdresses':"", 'opis':""},
					
					'Kraljevo':{'id': 'div17', 'textPartners': "Kontakt sa kompanijom forma ideale cekamo da potvrde popust od dodatnih 5%", 'textAdresses':"", 'opis':""},
					
					'Arandjelovac':{'id': 'div18', 'textPartners': "Kontaktirana kompanija 3 -O  bela tehnika sa kojom je nacelno dogovren slucan aranzman kao sa gigatroonom", 'textAdresses':"", 'opis':""},
					
					'Vrsac':{'id': 'div19',
					'textPartners': "Partner Trgoban, prodavnice bele thenike, potpisan ugovor za 15% popusta na redovne cene, vazi do 31.12.2020. tri maloprodaje u Vrscu, Pancevu i B.Karlovcu", 
					'textAdresses':'', 'opis':'Trgoban(lokalni prodavac) vauceri'},
					
					'Krusevac':{'id': 'div20',
					'textPartners': "Elmos(sanitarije) odobrio popust od 10% na redovne cene, Gutic(namestaj) odobrio 5% ", 
					'textAdresses':"", 'opis':'Lokalni partneri Elmos i Gutic'},
					
					'Zajecar':{'id':'div21', 'textPartners':"",'textAdresses':"", 'opis': ""},
					'Stara Pazova':{'id':'div22', 'textPartners':"",'textAdresses':"", 'opis': ""},
					'Pozarevac':{'id':'div23', 'textPartners':"",'textAdresses':"", 'opis': ""},
					'Kula':{'id':'div24', 'textPartners':"",'textAdresses':"", 'opis': ""},
					'Bor':{'id':'div25', 'textPartners':"",'textAdresses':"", 'opis': ""},
					'Prokuplje':{'id':'div26', 'textPartners':"",'textAdresses':"", 'opis': ""},
					
  }
  
  const partnersByPlaces = {
	'Gigatron( Vazi do 01.03.2021)- (20% popusta na maloprodajne cene uz izuzece shock cena artikala)': ['Beograd',
'Cacak',
'Gornji Milanovac',
'Jagodina',
'Kikinda',
'Kragujevac',
'Kraljevo',
'Krusevac',
'Leskovac',
'Loznica',
'Nis',
'Novi Sad',
'Obrenovac',
'Pancevo',
'Pirot',
'Pozarevac',
'Ruma',
'Sabac',
'Smederevo',
'Sombor',
'Sremska Mitrovica',
'Stara Pazova',
'Subotica',
'Uzice',
'Valjevo',
'Vrsac',
'Zajecar',
'Zrenjanin',],
	'Djak(vazi do 31.12.2020) - (20% popusta na nesnizenu garderobu)':['Aranđelovac',
'Backa Palanka',
'Beograd',
'Nis',
'Novi Pazar',
'Novi Sad',
'Obrenovac',
'Pancevo',
'Pozarevac',
'Pozega',
'Prijepolje',
'Prokuplje',
'Raska',
'Ruma',
'Sabac',
'Smederevo',
'Smederevska Palanka',
'Sremska Mitrovica',
'Stara Pazova',
'Subotica',
'Ub',
'Uzice',
'Velika Plana',
'Vranje',
'Zajecar',
'Zrenjanin',
], 
	'Metro Obuca(vazi do 31.12.2020)-(dodatnih 10% popusta na vec snizenu robu)':['Ada',
'Aleksinac',
'Apatin',
'Arandjelovac',
'Arilje',
'Backa palanka',
'Bajina basta',
'Banjica',
'Becej',
'Bela crkva',
'Beograd',
'Bor',
'Cacak',
'Curug',
'Futog',
'Gornji milanovac',
'Indija',
'Ivanjica',
'Jagodina',
'Kanjiza',
'Kikinda',
'Kladovo',
'Knjazevac',
'Kragujevac',
'Kraljevo',
'Krusevac',
'Kula',
'Lazarevac',
'Leskovac',
'Loznica',
'Mladenovac',
'Negotin',
'Nis',
'Nova Varos',
'Novi Pazar',
'Novi Sad',
'Obrenovac',
'Odzaci',
'Pancevo',
'Paracin',
'Petrovac na mlavi',
'Pirot',
'Pozarevac',
'Priboj',
'Prijepolje',
'Prokuplje',
'Ruma',
'Raska',
'Sabac',
'Senta',
'Sid',
'Sjenica',
'Smederevo',
'Smederevska palanka',
'Sombor',
'Sremska mitrovica',
'Stara pazova',
'Subotica',
'Surdulica',
'Svilajnac',
'Temerin',
'Titel',
'Uzice',
'Valjevo',
'Vlasotince',
'Vozdovac',
'Vranje',
'Vrbas',
'Vrsac',
'Zajecar',
'Zrenjanin',
], 'Galerija podova -(dodatnih 10% popusta na vec snizenu robu)':['Backa Palanka','Becej', 'Lazarevac',
 'Sremska Mitrovica', 'Ruma', 'Sombor', 'Indjija', 'Nis', 'Arandjelovac', 'Valjevo', 'Krusevac',
 'Smederevo','Vranje', 'Kragujevac', 'Kraljevo', 'Pozarevac', 'Jagodina', 'Bor', 'Mladenovac',
 'Cacak', 'Novi Sad','Zajecar', 'Pancevo', 'Kikinda', 'Vrsac', 'sabac', 'Leskovac', 'Subotica',
 'Pirot', 'Kragujevac', 'Uzice', 'Loznica', 'Beograd'   ],
  'Art invest':['Beograd', 'Nis', 'Novi Sad'], 'Home Centar Vera(vazi do 31.12.2020)-(17% popusta na nesnizenu robu)':['Leskovac', 'Vlasotince', 'Lebane'], 'Tehnomedia(vazi do 31.12.2020)-20% popusta na maloprodajne cene':['Zajecar', 'Nis'], 'Martini Vesto-(1000 dinara bonusa na potrosenih 4000)':['Beograd',
'Cacak',
'Jagodina',
'Kragujevac',
'Kraljevo',
'Krusevac',
'Leskovac',
'Nis',
'Paracin',
'Uzice',
'Vranje',],
  'Bubamara-(20% popusta na sve nesnizeno)':['Lazarevac'], 'Donna Line(vazi do 31.12.2020)-(10% popusta)':['Vranje'], 'Perfeto obuca-(1000 dinara za kupovinu u vrednosti od 5900 i vise)':['Kragujevac'], 'Milupino(vazi do 31.12.2020)-(poklon vaucer od 1000 dinara za kupovinku preko 5000)':['Zrenjanin'],
  'Passage':['Pancevo'], 'Trgoban-(15% popusta na sve nesnizeno)':['Vrsac', 'Kovacica', 'Pancevo'], 'Vitez & Kom -(15% popusta na sve nesnizeno)':['Vranje','Surdulica', 'Vladicin Han' ],
  'Robna Kuca Hrast-(5% popusta na iznose do 400.000 i 10% popusta na iznose preko 400.000)':['Paracin'], 
  'Tepih Mix-(10% popusta na sve proizvode koji nisu na akciji. Moze se naruciti i on-line)':['Nis'],}
  
  
  
  
  function createDivBox() {
  let wrap= document.querySelector('.right')
	function findCity(element) {
		console.log(element,cityName)
			if (element===cityName) return true
		}
  if (wrap.hasChildNodes()){
  
  wrap.innerHTML=""}
  
  const cityName=this.innerHTML
  let keysPartnersByPlaces =Array.from(Object.keys(partnersByPlaces))
 
  
  //create HTML elements
	let key = this.id
	let div = document.createElement('div')
	let textPartnersWrapper = document.createElement('div')
	let textAdressesWrapper = document.createElement('div')
	let textPartners = document.createElement('div')
	let textAdresses = document.createElement('div')
	let headline = document.createElement('h4')
	let headlinePartners=document.createElement('h6')
	let headlineAdresses=document.createElement('h6')
	
	
	//adding properties to created elements
	
	div.addClassName = 'board'
	div.style.overflow="auto"
	div.style.display='flex'
	div.style.justifyContent='space-between'
	
	textPartnersWrapper.style.width="45%"
	textPartners.style.overflow="scroll"
	textPartners.minWidth="100px"
	textPartners.style.backgroundColor="#edebe4"
	textPartners.style.borderRadius="5px"
	textPartners.style.padding="3px"
	textPartners.style.marginBottom="5%"
	textPartnersWrapper.style.display='inline-block';
	
	textAdresses.style.backgroundColor="#edebe4"
	textAdresses.style.padding="3px"
	textAdressesWrapper.style.borderRadius="5px"
	textAdressesWrapper.style.marginBottom="5%"
	
	textAdresses.style.borderRadius="5px"
	textAdresses.minWidth="100px"
	textAdresses.style.overflow="scroll"
	textAdressesWrapper.style.width="45%"
	textAdresses.style.display='inline-block';
	
	
	headline.innerHTML =Object.keys(detailBoxes)[key]
	headlinePartners.innerHTML='Akcije u toku'
	headlineAdresses.innerHTML='Lista Partnera'
	
	let detailsPartners = detailBoxes[Object.keys(detailBoxes)[key]]['textPartners']
	let detailsAdresses = detailBoxes[Object.keys(detailBoxes)[key]]['textAdresses']
	
	 keysPartnersByPlaces.forEach (function (item) {
	let cityNamesValues = partnersByPlaces[item]
		
	 if(cityNamesValues.find(findCity)) {
	 detailsAdresses+=(item.split('-')[0].bold()+"  "+item.split('-')[1]+". "+" "+"\n")
	 detailsAdresses+="</br>"
	 }
  })
	textPartners.innerHTML =detailsPartners
	
	textAdresses.innerHTML =detailsAdresses
	
	
	
	//asigning elements
	wrap.appendChild(headline)
	div.appendChild(textPartnersWrapper)
	div.appendChild(textAdressesWrapper)
	textPartnersWrapper.appendChild(headlinePartners)
	textAdressesWrapper.appendChild(headlineAdresses)
	textAdressesWrapper.appendChild(textAdresses)
	textPartnersWrapper.appendChild(textPartners)
	
	wrap.appendChild(div)
	
	
	
	
  }
 
  
  
// displays city names with positions
  const cityNames = document.getElementById('mapNames').children
  const cityNamesArray = Array.from(cityNames)
 
  
  for (i=1;i<cityNamesArray.length;i++){
  
	cityNamesArray[i].style.color='black'
	cityNamesArray[i].id=i-1
	cityNamesArray[i].title=detailBoxes[Object.keys(detailBoxes)[i-1]]['opis']
	cityNamesArray[i].onclick= createDivBox
	cityNamesArray[i].style.position='absolute'
  cityNamesArray[i].style.left=positions[Object.keys(positions)[i-1]]['left']+'%'
  cityNamesArray[i].style.top=positions[Object.keys(positions)[i-1]]['top']+'%'
  }
  
  
 
