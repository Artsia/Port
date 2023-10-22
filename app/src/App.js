import './App.css';
import Nav from './comp/nav'
import Project from './comp/proj'
import img from './comp/assets/tinyUrl.gif'
import img1 from './comp/assets/adviceFull.png'


const projectData = [
{
  imageSrc:img,
  liveLink:"https://linkshortnerv3.netlify.app/",
  githubLink:"https://github.com/Artsia/LinkShort"
},
{
  imageSrc:img1,
  liveLink:"https://phillip-gen-advice.netlify.app/",
  githubLink:"https://github.com/Artsia/Generate-Advicet"
},
{
  imageSrc:img,
  liveLink:"https://linkshortnerv3.netlify.app/",
  githubLink:"https://github.com/Artsia/LinkShort"
}
];


function App() {
  return (
    <div className="App">
      <Nav/>
      
      <div id='project'>
        <div className="project-section">
          {projectData.map((project, index) => (
            <Project
              key={index}
              imageSrc={project.imageSrc}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>

        <div className="project-section">
        {projectData.map((project, index) => (
          <Project
            key={index}
            imageSrc={project.imageSrc}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>

      </div>


     
    </div>
  );
}

export default App;
