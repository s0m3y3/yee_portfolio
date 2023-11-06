export default function Projects() {
    return (
      <div>
        <h1 className="text-center">Project</h1>
        <p className="border"> 
            Please Explore my collection of projects throughout my journey - click Link for live demos. Discover the magic behind each creation."
        </p>

        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-col-lg-3">

                <div className="col mb-4">
                    <div className = "card shadow-sm bg-white rounded h-100" >
                        <h3 className="text-center"> 
                        Gamer's Paradise App
                        </h3>
                        <img  className="card-img-top img-fluid"  src="/blank-placeholder.jpeg" alt="/blank-placeholder.jpeg"></img>
                        <div className="p-2" > 
                            Description goes here.
                        </div>
                        <div className="d-flex justify-content-between p-2">
                            <a href="https://github.com/jaxongrosam/gamers-paradise" target="_blank" className="btn btn-primary">Github</a>
                            <a href="#" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className = "card shadow-sm bg-white rounded h-100" >
                        <h3 className="text-center"> 
                        Quotaku 
                        </h3>
                        <img  className="card-img-top img-fluid"  src="/quotaku.png" alt="/blank-placeholder.jpeg"></img>
                        <div className="p-2">
                        Imagine a situation where you are watching your favorite TV show and wanted to find a quick way to get to know more about your favorite character.
                        Well that is what our ease of use application is for! Find their famous quotes! 
                        </div>
                        <div className="d-flex justify-content-between p-2">
                            <a href="https://github.com/s0m3y3/Quotaku" target="_blank" className="btn btn-primary">Github</a>
                            <a href="https://s0m3y3.github.io/Quotaku/" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className = "card shadow-sm p-3 m-5 bg-white rounded h-100" >
                        <h3 className="text-center "> 
                        Weather Dashboard App
                        </h3>
                        <img  className="card-img-top img-fluid"  src="/weatherDashboard.png" alt="Card image cap"></img>
                        <div >
                        Description goes here.
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="https://s0m3y3.github.io/WeatherDashboard/" target="_blank" className="btn btn-primary">Github</a>
                            <a href="#" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className = "card shadow-sm p-3 m-5 bg-white rounded h-100" >
                        <h3 className="text-center "> 
                        APP name
                        </h3>
                        <img  className="card-img-top img-fluid"  src="" alt="Card image cap"></img>
                        <div >
                        Description goes here.
                        </div>
                        <div className="d-flex justify-content-between">
                            <a href="#" target="_blank" className="btn btn-primary">Github</a>
                            <a href="#" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      </div>
    );
  }
  