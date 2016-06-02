(function() {
	var elems = document.getElementsByClassName("tabs");
	for (var i=0; i<elems.length; i++) {
		var elem = elems[i];
		var elemName = elem.getAttribute("name");
		var select = document.createElement("div");
		elem.appendChild(select);

		console.log(elem);
		for (var j=0; j<elem.children.length-1; j++) {
			var child = elem.children[j];
			var name = child.getAttribute("name");

			var choice = document.createElement("input");
			choice.type = "radio";
			choice.name = elemName;
			choice.value = name;

			var label = document.createElement("label");
			label.appendChild(choice);
			label.innerHTML += name;

			select.appendChild(label);
		}

		// nur aktives child darstellen
		// listener zum umstellen
	}
})();
