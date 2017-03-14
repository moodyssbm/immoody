let nav = document.getElementById('nav');

let foot = document.getElementById('foot');

let pages = [
	'./index',
	'./about',
	'./news',
	'./proj',
	'./contact'
];

let pageNames = [
	'Home',
	'About',
	'News',
	'Projects',
	'Contact'
];

if(pages.length == pageNames.length) {
	for(i=0; i!=pages.length; i++) {
		nav.innerHTML += '<a href="' + pages[i] + '.html">' + pageNames[i] + '</a>';

		if(i != pages.length - 1) {
			nav.innerHTML += ' // ';
		}
	}
} else {
	window.alert('check genNav, dummi');
}

foot.innerHTML += '<em>&copy; Ethan Moody, 2017</em>';