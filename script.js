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
					<p>Wszechświat od zawsze fascynował ludzkość. Od momentu, gdy po raz pierwszy spojrzeliśmy w gwiazdy, zadawaliśmy sobie pytania o naszą rolę w tym ogromnym kosmicznym tańcu. Na tej stronie znajdziecie najnowsze odkrycia, teorie oraz ciekawostki na temat kosmosu, które pomogą Wam lepiej zrozumieć ten nieskończony i tajemniczy wszechświat.</p>
					<p>Kosmos to nie tylko planety i gwiazdy, ale również czarne dziury, galaktyki i niewidzialne siły, które kształtują nasze zrozumienie przestrzeni i czasu. Czy wiedzieliście, że nasza galaktyka, Droga Mleczna, jest tylko jedną z miliardów galaktyk w obserwowalnym wszechświecie? Każda z tych galaktyk zawiera miliardy gwiazd, a każda gwiazda może mieć swoje planety, niektóre z nich mogą nawet podtrzymywać życie.</p>
					<p>Od czasów starożytnych, kiedy to Babilończycy i Egipcjanie budowali pierwsze obserwatoria, aż po współczesne teleskopy kosmiczne, nasza wiedza o wszechświecie nieustannie się rozwija. Teleskop Hubble'a, który od ponad 30 lat dostarcza nam niesamowite obrazy odległych galaktyk i mgławic, zrewolucjonizował nasze rozumienie kosmosu.</p>
					<img src="zdjecia/image.png" alt="Gwiazdy">
					<p>Współczesna astronomia to także misje kosmiczne, takie jak Mars Rover, który bada powierzchnię Marsa, szukając śladów dawnego życia, czy misja New Horizons, która jako pierwsza zbadała Plutona i jego księżyce. Każda z tych misji przynosi nowe dane, które pomagają naukowcom zrozumieć, jak powstał i ewoluował nasz układ słoneczny.</p>
					<p>Nie można zapomnieć o tajemniczych ciemnych materii i ciemnej energii, które stanowią większość masy wszechświata, ale wciąż pozostają nieuchwytne i niezrozumiałe. Te niewidzialne składniki wszechświata wpływają na ruch galaktyk i ekspansję kosmosu, stanowiąc jedno z największych wyzwań dla współczesnej fizyki.</p>
					<p>Zapraszam Was do eksploracji zawartości tej strony. Znajdziecie tutaj artykuły, galerie zdjęć, informacje o najnowszych wydarzeniach kosmicznych oraz wiele więcej. Niezależnie od tego, czy jesteście doświadczonymi astronomami, czy dopiero zaczynacie swoją przygodę z kosmosem, mam nadzieję, że znajdziecie tutaj coś, co Was zainspiruje.</p>
					<p>Wspólnie odkrywajmy tajemnice wszechświata i poszerzajmy nasze horyzonty wiedzy o kosmosie. Każdy nowy odkryty szczegół przybliża nas do zrozumienia, jak niesamowity i złożony jest świat, w którym żyjemy. 🌌</p>
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
                'events': 'Informacje o wydarzeniach kosmicznych.',
                'about': 'O nas.',
                'contact': 'Kontakt.'
            },
            'en': {
                'home': `
                    <h2>Welcome to my website, where we explore the mysteries of the cosmos and everything related to it!🚀</h2>
					<p>The universe has always fascinated humanity. From the moment we first looked up at the stars, we asked ourselves questions about our role in this vast cosmic dance. On this site, you'll find the latest discoveries, theories, and interesting facts about the cosmos, helping you to better understand this infinite and mysterious universe.</p>
					<p>The cosmos is not just about planets and stars, but also black holes, galaxies, and invisible forces that shape our understanding of space and time. Did you know that our galaxy, the Milky Way, is just one of billions of galaxies in the observable universe? Each of these galaxies contains billions of stars, and each star can have its own planets, some of which might even support life.</p>
					<p>From ancient times, when Babylonians and Egyptians built the first observatories, to modern space telescopes, our knowledge of the universe has constantly evolved. The Hubble Telescope, which has been providing us with incredible images of distant galaxies and nebulae for over 30 years, has revolutionized our understanding of the cosmos.</p>
					<img src="zdjecia/image.png" alt="Stars">
					<p>Modern astronomy also includes space missions, such as the Mars Rover, which explores the surface of Mars in search of signs of past life, or the New Horizons mission, which was the first to study Pluto and its moons. Each of these missions brings new data that helps scientists understand how our solar system formed and evolved.</p>
					<p>We cannot forget the mysterious dark matter and dark energy, which make up most of the mass of the universe but remain elusive and misunderstood. These invisible components of the universe affect the movement of galaxies and the expansion of the cosmos, representing one of the biggest challenges for modern physics.</p>
					<p>I invite you to explore the contents of this site. You will find articles, photo galleries, information about the latest cosmic events, and much more. Whether you are an experienced astronomer or just beginning your journey into space, I hope you find something here that inspires you.</p>
					<p>Together, let's discover the mysteries of the universe and expand our horizons of knowledge about the cosmos. Every new detail we uncover brings us closer to understanding how amazing and complex the world we live in is. 🌌</p>

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
                'events': 'Information about cosmic events.',
                'about': 'About us.',
                'contact': 'Contact us.'
            }
        };
		
		var LastLang = 'pl';
	
    function setPageContent(page, lang) {
		console.log(lang);
        var contentToReturn = translations[lang][page];
        document.getElementById('main-content').innerHTML = contentToReturn;
		
		var url = `#${page}`;
        history.pushState({}, '', url);
		LastLang = lang;
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
	
	// Obsługa kliknięcia linków w nawigacji
	var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var page = link.getAttribute('href').slice(1);
            setPageContent(page, LastLang); 
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

