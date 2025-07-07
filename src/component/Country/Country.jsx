
import { useEffect } from "react";
import CountryData from "../../api/Country.json";
import CountryItem from "./CountryItem";
import "./Country.css";
const Country = (props) => {
    console.log(CountryData)
    useEffect(() => {
        if(!CountryData) return

    },[])
  return (
    <div className="country-section">
        <div className="page-title">
            <h2>{props.heading}</h2>
        </div>        
        <div className="country-cards">
            {
                CountryData?.map((country) => {
                    return <CountryItem country={country} key={country.id}/>
                })
            }
        </div>
    </div>
  )
}

export default Country