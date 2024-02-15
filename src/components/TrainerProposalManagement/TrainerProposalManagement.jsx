// TrainerProposalManagement.js
import React, { useState } from 'react';
import Applied from '../../components/Sections/Applied';
import Proposal from '../../components/Sections/Proposal';
import Image15 from "../../images/image 15.png"


const TrainerProposalManagement = () => {
    const [activeOption, setActiveOption] = useState('Applied');
    const handleOptionClick = (option) => {
        setActiveOption(option);
    };
    const proposalData = {
        trainingName: 'Full Stack Developer',
        topics: 'Java, JS, Python, React Native',
        trainingType: 'Corporate',
        duration: '10 Days',
        startDate: '01-12-2023',
        endDate: '01-01-2024',
        postedByImage: Image15,
        postedBy: 'Eleesa',
        companyPosted: 'Zipro',
        budget: '$1000-$2000',
        mode: 'Online',
        proposer: 'Kowshik',
    };
    const appliedData = {
        trainingName: 'Full Stack Developer',
        topics: 'Java, JS, Python, React Native',
        trainingType: 'Corporate',
        duration: '10 Days',
        startDate: '01-12-2023',
        endDate: '01-01-2024',
        postedByImage: Image15,
        postedBy: 'Eleesa',
        companyPosted: 'Zipro',
        budget: '$1000-$2000',
        mode: 'Online',
        activeStep: 1, // Set the initial step
        handleStepClick: (step) => {
            // Handle step click logic
        }
    };

    return (
        <div className='ProposalManagement'>
            <div className="Post_Buttons">
                <button
                    onClick={() => handleOptionClick("Applied")}
                    style={{ marginRight: "10px" }}
                    className="Post_T"
                >
                    Applied
                </button>
                <button onClick={() => handleOptionClick("Proposal")} className="Post_J">
                    Proposal
                </button>
            </div>
            <div className='ProposalManagement'>
                {activeOption === 'Applied' && <Applied training={appliedData} />}
                {activeOption === 'Proposal' && <Proposal training={proposalData} />}
            </div>
        </div>
    );
};

export default TrainerProposalManagement;
