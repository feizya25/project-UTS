import React from "react";
import { ContactWrapper, Email } from "./ContactElements";
import { MdContentCopy } from "react-icons/md";
import { IconButton } from "@mui/material";

import ScrollAnimation from "react-animate-on-scroll";
function Contact() {
  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <div className="SectionTitle">Get In Touch</div>
        <ScrollAnimation animateIn="fadeIn">
          <div className="BigCard">
            <Email>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  columnGap: "20px",
                  rowGap: "10px",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <span>faufalevy@gmail.com</span>
                <IconButton>
                  <MdContentCopy
                    size={25}
                    style={{ cursor: "pointer", color: "#151418" }}
                  />
                </IconButton>
              </div>
              <button className="btn PrimaryBtn btn-shadow">Send Email</button>
            </Email>
          </div>
        </ScrollAnimation>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
