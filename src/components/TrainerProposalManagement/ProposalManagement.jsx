import React, { useState } from 'react';
import "./ProposalManagement.css";
import ppp from "../../images/ppp.png";
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const TrainerProposalManagement = () => {
  const [activeOption, setActiveOption] = useState("Candidacy");
  const [isVisible, setIsVisible] = useState(false);
  const denIed = () => { setIsVisible(!isVisible); };
  const accEpt = () => { setIsVisible(!isVisible); };

  const handleOptionClick = (option) => {
    setActiveOption(option);
  };
  const [activeStep, setActiveStep] = useState(1);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  return (
    <div className='ProposalManagement'>
      <div className="Post_Buttons">
        <button
          onClick={() => handleOptionClick("Candidacy")}
          style={{ marginRight: "10px" }}
          className="Post_T"
        >
          Candidacy
        </button>
        <button onClick={() => handleOptionClick("Proposal")} className="Post_J">
          Proposal
        </button>
      </div>

      {activeOption === "Candidacy" && (
        <div className='allaround' style={{ marginTop: '2rem' }}>
          <div className="Trainer_Info">
            <div className="TTTD">
              <p>Training Program Name</p>
              <h3 className="Blue_H2">Full Stack Developer</h3>
              <p>Training Topics & Subjects</p>
              <h2>Java, Js, Python, React Native</h2>
              <p>Type Of Training</p>
              <h2>Corporate</h2>
              <p>Duration Of Training</p>
              <h2>10 Days</h2>
              <div className="SDED">
                <div className="SD">
                  <p>Start Date</p>
                  <h2>01-12-2023</h2>
                </div>
                <div className="ED">
                  <p>End Date</p>
                  <h2>01-01-2024</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='ProposalStatus'>
            <div className='Proposall'>
              <div style={{ display: 'flex', flexDirection: "column", alignItems: '', gap: '0.5rem' }}>
                <h1 style={{
                  color: '#333',
                  fontFamily: 'Poppins',
                  fontSize: '1.125rem',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                }}>Trainer Profile</h1>
                
                <div className='PB'>
                  <img src={ppp} alt="" style={{ borderRadius: "10px", width: '5.8rem', height: '6.55rem' }} />
                  <div className='Trainer_Details'>
                    <h2>Kowshik</h2>
                    <h3>UI/UX Developer</h3>
                    <Stack
                      spacing={1}
                      sx={{
                        width: "3rem",
                        height: "0.95363rem",
                        marginTop: "0.31rem",
                        // marginLeft: "1.11rem",
                      }}
                      direction="row"
                      alignItems="center"
                    >
                      <Rating
                        name="half-rating-read"
                        max={5}
                        icon={<StarIcon sx={{ color: "#FFDE30", fontSize: 20 }} />}
                        emptyIcon={
                          <StarBorderIcon sx={{ fontSize: 20, color: "#FFDE30" }} />
                        }
                        precision={0.1}
                        // defaultValue={trainerData.averageRating}
                        readOnly
                      />
                    </Stack>
                  </div>
                </div>
              
                <div className='B'><h2>Budget</h2><h1>$1000-$2000</h1></div>
                
                <div className='B'><h2>Mode Of Training</h2><h1>Online</h1></div>
                
              </div>
            </div>
            <div className='Statuss'>
              <h3>You're interested in this trainer profile, and
                the request has been successfully
                submitted! Now, we're awaiting the
                outcome.</h3>
              <br />
              <div className="stepper">
                <div className={`step ${activeStep === 1 ? 'active' : ''}`} onClick={() => handleStepClick(1)}>
                  <div className="step-label">
                    <h2>Applied</h2>
                    <p>You Just Sent a Request for Trainer</p>
                  </div>
                </div>
                <div className={`step ${activeStep === 2 ? 'active' : ''}`} onClick={() => handleStepClick(2)}>
                  <div className="step-label">
                    <h2>Accepted</h2>
                    <p>Trainer Accepted Your Request</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeOption === "Proposal" && (
        <div className='allaround' style={{ marginTop: '2rem' }}>
          <div className="Trainer_Info">
            <div className="TTTD">
              <p>Training Program Name</p>
              <h3 className="Blue_H2">Full Stack Developer</h3>
              <p>Training Topics & Subjects</p>
              <h2>Java, Js, Python, React Native</h2>
              <p>Type Of Training</p>
              <h2>Corporate</h2>
              <p>Duration Of Training</p>
              <h2>10 Days</h2>
              <div className="SDED">
                <div className="SD">
                  <p>Start Date</p>
                  <h2>01-12-2023</h2>
                </div>
                <div className="ED">
                  <p>End Date</p>
                  <h2>01-01-2024</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='ProposalStatus'>
            <div className='Proposall'>
              <div style={{ display: 'flex', flexDirection: "column", alignItems: '', gap: '0.5rem' }}>
                <h1 style={{
                  color: '#333',
                  fontFamily: 'Poppins',
                  fontSize: '1.125rem',
                  fontStyle: 'normal',
                  fontWeight: '500',
                  lineHeight: 'normal',
                }}>Trainer Profile</h1>
                {/* <br /> */}
                {/* </div> */}
                <div className='PB'>
                  <img src={ppp} alt="" style={{ borderRadius: "10px", width: '5.8rem', height: '6.55rem' }} />
                  <div className='Trainer_Details'>
                    <h2>Kowshik</h2>
                    <h3>UI/UX Developer</h3>
                    <Stack
                      spacing={1}
                      sx={{
                        width: "3rem",
                        height: "0.95363rem",
                        marginTop: "0.31rem",
                        // marginLeft: "1.11rem",
                      }}
                      direction="row"
                      alignItems="center"
                    >
                      <Rating
                        name="half-rating-read"
                        max={5}
                        icon={<StarIcon sx={{ color: "#FFDE30", fontSize: 20 }} />}
                        emptyIcon={
                          <StarBorderIcon sx={{ fontSize: 20, color: "#FFDE30" }} />
                        }
                        precision={0.1}
                        // defaultValue={trainerData.averageRating}
                        readOnly
                      />
                    </Stack>
                  </div>
                </div>
                {/* <br /> */}
                <div className='B'><h2>Budget</h2><h1>$1000-$2000</h1></div>
                {/* <br /> */}
                {/* <br /> */}
                <div className='B'><h2>Mode Of Training</h2><h1>Online</h1></div>
                {/* <br /> */}
              </div>
            </div>
            <div className='Statusss'>
              <h3>Kowshik Proposed For Your Post a Requirement</h3>
              <br />
              <div className='Statuss_Buttonss'>
                {isVisible && (
                  <div className="Trainer-Proposal-Management-Popup">
                    <div className="Trainer-Proposal-Management-Popup-modalContainer ">
                      <div className='Trainer-Proposal-Management-Popup-Top' >
                        <div className='Trainer-Proposal-Management-Popup-Posted-By'>
                          <div style={{ marginLeft: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }} >
                            <img src={ppp} alt="" style={{ borderRadius: "10px", width: '5.8rem', height: '6.55rem' }} />
                            <div  >
                              <h2>Kowshik</h2>
                              <h3>UI/UX Developer</h3>
                              <Stack
                                spacing={1}
                                sx={{
                                  width: "3rem",
                                  height: "0.95363rem",
                                  marginTop: "0.31rem",
                                  // marginLeft: "1.11rem",
                                }}
                                direction="row"
                                alignItems="center"
                              >
                                <Rating
                                  name="half-rating-read"
                                  max={5}
                                  icon={<StarIcon sx={{ color: "yellow", fontSize: 20 }} />}
                                  emptyIcon={
                                    <StarBorderIcon sx={{ fontSize: 20, color: "yellow" }} />
                                  }
                                  precision={0.1}
                                  // defaultValue={trainerData.averageRating}
                                  readOnly
                                />
                              </Stack>
                            </div>
                          </div>
                        </div>
                        <div className='Trainer-Proposal-Management-Popup-info'>
                          <div className='C-T-B'>
                            <h1>Company</h1>
                            <h2>Wipro</h2>
                            <h1>Training Name</h1>
                            <h2>UI/UX Developer</h2>
                            <h1>Budget</h1>
                            <h2>2000-3000</h2>
                          </div>
                          <div className='M-L'>
                            <h1>Mode</h1>
                            <h2>Offline</h2>
                            <h1>Location</h1>
                            <h2>Kerala</h2>
                          </div>
                        </div>
                      </div>
                      <div className='Trainer-Proposal-Management-Popup-Bottom'>
                        <h1 >Are you sure you want to deny this Application !</h1>
                        <div className='Trainer-Proposal-Management-Popup-button'>
                          <button>Yes</button>
                          <button onClick={denIed}>Cancel</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <button onClick={denIed}>Denied</button>
                {isVisible && (
                  <div className="Trainer-Proposal-Management-Popup">
                    <div className="Trainer-Proposal-Management-Popup-modalContainer ">
                      <div className='Trainer-Proposal-Management-Popup-Top' >
                        <div className='Trainer-Proposal-Management-Popup-Posted-By'>
                          <div style={{ marginLeft: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <img src={ppp} alt="" style={{ borderRadius: "10px", width: '5.8rem', height: '6.55rem' }} />
                            <div >
                              <h2 style={{}}>Kowshik</h2>
                              <h2>UI/UX Developer</h2>
                              <Stack
                                spacing={1}
                                sx={{
                                  width: "3rem",
                                  height: "0.95363rem",
                                  marginTop: "0.31rem",
                                  // marginLeft: "1.11rem",
                                }}
                                direction="row"
                                alignItems="center"
                              >
                                <Rating
                                  name="half-rating-read"
                                  max={5}
                                  icon={<StarIcon sx={{ color: "#FFDE30", fontSize: 20 }} />}
                                  emptyIcon={
                                    <StarBorderIcon sx={{ fontSize: 20, color: "#FFDE30" }} />
                                  }
                                  precision={0.1}
                                  // defaultValue={trainerData.averageRating}
                                  readOnly
                                />
                              </Stack>
                            </div>
                          </div>
                        </div>
                        <div className='Trainer-Proposal-Management-Popup-info'>
                          <div className='C-T-B'>
                            <h1>Company</h1>
                            <h2>Wipro</h2>
                            <h1>Training Name</h1>
                            <h2>UI/UX Developer</h2>
                            <h1>Budget</h1>
                            <h2>2000-3000</h2>
                          </div>
                          <div className='M-L'>
                            <h1>Mode</h1>
                            <h2>Offline</h2>
                            <h1>Location</h1>
                            <h2>Kerala</h2>
                          </div>
                        </div>
                      </div>
                      <div className='Trainer-Proposal-Management-Popup-Bottom'>
                        <h1>Do You Want To Accept This Proposal ?</h1>
                        <div className='Trainer-Proposal-Management-Popup-button'>
                          <button>No</button>
                          <button onClick={accEpt}>Confirm</button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <button onClick={accEpt}>Accept</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TrainerProposalManagement;
