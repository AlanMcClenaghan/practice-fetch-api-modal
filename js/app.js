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

        // Data added to countries variable
        countries = data;
        console.log(countries);

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
            <div class="country" data-name="${country.name.common}">
                <h3 class="country-name">${country.name.common}</h3>
                <img class="country-flag" src="${country.flags.svg}" />
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
container.addEventListener('click', e => {
    //   Make sure that only clicks on the country element are targeted
    const countryCard = e.target.closest('.country');
    console.log(e.target);
    console.log(countryCard);

    if (!countryCard) return;

    //     Get the country name from the clicked element
    const countryName = countryCard.dataset.name;
    console.log(countryName);

    //     Find the country object in the countries array that matches the name
    const country = countries.find(
        (country) => country.name.common === countryName
    );
    console.log(countryName);
    displayCountryModal(country);
});

//   update the modal content with the country data
function displayCountryModal(country) {
    const modalHTML = `
        <h2>${country.name.common}</h2>
        <div class="flag">
            <img src=${country.flags.svg} alt=${country.flags.alt} />
        </div>
        <div class="content">
            <h3>Population</h3>
            <p>${country.population}</p>
            <h3>Region:</h3>
            <p>${country.region}</p>
            <h3>Capital:</h3>
            <p>${country.capital}</p>
        </div>
    `
    modalContent.innerHTML = modalHTML;
    //   add the open class to the overlay element
    overlay.classList.add('open');
}

// Create a click event listener on the close button

closeButton.addEventListener('click', () => {
    //   remove the open class from the overlay element
    overlay.classList.remove('open');
});

//========================
//  EXTRA CREDIT
//------------------------

// Close the modal when the user clicks outside of the modal
overlay.addEventListener('click', e  => {
    const isOutSide = !e.target.closest('.modal');
    if (isOutSide) {
        overlay.classList.remove('open');
    }
});

// Close the modal when the user presses the escape key
document.addEventListener('keyup', e  => {
    if (e.key === 'Escape') {
        overlay.classList.remove('open');
    }
});