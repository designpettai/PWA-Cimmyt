// AddFormar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFormar.css';

const AddFormar = ({ onAddFarmer }) => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const [isExtensionOfficer, setIsExtensionOfficer] = useState(false);
    const [formCompleted, setFormCompleted] = useState([false, false, false]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        const validateName = (name) => /^[a-zA-Z\s]+$/.test(name);
        const validateMobile = (mobile) => /^\d{10}$/.test(mobile);
        const validateOfficerId = (id) => /^\d+$/.test(id);

        if (currentActiveIndex === 0) {
            const name = document.getElementById('farmer-name').value.trim();
            const mobile = document.getElementById('farmer-mobile').value.trim();

            if (!name) {
                newErrors.name = "Name is required";
            } else if (!validateName(name)) {
                newErrors.name = "Name can only contain letters and spaces";
            }

            if (!mobile) {
                newErrors.mobile = "Mobile number is required";
            } else if (!validateMobile(mobile)) {
                newErrors.mobile = "Mobile number must be exactly 10 digits";
            }
        } else if (currentActiveIndex === 1) {
            const agroZone = document.getElementById('agro-zone').value;
            const soilTexture = document.getElementById('soil-texture').value;

            if (!agroZone) {
                newErrors.agroZone = "Agro-climatic zone is required";
            }

            if (!soilTexture) {
                newErrors.soilTexture = "Soil texture is required";
            }
        } else if (currentActiveIndex === 2 && !isExtensionOfficer) {
            // No validation needed for the Extension Officer question
        } else if (isExtensionOfficer) {
            const officerName = document.getElementById('officer-name').value.trim();
            const officerId = document.getElementById('officer-id').value.trim();

            if (!officerName) {
                newErrors.officerName = "Your name is required";
            } else if (!validateName(officerName)) {
                newErrors.officerName = "Name can only contain letters and spaces";
            }

            if (!officerId) {
                newErrors.officerId = "Your ID is required";
            } else if (!validateOfficerId(officerId)) {
                newErrors.officerId = "Officer ID must be a number";
            }
        }

        return newErrors;
    };

    const handleContinue = () => {
        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            setFormCompleted((prev) => {
                const newCompleted = [...prev];
                newCompleted[currentActiveIndex] = true;
                return newCompleted;
            });
            setCurrentActiveIndex(currentActiveIndex + 1);
        }
    };

    const handleNoClick = () => {
        navigate('/formar-detail');
    };

    const handleYesClick = () => {
        setIsExtensionOfficer(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validateForm();
        if (Object.keys(newErrors).length === 0) {
            navigate('/formar-detail');
        } else {
            setErrors(newErrors);
        }
    };

    const handleListClick = (index) => {
        // Only allow navigation to the specific form if it is completed
        if (formCompleted[index]) {
            setCurrentActiveIndex(index);
        }
    };

    return (
        <div className="add-formar">
            <div className="container">
                <ol className="Add-form-Level">
                    {[...Array(3)].map((_, index) => (
                        <li
                            key={index}
                            className={`Add-form-Level-list ${currentActiveIndex >= index ? 'active' : ''}`}
                            onClick={() => handleListClick(index)}
                        >
                            <h2
                                style={{
                                    backgroundColor: formCompleted[index] ? '#279A82' : 'transparent', 
                                    color: formCompleted[index] ? '#fff' : (currentActiveIndex === index ? '#279A82' : '#D1D5DB'),
                                }}
                            >
                                {index + 1}
                            </h2>
                            <p className='Para-list'>
                                {index === 0 ? 'Personal Details' : index === 1 ? 'Farm Details' : 'My Details'}
                            </p>
                        </li>
                    ))}
                </ol>


                <div className="form-container">
                    {currentActiveIndex === 0 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Farmer Details</h1>
                            <form id="farmer-form">
                                <div className="form-group">
                                    <label htmlFor="farmer-name">Name of the Farmer</label>
                                    <input
                                        type="text"
                                        id="farmer-name"
                                        placeholder="Enter farmer name"
                                        className={errors.name ? "input-error" : ""}
                                        required
                                    />
                                    {errors.name && (
                                        <p className="error">
                                            <i className="fas fa-exclamation-circle error-icon"></i>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>
                                <div className="form-group child2">
                                    <label htmlFor="farmer-mobile">Mobile Number of the Farmer</label>
                                    <input
                                        type="tel"
                                        id="farmer-mobile"
                                        placeholder="Enter farmer mobile number"
                                        className={errors.mobile ? "input-error" : ""}
                                        required
                                    />
                                    {errors.mobile && (
                                        <p className="error">
                                            <i className="fas fa-exclamation-circle error-icon"></i>
                                            {errors.mobile}
                                        </p>
                                    )}
                                </div>
                                <button type="button" className='primary' onClick={handleContinue}>Continue</button>
                            </form>
                        </div>
                    )}

                    {currentActiveIndex === 1 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Farm Details</h1>
                            <form id="farm-details-form">
                                <div className="form-group">
                                    <label htmlFor="agro-zone">Agro-climatic zone</label>
                                    <div className="select-container">
                                        <select id="agro-zone" className={errors.agroZone ? "input-error" : ""} required>
                                            <option value="">Select Agro-climatic zone</option>
                                            <option value="Lakeshore">Lakeshore</option>
                                            <option value="Mid-Altitude">Mid-Altitude</option>
                                            <option value="High-Altitude">High-Altitude</option>
                                        </select>
                                        <svg className='arrow-icons' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g id="Chevron down">
                                                <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#6B7280" />
                                            </g>
                                        </svg>
                                    </div>
                                    {errors.agroZone && (
                                        <p className="error">
                                            <i className="fas fa-exclamation-circle error-icon"></i>
                                            {errors.agroZone}
                                        </p>
                                    )}
                                </div>
                                <div className="form-group child2">
                                    <label htmlFor="soil-texture">Soil texture</label>
                                    <div className="select-container">
                                        <select id="soil-texture" className={errors.soilTexture ? "input-error" : ""} required>
                                            <option value="">Select soil texture</option>
                                            <option value="Sandy">Sandy</option>
                                            <option value="Clayey">Clayey</option>
                                        </select>
                                        <svg className='arrow-icons' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <g id="Chevron down">
                                                <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z" fill="#6B7280" />
                                            </g>
                                        </svg>
                                    </div>
                                    {errors.soilTexture && (
                                        <p className="error">
                                            <i className="fas fa-exclamation-circle error-icon"></i>
                                            {errors.soilTexture}
                                        </p>
                                    )}
                                </div>
                                <button type="button" className='primary' onClick={handleContinue}>Continue</button>
                            </form>
                        </div>
                    )}

                    {currentActiveIndex === 2 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Extension Officer Details</h1>
                            <form id="extension-officer-form">
                                <div className="form-group">
                                    <label className='ex-select'>Are you an Extension Officer?</label>
                                    <div className="button-group child2">
                                        <button type="button" className="primary" onClick={handleYesClick}>Yes</button>
                                        <button type="button" className="secondary" onClick={handleNoClick}>No</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}

                    {isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Extension Officer Details</h1>
                            <form id="extension-officer-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="officer-name">Your Name</label>
                                    <input
                                        type="text"
                                        id="officer-name"
                                        placeholder="Enter your name here"
                                        className={errors.officerName ? "input-error" : ""}
                                    />
                                    {errors.officerName && (
                                        <p className="error">
                                            <i className="fas fa-exclamation-circle error-icon"></i>
                                            {errors.officerName}
                                        </p>
                                    )}
                                </div>
                                <div className="form-group child2">
                                    <label htmlFor="officer-id">Your ID</label>
                                    <input
                                        type="text"
                                        id="officer-id"
                                        placeholder="Enter your officer ID"
                                        className={errors.officerId ? "input-error" : ""}
                                    />
                                    {errors.officerId && (
                                        <p className="error">
                                            <i className="fas fa-exclamation-circle error-icon"></i>
                                            {errors.officerId}
                                        </p>
                                    )}
                                </div>
                                <button type="submit" className="primary">Submit</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AddFormar;
