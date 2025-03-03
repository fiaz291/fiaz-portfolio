import React, { Fragment } from "react";
import Marquee from "react-fast-marquee";

const logos = [
  // UI Frameworks & Styling
  { title: "Ant Design", path: "/marqee/antd.png" },
  { title: "Bootstrap", path: "/marqee/bootstrap.png" },
  { title: "Chakra UI", path: "/marqee/charka-ui.png" },
  { title: "MUI", path: "/marqee/mui.png" },
  { title: "Tailwind CSS", path: "/marqee/tailwind.png" },
  { title: "SCSS", path: "/marqee/scss.png" },
  { title: "CSS3", path: "/marqee/css-3.png" },
  { title: "HTML5", path: "/marqee/html-5.png" },

  // JavaScript & Frameworks
  { title: "JavaScript", path: "/marqee/js.png" },
  { title: "TypeScript", path: "/marqee/typescript.png" },
  { title: "React", path: "/marqee/react.png" },
  { title: "Next.js", path: "/marqee/nextjs.svg" },
  { title: "Node.js", path: "/marqee/node.png" },

  // State Management & Data Fetching
  { title: "Redux", path: "/marqee/redux.png" },
  { title: "React Query", path: "/marqee/react-query.png" },

  // Form Handling & Validation
  { title: "React Hook Form", path: "/marqee/react-hook-form.png" },
  { title: "Formik", path: "/marqee/formik.png" },

  // Testing & Linting
  { title: "Jest", path: "/marqee/jest.png" },
  { title: "Cypress", path: "/marqee/cypress.png" },
  { title: "ESLint", path: "/marqee/eslint.png" },

  // APIs & Utilities
  { title: "GraphQL", path: "/marqee/graphql.png" },
  { title: "i18n", path: "/marqee/i18n.png" },
  { title: "Chart.js", path: "/marqee/chartjs.png" },

  // DevOps & Tools
  { title: "Git", path: "/marqee/git.png" },
  { title: "NPM", path: "/marqee/npm.png" },

  // Productivity & Collaboration
  { title: "Jira", path: "/marqee/jira.png" },
  { title: "Trello", path: "/marqee/trello.png" },

  // Payments & SEO
  { title: "Stripe", path: "/marqee/stripe.png" },
  { title: "SEO", path: "/marqee/seo.png" },
];

const About = (props) => {
  return (
    <Fragment>
      <Marquee style={{ background: "#191919" }}>
        {logos.map((logo) => (
          <div
            style={{
              marginRight: 24,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              height: "150px",
              padding: 20,
              background: "#191919",
            }}
            key={logo.title}
          >
            <div  style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}>
              <img src={logo.path} style={{ width: 70, height: "auto" }} />
            </div>
            <p style={{ textAlign: "center", margin: 0 }}>{logo.title}</p>
          </div>
        ))}
      </Marquee>
      <div className="wpo-about-area section-padding" id="about">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="wpo-about-exprience-wrap">
                <div className="wpo-about-exprience">
                  <h2>05+</h2>
                  <span>Years of Experience</span>
                </div>
                <div className="client">
                  <h3>
                    <span data-count="100">100</span>%
                  </h3>
                  <p>Clients Satisfections</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 col-md-12 col-sm-12">
              <div className="wpo-about-content">
                <div className="wpo-about-title">
                  <h2>My Expertise</h2>
                  <p>
                    I specialize in building high-performance, user-friendly web
                    applications with React.js and Next.js. With expertise in
                    HTML, CSS, and responsive design, I create seamless,
                    visually engaging interfaces. I also have experience with
                    WordPress and Node.js, ensuring dynamic and functional web
                    solutions.
                  </p>
                </div>
                <div className="wpo-about-funfact">
                  <div className="grid">
                    <div className="grid-inner">
                      {/* <h3>
                      <span data-count="95">95</span>%
                    </h3> */}
                      <p>React</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-inner">
                      {/* <h3>
                      <span data-count="95">95</span>%
                    </h3> */}
                      <p>Next.js</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-inner">
                      {/* <h3>
                      <span data-count="99">99</span>%
                    </h3> */}
                      <p>HTML</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-inner">
                      {/* <h3>
                      <span data-count="99">99</span>%
                    </h3> */}
                      <p>CSS</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-inner">
                      {/* <h3>
                      <span data-count="70">70</span>%
                    </h3> */}
                      <p>Node</p>
                    </div>
                  </div>
                  <div className="grid">
                    <div className="grid-inner">
                      {/* <h3>
                      <span data-count="60">60</span>%
                    </h3> */}
                      <p>WP</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ab-shape">
          <svg width="995" height="1495" viewBox="0 0 995 1495" fill="none">
            <g opacity="0.3" filter="url(#filter0_f_39_4267)">
              <circle cx="247.5" cy="747.5" r="247.5" fill="#FFE500" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4267"
                x="-500"
                y="0"
                width="1495"
                height="1495"
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
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4267"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="ab-shape-s2">
          <svg width="1252" height="1901" viewBox="0 0 1252 1901" fill="none">
            <g opacity="0.15" filter="url(#filter0_f_39_4265)">
              <circle cx="950" cy="950.004" r="450" />
            </g>
            <defs>
              <filter
                id="filter0_f_39_4265"
                x="-0.00012207"
                y="0.00402832"
                width="1900"
                height="1900"
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
                  stdDeviation="250"
                  result="effect1_foregroundBlur_39_4265"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="line-shape-1">
          <img src="images/about/shape1.png" alt="" />
        </div>
        <div className="line-shape-2">
          <img src="images/about/shape2.png" alt="" />
        </div>
      </div>
    </Fragment>
  );
};

export default About;
