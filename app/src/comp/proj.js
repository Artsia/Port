import './proj.css';
/**Recieve
 * @imageSrc - image location of image
 * @liveLink -  location of live project
 * @githubLink -  location of repo
 */
function Project({ imageSrc, liveLink, githubLink }) {
  return (
    <div className="project">
     <div className='divImg'>
      <img src={imageSrc} alt="Project" className="projImage"/>
     </div>
     
      
      <div className="project-links">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Project;
