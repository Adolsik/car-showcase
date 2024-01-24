export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "c4a513b7damsh17610535a826582p1b4d28jsn8f907966d112",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=x5`,
    {
      headers: headers,
    }
  );
  const result = await response.json();

  return result;
}

export const generateCarImageUrl = (
  car: {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
  },
  angle?: string
) => {
  const url = new URL("https://cdn.imagin.studio/getImage");
  const { make, year, model } = car;
  url.searchParams.append("customer", "hrjavascript-mastery");
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(' ')[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year.toString()}`);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
};
