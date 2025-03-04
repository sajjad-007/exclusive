import BestSelling from "../../component/homePage/bestSelling/Index"
import Category from "../../component/homePage/category/Category"
import Experience from "../../component/homePage/Experience/Index"
import FlashSales from "../../component/homePage/flash/Index"
import HeroSection from "../../component/homePage/heroSection/Index"



const Homepage = () => {
  
  return (
    <div>
      <HeroSection/>
      <FlashSales/>
      <Category/>
      <BestSelling/>
      <Experience/>
    </div>
  )
}

export default Homepage