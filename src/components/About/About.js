import React from "react";
import { stackList } from "../../data/ProjectData";
import { Image, Technologies, Tech, TechImg, TechName } from "./AboutElements";

function About() {
  return (
    <div className="ContactWrapper" id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <div animateIn="fadeInLeft">
            <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
          </div>
          <div className="AboutBio">
            <div>
              {" "}
              Halo! Saya <strong>Feizy</strong>, seorang mahasiswa Teknik
              Informatika yang sedang mempelajari dunia pemrograman. Pengalaman
              saya di berbagai pekerjaan tingkat pemula mengasah etos kerja,
              kemampuan komunikasi, dan adaptasi.{" "}
            </div>{" "}
            <br />
            <br />
            <br />
            <Technologies>
              {stackList.map((stack, index) => (
                <div key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </div>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
