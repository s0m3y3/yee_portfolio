import getYeeSkills from "../../utils/resume.js"

export default function About() {
const yeeSkill = getYeeSkills();

    return (
      <div className="container my-5">
          <div className="md-4 text-center">
            <p> Resume:  
                <a href="./public/resume.pdf" target="_blank"> PDF_Link</a>
            </p>

            {yeeSkill.map((skillCategory, index) => (
                <div key={index}>
                    <p style={{fontWeight:'strong'}}>{skillCategory.category}:</p>
                    <ul style={{ listStylePosition: 'inside', paddingLeft: '0' }}>
                        {skillCategory.items.map((item, idx) => (
                            <li key={idx}>{item}</li>
                        ))}
                    </ul>
                </div>
            ))}
            
          </div>
      </div>
    );
  };