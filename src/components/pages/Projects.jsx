export default function Projects() {
    return (
      <div>
        <h1 className="text-center m-4">Project</h1>
        <p className="mb-5 text-center font-weight-bold"> 
            Please Explore my collection of projects throughout my journey - click Link for live demos. Discover the magic behind each creation.
        </p>

        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-col-lg-3">

                <div className="col mb-4">
                    <div className = "card shadow-sm bg-white rounded h-100" >
                        <h3 className="text-center"> 
                        Gamer's Paradise App
                        </h3>
                        <img  className="card-img-top img-fluid"  src="/gamedice.png" alt="/blank-placeholder.jpeg"></img>
                        <div className="p-2" > 
                        A Gamer's Blog. Post and comment about your favorite game, and create a user account!
                        </div>
                        <div className="d-flex justify-content-center p-2">
                            <a href="https://github.com/jaxongrosam/gamers-paradise" target="_blank" className="btn btn-primary mr-5">Github</a>
                            <a href="#" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className = "card shadow-sm bg-white rounded h-100" >
                        <h3 className="text-center"> 
                        Quotaku App
                        </h3>
                        <img  className="card-img-top img-fluid"  src="/quotaku.png" alt="/blank-placeholder.jpeg"></img>
                        <div className="p-2">
                        Imagine a situation where you are watching your favorite TV show and wanted to find a quick way to get to know more about your favorite character.
                        Well that is what our ease of use application is for! Find their famous quotes! 
                        </div>
                        <div className="d-flex justify-content-center p-2">
                            <a href="https://github.com/s0m3y3/Quotaku" target="_blank" className="btn btn-primary  mr-5">Github</a>
                            <a href="https://s0m3y3.github.io/Quotaku/" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className = "card shadow-sm bg-white rounded h-100" >
                        <h3 className="text-center"> 
                        Weather Dashboard App 
                        </h3>
                        <img  className="card-img-top img-fluid"  src="/weatherDashboard3.png" alt="/blank-placeholder.jpeg"></img>
                        <div className="p-2">
                        Enter a city name, and it will search today's and 5-day forcast for the weather. Great for travels, or event planning. 
                        </div>
                        <div className="d-flex justify-content-center p-2">
                        <a href="https://github.com/s0m3y3/WeatherDashboard" target="_blank" className="btn btn-primary  mr-5">Github</a>
                            <a href="https://s0m3y3.github.io/WeatherDashboard/" target="_blank" className="btn btn-primary">Link</a>
                        </div>
                    </div>
                </div>

                <div className="col mb-4">
                    <div className = "card shadow-sm bg-white rounded h-100" >
                        <h3 className="text-center"> 
                        README Generator 
                        </h3>
                        <img  className="card-img-top img-fluid"  src="./readme.jpg" alt="/blank-placeholder.jpeg"></img>
                        <div className="p-2">
                        Working on a new github project and want a faster way to generate a README.md file? This app is for you! 
                        </div>
                        <div className="d-flex justify-content-center p-2">
                        <a href="https://github.com/s0m3y3/readme_generator" target="_blank" className="btn btn-primary  mr-5">Github</a>
                            <a target="_blank" className="btn btn-danger">No-Link</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    );
  }
  