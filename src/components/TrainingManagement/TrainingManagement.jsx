import React, { useState } from "react";
import "../../components/TrainerProposalManagement/ProposalManagement.css";
import "../../components/TrainingManagement/TrainingManagement.css";
// import ppp from "../../images/ppp.png";
// import { Stack, Rating } from "@mui/material";
// import StarIcon from "@mui/icons-material/Star";
// import StarBorderIcon from "@mui/icons-material/StarBorder";

// Import the specific sections you need
import PostedSection from "../../components/Sections/PostedSection";
import OngoingSection from "../../components/Sections/OngoingSection";
import CompletedSection from "../../components/Sections/CompletedSection";

const TrainingManagement = () => {
  const [activeSteps, setActiveSteps] = useState([1]);
  const [activeOption, setActiveOption] = useState("posted");
  // const [isVisible, setIsVisible] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);

  // const togglePopup = () => {
  //   setIsVisible(!isVisible);
  // };
  const handleOptionClick = (option) => {
    setActiveOption(option);
    switch (option) {
      case "posted":
        setActiveSteps([1]);
        break;
      case "ongoing":
        setActiveSteps([1, 2]);
        break;
      case "completed":
        setActiveSteps([1, 2, 3]);
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
          onClick={() => handleOptionClick("posted")}
          className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${
            activeOption === "posted" ? "active" : ""
          }`}
        >
          Posted
        </button>
        <button
          onClick={() => handleOptionClick("ongoing")}
          className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${
            activeOption === "ongoing" ? "active" : ""
          }`}
        >
          Ongoing
        </button>
        <button
          onClick={() => handleOptionClick("completed")}
          className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${
            activeOption === "completed" ? "active" : ""
          }`}
        >
          Completed
        </button>
      </div>

      {/* Render the specific section based on the active option */}
      {activeOption === "posted" && <PostedSection  activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth}/>}
      {activeOption === "ongoing" && <OngoingSection activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth}/>}
      {activeOption === "completed" && <CompletedSection activeSteps={activeSteps} calculateProgressBarWidth={calculateProgressBarWidth} />}
    </div>
  );
};

export default TrainingManagement;
