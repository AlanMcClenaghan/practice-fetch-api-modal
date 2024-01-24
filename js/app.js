// Global variables
let countries = [];
const modalContent = document.querySelector('.modal-content');
const overlay = document.querySelector('.overlay');
const closeButton = document.querySelector('.modal-close');
const container = document.querySelector('.countries');


//1. Create an async function called getCountries
async function getCountries() {
    try {
        //  - retrieve the name, capital, population and flags for all countries.
        const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,capital,region');

        if (!response.ok) throw new Error('Something went wroing');

        //  - Convert the response to JSON.
        const data = await response.json();

        //  - pass the data to the displayCountries function.
        console.log(data);
        displayCountries(data);

    } catch (error) {
        //  - Catch any errors and log them to the console.
        console.error(error)
    }
}

//2. Create a displayCountries function that takes in an array of countries.
function displayCountries(data) {
    //  - Loop over the array of countries.
    data.forEach( (country) => {
        //      - Create a div for each country.
        //      - Add the country name and flag to the div with the provided HTML structure.
        let countryHTML = `
            <div class="country">
                <h3 class="country-name">${country.name.common}</h3>
                <img class="country-flag" src="${country.flags.svg}" />
                <div class="content">
                <h3>Capital</h3>
                <p>${country.capital}</p>
                <h3>Population</h3>
                <p>${country.population}</p>
                <h3>Region</h3>
                <p>${country.region}</p>
                </div>
            </div>
        `;

        //      - Add the created div to the `.countries` container element.
        document.querySelector('.countries').insertAdjacentHTML('beforeend', countryHTML);
    });
}

//3. Call the getCountries function.
getCountries();

//========================
//  Modal Code Goes Here
//------------------------

// Create a click event listener on the container element
//   Make sure that only clicks on the country element are targeted
//     Get the country name from the clicked element
//     Find the country object in the countries array that matches the name

//   update the modal content with the country data
//   add the open class to the overlay element

// Create a click event listener on the close button
//   remove the open class from the overlay element

//========================
//  EXTRA CREDIT
//------------------------

// Close the modal when the user clicks outside of the modal

// Close the modal when the user presses the escape key
