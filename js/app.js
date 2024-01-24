//1. Create an async function called getCountries


//  - pass the data to the displayCountries function.
//  - Catch any errors and log them to the console.
async function getCountries() {
    try {
        //  - retrieve the name, capital, population and flags for all countries.
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region');

        if (!response.ok) throw new Error('Something went wroing');

        //  - Convert the response to JSON.
        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error)
    }
}

//2. Create a displayCountries function that takes in an array of countries.
//  - Loop over the array of countries.
//      - Create a div for each country.
//      - Add the country name and flag to the div with the provided HTML structure.
//      - Add the created div to the `.countries` container element.

//3. Call the getCountries function.
getCountries()