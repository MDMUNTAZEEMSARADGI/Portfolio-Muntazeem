import ActionBox from "../../Components/ActionBox/ActionBox";
import Circle from "../../Components/Circle/Circle";
import MainContainer from "../../Components/MainContainer/MainContainer";
import Navbar from "../../Components/Navbar/Navbar";
import style from "./AboutPage.module.css";
import ContainerTitle from "../../Components/ComponentTitle/ComponentTitle";
import { motion } from "framer-motion";

function AboutPage() {
  return (
    <div>
      <Navbar />
      <Circle bottom={"19rem"} right={"-25rem"} />
      <MainContainer>
        <div className={style.about_component}>
          <ContainerTitle title={"About me"} />
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Education</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2020 - 2024"}
                  timeline_title={"Bachelor in Information Science & Engineering"}
                  location={"Poojya Dodappa Appa College, Kalaburagi"}
                  details={
                    "Completed my Bachelor's Degree from VTU University with 7.15 CGPA."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2018 - 2020"}
                  timeline_title={"Senior Secondary (10+2)"}
                  location={"Gurukul Independent PU College, Kalaburagi"}
                  details={
                    "Completed my intermediate from State Board with 83.6% from Kalaburagi."
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2018"}
                  timeline_title={"High School"}
                  location={"The Noble Boys High School, Kalaburagi"}
                  details={"Completed my SSLC in state board with 79.36% from Kalaburagi"}
                  img={
                    "https://www.gpkotdwar.org.in/images/gallery/l8THHpO6.jpg"
                  }
                />
              </div>
              {/* <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2018"}
                  timeline_title={"High School"}
                  location={"The Noble Boys High School, Kalaburagi"}
                  details={
                    "Completed my SSLC in state board with 79.36% from Kalaburagi"
                  }
                  img={
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq25wBcbXkIUAg1yyYvwNMT--QIk76V1QFkI0rIdt5Kw&s"
                  }
                />
              </div> */}
            </div>
          </div>

          {/* --=================Experiene =========-- */}
          <div className={style.timeline_container}>
            <h1 className={style.timeline_title}>My Experience</h1>
            <div className={style.timeline_box}>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={true}
                  timeline={"2023 - 2024"}
                  timeline_title={"College Level Code Camp"}
                  location={"Walchand Institute of Technology, Sholapur"}
                  details={
                    "Participated in 24Hours Coding WITChar"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.right_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2022 - 2023"}
                  timeline_title={"Organised INVENTHON"}
                  location={"Poojya Dodappa Appa College of Engineering, Kalanuragi."}
                  details={
                    "Organised Nation Level Hackathon named Inventhon along with team members"
                  }
                />
              </div>
              <div className={`${style.action_container} ${style.left_container}`}>
                <ActionBox
                  isleft={false}
                  timeline={"2022"}
                  timeline_title={"Active Volunteer"}
                  location={"PDA College Of Engineering, Kalaburagi"}
                  details={
                    "Actively participated at the job fair as a volunteer conducted in PDA College."
                  }
                />
              </div>

            </div>
          </div>
        </div >
      </MainContainer >
    </div >
  );
}

export default AboutPage;
