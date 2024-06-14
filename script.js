// Skrypt do obsługi funkcjonalności interaktywnej na stronie

document.addEventListener("DOMContentLoaded", function() {
    function setPageContent(page) {
        var contentToReturn;
        switch (page) {
            case 'home':
                contentToReturn = `
    <h2>Witajcie na mojej stronie, gdzie zgłębiam tajemnice kosmosu oraz wszystko, co z nim związane!🚀</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Accumsan in nisl nisi scelerisque. Tristique senectus et netus et malesuada fames. Nibh sit amet commodo nulla facilisi. Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Ornare arcu dui vivamus arcu felis. Elit pellentesque habitant morbi tristique senectus et netus et malesuada. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Lorem ipsum dolor sit amet consectetur adipiscing elit. Dictum at tempor commodo ullamcorper a lacus vestibulum sed. In fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Pellentesque sit amet porttitor eget dolor morbi non arcu. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Malesuada nunc vel risus commodo viverra. Duis at consectetur lorem donec massa sapien faucibus. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Urna nec tincidunt praesent semper feugiat.</p>
    <p>Mauris nunc congue nisi vitae suscipit tellus mauris a diam. At risus viverra adipiscing at in tellus. Fermentum et sollicitudin ac orci phasellus. Gravida quis blandit turpis cursus in hac. Eu sem integer vitae justo eget. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Ultrices dui sapien eget mi proin. Nisl nunc mi ipsum faucibus. Est pellentesque elit ullamcorper dignissim cras. Tellus molestie nunc non blandit massa enim nec dui nunc. Faucibus turpis in eu mi bibendum neque. Vulputate dignissim suspendisse in est ante in nibh mauris. Massa sed elementum tempus egestas sed sed risus. Scelerisque in dictum non consectetur a erat nam. Nisl rhoncus mattis rhoncus urna neque. Porttitor leo a diam sollicitudin tempor id. Tristique nulla aliquet enim tortor at auctor urna nunc. Phasellus egestas tellus rutrum tellus pellentesque eu.</p>
    <img src="zdjecia/image.png" alt="Gwiazdy">
    <p>Mi sit amet mauris commodo. Sed felis eget velit aliquet sagittis id consectetur purus. Nisl condimentum id venenatis a condimentum. Aliquet nec ullamcorper sit amet risus nullam eget. Erat nam at lectus urna duis convallis convallis tellus id. Quam viverra orci sagittis eu volutpat. Risus in hendrerit gravida rutrum quisque. Lobortis scelerisque fermentum dui faucibus in. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Amet consectetur adipiscing elit pellentesque habitant morbi. Et egestas quis ipsum suspendisse. Sit amet dictum sit amet justo. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique senectus. Commodo elit at imperdiet dui accumsan sit. Egestas dui id ornare arcu. Ultricies lacus sed turpis tincidunt id aliquet. Vitae congue mauris rhoncus aenean vel elit scelerisque.</p>
    <p>Id interdum velit laoreet id donec ultrices tincidunt arcu. Dui ut ornare lectus sit amet est. Volutpat odio facilisis mauris sit amet massa. Venenatis cras sed felis eget velit aliquet sagittis id. Tortor consequat id porta nibh. Bibendum enim facilisis gravida neque convallis a cras semper. Odio facilisis mauris sit amet massa vitae tortor. Et netus et malesuada fames ac turpis egestas integer eget. Elit duis tristique sollicitudin nibh sit. Ut eu sem integer vitae justo eget.</p>
    <p>Diam phasellus vestibulum lorem sed. Ipsum dolor sit amet consectetur adipiscing elit pellentesque. Risus viverra adipiscing at in tellus integer feugiat. Neque gravida in fermentum et sollicitudin ac orci. Habitasse platea dictumst vestibulum rhoncus. Pellentesque habitant morbi tristique senectus et netus et. Risus feugiat in ante metus dictum at. Sit amet consectetur adipiscing elit. Elit duis tristique sollicitudin nibh sit amet commodo. Placerat duis ultricies lacus sed turpis tincidunt id aliquet.</p>
`;

                break;
            case 'articles':
                contentToReturn = "Tutaj będą wyświetlane artykuły.";
                break;
            case 'science':
                contentToReturn = "Tutaj będzie miejsce na treści naukowe.";
                break;
            case 'gallery':
                contentToReturn = `
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
`;
                break;
            case 'events':
                contentToReturn = "Informacje o wydarzeniach kosmicznych.";
                break;
            case 'about':
                contentToReturn = "O nas.";
                break;
            case 'contact':
                contentToReturn = "Kontakt.";
                break;
            default:
                contentToReturn = "Witajcie na mojej stronie, gdzie zgłębiam tajemnice kosmosu oraz wszystko, co z nim związane!🚀";
                break;
        }
        document.getElementById('main-content').innerHTML = contentToReturn;
    }
	
	// Obsługa kliknięcia linków w nawigacji
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            var page = link.getAttribute('href').slice(1);
            setPageContent(page);
        });
    });
	
	// Dodanie obsługi kliknięcia przycisku nawigacji na małych ekranach
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            menuToggle.classList.toggle('active'); // Dodaj lub usuń klasę active dla przycisku
        });
    }
	
	// Obsługa kliknięcia linków w nawigacji
	var navLinks = document.querySelectorAll('nav ul li a');
	navLinks.forEach(function(link) {
		link.addEventListener('click', function(event) {
			event.preventDefault();
			var page = link.getAttribute('href').slice(1);
			setPageContent(page);
			// Schowaj menu po kliknięciu na dowolny link w menu
			nav.classList.remove('active'); // Zwijanie menu
			menuToggle.classList.remove('active'); // Zmiana ikony przycisku menu-toggle
		});
	});

	
    // Początkowo ustawiamy zawartość strony na stronę główną
	setPageContent('articles');
    setPageContent('science');
    setPageContent('gallery');
    setPageContent('events');
    setPageContent('about');
    setPageContent('contact');
    setPageContent('home');
	
});

