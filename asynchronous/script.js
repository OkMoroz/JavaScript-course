'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// Our First AJAX Call: XMLHttpRequest
const getCountryData = function (countries) {
  countries.forEach(country => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
      const [data] = JSON.parse(this.responseText);
      console.log(data);

      if (data) {
        const html = `
            <article class="country">
              <img class="country__img" src="${data.flags.svg}" />
              <div class="country__data">
                <h3 class="country__name">${data.name.common}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(
                  +data.population / 1000000
                ).toFixed(1)} people</p>
                <p class="country__row"><span>🗣️</span>${
                  data.languages
                    ? data.languages[Object.keys(data.languages)[0]]
                    : 'N/A'
                }</p>
                <p class="country__row"><span>💰</span>${
                  data.currencies ? Object.keys(data.currencies)[0] : 'N/A'
                }</p>
              </div>
            </article>
            `;
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
      } else {
        console.error('No data received for the country:', country);
      }
    });
  });
};

const countriesToFetch = ['Portugal', 'USA', 'Germany'];
getCountryData(countriesToFetch);
