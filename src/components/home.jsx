import "./home.css"
import { useState } from "react"
import heroimage from "../assets/hero.jpg"
import abt from "../assets/about-img1.jpg"
import pill from "../assets/bpill.jpg"
import B from "../assets/B.jpg"
import stack from "../assets/bstack.jpg"
import cycle from "../assets/bcycle.jpg"


const Home = () => {
    const [activeTab, setActiveTab] = useState ('who');
    const content ={
        who: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, look like readable English.There are many variations of passages of Lorem Ipsum available,but the majority have in some form, by injected humour.", 
  
        vision: "you",
        history:"hi",
    }
    return(
<section className="Home-page">
    <div className="hero">
        <div className="hero-container" >
            <div className="hero-text">
                
                <h1>Corporate & Business <br/> Site Template by Ayro UI.</h1><br/>

                <p>We are a digital agency that helps brands to achieve their business <br/> outcomes. We see technology as a tool to create amazing things.</p><br/>
                
                <div className="hero-buttons">
                    <button className="btn-p">Get Started</button>
                    <button className="btn-s">Watch Intro</button>
                </div>
                
            </div>

            <div className="hero-image">
                    <img src={heroimage} alt="Hero"/>
            </div>
            
        </div>    
        
    </div><br/><br/><br/><br/>

    <div className="about">
        <div>
            <img src={abt} alt="man"/>
        </div>
        <div>
            <h3><span>-</span>OUR STORY</h3><br/>
            <h1>Our team comes with the <br/> experience and knowledge</h1>
           

<div className="about-buttons">
    <button  onClick = {() => setActiveTab("who")}> Who are we</button>
    <button  onClick = {() => setActiveTab("vision")}>Our Vision</button>
    <button  onClick = {() => setActiveTab("history")}>Our History</button>
    </div>
    <p>{content[activeTab]}</p>

  </div>
  </div><br/><br/><br/>

    {/* Services */}
        <div className="services">
            <button>SERVICES</button>
            <h1>Our Best Services</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but<br/>
             the majority have suffered alteration in some form.</p><br/><br/><br/>

             <div className="grid-container">
                <div className="grid-item">
                    <h3>Refreshing Design</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing<br/>
                     elitr, sed diam nonumy eirmod tempor<br/>
                      ividunt labor dolore magna.</p>
                      <div className="circle">
                        <img src={pill} />
                      </div>
                </div>
                <div className="grid-item">
                    <h3>Solid Bootstrap 5</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor<br/>
                     ividunt labor dolore magna.</p>
                     <div className="circle">
                     <img src={B}/>
                     </div>
                </div>
                <div className="grid-item">
                    <h3>100+ Components</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor <br/>
                    ividunt labor dolore magna.</p>
                    <div className="circle">
                        <img src={B}/>
                    </div>
                </div>
                <div className="grid-item">
                    <h3>Speed Optimized</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor <br/>
                    ividunt labor dolore magna.</p>
                    <div className="circle">
                        <img src={pill}/>
                    </div>
                </div>
                <div className="grid-item">
                    <h3>Fully Customizable</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod <br/>
                    tempor ividunt labor dolore magna.</p>
                    <div className="circle">
                        <img src={stack}/>
                    </div>
                </div>
                <div className="grid-item">
                    <h3>Regular Updates</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor <br/>
                     ividunt labor dolore magna.</p>
                     <div className="circle">
                        <img src={cycle}/>
                     </div>
                </div>
                
             </div>
            
        </div>

</section>

    )
}

export default Home