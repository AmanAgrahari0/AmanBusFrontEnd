import React from 'react'
import Search from './Search/Search'
import SliderImg from './SliderImg/SliderImg'
import About from './About/About'
import Header from './Search/Header'
import Testimonial from './Testimonial'

function HomePage() {
  return (
    <div>
      <Header />
      <Search />
      <SliderImg />
      <About />
      <Testimonial/>
    </div>
  )
}

export default HomePage