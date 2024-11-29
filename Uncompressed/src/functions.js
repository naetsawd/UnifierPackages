import { setCurrInfo, setForecast } from "./content";

export function chosenUnit() {
	const units = document.querySelectorAll(".navItem");

	units.forEach((unit) => {
		unit.classList.remove("chosenUnit");
	});

	if (localStorage.getItem("forecast") === "daily") {
		units[0].classList.add("chosenUnit");
	} else {
		units[1].classList.add("chosenUnit");
	}

	if (localStorage.getItem("tempUnit") === "°C") {
		units[2].classList.add("chosenUnit");
	} else {
		units[3].classList.add("chosenUnit");
	}

	if (localStorage.getItem("speedUnit") === "km") {
		units[4].classList.add("chosenUnit");
	} else {
		units[5].classList.add("chosenUnit");
	}
}

export async function searchFunction() {
	const content = document.querySelector(".content");
	const searchCont = document.querySelector(".searchContainer");
	const searchBox = document.querySelector(".searchBox");
	const searchBtn = document.querySelector(".searchBtn");

	searchBtn.onclick = async function () {
		if (searchBox.value.trim()) {
			searchCont.classList.remove("invalidSearch");
			searchBox.placeholder = "Search";

			localStorage.setItem("prevCity", localStorage.getItem("city"));
			localStorage.setItem("city", searchBox.value);

			content.innerHTML = "";
			searchBox.value = "";
			await setCurrInfo();
			await setForecast();
		} else {
			searchCont.classList.add("invalidSearch");
			searchBox.placeholder = "Please enter a name";
		}
	};
}

export async function switchForecast() {
	const forecastSection = document.querySelector(".forecastSection");
	const daily = document.querySelector(".daily");
	const hourly = document.querySelector(".hourly");

	daily.onclick = async function () {
		localStorage.setItem("forecast", "daily");

		forecastSection.innerHTML = "";
		chosenUnit();
		await setForecast();
	};

	hourly.onclick = async function () {
		localStorage.setItem("forecast", "hourly");

		forecastSection.innerHTML = "";
		chosenUnit();
		await setForecast();
	};
}

export async function switchTemp() {
	const content = document.querySelector(".content");
	const C = document.querySelector(".celsius");
	const F = document.querySelector(".fahrenheit");

	C.onclick = async function () {
		localStorage.setItem("tempUnit", "°C");

		content.innerHTML = "";
		chosenUnit();
		await setCurrInfo();
		await setForecast();
	};

	F.onclick = async function () {
		localStorage.setItem("tempUnit", "°F");

		content.innerHTML = "";
		chosenUnit();
		await setCurrInfo();
		await setForecast();
	};
}

export async function switchSpeed() {
	const content = document.querySelector(".content");
	const KM = document.querySelector(".kilometers");
	const MI = document.querySelector(".miles");

	KM.onclick = async function () {
		localStorage.setItem("speedUnit", "km");

		content.innerHTML = "";
		chosenUnit();
		await setCurrInfo();
		await setForecast();
	};

	MI.onclick = async function () {
		localStorage.setItem("speedUnit", "mi");

		content.innerHTML = "";
		chosenUnit();
		await setCurrInfo();
		await setForecast();
	};
}