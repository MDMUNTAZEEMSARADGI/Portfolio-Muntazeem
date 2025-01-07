import Navbar from "../../Components/Navbar/Navbar";
import styles from "./ProjectPage.module.css";
import ProjectCard from "../../Components/ProjectCard/projectCard";
import travelHookIMG from "../../assets/travelhookIMG.png";
import quizIMG from "../../assets/quizIMG.png";
import carInfo from "../../assets/carInfo.png";
import etmPic from "../../assets/etmPic.png";
import ogPic from "../../assets/ogPic.png";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";

function Projects() {
  return (
    <div>
      <Navbar />
      <Circle right={"-6rem"} top={"-8rem"} />
      <MainContainer>
        <div className={styles.project_page_component}>
          <ComponentTitle title={"My projects"} />
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
            className={styles.projects_component}
          >
            {/* -------------------project 1---------------- */}
            <ProjectCard
              previewLink={"https://qquizzz-react-app.netlify.app/"}
              githubLink={
                "https://github.com/MDMUNTAZEEMSARADGI/Quiz_App-reactjs"
              }
              projectName={"React Quiz App"}
              projectDetails={
                "React Quiz App: Answer React questions, get results. Fun way to test React knowledge. Simple, interactive, and informative!"
              }
              demoImage={quizIMG}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            {/* -------------------project 2---------------- */}

            <ProjectCard
              previewLink={
                "https://mdmuntazeemsaradgi.github.io/CarInfo-Bootstrap/"
              }
              githubLink={
                "https://github.com/MDMUNTAZEEMSARADGI/CarInfo-Bootstrap"
              }
              projectName={"Car Info-Bootstrap"}
              projectDetails={
                "This is car information displaying website. Interactive Web Application based Bootstrap responsive."
              }
              demoImage={carInfo}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
                "https://cdn.worldvectorlogo.com/logos/bootstrap-5-1.svg",
              ]}
            />
            {/* -------------------project 3---------------- */}

            <ProjectCard
              previewLink={"https://travelhook.netlify.app/"}
              githubLink={
                "https://github.com/MDMUNTAZEEMSARADGI/Explorify-MERN"
              }
              projectName={"Explorify-Travel Planner"}
              projectDetails={
                "It is a responsive and Mobile friendly static webpage created using pure HTML, CS, JavaScript and Reactjs."
              }
              demoImage={travelHookIMG}
              key={"Travel Hook Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            {/* -------------------project 4---------------- */}

            <ProjectCard
              previewLink={"https://employees-task-management.netlify.app/"}
              githubLink={
                "https://github.com/MDMUNTAZEEMSARADGI/Employees-task-management"
              }
              projectName={"Employees Task Management"}
              projectDetails={
                "•Frontend development using Reactjs for creating interactive, intuitive and responsive website. Context API: Data is passed locally using context API so that every component can easily access data."
              }
              demoImage={etmPic}
              key={"Employees task management Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
            {/* -------------------project 5---------------- */}

            <ProjectCard
              previewLink={""}
              githubLink={"https://github.com/MDMUNTAZEEMSARADGI/og-webpage"}
              projectName={"OG webpage"}
              projectDetails={
                "•Frontend development using Reactjs for creating interactive, intuitive website. Libraries used Framer-motion: For animation Locomotive-scroll: For smooth scrolling."
              }
              demoImage={ogPic}
              key={"Animated Webpage"}
              skill_img={[
                "https://cdn.worldvectorlogo.com/logos/react-2.svg",
                "https://cdn.worldvectorlogo.com/logos/html-1.svg",
                "https://cdn.worldvectorlogo.com/logos/css-3.svg",
                "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
              ]}
            />
          </motion.div>
        </div>
      </MainContainer>
      <motion.div
        initial={{ y: -20, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: ".3", stiffness: "150" }}
        className="component_container"
      ></motion.div>
    </div>
  );
}

export default Projects;
