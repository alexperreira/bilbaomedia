scrollTo = (element) => {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop,
	});
	console;
};

document.getElementById('scrollButton').addEventListener('click', () => {
	scrollTo(document.getElementById('scrollTo'));
});

let pageHeight = window.innerHeight;
window.scrollBy(0, pageHeight);

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

document.getElementById('topButton').addEventListener('click', () => {
	topFunction();
});
