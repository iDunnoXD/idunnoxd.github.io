
var data = {
	amtPerClick: 1,
	points: 0,
	residence: 0,
	popularity: 0,
	shop: 0,
	sInc: 1,
	shopPrice: 10,
	house: 0,
	houseInc: 2,
	housePrice: 135
};

var pointLabel;

function init(){
	pointLabel = document.getElementById("pointLabel");
	load();
}

function load(){
	if(localStorage.getItem("Save Data") !== null){
		var saveDataString = localStorage.getItem("Save Data");
		data = JSON.parse(saveDataString);
		console.log(data);
	}
	pointLabel.innerHTML = data.points + " Points!";
}

function save(){
	if(localStorage !== undefined){
		var saveDataString = JSON.stringify(data);
		localStorage.setItem("Save Data", saveDataString);
		console.log("Saved");
	}
}

function clickThingy(){
	data.points += data.amtPerClick
}

function assingStats(){
	if(pointLabel !== null){
		pointLabel.innerHTML = data.points + " Points!";
	}
}


function buyThing(type){
	if(type === 'shop'){
		if(data.points >= data.shopPrice){
			data.points -= data.shopPrice;
			data.shop++;
			data.shopPrice = Math.pow(data.shopPrice,1.35);
		}else{
			alert("You cannot afford it!");
		}
	}else if(type === 'house'){

	}
}



window.setInterval(save,2000);
window.setInterval(assingStats,100);
