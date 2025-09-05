import "./Services.css"
const Services = () => {
    return(
        <div className="services">
            <button>SERVICES</button>
            <h1>Our Best Services</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but<br/>
             the majority have suffered alteration in some form.</p><br/><br/><br/>
{/* 
             <!-- Filter  -->
<div className="filter-buttons">
    <button className="active" onclick="filteraboutText('all')">Show All</button>
    <button onclick="filteraboutText('who')">Who we are</button>
    <button onclick="filteraboutText('vision')">Our Vision</button>
    <button onclick="filteraboutText('history')">Our History</button>
  </div> */}

             <div className="grid-container">
                <div className="grid-item">
                    <h3>Refreshing Design</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing<br/>
                     elitr, sed diam nonumy eirmod tempor<br/>
                      ividunt labor dolore magna.</p>
                </div>
                <div className="grid-item">
                    <h3>Solid Bootstrap 5</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor<br/>
                     ividunt labor dolore magna.</p>
                </div>
                <div className="grid-item">
                    <h3>100+ Components</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor <br/>
                    ividunt labor dolore magna.</p>
                </div>
                <div className="grid-item">
                    <h3>Speed Optimized</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor <br/>
                    ividunt labor dolore magna.</p>
                </div>
                <div className="grid-item">
                    <h3>Fully Customizable</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod <br/>
                    tempor ividunt labor dolore magna.</p>
                </div>
                <div className="grid-item">
                    <h3>Regular Updates</h3>
                    <p>Lorem ipsum dolor sit amet, adipscing <br/>
                    elitr, sed diam nonumy eirmod tempor <br/>
                     ividunt labor dolore magna.</p>
                </div>
                
             </div>
            
        </div>
    )
}     
    

export default Services