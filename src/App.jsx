import React from 'react'
import { useState } from 'react'
import './App.css'
import './index.css';

import Navbar from './Components/Navbar'

import Home from './Components/Home'
import Description from './Components/Description'
import WhyChooseUs from './Components/WhyChooseUs'
import FAQs from './Components/Faqs'
import ReviewsSection from './Components/ReviewsSection'
import ServiceAreas from './Components/ServiceAreas'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'
// import ExploreMore from './Components/ExploreMore'




const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <Description/>
      <WhyChooseUs />
      <FAQs/>
      <ReviewsSection/>
      {/* <ExploreMore/> */}
      <ServiceAreas/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default App;



// const App = () => {
//   return (
    
//     <div>
//       <Navbar/>
//       {/* <h1>Hellooooo</h1> */}
//       <Home/>
//        <Description/> 
//       <WhyChooseUs />
//       <FAQs/>
//       <ReviewsSection/>
//       <ServiceAreas/>
//       <ContactForm/>
//       <Footer/> 
//     </div>
//   )
// }

// export default App


