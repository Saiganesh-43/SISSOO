import React, { useEffect, useRef, useState } from "react";
import Select from 'react-select';
// import Chip from "@mui/material/Chip";

// import Autocomplete from "@mui/material/Autocomplete";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import Box from "@mui/material/Box";
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import '../Requirements/Requirements.css'
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
const Requirements = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [activeOption, setActiveOption] = useState("postTraining");
    const [trainingType, setTrainingType] = useState("");
    const [participantCount, setParticipantCount] = useState(0);
    const [trainingMode, setTrainingMode] = useState("");
    const [, setSelectedLocation] = useState("");
    // const [experience, setExperience] = useState(0);
    const [durationType, setDurationType] = useState("");
    const [durationCount, setDurationCount] = useState(0);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [currencySymbol, setCurrencySymbol] = useState("");
    const [minBudget, setMinBudget] = useState("");
    const [maxBudget, setMaxBudget] = useState("");
    const [availability, setAvailability] = useState("");
    // const [experiencePostJob, setExperiencePostJob] = useState(0);
    // const [selectedTopics, setSelectedTopics] = useState([]);
    // const [inputValue, setInputValue] = useState('');
    const [content, setContent] = useState("");
    const [contentt, setContentt] = useState("")
    const [contenttt, setContenttt] = useState("")
    const textareaRef = useRef(null);
    const textareaReff = useRef(null);
    const textareaRefff = useRef(null);
    const [experience, setExperience] = React.useState(0);
    const [isDragging, setIsDragging] = React.useState(false);
    const [experiencee, setExperiencee] = React.useState(0);
    const [isDraggingg, setIsDraggingg] = React.useState(false);
    // const [isDraggingPostJob, setIsDraggingPostJob] = useState(false);
    // const handleExperienceChangePostJob = (event, newValue) => {
    //     setExperiencePostJob(newValue);
    //     setIsDraggingPostJob(true);
    // };
    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };
    const handleExperienceChangee = (event) => {
        setExperiencee(event.target.value);
    };
    const startDatePickerRef = useRef(null);
    const endDatePickerRef = useRef(null);

    const handleCalendarIconClick = (ref) => {
        // Open the calendar for the specified DatePicker when the icon is clicked
        if (ref.current) {
            ref.current.setOpen(true);
        }
    };

    const handleDragStart = () => {
        setIsDragging(true);
    };
    const handleDragStartt = () => {
        setIsDraggingg(true);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };
    const handleDragEndd = () => {
        setIsDraggingg(false);
    };
    const showValueLabel = isDragging || (experience > 0 && !isDragging);
    const showValueLabell = isDraggingg || (experiencee > 0 && !isDraggingg);
    // const handleDragEndPostJob = () => {
    //     setIsDraggingPostJob(false);
    // };

    // const handleExperienceChange = (event, newValue) => {
    //     setExperience(newValue);
    //     setIsDragging(true);
    // };

    // const handleDragEnd = () => {
    //     setIsDragging(false);
    // };
    const trackBackground = {
        background: `linear-gradient(to right, #2676C2 0%, #2676C2 ${(experience / 50) * 100}%, #d3d3d3 ${(experience / 50) * 100}%, #d3d3d3 100%)`,
    };
    const trackBackgroundd = {
        background: `linear-gradient(to right, #2676C2 0%, #2676C2 ${(experiencee / 50) * 100}%, #d3d3d3 ${(experiencee / 50) * 100}%, #d3d3d3 100%)`,
    };

    const handleOptionClick = (option) => {
        setActiveOption(option);
    };
    useEffect(() => {
        adjustHeight();
    }, [content, contentt, contenttt]);

    const handleChange = (event) => {
        setContent(event.target.value);
    };
    const handleChangee = (event) => {
        setContentt(event.target.value);
    };
    const handleChangeee = (event) => {
        setContenttt(event.target.value);
    };
    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };
    const [urgentlyNeedTrainer, setUrgentlyNeedTrainer] = useState(false);

    const handleCheckboxChange = (event) => {
        setUrgentlyNeedTrainer(event.target.checked);
    };
    const maxCount = 9999;

    // const handleKeyDown = (event) => {
    //   if (event.key === "Enter") {
    //     // event.preventDefault();  //to remove when enter key press
    //     // Handle your Enter key logic here, e.g., submit the form
    //   }
    // };

    const adjustHeight = () => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "2.4rem";
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
        }
        if (textareaReff.current) {
            textareaReff.current.style.height = "46px";
            textareaReff.current.style.height = `${textareaReff.current.scrollHeight}px`;
        }
        if (textareaRefff.current) {
            textareaRefff.current.style.height = "46px";
            textareaRefff.current.style.height = `${textareaRefff.current.scrollHeight}px`;
        }
    };

    const handleAvailabilityChange = (event) => {
        setAvailability(event.target.value);
    };
    const handleFileUpload = () => {
        // Implement file upload logic here
        console.log("File upload logic goes here");
    };

    const handleTrainingTypeChange = (type) => {
        setTrainingType(type);
        setParticipantCount(0);
        setDurationCount(0);
    };

    const getCurrencySymbol = (countryCode) => {
        switch (countryCode) {
            case 'IND':
                return '₹';
            case 'USA':
                return '$';
            // Add more cases as needed
            default:
                return '₹'; // Default to Indian Rupee symbol
        }
    };
    const handleCountryChange = (e) => {
        const selectedOption = e.target.value;
        setSelectedCountry(selectedOption);

        // Update currency symbol based on the selected country
        const symbol = getCurrencySymbol(selectedOption);
        setCurrencySymbol(symbol);

        // Clear min and max budgets when changing the country (or you can keep existing values if needed)
        setMinBudget('');
        setMaxBudget('');
    };
    const formatCurrencyValue = (amount) => {
        if (amount === '') {
            return '';
        }
        const amountWithoutSymbol = amount.replace(currencySymbol, '').trim();
        return `${currencySymbol} ${amountWithoutSymbol}`;
    };



    const topTopics = [
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'c', label: 'c' },
        { value: 'c++', label: 'C++' },
        { value: 'react', label: 'React' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'django', label: 'Django' },
        { value: 'express', label: 'Express' }
    ]
    const qualTopics = [
        { value: 'pg', label: 'Post Graduation PG' },
        { value: 'ug', label: 'Under Graduation UG' },
        { value: 'diplomo', label: 'Diplomo' },
        { value: 'puc', label: 'Pre University College PUC' },
    ]
    const skillsTopics = [
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'c', label: 'c' },
        { value: 'c++', label: 'C++' },
        { value: 'react', label: 'React' },
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'django', label: 'Django' },
        { value: 'express', label: 'Express' }
    ]


    const handleTrainingModeChange = (mode) => {
        setTrainingMode(mode);
    };

    const handleLocationChange = (location) => {
        setSelectedLocation(location);
    };

    // const handleExperienceChange = (event, newValue) => {
    //     setExperience(newValue);
    // };

    const handleDurationTypeChange = (type) => {
        setDurationType(type);
        setDurationCount(0);
    };
    const [formData, setFormData] = useState({
        companyName: "",
        // Add other form fields here
    });
    const handleInputChange = (field, value) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };
    const handleReset = () => {
        // Reset form data to initial state
        setFormData({
            companyName: "",
            // Reset other form fields here
        });
    };
    const handleSubmit = () => {
        // Implement your submit logic here using formData
        console.log("Form data submitted:", formData);
        // Add your logic to send data to the server or perform any other actions

    };

    return (
        <div className="Requirements">
            <div className="Post_Buttons pt-[14px] pb-[15px]">
                {/* <span className="Post_TJ">
                    {activeOption === "postTraining" ? "Post Training" : "Post Job"}
                </span> */}
                <button
                    onClick={() => handleOptionClick('postTraining')}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'postTraining' ? 'active' : ''
                        }`}
                >
                    Post Training
                </button>
                <button onClick={() => handleOptionClick("postJob")}
                    className={`mr-[19px] min-w-[163px] w-auto h-[31px]  ${activeOption === 'postJob' ? 'active' : ''
                        }`}>
                    Post Job
                </button>
            </div>
            <div class="Content_Wrapper">
                <div className="Buttons_Content">
                    {activeOption === "postTraining" && (
                        <div className="Post_Training_content">
                            <div div className="Company">
                                {/* <p>Training Name</p> */}
                                <div className="Training_Name">Training Name</div>
                                <input
                                    type="text" style={{ padding: '0 10px', color: '#333333', }}
                                    placeholder="Training Name"
                                    value={formData.companyName}
                                    onChange={(e) =>
                                        handleInputChange("companyName", e.target.value)
                                    }
                                // style={{ width: "40rem", height: "3rem" }}
                                />
                            </div>
                            <div className="Training_Description">
                                <label for="description" className="text-[#333333] font-['Poppins'] mb-[10px]">Description</label>
                                <textarea
                                    ref={textareaRef}
                                    className="h-auto"
                                    value={content}
                                    onChange={handleChange}
                                    // onKeyDown={handleKeyDown}
                                    id="description"
                                    // value={description}
                                    placeholder="Enter your description here..."
                                    style={{ borderRadius: '0.4rem', minHeight: "2.4rem" }}
                                />
                            </div>
                            {/* <div className="Technology"> */}

                            <div className="Content_Title" style={{ width: '41.3rem', marginBottom: '10px' }}>
                                <p>Technology (Training Topics)</p>
                                <div className="mt-[10px] mb-[20px]">
                                    <Select
                                        defaultValue={[]}
                                        isMulti
                                        name="colors"
                                        options={topTopics}
                                        className="Multiselector"
                                        placeholder="select Training Topics"
                                        styles={{
                                            placeholder: (provided) => ({
                                                ...provided,
                                                color: '#888',
                                            }),
                                        }}
                                    /></div>
                            </div>
                            <div className="Type_Of_Training ">
                                <div className="text-[#333333] font-['Poppins']">Type Of Training</div>
                                <div className="RadioTOT">
                                    <label className={`LLLabel ${trainingType === "Corporate Training" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="Corporate Training"
                                            checked={trainingType === "Corporate Training"}
                                            onChange={() => handleTrainingTypeChange("Corporate Training")}
                                        />
                                        <h2>Corporate Training</h2>
                                    </label>
                                    <label className={`LLLabel ${trainingType === "College Training" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="College Training"
                                            checked={trainingType === "College Training"}
                                            onChange={() => handleTrainingTypeChange("College Training")}
                                        />
                                        <h2>College Training</h2>
                                    </label>
                                    <label className={`LLLabel ${trainingType === "Individual" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingType"
                                            value="Individual"
                                            checked={trainingType === "Individual"}
                                            onChange={() => handleTrainingTypeChange("Individual")}
                                        />
                                        <h2>Individual</h2>
                                    </label>
                                </div>
                                {trainingType === "Corporate Training" && (
                                    <div className="ParticipantCount">
                                        <h5 className="mt-[5px] mb-[0px] text-[#535353] font-['Poppins']">Select No Of  In Corporate Training</h5>
                                        <div className="RadioTOT_Count">
                                            <button
                                                onClick={() => setParticipantCount(Math.max(participantCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="TOT_Input"
                                                value={participantCount}
                                                onChange={(e) => setParticipantCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((participantCount.toString().length * 8), maxCount)}px` }}

                                            />

                                            <button
                                                onClick={() => setParticipantCount(participantCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {trainingType === "College Training" && (
                                    <div className="ParticipantCount">
                                        <h5 className="mt-[5px] mb-[0px] text-[#535353] font-['Poppins']">Select No Of Participants In College Training</h5>
                                        <div className="RadioTOT_Count">
                                            <button
                                                onClick={() => setParticipantCount(Math.max(participantCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="TOT_Input"
                                                value={participantCount}
                                                onChange={(e) => setParticipantCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((participantCount.toString().length * 8), maxCount)}px` }}

                                            />
                                            <button
                                                onClick={() => setParticipantCount(Math.min(participantCount + 1,))}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {trainingType === "Individual" && (
                                    <div className="ParticipantCount">
                                        <h5 className="mt-[5px] mb-[0px]">Select No Of Participants In Individual</h5>
                                        {/* <div style={{ width: '14rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> */}
                                        <div className="RadioTOT_Count">
                                            <button
                                                onClick={() => setParticipantCount(Math.max(participantCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="TOT_Input"
                                                value={participantCount}
                                                onChange={(e) => setParticipantCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((participantCount.toString().length * 8), maxCount)}px` }}

                                            />
                                            <button
                                                onClick={() => setParticipantCount(participantCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                    // </div>
                                )}
                            </div>

                            <div className="Mode_Of_Training">
                                <div className="text-[#333333] font-['Poppins']">Mode of Training</div>
                                <div className="Radio_MOT">
                                    <label className={`LLLabel font-['Poppins'] ${trainingMode === "online" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingMode"
                                            value="online"
                                            checked={trainingMode === "online"}
                                            onChange={() => handleTrainingModeChange("online")}
                                        />
                                        Online
                                    </label>
                                    <label className={`LLLabel font-['Poppins'] ${trainingMode === "offline" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="trainingMode"
                                            value="offline"
                                            checked={trainingMode === "offline"}
                                            onChange={() => handleTrainingModeChange("offline")}
                                        />
                                        Offline
                                    </label>
                                </div>
                                {trainingMode === "offline" && (
                                    <div className="SelectLocation">
                                        <label className="LLLabel">
                                            <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Your Location</h5>
                                        </label>
                                        <select
                                            onChange={(e) => handleLocationChange(e.target.value)}
                                        >
                                            <option value="">Location</option>
                                            <option value="usa">United States</option>
                                            <option value="canada">Canada</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="australia">Australia</option>
                                        </select>
                                    </div>
                                )}
                            </div>
                            <div className="Select_Experience">
                                <p className="mt-[5px] mb-[5px]">Select Experience</p>
                                <h5 className="mt-[5px] mb-[5px]">Slide To Set Your Experience</h5>
                                <div
                                    style={{
                                        width: '40rem',
                                        marginTop: '10px',
                                        position: 'relative',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <input
                                        type="range"
                                        value={experience}
                                        onChange={handleExperienceChange}
                                        onMouseDown={handleDragStart}
                                        onMouseUp={handleDragEnd}
                                        onTouchStart={handleDragStart}
                                        onTouchEnd={handleDragEnd}
                                        min={0}
                                        max={50}
                                        aria-label="Experience Range (Post Training)"
                                        step={1}
                                        style={{
                                            width: '100%',
                                            height: '5px',
                                            cursor: 'pointer',
                                            appearance: 'none',
                                            outline: 'none',
                                            borderRadius: '5px',
                                            zIndex: 1,
                                            ...trackBackground,
                                        }}
                                    />
                                    {showValueLabel && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: `calc(${(experience / 50) * 100}%)`,
                                                transform: 'translateX(-50%)',
                                                textAlign: 'center',
                                                color: '#2676C2',
                                                fontFamily: 'Poppins',
                                                fontSize: '0.855rem',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                paddingLeft: '3.1rem',
                                                paddingTop: '0.5rem',
                                            }}
                                        >
                                            {experience} years
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="Duration_Of_Time">
                                <div className=" font-['Poppins']">Duration Of Training</div>
                                <div className="Radio_Duration">
                                    <label className={`LLLabel font-['Poppins'] ${durationType === "hour" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="hour"
                                            checked={durationType === "hour"}
                                            onChange={() => handleDurationTypeChange("hour")}
                                        />
                                        Hourly
                                    </label>
                                    <label className={`LLLabel font-['Poppins'] ${durationType === "day" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="day"
                                            checked={durationType === "day"}
                                            onChange={() => handleDurationTypeChange("day")}
                                        />
                                        Day
                                    </label>
                                    <label className={`LLLabel font-['Poppins'] ${durationType === "month" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            name="durationType"
                                            value="month"
                                            checked={durationType === "month"}
                                            onChange={() => handleDurationTypeChange("month")}
                                        />
                                        Month
                                    </label>
                                </div>
                                {durationType === "hour" && (
                                    <div className="DurationCount">
                                        <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Select No Of Hours</h5>
                                        <div className="Radio_Duration_Count">
                                            <button
                                                onClick={() => setDurationCount(Math.max(durationCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="Duration_Input"
                                                value={durationCount}
                                                onChange={(e) => setDurationCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((durationCount.toString().length * 8), maxCount)}px` }}
                                            />
                                            <button
                                                onClick={() => setDurationCount(durationCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {durationType === "day" && (
                                    <div className="DurationCount">
                                        <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Select No Of Days</h5>
                                        <div className="Radio_Duration_Count">
                                            <button
                                                onClick={() => setDurationCount(Math.max(durationCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="Duration_Input"
                                                value={durationCount}
                                                onChange={(e) => setDurationCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((durationCount.toString().length * 8), maxCount)}px` }}
                                            />

                                            <button
                                                onClick={() => setDurationCount(durationCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                                {durationType === "month" && (
                                    <div className="DurationCount">
                                        <h5 className="mt-[10px] mb-[10px] text-[#535353] font-['Poppins']">Select No Of Months</h5>
                                        <div className="Radio_Duration_Count">
                                            <button
                                                onClick={() => setDurationCount(Math.max(durationCount - 1, 0))}
                                            >
                                                -
                                            </button>
                                            <input
                                                className="Duration_Input"
                                                value={durationCount}
                                                onChange={(e) => setDurationCount(Math.max(parseInt(e.target.value) || 0, 0))}
                                                style={{ width: `${Math.min((durationCount.toString().length * 8), maxCount)}px` }}
                                            />

                                            <button
                                                onClick={() => setDurationCount(durationCount + 1)}
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="Budgets">
                                <p className="text-lg font-[500] font-['Poppins']">Budgets</p>
                                <span className="Budget_MM">
                                    <select
                                        className=""
                                        style={{
                                            borderRadius: '0.5rem',
                                            paddingLeft: '0.3rem',
                                            color: '#2676C2',
                                            fontFamily: 'Poppins',
                                            fontSize: '0.875rem',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: 'normal'
                                        }}
                                        onChange={handleCountryChange}
                                        value={selectedCountry}
                                    >
                                        <option value="IND">IND</option>
                                        <option value="USA">USA</option>

                                    </select>
                                    <span>
                                        <input
                                            className=""
                                            style={{
                                                border: ' 1.5px #DADADA solid ',
                                                borderRadius: '0.5rem 0 0 0.5rem',
                                                width: '5rem',
                                                borderRight: '0.7px #DADADA solid',
                                            }}
                                            type="text"
                                            placeholder={`Min`}
                                            maxLength={10000}
                                            value={formatCurrencyValue(minBudget)}
                                            onChange={(e) => setMinBudget(e.target.value)}
                                        />
                                        <input
                                            className=""
                                            style={{
                                                border: ' 1.5px #DADADA solid',
                                                borderRadius: '0 0.5rem 0.5rem 0 ',
                                                width: '5rem',
                                                borderLeft: '0.7px #DADADA solid',
                                            }}
                                            type="text"
                                            placeholder={`Max`}
                                            maxLength={10000}
                                            value={formatCurrencyValue(maxBudget)}
                                            onChange={(e) => setMaxBudget(e.target.value)}
                                        />
                                    </span>
                                </span>
                            </div>
                            <div className="TOC">
                                <p >TOC (Table of content)</p>

                                <div className="TOC_Radio">
                                    <label className={`font-['Poppins'] ${availability === "available" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            value="available"
                                            checked={availability === "available"}
                                            onChange={handleAvailabilityChange}
                                            style={{ borderRadius: '0' }}
                                        />
                                        Available
                                    </label>

                                    <label className={`font-['Poppins'] ${availability === "unavailable" ? "active" : ""}`}>
                                        <input
                                            type="radio"
                                            value="unavailable"
                                            checked={availability === "unavailable"}
                                            onChange={handleAvailabilityChange}
                                        />
                                        Unavailable
                                    </label>
                                </div>
                                {availability === "available" && (
                                    <div className="UPLOADFILE">
                                        <span className="For_Align_Upload">
                                            <h4 >Select File</h4>
                                            <FileUploadOutlinedIcon
                                                sx={{ color: "#2676C2", fontSize: "1.3rem" }}
                                            />
                                        </span>
                                        <input type="file" onChange={handleFileUpload} />
                                    </div>
                                )}
                            </div>
                            <div className="Training_Dates">
                                <p className=" font-['Poppins']">Training Dates</p>
                            </div>
                            <div className="Training_Dates" style={{ display: 'flex', gap: '1rem' }}>
                                <div className="date-picker">
                                    <p>Start Date</p>
                                    <div style={{ width: '16rem', display: 'flex', }}>
                                        <DatePicker
                                            className="end"
                                            selected={startDate}
                                            onChange={handleStartDateChange}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            isClearable={true}
                                            style={{ border: '1px Solid #333 ' }}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="DD/MM/YYYY"
                                            ref={startDatePickerRef}

                                        />
                                        <div className="CalenderIcon" onClick={() => handleCalendarIconClick(startDatePickerRef)}>
                                            <CalendarMonthOutlinedIcon color="#333" sx={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                                < div className="date-picker">
                                    <p>End Date</p>
                                    <div style={{ width: '16rem', display: 'flex' }}>
                                        <DatePicker
                                            className="end"
                                            selected={endDate}
                                            onChange={handleEndDateChange}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={startDate}
                                            isClearable={true}
                                            dateFormat="dd/MM/yyyy"
                                            placeholderText="DD/MM/YYYY"
                                            ref={endDatePickerRef}

                                        />
                                        <div className="CalenderIcon" onClick={() => handleCalendarIconClick(endDatePickerRef)}>
                                            <CalendarMonthOutlinedIcon color="#333" sx={{ cursor: 'pointer' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Box sx={{ mt: '10px', mb: '10px' }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={urgentlyNeedTrainer}
                                                onChange={handleCheckboxChange}
                                                name="urgentlyNeedTrainer"
                                                color="primary" // You can customize the color
                                            />
                                        }
                                        label="If you urgently need a trainer"
                                        className="custom-label"
                                    />

                                </Box>
                            </div>
                            {activeOption === "postTraining" && (
                                <div className="Post_Button mb-[20px]"> 
                                    <button
                                        onClick={handleReset}
                                        style={{ borderRadius: "5px" }}
                                        className="Reset_Btn flex justify-center items-center"
                                    >
                                        <span>Reset</span>
                                    </button>
                                    <button
                                        style={{ borderRadius: "5px" }} onClick={handleSubmit} className="Submit_Btn flex justify-center items-center">
                                        <span>SUBMIT</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}

                    {activeOption === "postJob" && (
                        <div className="Post_Job_Content">
                            <div className="Content_Title">
                                <p className="mb-[10px]">Job Title</p>
                                <input type="text" placeholder="Enter Job title" />
                            </div>
                            <div className="Training_Description1">
                                <label for="description1">Job Description</label>
                                <textarea
                                    ref={textareaReff}
                                    className="h-auto"
                                    value={contentt}
                                    onChange={handleChangee}
                                    // onKeyDown={handleKeyDown}
                                    id="description1"
                                    // value={description}
                                    placeholder="Enter Job Description"
                                    style={{ borderRadius: '0.4rem', minHeight: "2.4rem", marginTop: '10px' }}
                                />
                            </div>
                            <div className="Content_Title" style={{ width: '41.3rem' }}>
                                <p className="mb-[10px]">Qualifications</p>
                            </div>
                            {/* <div className="w-[41.3rem] pl-[1px] c-[#c7c7c7]"> */}
                            <Select
                                defaultValue={[]}
                                name="Qualifications"
                                options={qualTopics}
                                className="Multiselector"
                                placeholder="Select Qualification"
                                styles={{
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: '#888',
                                    }),
                                }}
                            />
                            {/* </div> */}
                            <div className="Content_Title">
                                <p className="mb-[10px]">Skills</p>
                            </div>
                            <Select
                                placeholder="Enter What Kind OF Skills You Want"
                                defaultValue={[]}
                                isMulti
                                name="Qualifications"
                                options={skillsTopics}
                                className="Multiselector"
                                styles={{
                                    placeholder: (provided) => ({
                                        ...provided,
                                        color: '#888',
                                    }),
                                }}
                            />
                            <div className="Select_Experience">
                                <p className="mt-[5px] mb-[5px]">Select Experience</p>
                                <h5 className="mt-[5px] mb-[5px]">Slide To Set Your Experience</h5>
                                <div
                                    style={{
                                        width: '40rem',
                                        marginTop: '10px',
                                        position: 'relative',
                                        marginBottom: '15px',
                                    }}
                                >
                                    <input
                                        type="range"
                                        value={experiencee}
                                        onChange={handleExperienceChangee}
                                        onMouseDown={handleDragStartt}
                                        onMouseUp={handleDragEndd}
                                        onTouchStart={handleDragStartt}
                                        onTouchEnd={handleDragEndd}
                                        min={0}
                                        max={50}
                                        aria-label="Experiencee Range (Post Job)"
                                        step={1}
                                        style={{
                                            width: '100%',
                                            height: '5px',
                                            cursor: 'pointer',
                                            appearance: 'none',
                                            outline: 'none',
                                            borderRadius: '5px',
                                            zIndex: 1,
                                            ...trackBackgroundd,
                                        }}
                                    />
                                    {showValueLabell && (
                                        <div
                                            style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: `calc(${(experiencee / 50) * 100}%)`,
                                                transform: 'translateX(-50%)',
                                                textAlign: 'center',
                                                color: '#2676C2',
                                                fontFamily: 'Poppins',
                                                fontSize: '0.855rem',
                                                fontStyle: 'normal',
                                                fontWeight: 'bold',
                                                paddingLeft: '3.1rem',
                                                paddingTop: '0.5rem',
                                            }}
                                        >
                                            {experiencee} years
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="Content_Title">
                                <p>Loaction</p>
                                <input type="text" className="mt-[10px]" placeholder="Enter Your Location" />
                            </div>
                            <div className="Content_Title">
                                <p>Salary</p>
                                <input
                                    type="text" className="mt-[10px]"
                                    placeholder="Enter Salary Details"
                                    style={{ width: "41.3rem" }}
                                />
                                <div className="Content_Title" >
                                    <p>Benefits</p>
                                    <input
                                        type="text" className="mt-[10px]"
                                        placeholder="Enter Benefits"
                                        style={{ width: "41.3rem" }}
                                    />
                                </div>
                            </div>
                            <div className="Training_Description2">
                                <label for="description2">Company Overview</label>
                                <textarea
                                    ref={textareaRefff}
                                    className="h-auto"
                                    value={contenttt}
                                    onChange={handleChangeee}
                                    // onKeyDown={handleKeyDown}
                                    id="description2"
                                    // value={description}
                                    placeholder="Company Overview Here......"
                                    style={{ borderRadius: '0.4rem', minHeight: "2.4rem", marginTop: '10px' }}
                                />
                            </div>

                            {activeOption === "postJob" && (
                                // <div className="Post_Button">
                                //     <button
                                //         onClick={handleReset}
                                //         style={{ marginRight: "10px" }}
                                //         className="Reset_Btn"
                                //     >
                                //         Reset
                                //     </button>
                                //     <button onClick={handleSubmit} className="Submit_Btn">
                                //         Submit
                                //     </button>
                                // </div>

                                <div className="Post_Button mt-[20px] mb-[20px]">
                                    <button
                                        onClick={handleReset}
                                        // style={{ marginRight: "10px" }}
                                        style={{ borderRadius: "5px" }}
                                        className="Reset_Btn flex justify-center items-center"
                                    >
                                        <span>RESET</span>
                                    </button>
                                    <button onClick={handleSubmit} style={{ borderRadius: "5px" }} className="Submit_Btn flex justify-center items-center">
                                        <span>SUBMIT</span>
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div >
        </div >
    );
}
export default Requirements;