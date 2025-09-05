import React from "react"
import Navbar from "./components/navbar"
import { Route,Routes } from "react-router"
import Home from "./components/home"
import Services from "./components/services"
import Portfolio from "./components/portfolio"
import Pricing from "./components/pricing"
import Team from "./components/team"
import Contact from "./components/contact"


function  App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Routes>
          <Route path ="/" element = {<Home/>}/>
          <Route path ="/" element = {<Services/>}/>
          <Route path="/" element = {<Portfolio/>}/>
          <Route path="/" element = {<Pricing/>}/>
          <Route path="/" element = {<Team/>}/>
          <Route path ="/" element = {<Contact/>}/>

        </Routes>

        </div>
    </>
  )
}

export default App
