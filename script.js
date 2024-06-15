// Skrypt do obsługi funkcjonalności interaktywnej na stronie

document.addEventListener("DOMContentLoaded", function() {
	
	var translationsNav = {
			'pl': {
				'cosmos': '🌟KOSMOS🌟',
				'home': '🌌 Strona główna',
                'science': 'Nauka',
                'gallery': 'Galeria',
                'events': 'Wydarzenia',
                'policy': 'Polityka prywatności',
                'about': 'O nas',
                'contact': 'Kontakt'
			},
			'en': {
				'cosmos': '🌟COSMOS🌟',
				'home': '🌌 Home',
				'science': 'Science',
				'gallery': 'Gallery',
				'events': 'Events',
				'policy': 'Privacy Policy',
				'about': 'About us',
				'contact': 'Contact'
			}
		};
		
	var translations = {
            'pl': {
                'home': `
					<h2>Witajcie na mojej stronie, gdzie zgłębiam tajemnice kosmosu oraz wszystko, co z nim związane!🚀</h2>
					<p>Wszechświat od zawsze fascynował ludzkość. Od momentu, gdy po raz pierwszy spojrzeliśmy w gwiazdy, zadawaliśmy sobie pytania o naszą rolę w tym ogromnym kosmicznym tańcu. Na tej stronie znajdziecie najnowsze odkrycia, teorie oraz ciekawostki na temat kosmosu, które pomogą Wam lepiej zrozumieć ten nieskończony i tajemniczy wszechświat. Kosmos to nie tylko planety i gwiazdy, ale również czarne dziury, galaktyki i niewidzialne siły, które kształtują nasze zrozumienie przestrzeni i czasu. Czy wiedzieliście, że nasza galaktyka, Droga Mleczna, jest tylko jedną z miliardów galaktyk w obserwowalnym wszechświecie? Każda z tych galaktyk zawiera miliardy gwiazd, a każda gwiazda może mieć swoje planety, niektóre z nich mogą nawet podtrzymywać życie.</p>
					<p>Od czasów starożytnych, kiedy to Babilończycy i Egipcjanie budowali pierwsze obserwatoria, aż po współczesne teleskopy kosmiczne, nasza wiedza o wszechświecie nieustannie się rozwija. Teleskop Hubble'a, który od ponad 30 lat dostarcza nam niesamowite obrazy odległych galaktyk i mgławic, zrewolucjonizował nasze rozumienie kosmosu.</p>
					<img src="zdjecia/image.png" alt="Gwiazdy">
					<p>Współczesna astronomia to także misje kosmiczne, takie jak Mars Rover, który bada powierzchnię Marsa, szukając śladów dawnego życia, czy misja New Horizons, która jako pierwsza zbadała Plutona i jego księżyce. Każda z tych misji przynosi nowe dane, które pomagają naukowcom zrozumieć, jak powstał i ewoluował nasz układ słoneczny.</p>
					<p>Nie można zapomnieć o tajemniczych ciemnych materii i ciemnej energii, które stanowią większość masy wszechświata, ale wciąż pozostają nieuchwytne i niezrozumiałe. Te niewidzialne składniki wszechświata wpływają na ruch galaktyk i ekspansję kosmosu, stanowiąc jedno z największych wyzwań dla współczesnej fizyki.Zapraszam Was do eksploracji zawartości tej strony. Znajdziecie tutaj artykuły, galerie zdjęć, informacje o najnowszych wydarzeniach kosmicznych oraz wiele więcej. Niezależnie od tego, czy jesteście doświadczonymi astronomami, czy dopiero zaczynacie swoją przygodę z kosmosem, mam nadzieję, że znajdziecie tutaj coś, co Was zainspiruje.Wspólnie odkrywajmy tajemnice wszechświata i poszerzajmy nasze horyzonty wiedzy o kosmosie. Każdy nowy odkryty szczegół przybliża nas do zrozumienia, jak niesamowity i złożony jest świat, w którym żyjemy. 🌌</p>
				`,
                'science': `<div><h3></h3><h2>Artykuł: Odkrywając Kosmos: Najnowsze odkrycia i zagadki wszechświata</h2>
					<p>Kosmos fascynuje nas swoją nieskończoną przestrzenią i tajemnicami, które skrywa. Nieustannie rozwijająca się technologia oraz odwaga badaczy pozwala nam coraz głębiej zagłębiać się w jego niezbadane zakątki. Oto przegląd najnowszych odkryć i zagadek, które zdobią współczesne badania kosmosu:</p>

					<h3>1. Egzoplanety: Wszystko, co powinieneś wiedzieć</h3>
					<p>Od czasu odkrycia pierwszej egzoplanety nasze zrozumienie wszechświata znacząco się poszerzyło. Obecnie znamy tysiące planet krążących wokół innych gwiazd. Najnowsze odkrycia w tej dziedzinie wskazują na różnorodność egzoplanet oraz możliwość istnienia warunków sprzyjających życiu poza naszym Układem Słonecznym.</p>

					<h3>2. Powstawanie Gwiazd: Tajemnice kosmicznych "narodzin"</h3>
					<p>Procesy formowania gwiazd to jedne z najbardziej fascynujących zjawisk w kosmosie. Dzięki nowoczesnym teleskopom możemy obserwować, jak gęste obłoki gazu i pyłu gwiazdowego przekształcają się w nowe gwiazdy. Najnowsze badania rzucają nowe światło na te procesy, które kształtują strukturę galaktyk.</p>

					<h3>3. Ciemna Materii i Energia: Nieznane siły Wszechświata</h3>
					<p>Większość materii i energii we Wszechświecie jest niewidoczna dla ludzkiego oka. Ciemna materia oraz ciemna energia stanowią większość masy i energii Wszechświata, lecz ich natura nadal pozostaje zagadką. Nowe eksperymenty i teorie pomagają nam lepiej zrozumieć rolę tych tajemniczych składników w kosmicznych procesach.</p>

					<h3>4. Teleskopy Kosmiczne: Okno na Wszechświat</h3>
					<p>Teleskopy kosmiczne, takie jak Hubble, Spitzer czy Kepler, umożliwiają nam obserwacje kosmosu na niespotykaną dotąd skalę. Dzięki nim możemy badać odległe galaktyki, supernowe oraz najmniejsze szczegóły planet Układu Słonecznego. Najnowsze zdjęcia i dane zbierane przez te instrumenty otwierają nowe perspektywy w badaniach kosmosu.

					<h3>5. Wielki Wybuch: Początki Wszechświata</h3>
					<p>Teoria Wielkiego Wybuchu, opisująca początki naszego Wszechświata, jest jednym z najbardziej fascynujących osiągnięć współczesnej kosmologii. Badania mikrofalowego promieniowania tła oraz struktur kosmicznych pozwalają nam odtworzyć scenariusze, jakie miały miejsce zaraz po samym narodzinach Wszechświata.</p>

					<h3>6. Przyszłość Badań Kosmosu: Misje i Wydarzenia</h3>
					<p>Przyszłość badań kosmosu zapowiada się ekscytująco. Planowane misje, takie jak James Webb Space Telescope czy misje załogowe na Marsa, mają potencjał radykalnie zmienić nasze zrozumienie kosmicznych tajemnic. Śledźcie naszą stronę, aby być na bieżąco z najnowszymi osiągnięciami naukowymi i odkryciami w kosmosie.</p><h2></h2></div>
					
					<div><h3></h3><h2>Artykuł: Tajemnice Czarnej Dziury: Co Wiemy i Czego Nie</h2>
					<p>Czarne dziury są jednymi z najbardziej tajemniczych i fascynujących obiektów we Wszechświecie. Ich grawitacyjne pułapki pochłaniają wszystko, co wpadnie w ich zasięg, w tym światło. Oto przegląd najnowszych odkryć i zagadek związanych z czarnymi dziurami:</p>

					<h3>1. Rodzaje Czarnych Dziur: Małe, Duże i Supermasywne</h3>
					<p>Czarne dziury występują w różnych rozmiarach. Od mikroskopijnych czarnych dziur powstałych w wyniku kolapsu gwiazd, przez średnie masywne czarne dziury w centrach galaktyk, po ogromne supermasywne czarne dziury, takie jak ta w centrum naszej Galaktyki, o masie milionów razy większej od masy Słońca.</p>

					<h3>2. Powstawanie Czarnych Dziur: Zjawiska Kolapsu Gwiazd i Inne Scenariusze</h3>
					<p>Głównym sposobem powstawania czarnych dziur jest kolaps gwiazd po wyczerpaniu się jej paliwa termojądrowego. Jednak istnieją również inne scenariusze, takie jak połączenia czarnych dziur lub akretyczne procesy formowania czarnych dziur w centrach galaktyk.</p>

					<h3>3. Oddziaływanie Czarnych Dziur z Otoczeniem: Efekty i Wpływ na Kosmos</h3>
					<p>Czarne dziury mogą mieć znaczący wpływ na otaczające je środowisko. Emitują intensywne promieniowanie rentgenowskie i gamma podczas pochłaniania materii, co czyni je ważnymi obiektami do badania i zrozumienia ewolucji galaktyk.</p>

					<h3>4. Paradoks Informacyjny Hawkinga: Co Wiemy o Parowaniu Czarnych Dziur</h3>
					<p>Stephen Hawking zaproponował teoretycznie, że czarne dziury mogą parować, co prowadzi do stopniowego ich zmniejszania się i w końcu do ich całkowitego zniknięcia. Paradoks informacyjny Hawkinga dotyczy jednak utraty informacji o pierwotnym stanie, co wciąż jest tematem intensywnych debat w świecie fizyki teoretycznej.</p>

					<h3>5. Nowe Technologie Obserwacyjne: Jak Teleskopy Pomagają w Badaniach Czarnych Dziur</h3>
					<p>Nowoczesne teleskopy, takie jak Event Horizon Telescope, pozwalają nam na bezpośrednie obserwacje czarnych dziur i ich otoczenia. Dzięki zdjęciom w wysokiej rozdzielczości możemy badać strukturę akrecyjnych dysków i potwierdzać istnienie czarnych dziur w odległych galaktykach.</p>

					<h3>6. Czarna Dziura a Kosmiczna Eksploracja: Co Dalej?</h3>
					<p>Przyszłość badań nad czarnymi dziurami zapowiada się niezwykle ekscytująco. Nowe misje i technologie pozwolą nam zgłębiać ich tajemnice oraz lepiej zrozumieć ich rolę w kształtowaniu struktury Wszechświata. Śledźcie naszą stronę, aby być na bieżąco z najnowszymi odkryciami i debatami dotyczącymi czarnych dziur.></p><h2></h2></div>`,
                'gallery': `
					<h2>Galeria🚀</h2>
					<div class="gallery">
						<div class="image">
							<img src="zdjecia/kosmos1.png" alt="Kosmos1">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos2.png" alt="Kosmos2">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos3.png" alt="Kosmos3">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos4.png" alt="Kosmos4">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos5.png" alt="Kosmos5">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos6.png" alt="Kosmos6">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos7.png" alt="Kosmos7">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos8.png" alt="Kosmos8">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos9.png" alt="Kosmos9">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos10.png" alt="Kosmos10">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos11.png" alt="Kosmos11">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos12.png" alt="Kosmos12">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos13.png" alt="Kosmos13">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos14.png" alt="Kosmos14">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos15.png" alt="Kosmos15">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos16.png" alt="Kosmos16">
						</div>
					</div>
					`,
                'events': `<div class="gallery">
					<h2>Nadchodzące Wydarzenia Kosmiczne</h2>
					<h3>Śledź najnowsze wydarzenia kosmiczne i zjawiska astronomiczne, które dzieją się na całym świecie i poza nim!</h3>

				<div class="image">
					<h3>Coroczny Deszcz Meteorów</h3>
					<p>Obserwuj zapierający dech w piersiach coroczny deszcz meteorów, gdzie spadające gwiazdy rozświetlają nocne niebo.</p>
					<p>Data: 12-13 sierpnia 2024</p>
				</div>

				<div class="image">
					<h3>Obserwacja Zaćmienia Słonecznego</h3>
					<p>Dołącz do nas na specjalne wydarzenie obserwacji zaćmienia Słońca. Doświadcz tańca ciał niebieskich – Słońca i Księżyca razem!</p>
					<p>Data: 25 października 2024</p>
				</div>

				<div class="image">
					<h3>Konferencja Eksploracji Kosmosu</h3>
					<p>Weź udział w naszej konferencji eksploracji kosmosu, gdzie naukowcy i entuzjaści spotykają się, aby omówić najnowsze odkrycia i przyszłe misje.</p>
					<p>Data: 5-7 listopada 2024</p>
				</div>

				<div class="image">
					<h3>Międzynarodowy Dzień Kosmosu</h3>
					<p>Celebrowanie Międzynarodowego Dnia Kosmosu! Uczestnicz w warsztatach edukacyjnych, obserwacjach teleskopowych i interaktywnych wystawach.</p>
					<p>Data: 4 kwietnia 2025</p>
				</div>

				<div class="image">
					<h3>Obserwacje Gwiezdne</h3>
					<p>Dołącz do naszej gwiezdnej imprezy na nocne obserwacje i dyskusje astronomiczne. Odkrywaj cuda nocnego nieba z ekspertami.</p>
					<p>Data: 15 lipca 2025</p>
				</div>

				<div class="image">
					<h3>Aktualizacje Misji Mars Rover</h3>
					<p>Śledź najnowsze aktualizacje z misji Mars Rover, badającej Czerwoną Planetę i poszukującej śladów życia sprzed milionów lat.</p>
					<p>Data: regularnie aktualizowane</p>
				</div>

				</div>`,
				'policy':`<h2>1. Wprowadzenie</h2>

						<p>Witamy na stronie https://kubag01.github.io/ProjektStudia/. Dbamy o ochronę danych osobowych i użytkowników, które się włączają, uwzględniając przepisy dotyczące ochrony danych osobowych, w tym Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób prawnych w związku z korzystaniem z danych osobowych iw sprawie swobodnego dostępu takich danych oraz korzystania z usług 95/46/WE (ogólne rozporządzenie o ochronie danych, „RODO”).

						<h2>2. Zbieranie i przesyłanie danych osobowych</h2>

						<p>Podczas korzystania z naszej strony internetowej można zbierać i przetwarzać różne dane osobowe, takie jak: imię, nazwisko, adres e-mail, dane kontaktowe, które dobrowolnie nam udostępniasz poprzez formularze kontaktowe czy rejestracyjne. itp. Przetwarzamy te dane do analizy trendów i zbierania danych statystycznych, które pomagają nam lepiej zrozumieć preferencje użytkowników i doskonalić nasze usługi.</p>

						<h2>3. przechowywania plików cookies</h2>

						<p>Nasza strona internetowa używa plików cookie w celu zapewnienia najwyższej jakości korzystania z naszych usług oraz w częstotliwości statystycznej. naruszenie z naszej strony, zgadzasz się na używanie plików cookie z naszych polityką plików cookie. Udostępnienie plików cookie w ustawieniach sieci internetowej, ale może być wykorzystane do działania innego</p>

						<h2>4. Bezpieczeństwo danych</h2>

						<p>Zapewniamy, że Twoje dane osobowe są odpowiednio chronione przed nieautoryzowanym dostępem, utratą, wykorzystaniem, modyfikacją czy rozpowszechnianiem. Nie sprzedajemy, nie handlujemy ani nie udostępniamy Twoich danych osobowych osobom trzecim bez Twojej zgody, chyba że jest to wymagane przez prawo.</p>

						<h2>5. Twoje prawo</h2>

						<p>Masz prawo do dostępu do swoich danych osobowych, ich poprawy, usuwania, ograniczania przetwarzania, przenoszenia danych oraz wnoszenia wniosków do organu nadzorczego. Możesz także w każdej chwili wycofać udzieloną wcześniej zgodę na przetwarzanie danych. W celu realizacji swoich praw lub w przypadku pytań dotyczących naszej polityki prywatności, prosimy o kontakt w celu uzyskania pomocy danych na dole</p>

						<h2>6. Kontakt</h2>

						<p>W razie pytań dotyczących naszej polityki prywatności lub przetwarzania danych osobowych, prosimy o kontakt pod adresem kontakt@naszastrona.pl lub bezpośrednio pod numerem +48 123 456 789</p>`,
                'about': `<div class="gallery">
				  <div class="image">
					<h2></h2>
					<h2>O mnie</h2>
					<p>Witaj na mojej stronie poświęconej eksploracji kosmosu! Nazywam się Jakub i jestem entuzjastą astronomii, nauki oraz technologii. Wszechświat zawsze fascynował mnie, a ta strona jest moim sposobem na dzielenie się tą pasją z innymi.</p>
				  </div>

				  <div class="image">
					<h2>Moja misja</h2>
					<p>Moją misją jest upowszechnianie wiedzy o przestrzeni kosmicznej poprzez dostarczanie najnowszych informacji, artykułów, zdjęć i wiadomości. Moim celem jest inspiracja zarówno dzieci, jak i dorosłych do odkrywania i rozumienia tego, jak niesamowity i złożony jest wszechświat.</p>
				  </div>

				  <div class="image">
					<h2>Moje zainteresowania</h2>
					<p>Szczególnie interesuję się astrofizyką, kosmologią oraz eksploracją kosmosu. Uwielbiam śledzić najnowsze odkrycia naukowe i innowacje technologiczne związane z badaniami kosmicznymi. Staram się, aby moja strona była zawsze aktualna i dostarczała najbardziej rzetelne informacje.</p>
				  </div>

				  <div class="image">
					<h2>Moje projekty</h2>
					<p>Prowadzę różne projekty mające na celu przybliżenie tematyki kosmicznej szerszej publiczności. Organizuję wykłady, warsztaty, obserwacje astronomiczne oraz publikuję artykuły i materiały edukacyjne. Każdy z tych projektów stanowi dla mnie okazję do dzielenia się wiedzą i pasją.</p>
				  </div>

				  <div class="image">
					<h2>Historia tej strony</h2>
					<p>Ta strona powstała z potrzeby podzielenia się moją pasją do kosmosu. Początkowo była to niewielka witryna, na której publikowałem swoje przemyślenia i obserwacje. Z czasem strona ewoluowała, przyciągając coraz więcej osób zainteresowanych tematyką kosmiczną. Dziś jest to miejsce, gdzie można znaleźć najnowsze informacje, artykuły oraz inspirujące treści związane z kosmosem.</p>
				  </div>

				  <div class="image">
					<h2>Moje plany na przyszłość</h2>
					<p>Planuję dalszy rozwój strony, wprowadzenie nowych funkcji oraz dostarczanie jeszcze więcej treści edukacyjnych. Chcę, aby ta strona stała się miejscem spotkań wszystkich entuzjastów kosmosu, gdzie możemy dzielić się wiedzą, doświadczeniami oraz pasją.</p>
				  </div>
				  
				  <div class="image">
						<h2></h2>
					</div>
				</div>

					`,
                'contact': `<h2>Kontakt</h2>
					<p>Jeżeli masz pytania, sugestie lub chcesz nawiązać współpracę, skontaktuj się ze mną! Jestem otwarty na wszelkie propozycje i chętnie odpowiem na każde pytanie.</p>

					<h3>Dane kontaktowe</h3>
					<p>Email: kontakt@naszastrona.pl</p>
					<p>Telefon: +48 123 456 789</p>
					<p>Adres: ul. Kosmiczna 1, 00-123 Warszawa, Polska</p>

					<h3>Formularz kontaktowy</h3><br><br>
					<div class="contact-form">
					  <form>
						<div class="form-group">
						  <label for="name">Name:</label><br>
						  <input type="text" id="name" name="name" required><br>
						</div>
						<div class="form-group">
						  <label for="email">Email:</label><br>
						  <input type="email" id="email" name="email" required><br>
						</div>
						<div class="form-group">
						  <label for="message">Message:</label><br>
						  <textarea id="message" name="message" rows="6" required></textarea><br>
						</div>
						<div class="form-group">
							<input type="checkbox" id="consent" name="consent" required>
							<label for="consent">Zgoda na przetwarzanie danych osobowych*</label><br>
						</div>
						<div class="form-group">
						  <button type="submit">Send</button>
						</div>
					  </form>
					</div><br><br>
					`,
					'rights':`© 2024 Jakub Głąbiak - Wszelkie prawa zastrzeżone.`,
					'cookieAlert': `
					<div class="cookie-alert" id="cookieAlert">
						<p>Ta strona używa plików cookies. Korzystając ze strony, wyrażasz zgodę na używanie plików cookies. </p>
						<p>Zapoznaj się z naszą <a href="#policy" id="policy">Polityką Prywatności:</a></p>
						<button id="acceptBtn">Zgadzam się</button>
						<button id="rejectBtn">Nie zgadzam się</button>
					</div>
					`
            },
            'en': {
                'home': `
                    <h2>Welcome to my website, where we explore the mysteries of the cosmos and everything related to it!🚀</h2>
					<p>The universe has always fascinated humanity. From the moment we first looked up at the stars, we asked ourselves questions about our role in this vast cosmic dance. On this site, you'll find the latest discoveries, theories, and interesting facts about the cosmos, helping you to better understand this infinite and mysterious universe. The cosmos is not just about planets and stars, but also black holes, galaxies, and invisible forces that shape our understanding of space and time. Did you know that our galaxy, the Milky Way, is just one of billions of galaxies in the observable universe? Each of these galaxies contains billions of stars, and each star can have its own planets, some of which might even support life.</p>
					<p>From ancient times, when Babylonians and Egyptians built the first observatories, to modern space telescopes, our knowledge of the universe has constantly evolved. The Hubble Telescope, which has been providing us with incredible images of distant galaxies and nebulae for over 30 years, has revolutionized our understanding of the cosmos.</p>
					<img src="zdjecia/image.png" alt="Stars">
					<p>Modern astronomy also includes space missions, such as the Mars Rover, which explores the surface of Mars in search of signs of past life, or the New Horizons mission, which was the first to study Pluto and its moons. Each of these missions brings new data that helps scientists understand how our solar system formed and evolved.</p>
					<p>We cannot forget the mysterious dark matter and dark energy, which make up most of the mass of the universe but remain elusive and misunderstood. These invisible components of the universe affect the movement of galaxies and the expansion of the cosmos, representing one of the biggest challenges for modern physics. I invite you to explore the contents of this site. You will find articles, photo galleries, information about the latest cosmic events, and much more. Whether you are an experienced astronomer or just beginning your journey into space, I hope you find something here that inspires you. Together, let's discover the mysteries of the universe and expand our horizons of knowledge about the cosmos. Every new detail we uncover brings us closer to understanding how amazing and complex the world we live in is. 🌌</p>

                `,
                'science': `<div><h3></h3><h2>Article: Exploring the Cosmos: Latest Discoveries and Mysteries of the Universe</h2>
    <p>The cosmos fascinates us with its infinite space and the mysteries it holds. Constantly evolving technology and the courage of researchers allow us to delve deeper into its unexplored corners. Here is an overview of the latest discoveries and mysteries that adorn contemporary cosmological research:</p>
    
    <h3>1. Exoplanets: Everything You Should Know</h3>
    <p>Since the discovery of the first exoplanet, our understanding of the universe has significantly expanded. We now know thousands of planets orbiting other stars. The latest discoveries in this field indicate the diversity of exoplanets and the possibility of conditions conducive to life beyond our Solar System.</p>
    
    <h3>2. Star Formation: Mysteries of Cosmic "Births"</h3>
    <p>The processes of star formation are among the most fascinating phenomena in the cosmos. Thanks to modern telescopes, we can observe how dense clouds of gas and stardust transform into new stars. The latest research sheds new light on these processes that shape the structure of galaxies.</p>
    
    <h3>3. Dark Matter and Energy: Unknown Forces of the Universe</h3>
    <p>Most of the matter and energy in the Universe is invisible to the human eye. Dark matter and dark energy constitute the majority of the mass and energy of the Universe, yet their nature remains a mystery. New experiments and theories help us better understand the role of these mysterious components in cosmic processes.</p>
    
    <h3>4. Space Telescopes: Window to the Universe</h3>
    <p>Space telescopes like Hubble, Spitzer, and Kepler allow us to observe the cosmos on an unprecedented scale. They enable us to study distant galaxies, supernovae, and the smallest details of planets in the Solar System. The latest images and data collected by these instruments open new perspectives in space research.</p>
    
    <h3>5. Big Bang: Origins of the Universe</h3>
    <p>The Big Bang theory, describing the origins of our Universe, is one of the most fascinating achievements of modern cosmology. Studies of microwave background radiation and cosmic structures allow us to reconstruct scenarios that occurred shortly after the birth of the Universe.</p>
    
    <h3>6. Future of Space Exploration: Missions and Events</h3>
    <p>The future of space exploration looks exciting. Planned missions such as the James Webb Space Telescope and crewed missions to Mars have the potential to radically change our understanding of cosmic mysteries. Follow our website to stay up to date with the latest scientific achievements and discoveries in space.</p><h2></h2></div>
    
<div><h3></h3><h2>Article: Secrets of Black Holes: What We Know and What We Don't</h2>
    <p>Black holes are among the most mysterious and fascinating objects in the Universe. Their gravitational traps absorb everything that falls within their reach, including light. Here is an overview of the latest discoveries and puzzles related to black holes:</p>
    
    <h3>1. Types of Black Holes: Small, Large, and Supermassive</h3>
    <p>Black holes come in different sizes. From microscopic black holes formed by the collapse of stars, through intermediate-mass black holes in the centers of galaxies, to massive supermassive black holes, such as the one at the center of our Galaxy, with a mass millions of times that of the Sun.</p>
    
    <h3>2. Formation of Black Holes: Collapse of Stars and Other Scenarios</h3>
    <p>The main way black holes form is the collapse of stars after they exhaust their nuclear fuel. However, there are also other scenarios, such as mergers of black holes or accretion processes forming black holes in the centers of galaxies.</p>
    
    <h3>3. Interaction of Black Holes with Their Environment: Effects and Impact on the Cosmos</h3>
    <p>Black holes can have a significant impact on their surrounding environment. They emit intense X-ray and gamma-ray radiation when they absorb matter, making them important objects for studying and understanding the evolution of galaxies.</p>
    
    <h3>4. Hawking's Information Paradox: What We Know About Black Hole Evaporation</h3>
    <p>Stephen Hawking theoretically proposed that black holes can evaporate, leading to their gradual shrinking and eventual complete disappearance. Hawking's information paradox, however, concerns the loss of information about the initial state, which remains a topic of intense debate in theoretical physics.</p>
    
    <h3>5. New Observational Technologies: How Telescopes Aid in Black Hole Research</h3>
    <p>Modern telescopes, such as the Event Horizon Telescope, allow us to directly observe black holes and their surroundings. High-resolution images enable us to study the structure of accretion disks and confirm the existence of black holes in distant galaxies.</p>
    
    <h3>6. Black Holes and Cosmic Exploration: What's Next?</h3>
    <p>The future of black hole research looks incredibly exciting. New missions and technologies will allow us to delve into their secrets and better understand their role in shaping the structure of the Universe. Follow our website to stay up to date with the latest discoveries and debates regarding black holes.</p><h2></h2></div>
`,
                'gallery': `
					<h2>Gallery🚀</h2>
					<div class="gallery">
						<div class="image">
							<img src="zdjecia/kosmos1.png" alt="Cosmos1">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos2.png" alt="Cosmos2">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos3.png" alt="Cosmos3">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos4.png" alt="Cosmos4">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos5.png" alt="Cosmos5">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos6.png" alt="Cosmos6">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos7.png" alt="Cosmos7">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos8.png" alt="Cosmos8">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos9.png" alt="Cosmos9">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos10.png" alt="Cosmos10">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos11.png" alt="Cosmos11">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos12.png" alt="Cosmos12">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos13.png" alt="Cosmos13">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos14.png" alt="Cosmos14">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos15.png" alt="Cosmos15">
						</div>
						<div class="image">
							<img src="zdjecia/kosmos16.png" alt="Cosmos16">
						</div>
					</div>
					`,
                'events': `<div class="gallery">
					<h2>Upcoming Cosmic Events</h2>
					<h3>Follow the latest cosmic events and astronomical phenomena happening around the world and beyond!</h3>

					<div class="image">
						<h3>Annual Meteor Shower</h3>
						<p>Witness the breathtaking annual meteor shower where falling stars illuminate the night sky.</p>
						<p>Date: August 12-13, 2024</p>
					</div>

					<div class="image">
						<h3>Solar Eclipse Observation</h3>
						<p>Join us for a special event to observe a solar eclipse. Experience the celestial dance of the Sun and Moon together!</p>
						<p>Date: October 25, 2024</p>
					</div>

					<div class="image">
						<h3>Space Exploration Conference</h3>
						<p>Participate in our space exploration conference where scientists and enthusiasts gather to discuss the latest discoveries and future missions.</p>
						<p>Date: November 5-7, 2024</p>
					</div>

					<div class="image">
						<h3>International Space Day</h3>
						<p>Celebrate International Space Day! Join educational workshops, telescope observations, and interactive exhibitions.</p>
						<p>Date: April 4, 2025</p>
					</div>

					<div class="image">
						<h3>Stargazing Sessions</h3>
						<p>Join our stargazing event for night sky observations and astronomical discussions. Discover the wonders of the night sky with experts.</p>
						<p>Date: July 15, 2025</p>
					</div>

					<div class="image">
						<h3>Mars Rover Mission Updates</h3>
						<p>Follow the latest updates from the Mars Rover mission, exploring the Red Planet and searching for signs of ancient life.</p>
						<p>Date: regularly updated</p>
					</div>
				</div>

				`,
				'policy':`<h2>1. Introduction</h2>

					<p>Welcome to the website https://kubag01.github.io/ProjektStudia/. We prioritize the protection of personal data and user privacy, adhering to data protection regulations, including the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation, "GDPR").</p>

					<h2>2. Collection and processing of personal data</h2>

					<p>When using our website, various personal data may be collected and processed, such as: name, surname, email address, contact details voluntarily provided to us through contact forms or registration forms, etc. We process this data for trend analysis and statistical purposes, which help us better understand user preferences and enhance our services.</p>

					<h2>3. Storage of cookies</h2>

					<p>Our website uses cookies to ensure the highest quality of service and for statistical purposes. By continuing to browse our site, you agree to the use of cookies in accordance with our cookie policy. You can manage cookies through your web browser settings, although this may affect some functionalities.</p>

					<h2>4. Data security</h2>

					<p>We ensure that your personal data is adequately protected against unauthorized access, loss, misuse, alteration, or disclosure. We do not sell, trade, or otherwise transfer your personal data to third parties without your consent, unless required by law.</p>

					<h2>5. Your rights</h2>

					<p>You have the right to access, correct, delete, restrict processing, portability of your personal data, and to lodge a complaint with a supervisory authority. You can also withdraw any previously given consent for data processing at any time. To exercise your rights or if you have questions regarding our privacy policy, please contact us using the contact details provided below.</p>

					<h2>6. Contact</h2>

					<p>If you have any questions about our privacy policy or the processing of personal data, please contact us at contact@ourwebsite.com or directly at +48 123 456 789.</p>`,
                'about': `<div class="gallery">
						<div class="image">
							<h2></h2>
							<h2>About Me</h2>
							<p>Welcome to my website dedicated to exploring the cosmos! My name is Jakub, and I am an enthusiast of astronomy, science, and technology. The universe has always fascinated me, and this website is my way of sharing that passion with others.</p>
						</div>

						<div class="image">
							<h2>My Mission</h2>
							<p>My goal is to popularize knowledge about space by providing the latest information, articles, photos, and news. I aim to inspire both children and adults to discover and understand how amazing and complex the universe is.</p>
						</div>

						<div class="image">
							<h2>My Interests</h2>
							<p>I am particularly interested in astrophysics, cosmology, and space exploration. I love keeping up with the latest scientific discoveries and technological innovations related to space research. I strive to keep the website up-to-date to provide you with the most current and reliable information.</p>
						</div>

						<div class="image">
							<h2>My Projects</h2>
							<p>I undertake various projects aimed at bringing space-related topics closer to the general public. I organize lectures, workshops, astronomical observations, and publish articles and educational materials. Each of these projects is an opportunity for me to share my knowledge and passion.</p>
						</div>

						<div class="image">
							<h2>The History of This Website</h2>
							<p>This website was created out of a need to share my passion for the cosmos. Initially, it was a small site where I posted my thoughts and observations. Over time, the site evolved, attracting more and more people interested in space topics. Today, it is a place where you can find the latest information, articles, and inspiring content related to the cosmos.</p>
						</div>

						<div class="image">
							<h2>My Future Plans</h2>
							<p>I plan to further develop the website, introduce new features, and provide even more educational content. I want this site to become a meeting place for all space enthusiasts, where we can share knowledge, experiences, and passion.</p>
						</div>
						<div class="image">
						<h2></h2>
						</div>
					</div>
					`,
                'contact': `<h2>Contact</h2>
					<p>If you have any questions, suggestions, or wish to collaborate, please contact me! I am open to all proposals and happy to answer any questions.</p>


					<h3>Contact Information</h3>
					<p>Email: contact@ourwebsite.com</p>
					<p>Phone: +48 123 456 789</p>
					<p>Address: 1 Cosmic Street, 00-123 Warsaw, Poland</p>
					
					<h3>Contact Form</h3><br><br>
					<div class="contact-form">
					  <form>
						<div class="form-group">
						  <label for="name">Name:</label><br>
						  <input type="text" id="name" name="name" required><br>
						</div>
						<div class="form-group">
						  <label for="email">Email:</label><br>
						  <input type="email" id="email" name="email" required><br>
						</div>
						<div class="form-group">
						  <label for="message">Message:</label><br>
						  <textarea id="message" name="message" rows="6" required></textarea><br>
						</div>
						<div class="form-group">
							<input type="checkbox" id="consent" name="consent" required>
							<label for="consent">Consent to the processing of personal dataConsent to the processing of personal data*</label><br>
						</div>
						<div class="form-group">
						  <button  type="submit">Send</button>
						</div>
					  </form>
					</div><br><br>
					`,
					'rights':`© 2024 Jakub Głąbiak - All rights reserved.`,
					'cookieAlert': `
					
						<p>This website uses cookies. By using the website, you consent to the use of cookies.</p>
						<p>Read our <a href="#policy" id="policy2">Privacy Policy:</a></p>
						<button id="acceptBtn">Agree</button>
						<button id="rejectBtn">Disagree</button>
`

            }
        };
		
		var LastLang = 'pl';
	
    function setPageContent(page, lang) {
        var contentToReturn = translations[lang][page];
        document.getElementById('main-content').innerHTML = contentToReturn;
		
		var url = `#${page}`;
        history.pushState({}, '', url);
		LastLang = lang;
		
		 // Aktualizacja tłumaczeń dla divów
        var ids = ['cosmos', 'home', 'science', 'gallery', 'events', 'policy', 'about', 'contact','policy2',];
        ids.forEach(function(id) {
            var element = document.getElementById(id);
			console.log(element)
            if (element) {
                element.textContent = translationsNav[lang][id];
            }
        });
    }
	
	// Funkcja do zmiany języka dla danej sekcji
    function changeLanguage(lang) {
        var currentPage = getCurrentPage();
        setPageContent(currentPage, lang);

        // Aktualizacja tłumaczeń w nawigacji
        var navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(function(item) {
            var page = item.dataset.page;
            item.textContent = translationsNav[lang][page];
        });
		
		LastLang = lang;
		
		var nav = document.querySelector('nav');
        var menuToggle = document.querySelector('.menu-toggle');
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
    }
	
	// Funkcja do pobierania bieżącej strony na podstawie URL-a
    function getCurrentPage() {
        var url = window.location.href;
        var hashIndex = url.indexOf('#');
        if (hashIndex !== -1) {
            var page = url.slice(hashIndex + 1);
            if (translations['pl'][page] || translations['en'][page]) {
                return page;
            }
        }
        return 'home';
    }
	
	
	changeLanguage('pl');

    // Dodajemy obsługę kliknięć dla przycisków PL i EN
    var plButton = document.getElementById('plButton');
    var enButton = document.getElementById('enButton');

    plButton.addEventListener('click', function() {
        changeLanguage('pl');
    });

    enButton.addEventListener('click', function() {
        changeLanguage('en');
    });
	
	const contactForm = document.getElementById('contactForm');

	  if (contactForm) {
		contactForm.addEventListener('submit', function(event) {
		  event.preventDefault(); // Zapobiegamy domyślnej akcji formularza

		  // Pokazujemy alert po kliknięciu przycisku Wyślij
		  alert('Wiadomość została wysłana');
		});
	  } 
	
	
	// Obsługa kliknięcia linków w nawigacji
	var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var page = link.getAttribute('href').slice(1);
            setPageContent(page, LastLang); 
			
			var nav = document.querySelector('nav');
            var menuToggle = document.querySelector('.menu-toggle');
            nav.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

	// Dodanie obsługi kliknięcia przycisku nawigacji na małych ekranach
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active'); 
        });
    }
	
	const acceptBtn = document.getElementById('acceptBtn');
	const rejectBtn = document.getElementById('rejectBtn');

	// Dodajemy obsługę kliknięć do przycisków
	acceptBtn.addEventListener('click', acceptCookies);
	rejectBtn.addEventListener('click', rejectCookies);

	function acceptCookies() {
		document.getElementById('cookieAlert').style.display = 'none'; // ukryj alert
		// tutaj można dodać kod do ustawienia ciasteczka lub przekazania zgody do systemu
	}

	function rejectCookies() {
		document.getElementById('cookieAlert').style.display = 'none'; // ukryj alert
		// tutaj można dodać kod do zarządzania użytkownikami, którzy nie zgadzają się na pliki cookies
	}
	
    // Początkowo ustawiamy zawartość strony na stronę główną
    setPageContent('science','en');
    setPageContent('gallery','en');
    setPageContent('events','en');
    setPageContent('about','en');
    setPageContent('policy','en');
    setPageContent('cookieAlert','en');
    setPageContent('contact','en');
    setPageContent('home','en');
    setPageContent('rights','en');
	
    setPageContent('science','pl');
    setPageContent('gallery','pl');
    setPageContent('events','pl');
    setPageContent('about','pl');
    setPageContent('policy','pl');
    setPageContent('cookieAlert','pl');
    setPageContent('contact','pl');
    setPageContent('rights','pl');
	setPageContent('home','pl');
	
});

