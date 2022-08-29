const loadCountrys = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
const displayCountry = countries => {
    //for(const country of countries)
    //console.log(country);
    const countriesConateiner= document.getElementById('countrys-container');

    countries.forEach(country => {
        const CountryDiv = document.createElement('div');
        CountryDiv.classList.add('country');
        CountryDiv.innerHTML = `
        <h1> Name </h1>
        <p> Capital ${country.capital ? country.capital[0] : 'No Capital'} </p>
        <button onclick="loadCountryDetail('${country.cca2}')"> Details </button>
        
        `;
        countriesConateiner.appendChild(CountryDiv);

    });
     

}
const loadCountryDetail = (code) =>{
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountryDetail(data[0]))


}
const displayCountryDetail = country =>{
    const countryDetail = document.getElementById('country-detail')
    countryDetail.innerHTML = `
    <h2>Details: ${country.name.common}</h2>
    <img src="${country.flags.png}"></img>
    
    `;

}


loadCountrys();
