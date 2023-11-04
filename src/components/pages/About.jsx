// export default function About() {
//     return (
//       <div>
//         <h1>About Page</h1>
//         <p>
//             My name is Yee Yang. I graduated from University of Minnesota, with Economics B.S. I like bloudering. 
//             (~~ Needs work ~~) 
//         </p>
//       </div>
//     );
//   }
  

export default function About() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-4">
          <img
            src="/imageplaceholder.jpg"
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
            I also enjoys climbing. 
          </p>
        </div>
      </div>
    </div>
  );
};