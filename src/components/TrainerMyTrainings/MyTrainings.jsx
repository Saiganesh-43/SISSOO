import React, { useState } from "react";
import "./MyTrainings.css"
import "../Requirements/Requirements.css"

import Upcoming from "../Sections/Upcoming";
import OngoingTraining from "../Sections/OnGoingTraining";
import Completed from "../Sections/Completed";
import Denied from "../Sections/Denied";
const MyTrainings = () => {

    const [activeSteps, setActiveSteps] = useState([1]);
    const [activeOption, setActiveOption] = useState("upComing");
    const handleOptionClick = (option) => {
        setActiveOption(option);
        switch (option) {
            case "upComing":
                setActiveSteps([1]);
                break;
            case "onGoingtraining":
                setActiveSteps([1, 2]);
                break;
            case "comPleted":
                setActiveSteps([1, 2, 3]);
                break;
            case "deNied":
                setActiveSteps([1, 2]);
                break;
            default:
                setActiveSteps([]);
        }
    };
    const calculateProgressBarWidth = () => {
        const totalSteps = 3; // Update this based on the total number of steps
        const width = (activeSteps.length - 1) / (totalSteps - 1) * 100;
        return `${width}%`;
    };
    return (
        <div>
            <div className="Post_Buttons pt-[14px] pb-[15px]">
                <button
                    onClick={() => handleOptionClick('upComing')}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'upComing' ? 'active' : ''
                        }`}
                >
                    Upcoming
                </button>
                <button onClick={() => handleOptionClick("onGoingtraining")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'onGoingtraining' ? 'active' : ''
                        }`}>
                    On Going Traning
                </button>
                <button onClick={() => handleOptionClick("comPleted")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'comPleted' ? 'active' : ''
                        }`}>
                    Completed
                </button>
                <button onClick={() => handleOptionClick("deNied")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'deNied' ? 'active' : ''
                        }`}>
                    Denied
                </button>
            </div>
            {activeOption === "upComing" && <Upcoming activeSteps={activeSteps}
                calculateProgressBarWidth={calculateProgressBarWidth}
            />}
            {activeOption === "onGoingtraining" && <OngoingTraining activeSteps={activeSteps}
                calculateProgressBarWidth={calculateProgressBarWidth}
            />}
            {activeOption === "comPleted" && <Completed activeSteps={activeSteps}
                calculateProgressBarWidth={calculateProgressBarWidth}
            />}
            {activeOption === "deNied" && <Denied activeSteps={activeSteps}
                calculateProgressBarWidth={calculateProgressBarWidth}
            />}
        </div >
    );
};

export default MyTrainings;
