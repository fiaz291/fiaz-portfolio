import React from "react";
import Link from "next/link";
import SectionTitle from "../SectionTitle/SectionTitle";

const Expriences = [
  {
    date: "2024 - Present",
    logo: "images/work/1.jpg",
    position: "Senior Frontend Engineer",
    companyName: "Conovo Technologies",
    workFrom: "",
    website: "https://conovoinc.com/",
  },
  {
    date: "2020 - 2024",
    logo: "images/work/2.png",
    position: "Frontend Engineer",
    companyName: "Sysvoy International",
    workFrom: "",
    website: "https://sysvoy.com/",
  },
  {
    date: "2019 - 2020",
    logo: "images/work/3.png",
    position: "Associate Developer",
    companyName: "IT Curves",
    workFrom: "",
    website: "https://itcurves.com/",
  },
];

const ExprienceSec = (props) => {
  return (
    <div className="wpo-work-area section-padding" id="service">
      <div className="container">
        <SectionTitle Title={"My Work Experience"} />
        <div className="wpo-work-wrap">
          {Expriences.map((exprience, exp) => (
            <div className="wpo-work-item" key={exp}>
              <ul>
                <li className="date">{exprience.date}</li>
                <li className="logo">
                  <img src={exprience.logo} alt="" />
                </li>
                <li className="position">
                  {exprience.position}{" "}
                  <span>
                    {exprience.companyName} <span>{exprience.workFrom}</span>
                  </span>
                </li>
                <li className="link">
                  <Link target= "_blank" href={exprience.website}>Go to website</Link>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="shape-wk">
        <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
          <g opacity="0.45" filter="url(#filter0_f_39_4214)">
            <circle cx="750" cy="750" r="200" />
          </g>
          <defs>
            <filter
              id="filter0_f_39_4214"
              x="0"
              y="0"
              width="1500"
              height="1500"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_39_4212"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default ExprienceSec;
