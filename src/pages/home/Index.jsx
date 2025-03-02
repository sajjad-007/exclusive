import Category from "../../component/homePage/category/Category"
import FlashSales from "../../component/homePage/flash/Index"
import HeroSection from "../../component/homePage/heroSection/Index"



const Homepage = () => {
  
  return (
    <div>
      <HeroSection/>
      <FlashSales/>
      <Category/>
    </div>
  )
}

export default Homepage