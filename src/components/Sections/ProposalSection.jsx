// ProposalSection.js
import React, { useState } from "react";
import ppp from "../../images/ppp.png";
import { Stack, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const ProposalSection = ({ isVisible, accEpt, denIed }) => {
    // Replace this with your actual dynamic data
    const proposalData = {
        programName: "Full Stack Developer",
        topics: "Java, Js, Python, React Native",
        trainingType: "Corporate",
        duration: "10 Days",
        startDate: "01-12-2023",
        endDate: "01-01-2024",
        trainer: {
            name: "Kowshik",
            role: "UI/UX Developer",
            rating: 4.5, // Replace with actual rating
        },
        budget: "$1000-$2000",
        modeOfTraining: "Online",
        proposalStatus: "Kowshik Proposed For Your Post a Requirement",
        company: "Wipro",
        proposalBudget: "2000-3000",
        proposalMode: "Offline",
        proposalLocation: "Kerala",
    };

    const [isDenyPopupVisible, setIsDenyPopupVisible] = useState(false);
    const [isAcceptPopupVisible, setIsAcceptPopupVisible] = useState(false);

    return (
        <div className='allaround' style={{ marginTop: '2rem' }}>
            <div className="Trainer_Info">
                <div className="TTTD">
                    <p>Training Program Name</p>
                    <h3 className="Blue_H2">{proposalData.programName}</h3>
                    <p>Training Topics & Subjects</p>
                    <h2>{proposalData.topics}</h2>
                    <p>Type Of Training</p>
                    <h2>{proposalData.trainingType}</h2>
                    <p>Duration Of Training</p>
                    <h2>{proposalData.duration}</h2>
                    <div className="SDED">
                        <div className="SD">
                            <p>Start Date</p>
                            <h2>{proposalData.startDate}</h2>
                        </div>
                        <div className="ED">
                            <p>End Date</p>
                            <h2>{proposalData.endDate}</h2>
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
                                <h2>{proposalData.trainer.name}</h2>
                                <h3>{proposalData.trainer.role}</h3>
                                <Stack
                                    spacing={1}
                                    sx={{
                                        width: "3rem",
                                        height: "0.95363rem",
                                        marginTop: "0.31rem",
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
                                        value={proposalData.trainer.rating}
                                        readOnly
                                    />
                                </Stack>
                            </div>
                        </div>

                        <div className='B'><h2>Budget</h2><h1>{proposalData.budget}</h1></div>
                        <div className='B'><h2>Mode Of Training</h2><h1>{proposalData.modeOfTraining}</h1></div>
                    </div>
                </div>
                <div className='Statusss'>
                    <h3>{proposalData.proposalStatus}</h3>
                    <br />
                    <div className='Statuss_Buttonss'>
                        {isDenyPopupVisible && (
                            <div className="Trainer-Proposal-Management-Popup">
                                
                            </div>
                        )}
                        <button onClick={() => setIsDenyPopupVisible(true)}>Denied</button>
                        {isAcceptPopupVisible && (
                            <div className="Trainer-Proposal-Management-Popup">
                                j
                            </div>
                        )}
                        <button onClick={() => setIsAcceptPopupVisible(true)}>Accept</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProposalSection;
