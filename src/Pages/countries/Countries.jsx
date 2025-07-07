import React, { useEffect, useState, useTransition } from 'react'
import { getCountries } from '../../api/Countries'
import CountryCard from '../../component/Country/CountryCard';
import Button from '../../common/Button/Button';
import Loader from '../../component/Loader/Loader';
const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState("");
    const [continent, setContinent] = useState([]);

    const [region, setRegion] = useState();
    const [sortOrder, setSortOrder] = useState();


    //old method before useTransition in version 19
    //   async function getCountriesData(){
    //     try{
    //       const data = await getCountries();
    //     setCountries(data.data);
    //     console.log(data.data)
    //     }catch(error){
    //       throw new Error(error)
    //     }

    //   }


    const [isPending, startTransition] = useTransition();
    useEffect(() => {
        startTransition(async () => {
            const res = await getCountries()
            setCountries(res.data);
        });
    }, [])
    useEffect(() => {
        if (countries?.length === 0) return
        const uniqContinet = countries
            .map((country) => country.continent)
            .filter((country, index, self) => self.indexOf(country) === index);

        setContinent(uniqContinet);
    }, [countries])

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }
    const handleRegionChange = (e) => {
        const value = e.target.value;
        setRegion(value);
    }

    const searchCountry = (country) => {
        if (search !== "") {
            return country.name.toLowerCase().includes(search.toLowerCase())
        } else {
            return country
        }
    }

    const filterRegion = (country) => {
        if (region === "all" || !region) return country;
        return country.continent === region;
    };

    const handleSortAsce = () => setSortOrder("asce")
    const handleSortDesc = () => setSortOrder("desc")
    const filterCountries = countries?.filter(country => {
        console.log(country)
        return searchCountry(country) && filterRegion(country);
    })?.sort((a, b) => {
        if (sortOrder === "asce") {
            return a.name.localeCompare(b.name);
        } else if (sortOrder === "desc") {
            return b.name.localeCompare(a.name)
        } else {
            return 0
        }
    })

    return (
        <>

            <div className='container'>
                <div className='page-title'>
                    <h1 className='heading'>Country List</h1>
                </div>
                <>
                    {
                        isPending ? <Loader /> :
                            <>

                                <div className='filter-coutries'>

                                    <input type='text' value={search} onChange={handleSearchChange} name='serachInput' placeholder='Search Country' />

                                    <select value={region} onChange={handleRegionChange}>
                                        <option value={"all"}>All</option>
                                        {
                                            continent?.map((c, index) => {
                                                { console.log(c) }
                                                return <option value={c} key={index}>{c}</option>
                                            }

                                            )
                                        }
                                    </select>
                                    <div className='btns'>
                                        <Button className={"transparent rounded outline"} onClick={handleSortAsce}>Asc</Button>
                                        <Button className={"transparent rounded outline"} onClick={handleSortDesc}>Desc</Button>
                                    </div>
                                </div>
                                <div className='country-list'>

                                    {filterCountries &&
                                        filterCountries?.map((country) => {
                                            return <CountryCard country={country} key={country.code} />
                                        })
                                    }
                                </div>
                            </>
                    }
                </>

            </div>
        </>
    )
}

export default Countries