export function fetchRequest(city) {
	return fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
			city +
			"&days=7&aqi=no&alerts=no",
		{ mode: "cors" }
	).then(function (response) {
			if (!response.ok) {
				throw new Error(`HTTP error! Status: ${response.status}`);
			}

			return response.json();
		}).catch(function (error) {
			const searchCont = document.querySelector(".searchContainer");
			searchCont.classList.add("invalidSearch");

			const searchBox = document.querySelector(".searchBox");
			searchBox.placeholder = "Please enter a valid name";

			return defaultFetch();
		});
}

export function defaultFetch() {
	return fetch(
		"https://api.weatherapi.com/v1/forecast.json?key=14f6e670b9ca46fcaf2203655231110&q=" +
			localStorage.getItem("prevCity") +
			"&days=7&aqi=no&alerts=no",
		{ mode: "cors" }
	).then(function (response) {
		if (!response.ok) {
			throw new Error(`HTTP error! Status: ${response.status}`);
		}

		localStorage.setItem("city", localStorage.getItem("prevCity"));

		return response.json();
	});
}

export function fetchLeftInfo(city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		const localTimeEpoch = response.location.localtime_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit",
		});

		let tempVal = response.current.temp_c;
		let feelsVal = response.current.feelslike_c;

		if (tempUnit === "°F") {
			tempVal = response.current.temp_f;
			feelsVal = response.current.feelslike_f;
		}

		return [
			{ class: "cityDate", text: formattedDate },
			{
				class: "cityName",
				text: response.location.name + ", " + response.location.country,
			},
			{ class: "leftDivider", text: "" },
			{
				class: "cityTemp",
				text: tempVal + tempUnit + " | Feels Like " + feelsVal + tempUnit,
			},
			{ class: "cityWeather", text: response.current.condition.text },
			{ class: "weatherIcon", icon: response.current.condition.icon },
		];
	});
}

export function fetchRightInfo(city, speed) {
	return fetchRequest(city).then(function (response) {
		let speedVal = response.current.wind_kph;

		if (speed === "mi") {
			speedVal = response.current.wind_mph;
		}
		
		return [
			{ class: "rightInfoTitle", text: "Humidity" },
			{ class: "rightInfoNo", text: response.current.humidity + " %" },
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Chance of Rain" },
			{
				class: "rightInfoNo",
				text: response.forecast.forecastday[0].day.daily_will_it_rain + " %",
			},
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Chance of Snow" },
			{
				class: "rightInfoNo",
				text: response.forecast.forecastday[0].day.daily_will_it_snow + " %",
			},
			{ class: "rightDivider", text: "" },
			{ class: "rightInfoTitle", text: "Wind Speed" },
			{ class: "rightInfoNo", text: speedVal + " " + speed + "/h" },
		];
	});
}

export function fetchForecastDaily(num, city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		let forecastData = response.forecast.forecastday[num];

		if (!forecastData) {
			return [
				{ class: "forecastDate", text: "WeathAPI" },
				{ class: "forecastMaxTemp", text: "Trial Ended" },
				{ class: "forecastMaxTemp", text: "Information" },
				{ class: "forecastMinTemp", text: "Not Available" },
			];
		}

		const localTimeDate = new Date(forecastData.date);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "short",
			month: "short",
			day: "numeric"
		});

		let tempValMax = forecastData.day.maxtemp_c;
		let tempValMin = forecastData.day.mintemp_c;

		if (tempUnit === "°F") {
			tempValMax = forecastData.day.maxtemp_f;
			tempValMin = forecastData.day.mintemp_f;
		}

		return [
			{ class: "forecastDate", text: formattedDate },
			{ class: "weatherIconForecast", icon: forecastData.day.condition.icon },
			{ class: "forecastMaxTemp", text: tempValMax + tempUnit },
			{ class: "forecastMinTemp", text: tempValMin + tempUnit },
		];
	});
}

export function fetchForecastHourly(num, city, tempUnit) {
	return fetchRequest(city).then(function (response) {
		let forecastData = response.forecast.forecastday[0].hour[num];

		const localTimeEpoch = forecastData.time_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedDate = localTimeDate.toLocaleDateString("en-US", {
			timeZone: response.location.tz_id,
			weekday: "short",
			month: "short",
			day: "numeric"
		});

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			timeZone: response.location.tz_id,
			hour: "numeric"
		});

		let tempVal = forecastData.temp_c;

		if (tempUnit === "°F") {
			tempVal = forecastData.temp_f;
		}

		return [
			{ class: "forecastDate", text: formattedDate },
			{ class: "forecastTime", text: formattedTime },
			{ class: "weatherIconForecast", icon: forecastData.condition.icon },
			{ class: "forecastTemp", text: tempVal + tempUnit },
		];
	});
}

export function fetchCurrTime(city) {
	return fetchRequest(city).then(function (response) {
		const localTimeEpoch = response.location.localtime_epoch * 1000;
		const localTimeDate = new Date(localTimeEpoch);

		const formattedTime = localTimeDate.toLocaleTimeString("en-US", {
			timeZone: response.location.tz_id,
			hour: "2-digit",
			hour12: false
		});

		return formattedTime;
	});
}