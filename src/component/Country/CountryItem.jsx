import React from 'react'

const CountryItem = ({country}) => {
    const { countryName, capital, population, interestingFacts} = country
  return (
    <div className='card'>
        <h4>Country: <span>{countryName}</span></h4>
        <p><strong>Capital:</strong> {capital}</p>
        <p><strong>Population:</strong> {population}</p>
        <p><strong>Interesting Facts:</strong> {interestingFacts}</p>
    </div>
  )
}

export default CountryItem