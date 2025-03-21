import BestSelling from "../../component/homePage/bestSelling/Index"
import Category from "../../component/homePage/category/Category"
import Experience from "../../component/homePage/Experience/Index"
import ExploreProduct from "../../component/homePage/ExploreProducts/Index"
import FlashSales from "../../component/homePage/flash/Index"
import HeroSection from "../../component/homePage/heroSection/Index"
import NewArrival from "../../component/homePage/NewArrival/Index"
import OurService from "../../component/homePage/OurService/Index"



const Homepage = () => {
  
  return (
    <div>
      <HeroSection/>
      <FlashSales/>
      <Category/>
      {/* <BestSelling/> */}
      {/* <Experience duration={2}/> */}
      {/* <ExploreProduct/> */}
      {/* <NewArrival/> */}
      {/* <OurService/> */}
    </div>
  )
}

export default Homepage