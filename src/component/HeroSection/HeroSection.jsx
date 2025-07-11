import "./HeroSection.css"
import Button from '../../common/Button/Button'
import { LuArrowRight } from "react-icons/lu";
import HeorImg from "../../assets/images/world.png"
const HeroSection = () => {
  return (
    <div className='hero-section'>
        <div className='hero-content'>
            <h1>Explore the world. One Country at a time</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veniam ullam quos soluta suscipit nesciunt dolorum aperiam, fugit debitis expedita dolores ipsam tenetur, cupiditate velit maxime! Maxime repellendus quibusdam dolores.</p>
            <Button className={"transparent outline rounded"}>start exploring <LuArrowRight size={"1.2rem"}/></Button>
        </div>
        <div className="hero-img">
            <img src={HeorImg} alt="explore world" />
        </div>
    </div>
  )
}

export default HeroSection