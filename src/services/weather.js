const FETCH_OPTIONS = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d99c97c68mshaceb52543059befp13aa4bjsnfec9d01bb948',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

export async function getWeatherFrom(query = 'Santiago') {
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS);
    const data = await response.json();

    const { location, current } = data;
    const { country, localtime, name } = location;
    const { condition, humidity, feelslike_c, temp_c, is_day, wind_kph, wind_dir } = current;
    const { code, text } = condition;

    return {
        conditionsCode: code,
        conditionsText: text,
        country,
        localtime,
        name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windKph: wind_kph,
        windDir: wind_dir
    };
}
