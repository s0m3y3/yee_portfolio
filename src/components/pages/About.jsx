export default function About() {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        <div className="col-md-4 text-center">
          <img src="/about_image.jpg" alt="Missing profile photo" className="img-fluid rounded-circle p-3"/>
        </div>
        <div className="col-md-8 border text-center">
          <h2 className="mb-4 mt-4">About Me</h2>
          <p className="m-2 mb-4">
          I'm an aspiring web developer with a strong interest in creating engaging digital experiences. My journey into the world of web development began with my curiosity about Python. Over time, I've gradually picked up skills in JavaScript, HTML, and CSS, which have become the building blocks of my knowledge. This portfolio was created using React as part of my learning journey. 
          </p>

          <p className="m-2 mb-4">
          When I'm not immersed in coding, you'll find me in the physical world, seeking diverse experiences. I enjoy bouldering, a pursuit that challenges both my body and mind. Additionally, I'm a connoisseur of craft beers, always on the hunt for unique and delicious brews. Traveling is my source of inspiration, enabling me to explore varied cultures, food, landscapes, and experiences.
          </p>
        </div>
      </div>
    </div>
  );
};