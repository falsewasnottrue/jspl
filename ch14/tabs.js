(function() {
	var elems = document.getElementsByClassName("tabs");
	for (var i=0; i<elems.length; i++) {
		var elem = elems[i];
		var groupId = elem.getAttribute("id");
		var select = document.createElement("div");
		elem.insertBefore(select, elem.children[0]);

		for (var j=1; j<elem.children.length; j++) {
			var child = elem.children[j];
			child.style.display = "none";
			var childId = child.getAttribute("id");

			var choice = document.createElement("input");
			choice.type = "radio";
			choice.name = groupId;
			choice.value = childId;

			var label = document.createElement("label");
			label.appendChild(choice);
			label.innerHTML += childId;
			label.addEventListener("click", function(event) {
				if (event.target) {
					var gId = event.target.name;
					var cId = event.target.value;

					if (gId && cId) {
						console.log(gId + ":" + cId);

						var g = document.getElementById(gId);
						if (g) {
							for (var c=1; c<g.children.length; c++) {
								g.children[c].style.display = "none";
							}
						}
						var c = document.getElementById(cId);
						if (c) {
							c.style.display = "block";
						}
					}
				}
			});

			select.appendChild(label);
		}
	}
})();
