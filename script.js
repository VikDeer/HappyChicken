(function(){
		/*главные элементы*/
let clicker = document.querySelector ('.chicken');
let eggs = document.querySelector('.score-number');
let eggsNumber = eggs.dataset.number;
eggsNumber = 0;

		/*улучшения клика*/
let clickLVL = document.querySelector('.click-level');
clickLVLData = clickLVL.dataset.number = 1;

let clickInfo = document.querySelector('.click-info');

let clickPrice = document.querySelector('.click-price');
clickPriceData = clickPrice.dataset.number = 100;

let clickBuy = document.querySelector('.click-buy');

		/*улучшения пассивки*/
let passiveLVL = document.querySelector('.passive-level');
passiveLVLData = passiveLVL.dataset.number = 0;

let passiveInfo = document.querySelector('.passive-info');

let passivePrice = document.querySelector('.passive-price');
passivePriceData = passivePrice.dataset.number = 1500;

let passiveBuy = document.querySelector('.passive-buy');


clickBuy.onclick = function() {
	if (eggsNumber >= clickPriceData) {
		clickLVLData++;
		clickLVL.textContent = clickLVLData;

		clickInfo.textContent = clickLVLData;

		eggsNumber = eggsNumber - clickPriceData;
		eggs.textContent = eggsNumber;

		clickPriceData = clickPriceData + (100 * clickLVLData);
		clickPrice.textContent = clickPriceData;
	} else {
		alert('Недостаточно яиц!');
	};
};


passiveBuy.onclick = function() {
	if (eggsNumber >= passivePriceData) {
		passiveLVLData++;
		passiveLVL.textContent = passiveLVLData;

		passiveInfo.textContent = passiveLVLData;

		eggsNumber = eggsNumber - passivePriceData;
		eggs.textContent = eggsNumber;

		passivePriceData = passivePriceData + 500 + (100 * passiveLVLData);
		passivePrice.textContent = passivePriceData;
	} else {
		alert('Недостаточно яиц!');
	};
};

let passiveIncrease = function() {
	eggsNumber = eggsNumber + passiveLVLData;
	eggs.textContent = eggsNumber;
};
setInterval(passiveIncrease, 1000);


clicker.onclick = function() {
	eggsNumber = eggsNumber + clickLVLData;
	eggs.textContent = eggsNumber;
};


let saveButton = document.querySelector('.save');
let deleteButton = document.querySelector('.delete');
let unloadButton = document.querySelector('.unload');

saveButton.onclick = function() {
	localStorage.setItem('eggs', eggsNumber);

	console.log(localStorage);
};

deleteButton.onclick = function() {
	localStorage.clear();
	localStorage.setItem('clickLVL', clickLVLData);
	localStorage.setItem('clickPrice', clickPriceData);
	localStorage.setItem('passiveLVL', passiveLVLData);
	localStorage.setItem('passivePrice', passivePriceData);
	
	console.log(localStorage);
};

unloadButton.onclick = function() {
	eggsNumber = +localStorage.getItem('eggs');
	eggs.textContent = eggsNumber;

	clickLVLData = +localStorage.getItem('clickLVL');
	clickLVL.textContent = clickLVLData;
	clickInfo.textContent = clickLVLData;

	clickPriceData = +localStorage.getItem('clickPrice');
	clickPrice.textContent = clickPriceData;

	passiveLVLData = +localStorage.getItem('passiveLVL');
	passiveLVL.textContent = passiveLVLData;
	passiveInfo.textContent = passiveLVLData;

	passivePriceData = +localStorage.getItem('passivePrice');
	passivePrice.textContent = passivePriceData;
};

})()
