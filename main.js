function shuffleDiv() {
			elems = document.querySelectorAll('#shuffle > div'); 
			allElems = (function(){
				let ret = [], l = elems.length;
				while (l--) { ret[ret.length] = elems[l]; }
				return ret;
			})();
			
		console.log(elems);
		 
			var shuffled = (function(){
				let l = allElems.length, ret = [];
				while (l--) {
					let random = Math.floor(Math.random() * allElems.length),
						randEl = allElems[random].cloneNode(true);
					allElems.splice(random, 1);
					ret[ret.length] = randEl;
				}
				return ret; 
			})(), l = elems.length;
		 
			while (l--) {
				elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
				elems[l].parentNode.removeChild(elems[l]);
			}
		 
		}
		
		function ascdOrder() {
		 
		  let list = document.getElementById("shuffle");
		  let switching = true;
		  
		  while (switching) {
			switching = false;
			let div = list.getElementsByTagName("div");
			
			for (i = 0; i < (div.length - 1); i++) {
			 
			  shouldSwitch = false;
			  if (div[i].innerHTML > div[i + 1].innerHTML) {
				shouldSwitch = true;
				break;
			  }
			}
			if (shouldSwitch) {
			  div[i].parentNode.insertBefore(div[i + 1], div[i]);
			  switching = true;
			}
		  }
		  
		}
		