import React from 'react'
import "./CountryCard.css"
import Button from '../../common/Button/Button'
import { useNavigate } from 'react-router-dom'
const CountryCard = ({ country }) => {
    const navigate = useNavigate();
    const {
        capital_latitude,
        capital_longitude,
        capital_name,
        code,
        continent,
        currency,
        currency_code,
        flag,
        name,
        tld

    } = country
    return (
        <div className='country-card' key={code}>
            <div className='flag-img'>
                <img src={`https://flagcdn.com/${code.toLowerCase()}.svg`} alt='' />
            </div>

            <p className='country-card-name'>{name}</p>
            <p><strong>Capital:</strong> {capital_name}</p>
            <Button className={"outline rounded transparent readmore"} onClick={() => navigate(`/country/${code}`)}>Read More</Button>
        </div>
    )
}

export default CountryCard