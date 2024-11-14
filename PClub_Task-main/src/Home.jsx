import React from 'react'
import Features from './Components/Features/Features'
import Testinomails from './Components/Testonomials/Testinomails'
import More_Products from './Components/Products/More_Products/More_Products'
import TrendingCooler from './Data/TrendingCooler'
import { Banner } from './Components/Hero/Banner'
import AllProduct from "./Data/Data"

const Home = ({filterByCategory}) => {
  return (
    <div className="lg:mx-16 md:mx-8 mx-4 mt-20">
      <div className=''>
        <Banner/>
        
      </div>
          <div className="">
            <Features />
          </div>
          
          <div className=' mx-auto h-[600px] p-4'>
<More_Products products={filterByCategory("Clothing")}  text="Clothing" />
          </div>
          <div>
          <div className="w-full h-64 lg:h-96 overflow-hidden">
          <img
            className="object-cover w-full h-full object-center"
            src="https://static.vecteezy.com/system/resources/previews/008/174/590/non_2x/fashion-advertising-web-banner-illustration-vector.jpg"
            alt="Banner 1"
          />
        </div>
          </div>
          <div className=' mx-auto h-[600px] p-4 my-8'>
<More_Products products={filterByCategory("Footwear")}  text="Footwear" />
          </div>

          <div>
          <div className="w-full h-64 lg:h-84 overflow-hidden my-10">
          <img
            className="object-cover w-full h-full object-center"
            src="https://media-exp2.licdn.com/dms/image/D4D1BAQGNmaGzRtZaew/company-background_10000/0/1656145465314?e=2147483647&v=beta&t=8hiEOKGR3QOsrXf0IYmpQICYDv3x-B_E7DCq4nmH0to"
            alt="Banner 1"
          />
        </div>
          </div>
          
          <div>
            <Testinomails/>
          </div>
        </div>
  )
}

export default Home;