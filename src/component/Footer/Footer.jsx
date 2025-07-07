import { useEffect } from "react";
import FooterData from "../../api/FooterApi.json";
import "./Footer.css"
import { MdPlace } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";
const Footer = () => {
const footerIcon = {
  MdPlace : <MdPlace />,
  IoCallSharp: <IoCallSharp />,
  TbMailPlus: <TbMailPlus />

}
  useEffect(() => {
    if (!FooterData) return
  }, [])
  return (
    <footer className='footer-section'>
      <div className='container'>
        <div className='footer'>
          {
            FooterData.map((item, index) => {
              return (

                <div className="footer-data" key={index}>
                    <div className="footer-icon">
                      {footerIcon[item.icon]}
                    </div>
                    <div className="footer-details">
                  <p>{item.title}</p>
                  <p>{item.details}</p>
                  </div>
                </div>)
            }

            )
          }
        </div>
        
      </div>
      <div className="footer-copyrights">
        <div className="container">
          <p>&copy;Copyrights. All rights are reserved</p>
        </div>
        
      </div>
    </footer>
  )
}

export default Footer