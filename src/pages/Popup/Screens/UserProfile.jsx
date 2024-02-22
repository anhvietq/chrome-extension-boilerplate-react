import logo from '../../../assets/img/user.jpg';
import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import './UserProfile.css';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditingSummary, setIsEditingSummary] = useState(false);
    const [summary, setSummary] = useState('Write a summary about yourself');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleToggleContainer = () => {
        setIsOpen(!isOpen);
    };

    const handleEditProfile = (event) => {
        event.stopPropagation();
        navigate('/edit-profile');
    };

    const handleToggleSummary = (event) => {
        event.stopPropagation();
        setIsEditingSummary(!isEditingSummary);
    };

    const handleSummaryChange = (event) => {
        setSummary(event.target.value);
    };

    const handleSummarySave = (event) => {
        event.stopPropagation();
        event.preventDefault();
        setIsEditingSummary(false);

        // If the summary is blank, set it back to the default text
        if (summary.trim() === '') {
            setSummary('Write a summary about yourself');
        }

        // Save the updated summary to local storage
        localStorage.setItem('summary', summary);
    };


    useEffect(() => {
        const storedFormData = localStorage.getItem('formData');
        if (storedFormData) {
            const { firstname, lastname, location, email } = JSON.parse(storedFormData);
            setFirstName(firstname);
            setLastName(lastname);
            setLocation(location);
            setEmail(email);
        }

        const storedSummary = localStorage.getItem('summary');
        if (storedSummary) {
            setSummary(storedSummary);
        }
    }, []);

    return (
        <div className={`${isOpen ? 'open' : ''}`} onClick={handleToggleContainer}>
            <div className='user-profile-container'>
                <NavLink to='/UserForm' className='edit-profile-icon' onClick={handleEditProfile}>
                    <BiEdit color='white' size={20} />
                </NavLink>
                <header>
                    <img src={logo} className='User-Profile' alt='User Profile' />
                    <div className='user-header'>
                        {firstName && lastName ? ` ${firstName} ${lastName}` : 'Welcome User'}
                    </div>
                    <div className='user-location'>{location ? `Location: ${location}` : 'Location'}</div>
                    <div className='user-email'>{location ? `Email: ${email}` : 'Email'}</div>
                </header>
                {isOpen && (
                    <>
                        <div className='user-summary'>
                            <h1>Profile Summary</h1>
                            {!isEditingSummary ? (
                                <h2 className='user-summary'>{summary}</h2>
                            ) : (
                                <textarea
                                    className='user-summary-edit'
                                    value={summary}
                                    placeholder='Write a summary about yourself'
                                    onChange={handleSummaryChange}
                                    onClick={(event) => event.stopPropagation()}
                                />
                            )}
                        </div>
                        {!isEditingSummary ? (
                            <button className='summary-edit' onClick={handleToggleSummary}>
                                Edit
                            </button>
                        ) : (
                            <button className='summary-save' onClick={handleSummarySave}>
                                Save
                            </button>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default UserProfile;
