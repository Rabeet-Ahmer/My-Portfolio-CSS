import About from '@/components/all-pages/about/About'
import Footer from '@/components/all-pages/footer/Footer'
import Header from '@/components/all-pages/header/Header'
import Hero from '@/components/all-pages/hero/Hero'
import Projects from '@/components/all-pages/projects/Projects'
import Contacts from "@/components/all-pages/contacts/Contacts"
import "./page.css"
import React from 'react'

const page = () => {
  return (
    <div className='main'>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  )
}

export default page