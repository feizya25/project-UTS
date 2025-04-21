import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation animateIn="fadeIn">
              <TypeAnimation
                cursor={false}
                sequence={["Halo, Nama Saya Feizy."]}
                speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                wrapper="h1"
                repeat={0}
              />
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image src="/man-svgrepo-com.svg" alt="man-svgrepo" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>

        <ScrollAnimation animateIn="flipInX" offset={0}>
          <ScrollDown to="projects" id="scrollDown">
            <ScrollLink>
              Scroll down
              <img src="/scroll-down.svg" alt="scroll-down" />
            </ScrollLink>
          </ScrollDown>
        </ScrollAnimation>
      </HeroContainer>
    </main>
  );
}

export default Hero;
