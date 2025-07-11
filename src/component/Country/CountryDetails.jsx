import React, { useEffect, useState, useTransition } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'
import { getCountries } from '../../api/Countries';
import "./CountryDetails.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import Button from '../../common/Button/Button';
const CountryDetails = () => {
    // const params = useParams();
    const {code} = useParams();
    const [isPending, startTransition] = useTransition();
    const [data, setData] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        startTransition(async () => {
          const res = await getCountries();
            const countries = await res.data;
            setData(countries.find(country => country.code === code))
        })
        
    },[code])
    // console.log(data)
    if(isPending) return

  return (
    <>
    
    {
        data? <div className='container'>
            <div className='page-title'>
                <h1 style={{textAlign: "left"}}>  Details</h1>
            </div>
            <div className='country-details-container'>
                <div className='country-details-img'>
                     <img src={`https://flagcdn.com/${data.code.toLowerCase()}.svg`} alt='' />
                </div>
                <div>
                    <p className='country-card-name'>{data.name}</p>
                     <p><strong>Capital:</strong> {data.capital_name}</p>
                     <br/>
                     <Button onClick={() => navigate(-1)} className={"outline rounded transparent"}><IoMdArrowRoundBack/> Back </Button>
                </div>
                
            </div>
        </div> : ""
    }
        
    </>
  )
}

export default CountryDetails;

//https://simplelocalize.io/data/country/AF/