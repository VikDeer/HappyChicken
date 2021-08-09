		/*главные элементы*/
let clicker = document.querySelector ('.chicken');
let eggs = document.querySelector('.score-number');
let eggsNumber = eggs.dataset.number;
eggsNumber = 10000;

		/*улучшения клика*/
let clickLVL = document.querySelector('.click-level');
clickLVLData = clickLVL.dataset.number = 1;

let clickInfo = document.querySelector('.click-info');
clickInfoData = clickInfo.dataset.number = 1;

let clickPrice = document.querySelector('.click-price');
clickPriceData = clickPrice.dataset.number = 100;

let clickBuy = document.querySelector('.click-buy');

		/*улучшения пассивки*/
let passiveLVL = document.querySelector('.passive-level');
passiveLVLData = passiveLVL.dataset.number = 0;

let passiveInfo = document.querySelector('.passive-info');
passiveInfoData = passiveInfo.dataset.number = 0;

let passivePrice = document.querySelector('.passive-price');
passivePriceData = passivePrice.dataset.number = 1500;

let passiveBuy = document.querySelector('.passive-buy');


clickBuy.onclick = function() {
	if (eggsNumber >= clickPriceData) {
		clickLVLData++;
		clickLVL.textContent = clickLVLData;

		clickInfoData++;
		clickInfo.textContent = clickInfoData;

		eggsNumber = eggsNumber - clickPriceData;
		eggs.textContent = eggsNumber;

		clickPriceData = clickPriceData + 100;
		clickPrice.textContent = clickPriceData;
	} else {
		alert('Недостаточно яиц!');
	};
};


passiveBuy.onclick = function() {
	if (eggsNumber >= passivePriceData) {
		passiveLVLData++;
		passiveLVL.textContent = passiveLVLData;

		passiveInfoData++;
		passiveInfo.textContent = passiveInfoData;

		eggsNumber = eggsNumber - passivePriceData;
		eggs.textContent = eggsNumber;

		passivePriceData = passivePriceData + 500;
		passivePrice.textContent = passivePriceData;
	} else {
		alert('Недостаточно яиц!');
	};
};

let passiveIncrease = function() {
	eggsNumber = eggsNumber + passiveInfoData;
	eggs.textContent = eggsNumber;
};
setInterval(passiveIncrease, 3000);


clicker.onclick = function() {
	eggsNumber = eggsNumber + +clickInfoData;
	eggs.textContent = eggsNumber;
};