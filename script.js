// Skrypt do obsługi funkcjonalności interaktywnej na stronie

document.addEventListener("DOMContentLoaded", function() {
	
	var translationsNav = {
			'pl': {
				'cosmos': '🌟KOSMOS🌟',
				'home': '🌌 Strona główna',
                'articles': 'Artykuły',
                'science': 'Nauka',
                'gallery': 'Galeria',
                'events': 'Wydarzenia',
                'about': 'O nas',
                'contact': 'Kontakt'
			},
			'en': {
				'cosmos': '🌟COSMOS🌟',
				'home': '🌌 Home',
				'articles': 'Articles',
				'science': 'Science',
				'gallery': 'Gallery',
				'events': 'Events',
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
                'articles': 'Tutaj będą wyświetlane artykuły.',
                'science': 'Tutaj będzie miejsce na treści naukowe.',
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
                'articles': 'Articles will be displayed here.',
                'science': 'This is where scientific content will be.',
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
							<label for="consent">Consent to the processing of personal dataConsent to the processing of personal data*</label><br>
						</div>
						<div class="form-group">
						  <button  type="submit">Send</button>
						</div>
					  </form>
					</div><br><br>
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
        var ids = ['cosmos', 'home', 'articles', 'science', 'gallery', 'events', 'about', 'contact'];
        ids.forEach(function(id) {
            var element = document.getElementById(id);
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
	  } else {
		console.error('Formularz kontaktowy nie został znaleziony!');
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
	
    // Początkowo ustawiamy zawartość strony na stronę główną
	setPageContent('articles','en');
    setPageContent('science','en');
    setPageContent('gallery','en');
    setPageContent('events','en');
    setPageContent('about','en');
    setPageContent('contact','en');
    setPageContent('home','en');
	
	setPageContent('articles','pl');
    setPageContent('science','pl');
    setPageContent('gallery','pl');
    setPageContent('events','pl');
    setPageContent('about','pl');
    setPageContent('contact','pl');
    setPageContent('home','pl');
	
});

