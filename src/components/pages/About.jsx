export default function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src="/about_image.jpg"
            alt="Your Name"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-8">
          <h2>About Me</h2>
          <p>
            I am a beginner web-developer. This portfolio was designed with React. 
          </p>
          <p>
            I also enjoys climbing and a big fan of craft beers. 
          </p>
        </div>
      </div>
    </div>
  );
};