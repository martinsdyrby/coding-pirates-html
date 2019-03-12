(function(){
	var navigation = Array.prototype.slice.call(document.querySelectorAll('ul#navigation li'));
	var sections = Array.prototype.slice.call(document.querySelectorAll('section'));

	var hideAllSections = function() {
		sections.forEach(function(section) {
			section.classList.remove('active');
		});
		navigation.forEach(function(nav) {
			nav.classList.remove('active');
		});
	};

	var showSection = function(index) {
		if (index < sections.length) {
			var section = sections[index];
			section.classList.add('active');
			var nav = navigation[index];
			nav.classList.add('active');
		}
	};

	navigation.forEach(function(entry, index) {
		entry.addEventListener('click', function() {
			hideAllSections();
			showSection(index);
		});
	});

	hideAllSections();
	if (navigation.length > 0) {
		showSection(0);	
	}
}());