import "./styles.css";

import { 
    createNavItem, 
    setCurrInfo, 
    setForecast,
	createFooter 
} from "./content";
import {
	searchFunction,
	chosenUnit,
	switchForecast,
	switchTemp,
	switchSpeed
} from "./functions";

import siteLogo from "./images/siteLogo.png";

const tempUnitItems = [
	{ class: "celsius", text: "°C" },
	{ class: "fahrenheit", text: "°F" },
];

const speedUnitItems = [
	{ class: "kilometers", text: "km" },
	{ class: "miles", text: "mi" },
];

const forecastOpt = [
	{ class: "daily", text: "Daily" },
	{ class: "hourly", text: "Hourly" },
];

document.addEventListener("DOMContentLoaded", function () {
    try {
		initializeLocalStorage();
		setFavicon();
        createNavItem("forecastOpt", forecastOpt);
        createNavItem("tempUnit", tempUnitItems);
        createNavItem("speedUnit", speedUnitItems);
        setCurrInfo();
        setForecast();
		createFooter();
        searchFunction();
        switchForecast();
        switchTemp();
        switchSpeed();
        chosenUnit();
	} catch (error) {
		console.error("Initialization error:", error);
	}
});

function setFavicon() {
	const faviconLink = document.createElement("link");
	faviconLink.rel = "icon";
	faviconLink.href = siteLogo;

	document.head.appendChild(faviconLink);
}

function initializeLocalStorage() {
	const localStorageItems = [
		{ key: "city", defaultValue: "toronto" },
		{ key: "tempUnit", defaultValue: "°C" },
		{ key: "speedUnit", defaultValue: "km" },
		{ key: "forecast", defaultValue: "daily" },
	];

	for (const item of localStorageItems) {
		if (!localStorage.getItem(item.key)) {
			localStorage.setItem(item.key, item.defaultValue);
		}
	}
}