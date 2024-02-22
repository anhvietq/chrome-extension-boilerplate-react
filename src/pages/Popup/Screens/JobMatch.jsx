import React, { useState } from 'react';
import '../Screens/JobMatch.css';
import { TbBriefcase } from "react-icons/tb";
import { MdToken } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import { AiOutlineLeft } from 'react-icons/ai';

const JobMatch = () => {
    const [showThankYou, setShowThankYou] = useState(false);

    const handleApplyNow = () => {
        setShowThankYou(true);
    };

    return (
        <div className="container">
            <NavLink to='/'>
                <div className='home-icons'>
                    <AiOutlineLeft color='#394DBA' size={25} />
                </div>
            </NavLink>
            <TbBriefcase color='#394DBA' size={60} />
            <h2>Company Name</h2>
            <p>Company address, City, Country</p>
            <div> Your matching badges:
                <MdToken size={20} color='#394DBA' />
                <MdToken size={20} color='#394DBA' />
                <MdToken size={20} color='#394DBA' />
                <MdToken size={20} color='#394DBA' />
            </div>

            <div className="separator" />

            {showThankYou ? (
                <div className='thank-you'>
                    <h1>
                        Success!
                    </h1>
                    <h2>
                        Your application has been received.
                        We will contact you regarding to the application status.
                    </h2>
                </div>
            ) : (
                <>
                    <h3>Job Summary</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                    <h3>Responsibilities</h3>
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <li>Consectetur adipiscing elit</li>
                        <li>Sed do eiusmod tempor incididunt</li>
                    </ul>

                    <h3>Desired Badges:</h3>
                    <div>
                        <MdToken size={50} color='#394DBA' />
                        <MdToken size={50} color='#394DBA' />
                        <MdToken size={50} color='#394DBA' />
                        <MdToken size={50} color='#394DBA' />
                    </div>
                    <button className='button' onClick={handleApplyNow}>
                        Apply Now
                    </button>
                </>
            )}
        </div>
    );
};

export default JobMatch;
