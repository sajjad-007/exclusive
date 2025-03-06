import BestSelling from "../../component/homePage/bestSelling/Index"
import Category from "../../component/homePage/category/Category"
import Experience from "../../component/homePage/Experience/Index"
import ExploreProduct from "../../component/homePage/ExploreProducts/Index"
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
      <ExploreProduct/>
    </div>
  )
}

export default Homepage