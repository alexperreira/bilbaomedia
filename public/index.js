scrollTo = (element) => {
	window.scroll({
		behavior: 'smooth',
		left: 0,
		top: element.offsetTop,
	});
	console.log(element);
	console.log(aboutSection.offsetTop);
};

document.getElementById('scrollButton').addEventListener('click', () => {
	scrollTo(document.getElementById('scrollTo'));
	// document.getElementById('scrollTo').scrollIntoView();
});

const aboutSection = document.getElementById('aboutSection');

// let pageHeight = window.innerHeight;
// window.scrollBy(0, pageHeight);
