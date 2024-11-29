import {
	fetchLeftInfo,
	fetchRightInfo,
	fetchForecastDaily,
	fetchForecastHourly,
	fetchCurrTime
} from "./fetches";

import morning from "./images/morning.png"
import afternoon from "./images/afternoon.jpg"
import evening from "./images/evening.jpg"
import night from "./images/night.jpg"
import githubLogo from "./images/githubLogo.svg";

function setBackground(city) {
	fetchCurrTime(city)
	  .then(time => {
		let backgroundImageUrl;

		if (time >= 5 && time < 12) {
		  backgroundImageUrl = morning;
		} else if (time >= 12 && time < 17) {
		  backgroundImageUrl = afternoon;
		} else if (time >= 17 && time < 20) {
		  backgroundImageUrl = evening;
		} else {
		  backgroundImageUrl = night;
		}
  
		document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
	  });
  }
  

export function createNavItem(container, items) {
	const ul = document.createElement("ul");
	ul.classList.add(container);

	items.forEach((item, index) => {
		const li = document.createElement("li");
		li.classList.add("navItem");
		li.classList.add(item.class);
		li.textContent = item.text;

		ul.append(li);

		if (index < items.length - 1) {
			const divider = document.createElement("li");
			divider.classList.add("divider");
			ul.append(divider);
		}
	});

	document.querySelector("nav").append(ul);
}

export function setCurrInfo() {
    let city = localStorage.getItem("city");
    let tempUnit = localStorage.getItem("tempUnit");
    let speed = localStorage.getItem("speedUnit");

	setBackground(city);

	const content = document.querySelector(".content");

	const currInfo = document.createElement("section");
	currInfo.classList.add("currInfo");
	currInfo.innerHTML = ``;

	const currInfoLeft = document.createElement("section");
	currInfoLeft.classList.add("currInfoLeft");
	
	return Promise.all([
		fetchLeftInfo(city, tempUnit),
		fetchRightInfo(city, speed),
	]).then(function (results) {
		const leftInfoResult = results[0];
		const rightInfoResult = results[1];

		leftInfoResult.forEach((item) => {
			if (item.icon) {
				const iconContainer = document.createElement("img");
				iconContainer.classList.add(item.class);
				iconContainer.src = item.icon;

				currInfoLeft.append(iconContainer);
			} else {
				const textContainer = document.createElement("div");
				textContainer.classList.add(item.class);
				textContainer.textContent = item.text;

				currInfoLeft.append(textContainer);
			}
		});

		const currInfoRight = document.createElement("section");
		currInfoRight.classList.add("currInfoRight");

		rightInfoResult.forEach((item) => {
			const textContainer = document.createElement("div");
			textContainer.classList.add(item.class);
			textContainer.textContent = item.text;

			currInfoRight.append(textContainer);
		});

		currInfo.append(currInfoLeft, currInfoRight);
		content.append(currInfo);
	});
}

export function setForecast() {
    let city = localStorage.getItem("city");
    let tempUnit = localStorage.getItem("tempUnit");
    let type = localStorage.getItem("forecast");

	const content = document.querySelector(".content");

	let forecastSection = document.querySelector(".forecastSection");
	if (!forecastSection) {
		forecastSection = document.createElement("section");
		forecastSection.classList.add("forecastSection");
		content.append(forecastSection);
	}

	forecastSection.innerHTML = ``;

	const fetchPromises = [];
	if (type === "daily") {
		for (let i = 1; i < 7; i++) {
			fetchPromises.push(fetchForecastDaily(i, city, tempUnit));
		}
	} else {
		for (let i = 1; i < 24; i++) {
			fetchPromises.push(fetchForecastHourly(i, city, tempUnit));
		}
	}

	return Promise.all(fetchPromises).then((results) => {
		results.forEach((forecastData) => {
			const forecastCard = document.createElement("div");
			forecastCard.classList.add("forecastCard");

			forecastData.forEach((item) => {
				if (item.class === "weatherIconForecast") {
					const weatherIconForecast = document.createElement("img");
					weatherIconForecast.classList.add(item.class);
					weatherIconForecast.src = item.icon;

					forecastCard.append(weatherIconForecast);
				} else {
					const forecastItem = document.createElement("div");
					forecastItem.classList.add(item.class);
					forecastItem.textContent = item.text;

					forecastCard.append(forecastItem);
				}
			});

			forecastSection.append(forecastCard);
		});

		content.append(forecastSection);
	});
}

export function createFooter() {
    const footer = document.querySelector("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("p");
    footerText.classList.add("footerText");
    footerText.textContent = "Designed & Built by Dechsit Naetsawan";

    const link = document.createElement("a");
    link.href = "https://github.com/naetsawd/OdinProject-WeatherApp";
    link.target = "_blank";

    const icon = document.createElement("img");
    icon.classList.add("githubIcon");
    icon.src = (githubLogo);

    link.appendChild(icon);

    footer.appendChild(link);
    footer.appendChild(footerText);
}