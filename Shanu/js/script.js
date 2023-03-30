/*   ------------ toggle icon navbar -----------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar')

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};


/*   ------------ Scrool section active link -----------*/
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach(sec => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if(top >= offset && top < offset + height) {
			navlinks.forEach(links => {
				links.classList.remove('active');
				document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
			});
		}
	});
	/* -------- sticky navbar -------- */
	let header = document.querySelector('header');

	header.classList.toggle('sticky', window.scrollY > 100)

	/* -------- remove toggle icon and navbar when click navbar link (scroll) -------- */
	
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

/* -------- scroll reveal -------- */
ScrollReveal({
	reset: true,
	distance: '80px',
	duration: 2000,
	delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .certifications-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/* -------- Typed js -------- */
const typed  = new Typed('.multiple-text', {
	strings: ['Frontend Developer', 'Responsive Web Designer', 'Backend Developer', 'Full Stack Web Developer'],
	typeSpeed: 100,
	backSpeed: 100,
	backDelay: 1000,
	loop: true
});

var btn = document.getElementById('btn');
btn.addEventListener('click', function(e) {
	e.preventDefault()
	var name = document.getElementById('name').value;
	var email = document.getElementById('email').value;
	var subject = document.getElementById('subject').value;
	var number = document.getElementById('number').value;
	var message = document.getElementById('message').value;
	var body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject' + subject + '<br/> number' + number + '<br/> message' + message;

	Email.send({
    Host : "smtp.gmail.com",
    Username : "shanudebnath67@gmail.com",
    Password : "gytdqdqlmdluthmd",
    To : 'shanudn0306@gmail.com',
    From : email,
    Subject : subject,
    Body : body
}).then(
  message => alert(message)
);
})