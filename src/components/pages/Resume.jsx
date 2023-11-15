export default function About() {
    return (
      <div className="container my-5">
          <div className="md-4 text-center">
            <p> Resume:  
                <a href="./public/resume.pdf" target="_blank"> PDF_Link</a>
            </p>
            <p>Programming Languages:
                <li> HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                </p>
            <p>Front-end Frameworks and Libraries: 
                <li> React.js</li>
                <li> jQuery </li>
                <li> Bootstrap </li>
                </p>
            <p> Back-end Technologies: 
                <li>Node.js </li>
                <li>Express.js </li>
                <li> SQL  & NoSQL </li>
                </p>
            <p> Other: 
                <li> Github </li>
                <li> Heroku </li>
                <li> mongoDB </li>
                </p>
          </div>
      </div>
    );
  };