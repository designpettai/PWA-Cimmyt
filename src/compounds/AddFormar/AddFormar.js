import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddFormar.css';

const AddFormar = () => {
    const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
    const [isExtensionOfficer, setIsExtensionOfficer] = useState(false);
    const [formCompleted, setFormCompleted] = useState([false, false, false]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (currentActiveIndex === 0) {
            const name = document.getElementById('farmer-name').value.trim();
            const mobile = document.getElementById('farmer-mobile').value.trim();
            if (!name) newErrors.name = "Name is required";
            if (!mobile) newErrors.mobile = "Mobile number is required";
        } else if (currentActiveIndex === 1) {
            const agroZone = document.getElementById('agro-zone').value;
            const soilTexture = document.getElementById('soil-texture').value;
            if (!agroZone) newErrors.agroZone = "Agro-climatic zone is required";
            if (!soilTexture) newErrors.soilTexture = "Soil texture is required";
        } else if (currentActiveIndex === 2 && !isExtensionOfficer) {
            // No validation needed for the Extension Officer question
        } else if (isExtensionOfficer) {
            const officerName = document.getElementById('officer-name').value.trim();
            const officerId = document.getElementById('officer-id').value.trim();
            if (!officerName) newErrors.officerName = "Your name is required";
            if (!officerId) newErrors.officerId = "Your ID is required";
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

    return (
        <div className="add-formar">
            <div className="container">
                <ol className="Add-form-Level">
                    {[...Array(3)].map((_, index) => (
                        <li key={index} className={`Add-form-Level-list ${currentActiveIndex >= index ? 'active' : ''}`}>
                            <h2 style={{
                                backgroundColor: formCompleted[index] ? '#279A82' : 'transparent',
                                color: formCompleted[index] ? '#fff' : 'inherit',
                            }}>
                                {index + 1}
                            </h2>
                            <p>{index === 0 ? 'Personal Details' : index === 1 ? 'Farm Details' : 'My Details'}</p>
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
                                        placeholder={errors.name || "Enter farmer name"}
                                        className={errors.name ? "input-error" : ""}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="farmer-mobile">Mobile Number of the Farmer</label>
                                    <input
                                        type="tel"
                                        id="farmer-mobile"
                                        placeholder={errors.mobile || "Enter farmer mobile number"}
                                        className={errors.mobile ? "input-error" : ""}
                                        required
                                    />
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
                                    <select id="agro-zone" className={errors.agroZone ? "input-error" : ""} required>
                                        <option value="" disabled selected>Select Agro-climatic zone</option>
                                        <option value="Lakeshore">Lakeshore</option>
                                        <option value="Mid-Altitude">Mid-Altitude</option>
                                        <option value="High-Altitude">High-Altitude</option>
                                    </select>
                                    {errors.agroZone && <p className="error">{errors.agroZone}</p>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="soil-texture">Soil texture</label>
                                    <select id="soil-texture" className={errors.soilTexture ? "input-error" : ""} required>
                                        <option value="" disabled selected>Select texture</option>
                                        <option value="Sandy">Sandy</option>
                                        <option value="Clayey">Clayey</option>
                                    </select>
                                    {errors.soilTexture && <p className="error">{errors.soilTexture}</p>}
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
                                    <label className='ex-select'>Are you an Extension Officer?</label>
                                    <div className="button-group">
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
                                        placeholder={errors.officerName || "Enter your name here"}
                                        className={errors.officerName ? "input-error" : ""}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="officer-id">Your ID</label>
                                    <input
                                        type="text"
                                        id="officer-id"
                                        placeholder={errors.officerId || "Enter your officer ID"}
                                        className={errors.officerId ? "input-error" : ""}
                                    />
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
