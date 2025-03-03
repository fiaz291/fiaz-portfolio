import React, { Fragment } from "react";
import { Dialog, Grid } from "@mui/material";
import Contact from "./contact";
import RelatedProject from "./related";
import Link from "next/link";

const ProjectSingle = ({ maxWidth, open, onClose, title, pImg, state }) => {
  const list = state?.listPoints?.split("|");
  console.log({ list });
  // console.log({pImg})
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body project-modal">
          <div className="modal-close-btn">
            <button onClick={onClose}>
              <i className="fa fa-close"></i>
            </button>
          </div>
          <div className="wpo-project-single-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="wpo-project-single-wrap">
                    <div className="wpo-project-single-item">
                      <div className="row align-items-center mb-5">
                        <div className="col-lg-12">
                          <div className="wpo-project-single-title">
                            <h3>{title} Project</h3>
                          </div>
                          <p>{state?.desc}</p>
                        </div>
                      </div>
                      <div className="wpo-project-single-main-img">
                        <div className="thumbnail">
                          <img src={pImg} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="wpo-project-single-item list-widget">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="wpo-project-single-title">
                            <h3>Work Done</h3>
                          </div>

                          <ul>
                            {list?.map((i, index) => (
                              <li key={index}>{i}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-lg-4">
                          <Link href={state?.url} target="_blank">
                            Visit Site
                          </Link>
                        </div>
                      </div>
                    </div>
                    {/* <div className="wpo-project-single-item">
                      <div className="wpo-project-single-title">
                        <h3>Our approach</h3>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Consequat suspendisse aenean tellus augue morbi risus.
                        Sit morbi vitae morbi sed urna sed purus. Orci facilisi
                        eros sed pellentesque. Risus id sed tortor sed
                        scelerisque. Vestibulum elit elementum, magna id viverra
                        non, velit. Pretium, eros, porttitor fusce auctor vitae
                        id. Phasellus scelerisque nibh eleifend vel enim mauris
                        purus. Rutrum vel sem adipiscing nisi vulputate molestie
                        scelerisque molestie ultrices. Eu, fusce vulputate diam
                        interdum morbi ac a.
                      </p>
                    </div> */}
                    {/* <div className="wpo-project-single-gallery">
                                            <div className="row mt-4">
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={psub1img1} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-12">
                                                    <div className="wpo-p-details-img">
                                                        <img src={psub1img2} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div> */}
                    {/* <div className="wpo-project-single-item list-widget">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="wpo-project-single-title">
                            <h3>Resieved goals</h3>
                          </div>
                          <ul>
                            <li>
                              Non saed velit dictum quam risus pharetra esta.
                            </li>
                            <li>
                              Id risus pharetra est, at rhoncus, nec ullamcorper
                              tincidunt.
                            </li>
                            <li>
                              Hac nibh fermentum nisi, platea condimentum
                              cursus.
                            </li>
                            <li>
                              Massa volutpat odio facilisis purus sit elementum.
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 list-widget-s">
                          <div className="wpo-project-single-title">
                            <h3>Results</h3>
                          </div>
                          <ul>
                            <li>
                              Mauris dignissim blandit cursus imperdiet accumsan
                              lorem.
                            </li>
                            <li>Nam id in non sed cras purus nunc et.</li>
                            <li>
                              Mauris orci, cursus nisl odio est adipiscing
                              gravida magna eget.
                            </li>
                            <li>
                              Quis mauris vel felis convallis nulla dignissim.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div> */}
                    <RelatedProject />
                    {/* <div className="wpo-project-single-item">
                      <div className="wpo-project-contact-area">
                        <div className="wpo-contact-title">
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>
                            Get in touch with us to see how we can help you with
                            your project
                          </p>
                        </div>
                        <div className="wpo-contact-form-area">
                          <Contact />
                        </div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default ProjectSingle;
