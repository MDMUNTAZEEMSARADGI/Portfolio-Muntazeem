import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import SkillCard from "../../Components/SkillCard/SkillCard";
import styles from "./Skills.module.css";
import { motion } from "framer-motion";
import ComponentTitle from "../../Components/ComponentTitle/ComponentTitle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Circle from "../../Components/Circle/Circle";

function Skill() {
  return (
    <div>
      <Navbar />
      <Circle top={"18rem"} right={"-18rem"} />
      <MainContainer>
        <ComponentTitle title={"My Skills"} />
        <h1 style={{ margin: 0 }}>Frontend</h1>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: ".5", duration: ".3", stiffness: "100" }}
          className={styles.skill_container}
        >
          <SkillCard skill_name={"React.js"} level={3} key={"React.js"} />
          <SkillCard skill_name={"HTML"} level={5} key={"HTML"} />
          <SkillCard skill_name={"CSS "} level={5} key={"CSS"} />
          <SkillCard skill_name={"JavaScript"} level={5} key={"JavaScript"} />
          <SkillCard skill_name={"Bootstrap"} level={5} key={"Bootstrap"} />
          <SkillCard skill_name={"Material UI"} level={5} key={"Material UI"} />

          <h1>Others</h1>
          <br />
          <SkillCard
            skill_name={"Git and GitHub"}
            level={3}
            key={"Git and GitHub"}
          />
          <SkillCard
            skill_name={"Netlify"}
            level={4}
            key={"Netlify"}
          />
          <SkillCard
            skill_name={"Vercel"}
            level={4}
            key={"Vercel"}
          />
          <SkillCard
            skill_name={"VS Code"}
            level={4}
            key={"VS Code"}
          />
          <SkillCard
            skill_name={"Postman"}
            level={4}
            key={"Postman"}
          />

        </motion.div>
      </MainContainer>
    </div>
  );
}

export default Skill;
