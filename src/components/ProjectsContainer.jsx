import fashionFrenzy from "../assets/fashion-frenzy.png";
import memoryGame from "../assets/memory-game.png";
import battleship from "../assets/battleship.png";
import toDo from "../assets/toDo.png";
import knightTravails from "../assets/knight-travails.png";
import {StyledProjectsContainer} from "./styles/ProjectContainer.styled";
import Project from "./Project";
import {useState} from "react";

export default function ProjectsContainer({scrollOnTop}) {
  const [projects, setProjects] = useState([
    {
      id: 0,
      title: "Fashion Frenzy",
      description: "A e-commerce shop build with React",
      liveLink: "https://inspiring-heliotrope-ccc4ee.netlify.app/",
      repositoryLink: "https://github.com/Alan1234111/fashion-frenzy",
      img: fashionFrenzy,
      isShown: false,
    },
    {
      id: 1,
      title: "Witcher Memory Game",
      description: "Memory game build with React",
      liveLink: "https://alan1234111.github.io/memory-card/",
      repositoryLink: "https://github.com/Alan1234111/memory-card",
      img: memoryGame,
      isShown: false,
    },
    {
      id: 2,
      title: "Battleship",
      description: "Battleship game build with vanilla JS the game has an artificial intelligence that determines the computer's next move",
      liveLink: "https://alan1234111.github.io/Battleship/index.html",
      repositoryLink: "https://github.com/Alan1234111/Battleship",
      img: battleship,
      isShown: false,
    },
    {
      id: 3,
      title: "Knights-Travails",
      description: "Knights-Travails build with vanilla JS, it can determines the shortest possible distance that a knight can travel ",
      liveLink: "https://alan1234111.github.io/Knights-Travails/",
      repositoryLink: "https://github.com/Alan1234111/Knights-Travails",
      img: knightTravails,
      isShown: false,
    },
    {
      id: 4,
      title: "To-Do App",
      description: "To-Do app build with vanilla JS, the app has different tabs for different tasks and you can see the tasks for that week or day ",
      liveLink: "https://alan1234111.github.io/Todo-list-webpacks/",
      repositoryLink: "https://github.com/Alan1234111/Todo-list-webpacks",
      img: toDo,
      isShown: false,
    },
  ]);

  function handleShown(id) {
    setProjects((prev) => {
      return prev.map((project) => {
        if (id === project.id || id > project.id) {
          return {...project, isShown: true};
        } else {
          return {...project, isShown: false};
        }
      });
    });
  }

  return (
    <div>
      <h2>Works</h2>
      <StyledProjectsContainer className="project-container">
        {projects.map((project, index) => {
          return <Project project={project} scrollOnTop={scrollOnTop} index={index} key={project.id} handleShown={(id) => handleShown(id)} />;
        })}
      </StyledProjectsContainer>
    </div>
  );
}
