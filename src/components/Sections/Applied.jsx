// Applied.js
import React from 'react';

const Applied = ({ training }) => {
    return (
        <div className='allaround' style={{ marginTop: '2rem' }}>
            <div className='Trainer_Info'>
                <div className='TTTD'>
                    <p>Training Program Name</p>
                    <h3 className='Blue_H2'>{training.trainingName}</h3>
                    <p>Training Topics & Subjects</p>
                    <h2>{training.topics}</h2>
                    <p>Type Of Training</p>
                    <h2>{training.trainingType}</h2>
                    <p>Duration Of Training</p>
                    <h2>{training.duration}</h2>
                    <div className='SDED'>
                        <div className='SD'>
                            <p>Start Date</p>
                            <h2>{training.startDate}</h2>
                        </div>
                        <div className='ED'>
                            <p>End Date</p>
                            <h2>{training.endDate}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ProposalStatus'>
                <div className='Proposall'>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: '', gap: '0.5rem' }}>
                        <h1 style={{
                            color: '#333',
                            fontFamily: 'Poppins',
                            fontSize: '1.125rem',
                            fontStyle: 'normal',
                            fontWeight: '600',
                            lineHeight: 'normal',
                            margin: '0'
                        }}>Posted By</h1>
                        <div className='PBB' style={{ background: '#FFF' }}>
                            {/* Replace the following with your dynamic data */}
                            <img src={training.postedByImage} alt="" style={{ borderRadius: '100%', width: '4rem', height: '4rem' }} />
                            <span><h2>{training.postedBy}</h2><p>{training.companyPosted}</p></span>
                        </div>
                    </div>
                    <div className='B'><h2>Budget</h2><h1>{training.budget}</h1></div>
                    <div className='B'><h2>Mode Of Training</h2><h1>{training.mode}</h1></div>
                </div>
                <div className='Statuss'>
                    <h3>You're interested in this trainer profile, and the request has been successfully submitted! Now, we're awaiting the outcome.</h3>
                    <br />
                    <div className="stepper">
                        <div className={`step ${training.activeStep === 1 ? 'active' : ''}`} onClick={() => training.handleStepClick(1)}>
                            <div className="step-label">
                                <h2>Applied</h2>
                                <p>You Just Sent a Request for Trainer</p>
                            </div>
                        </div>
                        <div className={`step ${training.activeStep === 2 ? 'active' : ''}`} onClick={() => training.handleStepClick(2)}>
                            <div className="step-label">
                                <h2>Accepted</h2>
                                <p>Trainer Accepted Your Request</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Applied;
