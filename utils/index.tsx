export async function fetchCars() {
    const headers = {
		'X-RapidAPI-Key': 'c4a513b7damsh17610535a826582p1b4d28jsn8f907966d112',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars`, {
        headers: headers,
    } );
    const result = await response.json();

    return result;
}