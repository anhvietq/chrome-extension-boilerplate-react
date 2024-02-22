import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TbBriefcase } from "react-icons/tb";
import { AiOutlineLeft } from "react-icons/ai";
import './BadgeRequest.css';
import { HiBadgeCheck } from 'react-icons/hi'

const BadgeRequest = () => {
    const [degree, setDegree] = useState('');
    const [department, setDepartment] = useState('');
    const [yearCompleted, setYearCompleted] = useState('');
    const [universityName, setUniversityName] = useState('');
    const [showThankYou, setShowThankYou] = useState(false);

    const handleDegreeChange = (event) => {
        setDegree(event.target.value);
    };

    const handleDepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const handleYearCompletedChange = (event) => {
        setYearCompleted(event.target.value);
    };

    const handleRequestBadge = () => {
        // Handle the request badge functionality
        setShowThankYou(true);
        console.log('Badge requested!');
    };

    const location = useLocation();
    const universityQueryParam = new URLSearchParams(location.search).get('university');
    const selectedUniversityName = universityQueryParam ? decodeURIComponent(universityQueryParam) : '';

    useState(() => {
        setUniversityName(selectedUniversityName);
    }, [selectedUniversityName]);

    return (
        <div className="container">
            <NavLink to='/'>
                <div className='home-icons'>
                    <AiOutlineLeft color='#394DBA' size={25} />
                </div>
            </NavLink>
            <TbBriefcase color='#394DBA' size={60} />
            <div className="university-container">
                {universityName && <p className='university-name'>{universityName}</p>}
                <hr className="separator" />

                {showThankYou ? (
                    <div className="thank-you">
                        <HiBadgeCheck
                            color='#394DBA'
                            size={60} />
                        <h1>
                            Thank you for your badge request!
                        </h1>
                        <h2>
                            The institution will contact you if more information is required.
                        </h2>
                    </div>
                ) : (
                    <>
                        <div className="input-container">
                            <input
                                className="input-field"
                                placeholder="Degree"
                                type="text"
                                value={degree}
                                onChange={handleDegreeChange}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                className="input-field"
                                placeholder="Department, Major"
                                type="text"
                                value={department}
                                onChange={handleDepartmentChange}
                            />
                        </div>
                        <div className="input-container">
                            <input
                                className="input-field"
                                placeholder="Year Completed"
                                type="text"
                                value={yearCompleted}
                                onChange={handleYearCompletedChange}
                            />
                        </div>
                        <button className='button' onClick={handleRequestBadge}>
                            Request Badge
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default BadgeRequest;
