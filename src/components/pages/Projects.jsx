export default function Projects() {
    return (
      <div>
        <h1 className="text-center">Project</h1>
        <p> List of my projects. Please click, for a deployed link! </p>

        <div className="container d-flex flex-wrap">
            <div className="row row-cols-1 row-cols-md-2 lg-3">

            <div className = "card shadow-sm p-3 m-5 bg-white rounded" >
                <h3 className="text-center"> Gamer's Paradise App</h3>
                <img  class="card-img-top"  src="/blank-placeholder.jpeg" alt="/blank-placeholder.jpeg"></img>
                <div > 
                    Description goes here.
                </div>
                <div className="d-flex justify-content-between">
                    <a href="https://github.com/jaxongrosam/gamers-paradise" target="_blank" className="btn btn-primary">Github</a>
                    <a href="#" target="_blank" className="btn btn-primary">Link</a>
                </div>
            </div>
        


             <div className = "card shadow-sm p-3 m-5 bg-white rounded  style={{ width: '18rem' }}" >
                <h3 className="text-center"> Quotaku </h3>
                <img  class="card-img-top"  src="/quotaku.png" alt="/blank-placeholder.jpeg"></img>
                <div >
                Description goes here.
                </div>
                <div className="d-flex justify-content-between">
                    <a href="https://s0m3y3.github.io/WeatherDashboard/" target="_blank" className="btn btn-primary">Github</a>
                    <a href="#" target="_blank" className="btn btn-primary">Link</a>
                </div>
            </div>

            <div class = "card shadow-sm p-3 m-5 bg-white rounded" >
                <h3 className="text-center"> Weather Dashboard App</h3>
                <img  class="card-img-top"  src="/weatherDashboard.png" alt="Card image cap"></img>
                <div >
                Description goes here.
                </div>
                <div className="d-flex justify-content-between">
                    <a href="https://s0m3y3.github.io/WeatherDashboard/" target="_blank" className="btn btn-primary">Github</a>
                    <a href="#" target="_blank" className="btn btn-primary">Link</a>
                </div>
            </div>

            <div class = "card shadow-sm p-3 m-5 bg-white rounded" >
                <h3 className="text-center"> Title4 </h3>
                <img  class="card-img-top"  src="/blank-placeholder.jpeg" alt="Card image cap"></img>
                <div >
                Description goes here.
                </div>
                <div className="d-flex justify-content-between">
                    <a href="https://s0m3y3.github.io/WeatherDashboard/" target="_blank" className="btn btn-primary">Github</a>
                    <a href="#" target="_blank" className="btn btn-primary">Link</a>
                </div>
            </div>

{/* below is just a test.. to be deleted. */}
                <div className="card" style={{width: '32rem', height:'28rem'}}>
                    <img className="card-img-top"  src="/quotaku.png" alt="/blank-placeholder.jpeg" ></img>
                    <div className="card-body">
                        <h5 className="card-title">Quotaku</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div className="d-flex justify-content-between">
                            <a href="https://github.com/s0m3y3/Quotaku" className="btn btn-primary">Github</a>
                            <a href="#" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>

      </div>
    );
  }
  