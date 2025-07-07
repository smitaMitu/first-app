import { useEffect, useState } from 'react'
import { useNavigate, useRouteError } from 'react-router-dom'
import Button from '../../common/Button/Button';
import "./ErrorPage.css"
const ErrorPage = () => {
    const [message, setMessage] = useState("");
    const error = useRouteError();
    const navigate = useNavigate();
    useEffect(() => {

        if (error.status === 404) {
            setMessage(error.data);
        }

    }, [error])



    return (
        <>
            {error.status === 404 ? <div className='error-page'>

                <h2>{error.status}</h2>
                <p>Opps!. Page not found</p>
                <Button className={"outline  transparent"} style={{textAlign: "center"}} onClick={() => navigate("/")}>Go to home</Button>
            </div> : ""

            }
        </>

    )
}

export default ErrorPage