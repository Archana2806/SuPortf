import React, { useState, useEffect } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);
    const [activeExperience, setActiveExperience] = useState(null);

    const toggleTab = (index) => {
        setToggleState(index);
        setActiveExperience(null); // Reset active experience when switching tabs
    };

    const handleExperienceTitleClick = (experience) => {
        setActiveExperience(experience);
    };

    const handleCloseClick = () => {
        setActiveExperience(null);
    };

    useEffect(() => {
        if (activeExperience) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [activeExperience]);

    const renderWhiteDivContent = () => {
        switch (activeExperience) {
            case "Foxconn":
                return <p>
                    • Managed NPI Automation Projects: Planned, scheduled, and executed automation setup for new projects, ensuring on-time machine integration and customer deadline adherence.<br /><br />
                    • Optimized Automation Processes: Identified areas for improvement and implemented changes to streamline automation workflows, enhancing efficiency.<br /><br />
                    • Performed Machine Calibration & DOE: Ensured accuracy and performance of automation equipment through calibration and Design of Experiments (DOE) processes.</p>;
            case "Layam":
                return <p>
                    • Supported the sales and business development teams by conducting market research, preparing sales reports, and assisting with client communications<br /><br />
                    • Analyzed market trends, created sales presentations.<br /><br />
                    • Coordinated with clients to ensure their needs were met. My efforts helped drive sales growth and improve client satisfaction.</p>;
            default:
                return null;
        }
    };

    return (
        <section className="qualification__section">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={toggleState === 1 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}
                    >
                        <HiOutlineAcademicCap className="qualification__icon" />
                        Education
                    </div>
                    <div
                        className={toggleState === 2 ? "qualification__button button--flex qualification__active" : "qualification__button button--flex"}
                        onClick={() => toggleTab(2)}
                    >
                        <HiOutlineBriefcase className="qualification__icon" />
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelor's in EEE</h3>
                                <span className="qualification__subtitle">VITAM</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2021-2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Diploma</h3>
                                <span className="qualification__subtitle">UCP Engineering School</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    2018-2021
                                </div>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Matriculation</h3>
                                <span className="qualification__subtitle">Aryan Public School</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    - 2018
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title" onClick={() => handleExperienceTitleClick("Foxconn")}>Application and Automation Engineer</h3>
                                <span className="qualification__subtitle">Foxconn</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Jan 2024 - Present
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title" onClick={() => handleExperienceTitleClick("Layam")}>Commercial Associate</h3>
                                <span className="qualification__subtitle">Layam</span>
                                <div className="qualification__calendar">
                                    <HiOutlineCalendar className="qualification__calendar-icon" />
                                    Feb 2022 - Mar 2023
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {activeExperience && toggleState === 2 && (
                <div className="overlay">
                    <div className="white-div">
                        <button className="close-button" onClick={handleCloseClick}>×</button>
                        {renderWhiteDivContent()}
                    </div>
                </div>
            )}
        </section>
    );
}

export default Qualification;
