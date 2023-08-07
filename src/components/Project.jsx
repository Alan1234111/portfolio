import {useEffect, useRef} from "react";
import {StyledProject} from "./styles/Project.styled";

export default function Project({project, scrollOnTop, index, handleShown}) {
  const projectRef = useRef(null);

  useEffect(() => {
    if (scrollOnTop >= projectRef.current.offsetTop + projectRef.current.offsetHeight / 2) {
      handleShown(project.id);
    }
  }, [scrollOnTop]);

  return (
    <StyledProject ref={projectRef} index={index} isShown={project.isShown}>
      <div className="project-information">
        <h3>{project.title}</h3>
        <h4>{project.description}</h4>
        <div className="links">
          <a className="live-link" href={project.liveLink} target="_blank" rel="noreferrer">
            View live site
          </a>
          <a className="repository-link" href={project.repositoryLink} target="_blank" rel="noreferrer">
            View repository
          </a>
        </div>
      </div>
      <img src={project.img} alt="" />
    </StyledProject>
  );
}
