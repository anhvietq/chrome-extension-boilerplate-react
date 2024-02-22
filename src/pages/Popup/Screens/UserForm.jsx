import React, { useState, useEffect } from 'react';
import '../Screens/UserForm.css';
import { AiOutlineLeft } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

const UserForm = () => {
    const [formData, setFormData] = useState(() => {
        const storedFormData = localStorage.getItem('formData');
        return storedFormData ? JSON.parse(storedFormData) : {
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            linkedin: '',
            portfolio: '',
            location: '',
            gender: '',
        };
    });

    const [file, setFile] = useState(() => {
        const storedFileData = localStorage.getItem('fileData');
        return storedFileData ? storedFileData : null;
    });


    useEffect(() => {
        localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const uploadedFile = e.target.files[0];
        setFile(uploadedFile);
    };

    const handleSave = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileData = event.target.result;
                localStorage.setItem('fileData', JSON.stringify(fileData));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleReset = () => {
        setFormData({
            firstname: '',
            lastname: '',
            email: '',
            phonenumber: '',
            linkedin: '',
            portfolio: '',
            location: '',
            gender: '',
        });
        setFile(null);
        localStorage.removeItem('formData');
        localStorage.removeItem('fileData');

    };

    return (
        <div className="container">
            <NavLink to="/">
                <div className="home-icons">
                    <AiOutlineLeft color="#394DBA" size={25} />
                </div>
            </NavLink>
            {/* Pass formData as a prop */}
            <form>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="First Name"
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formData.firstname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="Last Name"
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formData.lastname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="Email Address"
                        type="text"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="Phone Number"
                        type="text"
                        id="phonenumber"
                        name="phonenumber"
                        value={formData.phonenumber}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="LinkedIn URL"
                        type="text"
                        id="linkedin"
                        name="linkedin"
                        value={formData.linkedin}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="Portfolio URL"
                        type="text"
                        id="portfolio"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <input
                        className="input-field"
                        placeholder="Location"
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input-container">
                    <select
                        className="input-field"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                    >
                        <option value="">Gender: Select an option</option>
                        <option value="female">Female</option>
                        <option value="male">Male</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="other">Other</option>
                        <option value="do not wish to declare">Do not wish to declare</option>
                    </select>
                </div>
                <h1 className='resume'>Upload your Resume:</h1>
                <div className="input-container">
                    <input
                        className=""
                        type="file" // Add file input field
                        id="file"
                        name="file"
                        accept=".pdf,.doc,.docx" // Define accepted file types
                        onChange={handleFileChange} // Handle file selection
                    />
                </div>
                <button className="button-save" type="submit" onClick={handleSave}>
                    Save
                </button>
                <button className="button-reset" type="button" onClick={handleReset}>
                    Reset
                </button>
            </form>
        </div>
    );
};

export default UserForm;
