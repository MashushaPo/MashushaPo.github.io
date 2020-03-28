
function changer (item) {
		if (cont.classList.contains("disnone")) {
			cont.classList.remove("disnone")			}
	}

const items = document.querySelectorAll(".item");
const cont = document.querySelector(".cont");
const wind = document.querySelector(".wind");
const close = document.querySelector(".close");
for (let i = 0; i < 9; i++) {
	items[i].addEventListener("click", ()=> {
		changer (items[i]);
		wind.style.backgroundImage = items[i].style.backgroundImage;
		// if (i==0) {
		// 		changer(items[1]);
		// 		wind.style.backgroundImage = items[1].style.backgroundImage;
		// }
		// else if (i==1) {
		// 	changer(items[2])
		// 	wind.style.backgroundImage = items[2].style.backgroundImage;
		// }
		// else if (i==2) {
		// 	changer(items[3])
		// 	wind.style.backgroundImage = items[3].style.backgroundImage;
		// }
		// else if (i==3) {
		// 	changer(items[4])
		// 	wind.style.backgroundImage = items[4].style.backgroundImage;
		// }
		// else if (i==4) {
		// 	changer(items[5])
		// 	wind.style.backgroundImage = items[5].style.backgroundImage;
		// }
		// else if (i==5) {
		// 	changer(items[6])
		// 	wind.style.backgroundImage = items[6].style.backgroundImage;
		// }
		// else if (i==6) {
		// 	changer(items[7])
		// 	wind.style.backgroundImage = items[7].style.backgroundImage;
		// }
		// else if (i==7) {
		// 	changer(items[8])
		// 	wind.style.backgroundImage = items[8].style.backgroundImage;
		// }
		// else {
		// 	changer(items[9])
		// 	wind.style.backgroundImage = items[9].style.backgroundImage;
		// }
	}) 
}
close.addEventListener("click", ()=> {
	cont.classList.add("disnone");
})
