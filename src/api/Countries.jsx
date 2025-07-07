import axios from "axios";

const Countries = axios.create({
    baseURL: `https://cdn.simplelocalize.io/public/v1`
})

export async function getCountries(){
    return Countries.get(`/countries`);
}
