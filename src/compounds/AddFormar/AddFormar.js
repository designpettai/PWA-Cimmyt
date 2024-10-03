import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFormar.css';

const AddFormar = () => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const [isExtensionOfficer, setIsExtensionOfficer] = useState(false);
    const navigate = useNavigate();

    const handleContinue = () => {
        if (currentActiveIndex < 2) {
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
        navigate('/formar-detail');
    };

    return (
        <div className="add-formar">
            <div className="container">
                <ol className="Add-form-Level">
                    <li className={`Add-form-Level-list ${currentActiveIndex >= 0 ? 'active' : ''}`}>
                        <h2>1</h2>
                        <p>Personal Details</p>
                    </li>
                    <li className={`Add-form-Level-list ${currentActiveIndex >= 1 ? 'active' : ''}`}>
                        <h2>2</h2>
                        <p>Farm Details</p>
                    </li>
                    <li className={`Add-form-Level-list ${currentActiveIndex >= 2 ? 'active' : ''}`}>
                        <h2>3</h2>
                        <p>My Details</p>
                    </li>
                </ol>

                <div className="form-container">
                    {currentActiveIndex === 0 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Farmer Details</h1>
                            <form id="farmer-form">
                                <div className="form-group">
                                    <label htmlFor="farmer-name">Name of the Farmer</label>
                                    <input type="text" id="farmer-name" placeholder="Enter farmer name" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="farmer-mobile">Mobile Number of the Farmer</label>
                                    <input type="tel" id="farmer-mobile" placeholder="Enter farmer mobile number" required />
                                </div>
                                <button type="button" className="continue-btn" onClick={handleContinue}>Continue</button>
                            </form>
                        </div>
                    )}

                    {currentActiveIndex === 1 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Farm Details</h1>
                            <form id="farm-details-form">
                                <div className="form-group">
                                    <label htmlFor="agro-zone">Agro-climatic zone</label>
                                    <select id="agro-zone" required>
                                        <option value="" disabled selected>Select Agro-climatic zone</option>
                                        <option value="Lakeshore">Lakeshore</option>
                                        <option value="Mid-Altitude">Mid-Altitude</option>
                                        <option value="High-Altitude">High-Altitude</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="soil-texture">Soil texture</label>
                                    <select id="soil-texture" required>
                                        <option value="" disabled selected>Select texture</option>
                                        <option value="Sandy">Sandy</option>
                                        <option value="Clayey">Clayey</option>
                                    </select>
                                </div>
                                <button type="button" className="continue-btn" onClick={handleContinue}>Continue</button>
                            </form>
                        </div>
                    )}

                    {currentActiveIndex === 2 && !isExtensionOfficer && (
                        <div className="form-detail">
                            <h1>Extension Officer Details</h1>
                            <form id="extension-officer-form">
                                <div className="form-group">
                                    <label>Are you an Extension Officer?</label>
                                    <div className="button-group">
                                        <button
                                            type="button"
                                            className="primary"
                                            onClick={handleYesClick}
                                        >
                                            Yes
                                        </button>
                                        <button
                                            type="button"
                                            className="secondary"
                                            onClick={handleNoClick}
                                        >
                                            No
                                        </button>
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
                                    <input type="text" id="officer-name" placeholder="Enter your name here" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="officer-id">Your ID</label>
                                    <input type="text" id="officer-id" placeholder="Enter your officer ID"  />
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
